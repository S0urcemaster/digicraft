import {useCallback, useEffect, useState} from 'react'
import {letterCoords} from './letterCoords'

export type Position = {
	x: number
	y: number
	visible: boolean
}

// export const initialPosition: Position = {
// 	x: 0,
// 	y: 0,
// 	visible: true,
// }

type UsePosition = {
	position: Position
	setX: Function
	setY: Function
	setVisible: Function
	setPosition: Function
}

export function usePosition(pos: Position): UsePosition {

	const [position, setPosition] = useState<Position>(pos)

	const setX = useCallback((x: number) => {
		setPosition({...position, x: x})
	}, [])

	const setY = useCallback((y: number) => {
		setPosition({...position, y: y})
	}, [])

	const setVisible = useCallback((visible: boolean) => {
		setPosition({...position, visible: visible})
	}, [])

	return {position: position, setX: setX, setY: setY, setVisible: setVisible, setPosition: setPosition} as UsePosition
}

export type Letter = {
	letter: string
	coords: number[][]
	width: number
	visible: boolean
}

function initDistributeLetters(letters: Letter[]) {
	let x = 0
	letters.map((l, idx) => {
		if (idx === 0) {
			x += l.width
		} else {
			l.coords.forEach(c => {
				c[0] += x + 1
			})
			x += l.width
		}
	})
}

export function useLogoText(text: string) {

	const [x, setX] = useState(0)
	const [visible, setVisible] = useState(false)
	const [letters, setLetters] = useState<Letter[]>([])

	useEffect(() => {
		setLetters(text.split('').map(t => {
			return {letter: t, coords: letterCoords[t].coords, width: letterCoords[t].width, visible: false}
		}))
	}, [])

	useEffect(() => {
		initDistributeLetters(letters)
	}, [letters])

	useEffect(() => {
		setLetters([...letters.map(l => {
			l.visible = visible
			return l
		})])
	}, [visible])

	return [x, setX, setVisible, letters]
}
