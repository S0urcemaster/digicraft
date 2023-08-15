import * as React from 'react'
import Text from './Text'
import { letterCoords } from './letterCoords'
import {LetterType} from './Letter'

type Props = {
	text: string
}

export default function DigiText(props: Props) {

	const dotSize = 4

	let offset = 0
	let prevLetter = {} as LetterType
	const letters: LetterType[] = props.text.split('').map((t, idx) => {
		idx > 0 ? offset += prevLetter.width + 1 : true
		prevLetter = letterCoords[t]

		return {
			char: t,
			coords: letterCoords[t].coords,
			width: letterCoords[t].width,
			visible: true,
			offset: offset
		}
	})

	const width = letters.reduce((acc, l) => {
		return acc + l.width *5
	}, 0)

	return (
		<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width={width} viewBox={`0 0 ${width *1.3} 30`}>
			<title>digicraft logo & path</title>
			<Text x={0} size={dotSize} letters={letters} visible={true} />
		</svg>
	)
}