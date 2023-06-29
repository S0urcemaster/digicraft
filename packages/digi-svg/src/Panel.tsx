import * as React from 'react'
import { CSSProperties, ReactNode } from 'react'

type PanelProps = {
	x?: number
	y?: number
	width: number
	height: number
	children: ReactNode
}

export function Panel({x, y, width, height, children}: PanelProps) {

	const style:CSSProperties = {
		position: 'relative',
		left: x && 0,
		top: y && 0,
		width: width,
		height: height,
	}

	return (
		<svg style={style}>
			{children}
		</svg>
	)
}
