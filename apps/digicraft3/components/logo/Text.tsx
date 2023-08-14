import * as React from 'react'
import { letterCoords } from './letterCoords'
import { default as LetterComp } from './Letter'

export type Letter = {
	char: string
	coords: number[][]
	width: number
	visible: boolean
	offset: number
}

type Props = {
	x: number
	size: number
	text: string
	visible: boolean
}

function getLetterCoords(c: string) {
	switch (c) {
		case ' ':
			return letterCoords['Space']
	}
	return letterCoords[c]
}

export default function Text(props: Props) {

	let offset = 0
	let prevLetter = {} as Letter
	const letters: Letter[] = props.text.split('').map((t, idx) => {
		idx > 0 ? offset += prevLetter.width + 1 : true
		prevLetter = getLetterCoords(t)

		const letter = {
			char: t,
			coords: getLetterCoords(t).coords,
			width: getLetterCoords(t).width,
			visible: true,
			offset: offset
		}
		return letter
	})

	return (
		<>
			{letters.map((l, idx) => {
				return <LetterComp key={idx} letter={l} size={props.size}/>
			})}
		</>
	)
}