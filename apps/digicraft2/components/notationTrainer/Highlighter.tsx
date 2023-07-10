import * as React from 'react'

export type xyCoord = {
	x: number
	y: number
}

export default function Highlighter(props: {hl: xyCoord, fieldSize: number}) {
	return (
		<div style={{position: 'absolute', left: props.hl.x, top: props.hl.y}}>
			<svg xmlns="http://www.w3.org/2000/svg" width={props.fieldSize} height={props.fieldSize}>
				<rect x={0} y={0} width={100} height={100} fill={'rgba(255,136,0,0.23)'} />
			</svg>
		</div>
	)
}