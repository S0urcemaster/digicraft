import * as React from 'react'
import Letter, {LetterType} from './Letter'

type Props = {
	x: number
	size: number
	letters: LetterType[]
	visible: boolean
}

export default function Text(props: Props) {

	return (
		<>
			{props.letters.map((l, idx) => {
				return <Letter key={idx} letter={l} size={props.size}/>
			})}
		</>
	)
}