import * as React from 'react'
import Dot from './Dot'

export type LetterType = {
	char: string
	coords: number[][]
	width: number
	visible: boolean
	offset: number
}

type LetterProps = {
	letter: LetterType,
	size: number
	color: string
}

export default function Letter({letter, size, color}: LetterProps) {

	function getCoords(coord: number[]) {
		return [coord[0] +letter.offset, coord[1]]
	}

	return (
		<>
			{letter.coords.map((c, idx) => (
					<Dot key={idx} color={color} size={size} coords={getCoords(c)} visible={letter.visible} />
				)
			)}
		</>
	)
}