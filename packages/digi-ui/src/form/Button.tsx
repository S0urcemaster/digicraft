'use client'

import * as React from 'react'
import { CSSProperties, ReactNode, useState } from 'react'
import { Panel } from '@digicraft/svg'

type ButtonProps = {
	style?: CSSProperties
	children: ReactNode
	width: number
	height: number
}

const buttonStyle: CSSProperties = {
	position: 'relative',
	textAlign: 'center',
	top: 0,
	left: 0,
}

function Edges({width, height}: {width: number, height: number}) {
	return (
		<g>
			{
				[100, 110, 120, 130, 140, 150].map((i, ix) => {
					return <rect x={ix} y={ix} width={width -ix *2} height={height -ix *2} fill={`rgba(${i}, ${i}, ${i})`} />
				})
			}
			{/*<rect x={5} y={5} width={width -5 *2} height={height -5 *2} fill={`rgba(${150}, ${150}, ${150})`} />*/}
		</g>
	)
}

export function Button({width, height, style, children}: ButtonProps) {

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
						<Edges width={width} height={height} />
					}
				</Panel>
				<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', width: width, height: height}}>
					<p>{children}</p>
				</div>
			</div>
		</>
	)
}
