

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

export type Coord = {
	[key:string]: number
}

export type Command = {
	type: string
	to?: Coord
	cs?: Coord // cubic
	ce?: Coord // cubic
	l?: Coord // line
	r?: Coord // arc
	angle?: Coord // irc
	arcFlags?: Coord // large-arc-flag, sweep-flag
	z?: string // end
	[key:string]: number|string|Coord|undefined
}

export const pathCommands = {
	m: 'm', M: 'M', // MoveTo
	l: 'l', L: 'L', h: 'h', H: 'H', v: 'v', V: 'V', // LineTo
	c: 'c', C: 'c', s: 's', S: 'S', // Cubic Bezier Curve
	q: 'q', Q: 'Q', t: 't', T: 'T', // Quadratic Bezier Curve
	a: 'a', A: 'A', // Elliptical Arc Curve
	z: 'z', Z: 'Z'  // ClosePath
}

export type Element = {
	type: string
	id?: string // undefined in defaults
	coords?: Coord[]
	path?: Command[]
	x?: number
	y?: number
	x1?: number
	y1?: number
	x2?: number
	y2?: number
	cx?: number
	cy?: number
	r?: number
	rx?: number
	ry?: number
	w?: number
	h?: number
	stroke?: string
	strokeWidth?: number
	fill?: string
	fillOpacity?: number	// parent: Element|null
	rotateX?: number
	rotateY?: number
	rotateAngle?: number
	scaleX?: number
	scaleY?: number
	translateX?: number
	translateY?: number
	[key: string]: string|number|Coord[]|Command[]|undefined
}
