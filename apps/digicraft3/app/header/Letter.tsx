import * as React from 'react'
import Dot from './Dot'

export type LetterType = {
	char: string
	coords: number[][]
	width: number
	visible: boolean
	offset: number
}

export default function Letter(props: {
	letter: LetterType
	size: number
}) {

	function getCoords(coord: number[]) {
		return [coord[0] +props.letter.offset, coord[1]]
	}

	return (
		<>
			{props.letter.coords.map((c, idx) => (
					<Dot key={idx} size={props.size} coords={getCoords(c)} visible={props.letter.visible} />
				)
			)}
		</>
	)
}