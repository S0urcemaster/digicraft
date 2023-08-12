'use client'

import * as React from 'react'
import { CSSProperties, ReactNode, useState } from 'react'
import { Panel } from '@digicraft/svg'
import chroma from 'chroma-js'

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
	boxShadow: '0px 0px 40px 20px #0ff'
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
			{/*<Glow width={width} height={height} color={`rgba(0,151,255,0.5)`} />*/}
			{
				[100, 110, 120, 130, 140, 150].map((i, ix) => {
					return (
						<g key={ix}>
							<line x1={ix +3} y1={ix +3} x2={width -ix -3} y2={ix +3} stroke={`rgba(${i +20}, ${i +40}, ${i +40})`} />
							<line x1={ix +3} y1={ix +3} x2={ix +3} y2={height -ix -3} stroke={`rgba(${i +20}, ${i +40}, ${i +40})`} />
							<line x1={ix +3} y1={height -ix -3} x2={width -ix -3} y2={height -ix -3} stroke={`rgba(${i}, ${i}, ${i})`} />
							<line x1={width -ix -3} y1={ix +3} x2={width -ix -3} y2={height -ix -3} stroke={`rgba(${i}, ${i}, ${i})`} />
						</g>
					)
				})

			}
			<rect x={7} y={7} width={width -6 *2 -4} height={height -6 *2 -4} fill={`rgba(${160}, ${160}, ${160})`} />

		</g>
	)
}

function Glow({width, height, color}: {width: number, height: number, color: string}) {
	return (
		<g>
			<rect x={0} y={0} width={width} height={height} fill={color} />
			{/*<rect x={2} y={2} width={width -4} height={height -4} fill={chroma.mix(color, 'white').hex()} />*/}
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
