import {EditorItem} from './editorContext'
import {Element, types} from './model'


export const colors = {
	inputBg: '#fff1e0',
	inputHighlight: '#ffe7ab',
	formBg: '#d9d9d9',
}

export const editorActions: {[k:string]: string} = {
	setRoot: 'setRoot',
	setCurrentItem: 'setCurrentItem',
	addItem: 'addItem',
	up: 'up',
	down: 'down',
	left: 'left',
	right: 'right',
	enter: 'enter',
	escape: 'esc',
	plus: '+',
	minus: '-',
	less: '<',
	greater: '>',
	a: 'a',
	c: 'c',
	e: 'e',
	g: 'g',
	f: 'f',
	l: 'l',
	m: 'm',
	M: 'M',
	n: 'n',
	p: 'p',
	r: 'r',
	s: 's',
	t: 't',
	v: 'v',
	x: 'x',
	y: 'y',
	z: 'z',
	setItem: 'setItem',
	// setCurrentInput: 'setCurrentInput',
	// setFocus: 'setFocus',
	setInputFocused: 'setInputFocused',
	setValue: 'setValue',
	letter: 'letter',
	setHints: 'setHints'
}

export const emptyItem: EditorItem = {parent: undefined, children: undefined, expanded: true, element: {} as Element}

export const defaultGroup: Element = {
	id: undefined,
	type: types.group,
	rotateX: 0,
	rotateY: 0,
	rotateAngle: 0,
	scaleX: 1,
	scaleY: 1,
	translateX: 0,
	translateY: 0,
}
export const defaultCircle: Element = {
	id: undefined, type: types.circle,
	cx: 200, cy: 200, r: 200,
	stroke: '000', strokeWidth: 1,
	fill: '000', fillOpacity: 0,
}
export const defaultEllipse: Element = {
	id: undefined, type: types.ellipse,
	cx: 200, cy: 200, rx: 100, ry: 200,
	stroke: '000', strokeWidth: 1,
	fill: '000', fillOpacity: 0,
}
export const defaultLine: Element = {
	id: undefined, type: types.line,
	x1: 0, y1: 0, x2: 400, y2: 400,
	stroke: '000', strokeWidth: 1,
}
export const defaultRect: Element = {
	id: undefined, type: types.rect,
	// coords: [{x: 0, y: 0}, {w: 100, h: 100}],
	x: 0, y: 0, w: 400, h: 400,
	stroke: '000', strokeWidth: 1,
	fill: '000', fillOpacity: 0,
}
export const defaultPath: Element = {
	id: undefined, type: types.path,
	path: [{type: 'M', to: {x1: 0, y1: 400}}, {type: 'C', to: {x2: 400, y2: 400}, cs: {x3: 0, y3: 0}, ce: {x4: 100, y4: 0}}],
	stroke: '000', strokeWidth: 1,
	fill: '000', fillOpacity: 0,
}
export const defaultPolygon: Element = {
	id: undefined, type: types.polygon,
	coords: [{x1: 0, y1: 100}, {x2: 50, y2: 0}, {x3: 100, y3: 100}],
	stroke: '000', strokeWidth: 1,
	fill: '000', fillOpacity: 0,
}
export const defaultPolyline: Element = {
	id: undefined, type: types.polyline,
	coords: [{x1: 10, y1: 10}, {x2: 50, y2: 50}, {x3: 120, y3: 300}],
	stroke: '000', strokeWidth: 1,
	fill: '000', fillOpacity: 0,
}

export const focuses = {
	tree: 'tree',
	form: 'form',
	library: 'library',
}

export const submenus = {
	add: 'add',
	translate: 'translate',
	file: 'file',
}

export type FormItem = {
	[key: string]: string[]
}

export const formItems: FormItem = {
	xy: ['x', 'y'],
	cxcy: ['cx', 'cy'],
	x1y1: ['x1', 'y1'],
	x2y2: ['x2', 'y2'],
	widthHeight: ['width', 'height'],
	coords: [],
}
