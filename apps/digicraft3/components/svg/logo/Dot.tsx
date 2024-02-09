import * as React from 'react'

type Props = {
	coords: number[]
	visible: boolean
	size: number
	color: string
}

export default function Dot({coords, visible, size, color}: Props) {

	function getPositionX(x: number) {
		return x * size +size/2
	}

	function getPositionY(y: number) {
		return y * size + size/2
	}

	return (
		<>
			{visible ?
				<rect x={coords[0] *size -size/2 +3} y={coords[1] *size -size/2 +3} width={size-1} height={size-1} fill={color} />
				// <circle cx={getPositionX(coords[0])} cy={getPositionY(coords[1])} r={size/2} fill={color}/>
				: ''}
		</>
	)
}