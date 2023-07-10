import {EditorItem} from './editorContext'
import {Command, Coord, Element, types} from './model'
import {collectIds, emptyCommands, findCommandCoord, findItem, getNextId, insertCommand, pushUndo} from './lib'
import {EditorState} from './editorState'
import {emptyItem, formItems} from './constants'
import {hints} from './Hints'

export function indexItem(root: EditorItem, item: EditorItem): EditorItem {
	const ids: string[] = []
	collectIds(root!, ids)
	const nextId = getNextId(item.element.type, ids)
	return {...item, element: {...item.element, id: nextId}}
}

export function indexGroup(root: EditorItem, group: EditorItem) {
	const ids: string[] = []
	collectIds(root!, ids)
	group.element.id = getNextId(group.element.type, ids)
	if(group.children) {
		for(const child of group.children!) {
			indexGroup(root, child)
		}
	}
}

export function makeNewItem(root: EditorItem, element: Element) {
	const item = {...emptyItem, element: structuredClone(element),
		children: element.type === types.group ? [] : undefined,
	}
	return indexItem(root, item)
}

export function makeSnapshot(state: EditorState): EditorItem[] {
	const clone = structuredClone(state.root)
	const undoStack = [...pushUndo([...state.undoStack], clone, 10)]
	return <EditorItem[]>undoStack
}

export function pasteItemAt(state: EditorState, parent: EditorItem, paste: EditorItem, index: number, submenu?: string) {
	const pasted = indexItem(state.root!, structuredClone(paste))
	pasted.parent = parent
	parent.children!.splice(index, 0, pasted)
	state.currentItem = pasted
	state.hints = hints.tree[pasted.element.type]
	state.submenu = submenu
}

export function addItem(state: EditorState, parent: EditorItem, element: Element, submenu?: string) {
	const sroot = state.root!
	const newItem = makeNewItem(sroot, element)
	newItem.parent = findItem(sroot, parent.element.id!)!
	newItem.parent.children!.push(newItem)
	state.currentItem = newItem
	state.hints = hints.tree[newItem.element.type]
	state.submenu = submenu
}

export function pasteGroup(state: EditorState, parent: EditorItem, group: EditorItem) {
	const sroot = state.root! //
	const grp = structuredClone(group)
	indexGroup(sroot, grp)
	addItem(state, parent, grp.element)
}

export function pasteItem(state: EditorState, parent: EditorItem, paste: EditorItem, index?: number) {
	const pasted = indexItem(state.root!, paste)

}

export function removeItem(root: EditorItem, item: EditorItem): [parent: EditorItem, removed: EditorItem] {
	const current = findItem(root, item.element.id!)!
	const parent = current.parent!
	parent.children!.splice(parent.children?.indexOf(current)!, 1)
	return [parent, current]
}

export function addCommand(state: EditorState, name: string) {
	const element = state.currentItem!.element
	if(name === 'z') {
		const updated = {...emptyCommands.z}
		element.path!.push(updated)
		state.currentInput = 'z'
	} else {
		const [updated, newInput] = insertCommand(element, state.currentInput!, name)
		state.currentItem!.element = updated
		state.currentInput = newInput
	}
}

export function translateItem(item: EditorItem, formItem: string[], {x, y}: { x?: number, y?: number }) {
	const e = item.element
	switch (item.element.type) {
		case types.group:
			e.translateX = e.translateX! + (x ?? 0)
			e.translateY = e.translateY! + (y ?? 0)
			break
		case types.rect:
			e.x = e.x! + (x ?? 0)
			e.y = e.y! + (y ?? 0)
			break
		case types.circle:
		case types.ellipse:
			e.cx = e.cx! + (x ?? 0)
			e.cy = e.cy! + (y ?? 0)
			break
		case types.line:
			if(formItem === formItems.x1y1) {
				e.x1 = e.x1! + (x ?? 0)
				e.y1 = e.y1! + (y ?? 0)
			} else if(formItem === formItems.x2y2) {
				e.y2 = e.y2! + (y ?? 0)
				e.x2 = e.x2! + (x ?? 0)
			}
			break
		case types.polyline:
		case types.polygon: {
			const coord = e.coords!.find(coord => formItem[0] in coord)!
			const idx = e.coords?.indexOf(coord)!
			coord[formItem[0]] = Number(coord[formItem[0]]) + (x ?? 0)
			coord[formItem[1]] = Number(coord[formItem[1]]) + (y ?? 0)
			e.coords!.splice(idx, 1, coord)
			break
		}
		case types.path: {
			let command: Command
			let coord: string
			[command, coord] = findCommandCoord(e.path!, formItem[0])
			const idx = e.path?.indexOf(command!)
			const part = command![coord!]! as Coord
			const keys = Object.keys(part)
			part[keys[0]] = part[keys[0]] + (x ?? 0)
			part[keys[1]] = part[keys[1]] + (y ?? 0)
			command![coord!]! = part
			e.path!.splice(idx!, 1, command!)
		}
	}
}

const coordKeyOrder = ['x', 'y', 'x1', 'y1', 'x2', 'y2', 'cx', 'cy', 'r', 'rx', 'ry', 'w', 'h']
const groupKeyOrder = ['rotateX', 'rotateY', 'rotateAngle', 'scaleX', 'scaleY', 'translateX', 'translateY']
const appearanceOrder = ['stroke', 'strokeWidth', 'fill', 'fillOpacity']

export function orderElements_pure(e: Element): Element {
	const ordered: { [k: string]: any } = {id: e.id}
	if('coords' in e) {
		e.coords!.forEach(coord => {
			const keys = Object.keys(coord)
			keys.forEach(key => ordered[key] = e[key])
		})
		appearanceOrder.forEach(key => {
			if(key in e) {
				ordered[key] = e[key]
			}
		})
	} else if('path' in e) {
		e.path!.forEach(command => {
			let keys
			if('to' in command) {
				keys = Object.keys(command.to!)
				ordered[keys[0]] = command.to![keys[0]]
				ordered[keys[1]] = command.to![keys[1]]
			}
			switch(command.type.toLowerCase()) {
				case 'c':
					keys = Object.keys(command.cs!)
					ordered[keys[0]] = command.cs![keys[0]]
					ordered[keys[1]] = command.cs![keys[1]]
					keys = Object.keys(command.ce!)
					ordered[keys[0]] = command.ce![keys[0]]
					ordered[keys[1]] = command.ce![keys[1]]
					break
				case 'a':
					keys = Object.keys(command.r!)
					ordered[keys[0]] = command.r![keys[0]]
					ordered[keys[1]] = command.r![keys[1]]
					keys = Object.keys(command.angle!)
					ordered[keys[0]] = command.angle![keys[0]]
					keys = Object.keys(command.arcFlags!)
					ordered[keys[0]] = command.arcFlags![keys[0]]
					ordered[keys[1]] = command.arcFlags![keys[1]]
					break
				case 'z':
					ordered.z = ''
			}
		})
		appearanceOrder.forEach(key => {
			if(key in e) {
				ordered[key] = e[key]
			}
		})
	} else if(e.type === types.group) {
		groupKeyOrder.forEach(key => {
			if(key in e) {
				ordered[key] = e[key]
			}
		})
	} else {
		coordKeyOrder.forEach(key => {
			if(key in e) {
				ordered[key] = e[key]
			}
		})
		appearanceOrder.forEach(key => {
			if(key in e) {
				ordered[key] = e[key]
			}
		})
	}
	return ordered as Element
}

export function indexOfKey(element: Element, input: string): [keys: string[], key: number] {
	const elements = orderElements_pure(element)
	const keys = Object.keys(elements)
	return [keys, keys.indexOf(input)]
}