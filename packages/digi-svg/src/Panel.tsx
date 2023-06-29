import * as React from 'react'
import { CSSProperties, ReactNode } from 'react'

type PanelProps = {
	relativeX: number
	relativeY: number
	width: number
	height: number
	children: ReactNode
}

export function Panel({relativeX, relativeY, width, height, children}: PanelProps) {

	const style:CSSProperties = {
		position: 'relative',
		left: relativeX,
		top: relativeY,
		width: width,
		height: height,
	}

	return (
		<svg style={style}>
			{children}
		</svg>
	)
}
