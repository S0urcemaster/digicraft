import * as React from 'react'
import Letter, {LetterType} from './Letter'

type Props = {
	x: number
	size: number
	letters: LetterType[]
	visible: boolean
	color: string
}

export default function Text({x, size, letters, color}: Props) {

	return (
		<>
			{letters.map((l, idx) => {
				return <Letter key={idx} letter={l} size={size} color={color}/>
			})}
		</>
	)
}