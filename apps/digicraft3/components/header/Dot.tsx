import * as React from 'react'

type Props = {
	coords: number[]
	visible: boolean
	size: number
}

export const maxX = 30

export default function Dot(props: Props) {

	function getPositionX(x: number) {
		return (x -1) * props.size + 5
	}

	function getPositionY(y: number) {
		return y * props.size + 2 +7
	}

	function getColor() {
		return '#fff'
	}

	return (
		<>
			{props.visible ?
				<circle cx={getPositionX(props.coords[0])} cy={getPositionY(props.coords[1])} r={props.size/2}
				fill={getColor()}/>
				: ''}
		</>
	)
}