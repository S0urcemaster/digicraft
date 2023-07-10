// 'use client'
import * as React from 'react'
import { CSSProperties, ReactNode, useEffect } from 'react'
import { useDigiContext } from '@digicraft/context'

type PanelProps = {
	x?: number
	y?: number
	width: number
	height: number
	children: ReactNode
}

export function Panel({x, y, width, height, children}: PanelProps) {

	// const {state} = useDigiContext()
	//
	// useEffect(() => {
	// 	console.log("logsntr", "state.environment.headerHeight", state.environment.headerHeight)
	// }, [state])

	const style:CSSProperties = {
		position: 'absolute',
		left: x ?? 0,
		top: y ?? 0,
		width: width,
		height: height,
	}

	return (
		<svg style={{...style}}>
			{children}
		</svg>
	)
}
