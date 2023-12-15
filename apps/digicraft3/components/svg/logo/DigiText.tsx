import * as React from 'react'
import Text from './Text'
import { letterCoords } from './letterCoords'
import {LetterType} from './Letter'
import { CSSProperties } from 'react'

type Props = {
	text: string
	height: number
	color: string
	onClick?: () => void
	style?: CSSProperties
}

export default function DigiText({text, height, color, onClick, style}: Props) {

	const dotSize = 5

	let offset = 0
	let prevLetter = {} as LetterType
	const letters: LetterType[] = text.split(',').map((t, idx) => {
		idx > 0 ? offset += prevLetter.width + 1 : false
		prevLetter = letterCoords[t]

		return {
			char: t,
			coords: letterCoords[t].coords,
			width: letterCoords[t].width,
			visible: true,
			offset: offset
		}
	})

	const xWidth = letters.reduce((acc, l) => {
		return acc + l.width
	}, 0) *dotSize +letters.length *dotSize

	const xHeight = dotSize *5

	return (
		<svg height={height} viewBox={`0 0 ${xWidth} ${xHeight}`} onClick={onClick} style={{...style}}>
			<Text x={0} size={dotSize} letters={letters} color={color} />
		</svg>
	)
}