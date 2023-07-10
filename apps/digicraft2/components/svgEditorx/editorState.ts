import {Coord, types} from './model'
import {
	findCommandCoord,
	findItem,
	insertPoint,
	isLastCommand,
	popUndo,
	pushUndo,
	removeCommand,
	toArray,
} from './lib'
import {EditorItem} from './editorContext'
import {
	defaultCircle,
	defaultEllipse,
	defaultGroup,
	defaultLine, defaultPath, defaultPolygon, defaultPolyline,
	defaultRect,
	editorActions,
	focuses, formItems, submenus,
} from './constants'
import {
	addCommand,
	addItem, indexOfKey,
	makeSnapshot,
	pasteItemAt,
	removeItem,
	translateItem,
} from './editorStateHelpers'
import {Hint, hints} from './Hints'


export const rootInitial = {
	element: {type: types.svg, id: 'root'},
	parent: undefined,
	indent: 0,
	expanded: true,
	children: [],
}

export type EditorAction = {
	name: string,
	payload?: any
}

export type EditorState = {
	save: number
	load: number
	exportFile: EditorItem | undefined
	saveFile: number
	loadFile: number
	clipboard: EditorItem | undefined
	root: EditorItem | undefined
	currentItem: EditorItem | undefined
	currentInput: string | undefined
	hints: Hint[]
	focus: string
	inputFocused: boolean
	submenu: string | undefined
	undoStack: EditorItem[]
	formItemTranslate: string[] | undefined
	currentLibraryItem: EditorItem|undefined
}

export const initialTreeState: EditorState = {
	save: 0,
	load: 0,
	exportFile: undefined,
	saveFile: 0,
	loadFile: 0,
	clipboard: undefined,
	root: undefined,
	currentItem: rootInitial,
	currentInput: undefined,
	hints: hints.tree.svg,
	focus: focuses.tree,
	inputFocused: false,
	submenu: undefined,
	undoStack: [],
	formItemTranslate: undefined,
	currentLibraryItem: undefined,
}

export function reducer(state: EditorState, action: EditorAction): EditorState {
	const {name, payload} = action
	console.log('logsntr', 'state', state)
	if(name === editorActions.setRoot) {
		return {...state, root: payload, currentItem: payload}
	} else if(!state.root) {
		return state
	}
	const currentItem = findItem(state.root!, state.currentItem!.element.id!)!
	const currentElement = currentItem.element
	const currentInput = state.currentInput!

	switch(name) {
		case editorActions.enter: {
			if(state.focus === focuses.form) {
				if (state.submenu === submenus.translate) { // done translate
					return {
						...state, submenu: undefined, hints: hints.form.coord,
						save: ++state.save,
					}
				}
				// else if (state.inputFocused) { // done edit
				// 	// if (currentItem.element.type === types.path) {
				// 	// 	return {...state, inputFocused: !state.inputFocused, save: ++state.save, hints: hints.form.path}
				// 	// }
				// 	return {...state, inputFocused: !state.inputFocused, save: ++state.save}
				// }
				return {...state, inputFocused: !state.inputFocused} // enter/done edit
			} else if(state.focus === focuses.tree) {
				if (state.submenu === submenus.translate) { // done translate
					return {
						...state, submenu: undefined,//, hints: hints.form.coord,
						save: ++state.save,
					}
				}
			}
			break
		}
		case editorActions.escape: {
			return {...state, hints: hints.tree[state.currentItem!.element.type], submenu: undefined}
		}
		case editorActions.left: {
			if (state.submenu === submenus.translate) {
				const current = findItem(state.root!, currentElement.id!)
				translateItem(current!, state.formItemTranslate!, {x: -1})
				return {...state, root: state.root, currentItem: current!}
			}
			switch(state.focus) {
				case focuses.library:
					return {...state, focus: focuses.form, currentInput: 'id', hints: hints.form.standard}
				case focuses.form:
					return {...state, focus: focuses.tree, currentInput: 'id', hints: hints.tree[currentElement.type]}
			}
			break
		}
		case editorActions.right: {
			if (state.submenu === submenus.translate) {
				const current = findItem(state.root!, currentElement.id!)
				translateItem(current!, state.formItemTranslate!, {x: 1})
				return {...state, root: state.root, currentItem: current!}
			}
			switch(state.focus) {
				case focuses.tree:
					return {...state, focus: focuses.form, currentInput: 'id', hints: hints.form.standard}
				case focuses.form:
					return {...state, focus: focuses.library, currentInput: 'id', hints: hints.library.current}
			}
		}
	}

	if(state.focus === focuses.form) {
		switch(name) {
			case editorActions.plus: {
				if (currentElement.type === types.polyline || currentElement.type === types.polygon) {
					const [updated, newInput] = insertPoint(currentElement, currentInput)
					state.currentItem!.element = updated
					state.currentInput = newInput
					return {...state, save: ++state.save}
				}
				break
			}
			case editorActions.minus: {
				if (currentElement.type === types.path) {
					if (currentInput === 'x1' || currentInput === 'y1') break // don't delete 1st M
					const [updated, prevInput] = removeCommand(currentElement, currentInput)
					state.currentItem!.element = updated
					return {...state, currentInput: prevInput, save: ++state.save}
				}
				break
			}
			case editorActions.a: {
				if (currentElement.type === types.path) {
					addCommand(state, payload)
					return {...state}
				}
				break
			}
			case editorActions.c: {
				if (currentElement.type === types.path) {
					addCommand(state, payload)
					return {...state}
				}
				break
			}
			case editorActions.l: {
				if (currentElement.type === types.path) {
					addCommand(state, payload)
					return {...state, save: ++state.save}
				}
				break
			}
			case editorActions.m: {
				if (currentElement.type === types.path) {
					addCommand(state, payload)
					return {...state, save: ++state.save}
				}
				break
			}
			case editorActions.t: {
				const newState = {
					...state,
					hints: hints.form.translate,
					submenu: submenus.translate,
				}
				switch (currentElement.type) {
					case types.circle:
						if (currentInput === 'cx' || currentInput === 'cy') {
							return {...newState, formItemTranslate: formItems.cxcy}
						}
						break
					case types.rect:
						if (currentInput === 'x' || currentInput === 'y') {
							return {...newState, formItemTranslate: formItems.xy}
						}
						break
					case types.line:
						if (currentInput === 'x1' || currentInput === 'y1') {
							return {...newState, formItemTranslate: formItems.x1y1}
						} else if (currentInput === 'x2' || currentInput === 'y2') {
							return {...newState, formItemTranslate: formItems.x2y2}
						}
						break
					case types.polyline:
					case types.polygon:
						const coords = currentElement.coords!
						const idx = Number(currentInput.substring(1)) - 1
						return {...newState, formItemTranslate: Object.keys(coords[idx])}
					case types.path:
						return {...newState, formItemTranslate: [currentInput]}
				}
				break
			}
			case editorActions.z: {
				if (currentElement.type === types.path) {
					if (!isLastCommand(currentItem, currentInput)) break
					addCommand(state, payload)
					return {...state, save: ++state.save}
				}
				break
			}
			case editorActions.setValue: {
				if (currentElement.type === types.polyline) {
					if (currentInput.startsWith('x') || currentInput.startsWith('y')) {
						const coord = currentElement.coords!.find(coord => currentInput in coord)!
						coord[currentInput] = payload
						const idx = currentElement.coords!.indexOf(coord!)
						currentElement.coords!.splice(idx, 1, coord)
						return {...state}
					}
				} else if (currentElement.type === types.path) {
					if (currentInput.startsWith('x') || currentInput.startsWith('y')) {
						const [command, coord] = findCommandCoord(currentElement.path!, currentInput);
						(<Coord>command[coord])[currentInput] = payload
						currentElement.path!.splice(currentElement.path!.indexOf(command), 1, command)
						return {...state}
					}
				}
				currentElement[currentInput] = payload
				return {...state, currentItem: currentItem}
			}
			case editorActions.up: {
				if (state.submenu === submenus.translate) {
					const current = findItem(state.root!, currentElement.id!)
					translateItem(current!, state.formItemTranslate!, {y: -1})
					return {...state, root: state.root, currentItem: current!}
				}
				const [keys, idx] = indexOfKey(currentElement, currentInput)
				const prev = keys[idx - 1]
				if (idx > 0) {
					if (currentElement.type === types.circle) {
						if (prev === 'cx' || prev === 'cy') {
							return {...state, currentInput: prev, hints: hints.form.coord}
						}
					} else if (currentElement.type === types.polyline) {
						if((prev.startsWith('x') || prev.startsWith('y'))) {
							return {...state, currentInput: prev, hints: hints.form.polyline}
						}
					} else if (currentElement.type === types.path && (prev.startsWith('x') || prev.startsWith('y')) && !prev.startsWith('z')) {
						return {...state, currentInput: prev, hints: hints.form.path}
					}
					return {...state, currentInput: prev, hints: hints.form.standard}
				}
				break
			}
			case editorActions.down: {
				if (state.submenu === submenus.translate) {
					const current = findItem(state.root!, currentElement.id!)!
					if (state.formItemTranslate === formItems.xy) {
						currentElement.y = currentElement.y! + 1
						return {...state, root: state.root}
					}
					translateItem(current!, state.formItemTranslate!, {y: 1})
					return {...state, root: state.root, currentItem: current!}
				}
				const [keys, idx] = indexOfKey(currentElement, currentInput)
				if (idx < keys.length - 1) {
					const next = keys[idx + 1]
					if (currentElement.type === types.circle) {
						if (next === 'cx' || next === 'cy') {
							return {...state, currentInput: next, hints: hints.form.coord}
						}
					} else if (currentElement.type === types.polyline &&
						(next.startsWith('x') || next.startsWith('y'))) {
						return {...state, currentInput: next, hints: hints.form.polyline}
					} else if (currentElement.type === types.path && (next.startsWith('x') || next.startsWith('y')) && !next.startsWith('z')) {
						return {...state, currentInput: next, hints: hints.form.path}
					}
					switch (next) {
						case 'x':
						case 'y':
							return {...state, currentInput: next, hints: hints.form.coord, formItemTranslate: formItems.xy}
					}
					return {...state, currentInput: keys[idx + 1], hints: hints.form.standard}
				}
			}
		}
	}
	else if(state.focus === focuses.tree) {
		switch (name) {
			case editorActions.less: { // undo
				if (state.undoStack.length === 0) return state
				const [lastRoot, stack] = popUndo(state.undoStack)
				return {
					...state,
					root: lastRoot!,
					hints: hints.tree.svg,
					currentItem: state.root,
					submenu: undefined,
					undoStack: stack,
					save: ++state.save,
				}
			}
			case editorActions.plus: {
				if (currentElement.type !== types.svg && currentElement.type !== types.group) {
					return state
				}
				if (state.submenu !== submenus.add) {
					return {...state, hints: hints.tree.add, submenu: submenus.add}
				} else {
					return {...state, hints: hints.tree[currentElement.type]}
				}
			}
			case editorActions.minus: {
				if (currentElement.id === 'root') break // don't delete root
				const undoStack = makeSnapshot(state)
				const [parent, removed] = removeItem(state.root!, state.currentItem!)
				return {
					...state,
					root: state.root,
					currentItem: parent,
					hints: hints.tree[parent.element.type],
					undoStack: <EditorItem[]>undoStack,
					save: ++state.save,
				}
			}
			case editorActions.c: {
				if (state.submenu === submenus.add) { // add circle
					const undoStack = makeSnapshot(state)
					addItem(state, currentItem, defaultCircle)
					return {...state, undoStack: undoStack, save: ++state.save}
				}
				if (currentElement.type !== types.svg)
					return {...state, clipboard: currentItem} // copy
				break
			}
			case editorActions.e: {
				if (state.submenu === submenus.add) {
					const undoStack = makeSnapshot(state)
					addItem(state, currentItem, defaultEllipse)
					return {...state, undoStack: undoStack, save: ++state.save}
				}
				break
			}
			case editorActions.g: {
				if (state.submenu === submenus.add) {
					const undoStack = makeSnapshot(state)
					addItem(state, currentItem, defaultGroup)
					return {...state, undoStack: undoStack, save: ++state.save}
				}
				break
			}
			case editorActions.l: {
				if (state.submenu === submenus.add) {
					const undoStack = makeSnapshot(state)
					addItem(state, currentItem, defaultLine)
					return {...state, undoStack: undoStack, save: ++state.save}
				} else if (state.submenu === submenus.file) {
					return {...state, loadFile: ++state.loadFile}
				}
				break
			}
			case editorActions.n: {
				if (state.submenu === submenus.add) {
					const undoStack = makeSnapshot(state)
					addItem(state, currentItem, defaultPolygon)
					return {...state, undoStack: undoStack, save: ++state.save}
				}
				break
			}
			case editorActions.p: {
				if (state.submenu === submenus.add) {
					const undoStack = makeSnapshot(state)
					addItem(state, currentItem, defaultPath)
					return {...state, undoStack: undoStack, save: ++state.save}
				}
				break
			}
			case editorActions.r: {
				if (state.submenu === submenus.add) {
					const undoStack = makeSnapshot(state)
					addItem(state, currentItem, defaultRect)
					return {...state, undoStack: undoStack, save: ++state.save}
				}
				break
			}
			case editorActions.t: { // submenu -> translate
				return {...state, hints: hints.tree.translate, submenu: submenus.translate}
			}
			case editorActions.v: {
				if (!state.clipboard) break
				const undoStack = makeSnapshot(state)
				if (currentElement.type === 'svg' || state.currentItem!.element.type === 'group') {
					pasteItemAt(state, currentItem, state.clipboard!, 0)
					return {
						...state,
						currentItem: state.clipboard,
						undoStack: undoStack,
						hints: hints.tree[state.clipboard!.element.type],
					}
				} else {
					const idx = currentItem.parent!.children!.indexOf(currentItem) + 1
					pasteItemAt(state, currentItem.parent!, state.clipboard!, idx)
					return {...state, undoStack: undoStack}
				}
			}
			case editorActions.x: {
				if (state.submenu === submenus.add) {
					// const undoStack = makeSnapshot(state)
					// addItem(state, currentItem, defaultLine)
					// return {...state, undoStack: undoStack, save: ++state.save}
				} else if (state.submenu === submenus.file) {
					return {...state, exportFile: state.root}
				}
				if (currentElement.id === 'root') return state
				const root = structuredClone(state.root)
				const undoStack = [...pushUndo([...state.undoStack], root, 10)]
				const [parent, removed] = removeItem(state.root!, state.currentItem!)
				return {
					...state, root: state.root, currentItem: parent,
					hints: hints.tree[parent.element.type],
					undoStack: <EditorItem[]>undoStack, clipboard: removed, save: ++state.save,
				}
			}
			case editorActions.y: {
				if (state.submenu !== submenus.add) {
					return state
				}
				const undoStack = makeSnapshot(state)
				addItem(state, currentItem, defaultPolyline)
				return {...state, undoStack: undoStack, save: ++state.save}
			}
			case editorActions.up: {
				if (state.submenu === submenus.translate) {
					const current = findItem(state.root!, currentElement.id!)
					translateItem(current!, state.formItemTranslate!, {y: -1})
					return {...state, root: state.root, currentItem: current!}
				}
				const itemArray: EditorItem[] = []
				toArray(state.root!, itemArray)
				const current = itemArray.find(i => i.element.id === currentElement.id)
				const idx = itemArray.indexOf(current!)
				if (idx === 0) return state
				const prev = itemArray[idx - 1]
				return {
					...state,
					currentItem: prev,
					hints: prev.element.type === types.group ? hints.tree.group : hints.tree[prev.element.type],
				}
			}
			case editorActions.down: {
				if (state.submenu === submenus.translate) {
					const current = findItem(state.root!, currentElement.id!)!
					if (state.formItemTranslate === formItems.xy) {
						currentElement.y = currentElement.y! + 1
						return {...state, root: state.root}
					}
					translateItem(current!, state.formItemTranslate!, {y: 1})
					return {...state, root: state.root, currentItem: current!}
				}
				const itemArray: EditorItem[] = []
				toArray(state.root!, itemArray)
				const item = itemArray.find(i => i.element.id === currentElement.id)!
				const idx = itemArray.indexOf(item)
				if (idx === itemArray.length - 1) return state
				const current = itemArray[idx + 1]
				return {
					...state,
					currentItem: current,
					hints: currentElement.type === types.group ? hints.tree.group : hints.tree[currentElement.type],
				}
			}
		}
	}
	else if(state.focus === focuses.library) {
		if(name === editorActions.setHints) {
			return {...state, hints: payload}
		}
		switch(name) {
			case editorActions.s: {
				// svgEditor.library.push
				break
			}
			case editorActions.up:
			case editorActions.down:

		}
	}
	return state
}
