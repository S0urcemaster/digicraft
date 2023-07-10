import {EditorItem} from './editorContext'
import {Command, Coord, Element} from './model'

export function findItem(root: EditorItem, id: string): EditorItem | null {
	if (root.element.id === id) {
		return root
	}
	if (!root.children) {
		return null
	}
	for (const child of root.children) {
		const found = findItem(child, id)
		if (found) {
			return found
		}
	}
	return null
}

export function toArray(root: EditorItem, arr: EditorItem[]) {
	arr.push(root)
	if (root.children) {
		for (const child of root.children) {
			toArray(child, arr)
		}
	}
}

export function getNextId(type: string, ids: string[]) {
	const typeIds = ids.filter(id => id.startsWith(type)).map(id => id.replace(type, ''))
	const maxId = typeIds.sort().reverse()[0] ?? 0
	return type + (String(Number(maxId) + 1)).padStart(3, '0')
}

export function setNextLibraryId(library: EditorItem[], root: EditorItem) {
	const find = library.find(l => l.element.id === root.element.id)
	if(find) {
		root.element.id = root.element.id +'1'
	}
}

export function collectIds(root: EditorItem, ids: string[]) {
	ids.push(root.element.id!)
	if (root.children) {
		for (const child of root.children) {
			collectIds(child, ids)
		}
	}
}

function reindexCoord(coord: Coord, i: number) {
	const keys = Object.keys(coord)
	return {['x' + i]: coord[keys[0]], ['y' + i]: coord[keys[1]]}
}

export function insertPoint(element: Element, current: string): [Element, string] {
	const updated: Coord[] = []
	const coords = element.coords!
	const idx = Number(current.substring(1)) - 1
	for (let i = 0; i < coords.length; i++) {
		if (i < idx) {
			updated.push(coords[i])
		} else if (i === idx) {
			updated.push(reindexCoord(coords[i], i + 1)) // current
			updated.push(reindexCoord({x1: 0, y1: 0}, i + 2))
		} else {
			updated.push(reindexCoord(coords[i], i + 2))
		}
	}
	element.coords = updated
	return [element, 'x' + (idx + 2)]
}

function reindexCommand(command: Command, newCount: number): [command: Command, newCount: number] {
	let newCommand = {type: command.type} as Command
	switch (command.type) {
		case 'a': case 'A':
			newCommand.to = reindexCoord(command.to!, newCount)
			newCommand.r = reindexCoord(command.r!, newCount +1)
			newCommand.angle = reindexCoord(command.angle!, newCount +2)
			newCommand.arcFlags = reindexCoord(command.arcFlags!, newCount +3)
			newCount += 4
			break
		case 'm': case 'M':
			newCommand.to = reindexCoord(command.to!, newCount)
			newCount++
			break
		case 'c': case 'C':
			newCommand.to = reindexCoord(command.to!, newCount)
			newCommand.cs = reindexCoord(command.cs!, newCount + 1)
			newCommand.ce = reindexCoord(command.ce!, newCount + 2)
			newCount += 3
			break
		case 'l': case 'L':
			newCommand.to = reindexCoord(command.to!, newCount)
			newCount++
			break
		case 'z':
			newCount++
	}
	return [newCommand, newCount]
}

const zeroCoord = {x1: 0, y1: 0}

export const emptyCommands: Record<string, Command> = {
	a: {type: 'a', to: zeroCoord, r: zeroCoord, angle: {x1: 90, y1: 0}, arcFlags: zeroCoord},
	A: {type: 'A', to: zeroCoord, r: zeroCoord, angle: {x1: 90, y1: 0}, arcFlags: zeroCoord},
	c: {type: 'c', to: zeroCoord, cs: zeroCoord, ce: zeroCoord},
	C: {type: 'C', to: zeroCoord, cs: zeroCoord, ce: zeroCoord},
	m: {type: 'm', to: {x1: 0, y1: 0}},
	M: {type: 'M', to: {x1: 0, Y1: 0}},
	l: {type: 'l', to: zeroCoord},
	L: {type: 'L', to: zeroCoord},
	z: {type: 'z'},
}

export function insertCommand(element: Element, current: string, type: string): [Element, string] {
	const updated: Command[] = []
	const commands = element.path!
	const idx = Number(current.substring(1))
	let newCount = 1
	let newCurrent = 1
	let com
	[com, newCount] = reindexCommand(commands[0], newCount) // first command
	updated.push(com)
	for (let i = 1; i < commands.length; i++) {
		if (i === idx) { // new command
			newCurrent = newCount;
			[com, newCount] = reindexCommand(emptyCommands[type], newCount)
			updated.push(com);
			[com, newCount] = reindexCommand(commands[i], newCount)
			updated.push(com)
		} else {
			[com, newCount] = reindexCommand(commands[i], newCount)
			updated.push(com)
		}
	}
	if (idx >= commands.length) { // after last
		newCurrent = newCount;
		[com] = reindexCommand(emptyCommands[type], newCount)
		updated.push(com)
	}
	element.path = updated
	return [element, 'x' + newCurrent]
}

export function removeCommand(element: Element, current: string): [Element, string] {
	const updated: Command[] = []
	const commands = element.path!
	const idx = Number(current.substring(1))
	let newCount = 1
	let newCurrent
	let com
	for (let i = 0; i < commands.length; i++) {
		let found
		if(commands[i].type === 'z') {
			found = true
		} else {
			for (const coord of Object.keys(commands[i])) {
				for (const key of Object.keys(commands[i][coord]!)) {
					if (key === current) {
						found = true
						break
					}
				}
			}
		}
		if (found) {
			continue
		}
		[com, newCount] = reindexCommand(commands[i], newCount)
		updated.push(com)
	}
	newCurrent = idx > 1 ? idx - 1 : 1
	element.path = updated
	return [element, 'x' + newCurrent]
}

export function findCommandCoord(path: Command[], input: string): [command: Command, coord: string] {
	let command: Command
	let coord: string
	path!.some(com => {
		const keys = Object.keys(com)
		let found = false
		keys.some(key => {
			if (key !== 'type' && input in <Coord>com[key]) {
				found = true
				command = com
				coord = key
				return
			}
		})
		if (found) return com
	})
	return [command!, coord!]
}

export function indexOfCommand(item: EditorItem, currentInput: string): number {
	const path = item.element.path!
	const [command, coord] = findCommandCoord(path, currentInput)
	return path.indexOf(command)
}

export function isLastCommand(item: EditorItem, currentInput: string): boolean {
	const idx = indexOfCommand(item, currentInput)
	return idx === item.element.path!.length - 1
}

export function getCoordXY(coord: Coord): [x: number, y: number] {
	const keys = Object.keys(coord)
	return [coord[keys[0]], coord[keys[1]]]
}

export function getRelativeCoordXY(start: Coord, to: Coord): [x: number, y: number] {
	const startKeys = Object.keys(start)
	const toKeys = Object.keys(to)
	return [start[startKeys[0]] + to[toKeys[0]], start[startKeys[1]] + to[toKeys[1]]]
}

export function pushUndo<T>(stack: T[], item: T, maxSize: number): T[] {
	const st = [...stack]
	if (st.length === maxSize) {
		st.splice(0, 1)
	}
	st.push(item)
	return st
}

export function popUndo<T>(stack: T[]): [T | undefined, T[]] {
	return [stack.pop(), stack]
}