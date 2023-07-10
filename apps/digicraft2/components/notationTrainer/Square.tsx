import * as React from 'react'
import {useEffect, useState} from 'react'
import {svgs} from './pieces'
import {boardValues, Piece, Square as SquareType} from './gameContext'

export default function Square(props:{x: number, y: number, size: number, square: SquareType, piece: Piece|undefined
	take: Function, drop: Function
}) {

	const [color, setColor] = useState(props.square.color)

	useEffect(() => {
		setColor(props.square.color)
	}, [props.square])

	return (
		<g transform={`translate(${props.x},${props.y})`} onMouseEnter={() => setColor(boardValues.color.mousePointer)} onMouseLeave={() => setColor(props.square.color)}>
			<rect fill={color} width={props.size} height={props.size}
					onMouseDown={() => props.take(props.square, props.piece)} onMouseUp={() => props.drop(props.square)}
			/>
			{props.piece ?
				<g transform={`translate(7, 7)`}
					onMouseDown={() => props.take(props.square, props.piece)} onMouseUp={() => props.drop(props.square)}>
					{svgs[props.piece.color][props.piece.piece]}
				</g>
				: ''
			}
		</g>
	)
}