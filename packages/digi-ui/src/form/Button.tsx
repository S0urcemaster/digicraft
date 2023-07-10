'use client'

import * as React from 'react'
import { CSSProperties, ReactNode, useState } from 'react'
import { Panel } from '@digicraft/svg'

type ButtonProps = {
	style?: CSSProperties
	children: ReactNode
	width: number
	height: number
	color: string
}

const buttonStyle: CSSProperties = {
	position: 'relative',
	textAlign: 'center',
	top: 0,
	left: 0,
}

function Skin({width, height, color, hover, pressed, active}:
	{width: number, height: number, color: string, hover: boolean, pressed: boolean, active: boolean}) {

	function getColor(rgba: string) {

		if(pressed) {

		}
		return `rgba(${160}, ${160}, ${160})`
	}

	return (
		<g>
			{
				[100, 110, 120, 130, 140, 150].map((i, ix) => {
					return (
						<g key={ix}>
							<line x1={ix} y1={ix} x2={width -ix} y2={ix} stroke={`rgba(${i +20}, ${i +40}, ${i +40})`} />
							<line x1={ix} y1={ix} x2={ix} y2={height -ix} stroke={`rgba(${i +20}, ${i +40}, ${i +40})`} />
							<line x1={ix} y1={height -ix} x2={width -ix} y2={height -ix} stroke={`rgba(${i}, ${i}, ${i})`} />
							<line x1={width -ix} y1={ix} x2={width -ix} y2={height -ix} stroke={`rgba(${i}, ${i}, ${i})`} />
						</g>
					)
				})

			}
			<rect x={6} y={6} width={width -6 *2 +1} height={height -6 *2 +1} fill={`rgba(${160}, ${160}, ${160})`} />

		</g>
	)
}

export function Button({width, height, color, style, children}: ButtonProps) {

	const [state, setState] = useState({
		hover: false,
		pressed: false,
		active: false,
	})

	return (
		<>
			<div style={{width: width, height: height, ...style, ...buttonStyle}}>
				<Panel x={0} y={0} width={width} height={height}>
					{state.pressed ?
						<g>
							<rect x={0} y={0} width={width} height={height} fill={'#3a7486'} />
						</g>
						:
						<Skin width={width} height={height} color={'#456'} hover={state.hover} pressed={state.pressed} active={state.active} />
					}
				</Panel>
				<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute',
					width: width, height: height, cursor: 'default'}}>
					<p>{children}</p>
				</div>
			</div>
		</>
	)
}
