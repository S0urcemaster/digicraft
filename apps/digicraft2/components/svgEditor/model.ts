
// export const types = {
// 	value: 'value',
// 	valueGroup: 'valueGroup',
// }

export const types = {
	svg: 'svg',
	group: 'group',
	rect: 'rect',
	line: 'line',
	polyline: 'polyline',
	circle: 'circle',
	ellipse: 'ellipse',
	polygon: 'polygon',
	path: 'path',
}

export type Value = {
	id?: string
	name: string
	value?: number|string
	// type: string
}

export type ValueGroup = {
	id?: string
	name: string
	values: Value[]
	// [key:string]: number
}

export type Command = {
	id?: string
	name?: string
	values: ValueGroup[]
	// to?: Coord
	// cs?: Coord // cubic
	// ce?: Coord // cubic
	// l?: Coord // line
	// r?: Coord // arc
	// angle?: Coord // irc
	// arcFlags?: Coord // large-arc-flag, sweep-flag
	// z?: string // end
	// [key:string]: number|string|Coord|undefined
}

export const commands: Record<string, Command> = {
	m: {name: 'm', values: [
			{name: 'to', values: [
					{name: 'x'}, {name: 'y'}]}]},
	cPath: {name: 'c', values: [
			{name: 'to', values: [{name: 'x'}, {name: 'y'}]},
			{name: 'cs', values: [{name: 'x'}, {name: 'y'}]},
			{name: 'ce', values: [{name: 'x'}, {name: 'y'}]},
		]
	},
	cCircle: {name: 'c', values: [
			{name: 'c', values: [{name: 'x'}, {name: 'y'}]},
			{name: 'r', values: [{name: 'r'}]},
		]
	}
}

export type Element = {
	type: string
	id?: string // undefined in defaults
	commands: Command[]
}

export const elements: Record<string, Element> = {
	circle: {type: types.circle, commands: [commands.C]}
}

// export const emptyItem: EditorItem = {
// 	parent: undefined,
// 	children: undefined,
// 	expanded: true,
// 	element: {} as Element
// }
//
// export const defaultGroup: Element = {
// 	id: undefined,
// 	type: types.group,
// 	rotateX: 0,
// 	rotateY: 0,
// 	rotateAngle: 0,
// 	scaleX: 1,
// 	scaleY: 1,
// 	translateX: 0,
// 	translateY: 0,
// }
// export const defaultCircle: Element = {
// 	id: undefined, type: types.circle,
// 	cx: 200, cy: 200, r: 200,
// 	stroke: '000', strokeWidth: 1,
// 	fill: '000', fillOpacity: 0,
// }
// export const defaultEllipse: Element = {
// 	id: undefined, type: types.ellipse,
// 	cx: 200, cy: 200, rx: 100, ry: 200,
// 	stroke: '000', strokeWidth: 1,
// 	fill: '000', fillOpacity: 0,
// }
// export const defaultLine: Element = {
// 	id: undefined, type: types.line,
// 	x1: 0, y1: 0, x2: 400, y2: 400,
// 	stroke: '000', strokeWidth: 1,
// }
// export const defaultRect: Element = {
// 	id: undefined, type: types.rect,
// 	// coords: [{x: 0, y: 0}, {w: 100, h: 100}],
// 	x: 0, y: 0, w: 400, h: 400,
// 	stroke: '000', strokeWidth: 1,
// 	fill: '000', fillOpacity: 0,
// }
// export const defaultPath: Element = {
// 	id: undefined, type: types.path,
// 	path: [{type: 'M', to: {x1: 0, y1: 400}}, {type: 'C', to: {x2: 400, y2: 400}, cs: {x3: 0, y3: 0}, ce: {x4: 100, y4: 0}}],
// 	stroke: '000', strokeWidth: 1,
// 	fill: '000', fillOpacity: 0,
// }
// export const defaultPolygon: Element = {
// 	id: undefined, type: types.polygon,
// 	coords: [{x1: 0, y1: 100}, {x2: 50, y2: 0}, {x3: 100, y3: 100}],
// 	stroke: '000', strokeWidth: 1,
// 	fill: '000', fillOpacity: 0,
// }
// export const defaultPolyline: Element = {
// 	id: undefined, type: types.polyline,
// 	coords: [{x1: 10, y1: 10}, {x2: 50, y2: 50}, {x3: 120, y3: 300}],
// 	stroke: '000', strokeWidth: 1,
// 	fill: '000', fillOpacity: 0,
// }