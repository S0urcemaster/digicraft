import * as React from 'react'
import {useEffect, useState} from 'react'
import {letterCoords} from './letterCoords'
import {default as LetterComp} from './Letter'

export type Letter = {
	char: string
	coords: number[][]
	width: number
	visible: boolean
	offset: number
}

type Props = {
	x: number
	text: string
	visible: boolean
}


// function initDistributeLetters(letters: Letter[]) {
// 	let x = 0
// 	letters.forEach((l, idx) => {
// 		if (idx === 0) {
// 			x += l.width +1
// 		} else {
// 			l.coords.forEach(c => {
// 				c[0] += x
// 			})
// 			x += l.width +1
// 		}
// 	})
// }

function getLetterCoords(c: string) {
	switch(c) {
		case ' ':
			return letterCoords['Space']
	}
	return letterCoords[c]
}

export default function Text(props: Props) {

	const [x, setX] = useState(props.x)
	const [visible, setVisible] = useState(true)
	const [letters, setLetters] = useState<Letter[]>([])

	useEffect(() => {
		let offset = 0
		let prevLetter = {} as Letter
		const letters: Letter[] = props.text.split('').map((t, idx) => {
			idx > 0 ? offset += prevLetter.width +1 : true
			prevLetter = getLetterCoords(t)

			const letter = {char: t, coords: getLetterCoords(t).coords, width: getLetterCoords(t).width, visible: true, offset: offset}
			return letter
		})
		setLetters(letters)
	}, [])

	useEffect(() => {
		// initDistributeLetters(letters)
	}, [letters])

	useEffect(() => {
		if(letters.length >0) setLetters([...letters.map(l => {
			l.visible = visible
			return l
		})])
	}, [visible])

	return (
		<>
			{letters.map((l, idx) => {
				return <LetterComp key={idx} letter={l} />
			})}
		</>
	)
}