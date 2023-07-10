import * as React from 'react'
import {useEffect, useRef, useState} from 'react'
import {xyCoord} from './Highlighter'
import Square from './Square'
import {boardValues, Piece, Square as SquareType} from './gameContext'
import {svgs} from './pieces'
import {toLetter, toNumber} from './lib'
import {useGameState} from './gameContext'

const black = boardValues.color.black
const white = boardValues.color.white

function makeSquares(flipped: boolean) {
	const squares = []
	for(let col = 1; col <9; col++) {
		for(let row = 1; row <9; row++) {
			if(flipped) {
				squares.push({
					col: col, row: row, colId: toLetter(9 -col), rowId: 9 -row, color: (col + row) % 2 === 0 ? white : black
				})
			} else {
				squares.push({
					col: col, row: row, colId: toLetter(col), rowId: row, color: (col + row) % 2 === 0 ? black : white
				})
			}
		}
	}
	return squares
}

export default function Board() {

	const {flip, setSquareFrom, setSquareTo, pieces, currentPiece, setCurrentPiece, textMoveOn,
		movesSquares, setMovesSquares, showMoves, showMovesSquares
	} = useGameState()

	const [boardSize, setBordSize] = useState(480)

	const squareSize = boardSize /8

	const boardRef = useRef<HTMLDivElement>(null)

	const [squares, setSquares] = useState<SquareType[]>([])

	const [mouseHighlighter, setMouseHighlighter] = useState<xyCoord>({x: 0, y: 0})
	const [mouseOn, setMouseOn] = useState(false)
	const [mousePos, setMousePos] = useState({x: 0, y: 0})

	useEffect(() => {
	}, [])

	useEffect(() => {
		setSquares(makeSquares(flip))
		showMovesSquares()
	}, [flip])

	useEffect(() => {
		if(mouseOn) {
			boardRef.current?.addEventListener("mousemove", handleMouseMove)

		} else {
			boardRef.current?.removeEventListener("mousemove", handleMouseMove)
		}
		function handleMouseMove(event: MouseEvent) {
			if(mouseOn) {
				setMousePos(relativeMouse(event))
			}
		}
		return () => {
			boardRef.current?.removeEventListener("mousemove", handleMouseMove)
		}
	}, [mouseOn])

	useEffect(() => {
		setMouseHighlighter(getHighlighterPos(mousePos))
	}, [mousePos])

	useEffect(() => {
		if(movesSquares && showMoves && textMoveOn) {
			const squares = makeSquares(flip).map(s => {
				if(s.colId === movesSquares[0].colId && s.rowId === movesSquares[0].rowId ||
					s.colId === movesSquares[1].colId && s.rowId === movesSquares[1].rowId) {
					return {...s, color: boardValues.color.movePointers}
				}
				return s
			})
			setSquares(squares)
		} else {
			setSquares(makeSquares(flip))
		}
	}, [movesSquares])

	function relativeMouse(event: MouseEvent) {
		const bounds = boardRef.current?.getBoundingClientRect()
		const xy = {x: event.x -Math.round(bounds!.left), y: event.y -Math.round(bounds!.top)}
		return xy
	}

	function getHighlighterPos(mousexy: xyCoord) {
		const squareX = Math.floor(mousexy.x /squareSize)
		const squareY = Math.floor(mousexy.y /squareSize)
		return {x: squareX *squareSize +2, y: squareY *squareSize -1}
	}

	function mouseEnter() {
		setMouseOn(true)
	}

	function mouseLeave() {
		setMouseOn(false)
	}

	function take(square: SquareType, piece: Piece) {
		if(!piece || textMoveOn) return
		setCurrentPiece(piece)
		setSquareFrom(square)
	}

	function drop(square: SquareType) {
		if(!currentPiece) return
		setSquareTo({...square})
	}

	function getPiece(colId: string, rowId: number) {
		if(pieces) {
			const piece = pieces!.filter((p: Piece) => {
				return p.col === toNumber(colId) && p.row === rowId
			})[0]
			return piece
		}
	}

	function yFlip(y: number) {
		return (8- y) *squareSize
	}

	return (
		<div style={{position: 'relative', padding: '15px 15px 10px 15px', background: '#ccc', float: 'left'}}>
			<div ref={boardRef} onMouseOver={mouseEnter} onMouseLeave={mouseLeave} style={{float: 'left', position: 'relative'}}>
				<svg width={boardSize} height={boardSize}>
					{squares.map((s, idx) => (
						<Square x={(s.col -1) *squareSize} y={yFlip(s.row)} size={squareSize} square={s}
								 take={take} drop={drop} piece={getPiece(s.colId, s.rowId)} key={idx}
						/>
					))}
					{currentPiece ?
						<g transform={`translate(${mousePos.x -squareSize/2 +8}, ${mousePos.y -squareSize/2 +7})`}
							style={{pointerEvents: 'none'}}
						>
							{svgs[currentPiece.color][currentPiece.piece]!}
						</g>
						: ''
					}
				</svg>
			</div>
		</div>
	)
}