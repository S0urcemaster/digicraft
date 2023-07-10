import {createContext, ReactNode, useContext, useEffect, useState} from 'react'
import {toMoves, toNumber} from './lib'
import {positions, toPieces} from './positions'
import {useTimer} from './timer'
import {transcripts} from './notation'
import {useLocalStorage} from '../../lib/localStorageContext'
import {series as notationSeries} from './notation'

export const errorPenalty = 5

export const boardValues = {
	color: {
		black: '#6f6f6f',
		white: '#eee',
		mousePointer: '#b6cfe3',
		movePointers: '#eadaa1',
	}
}

export type Square = {
	colId: string
	rowId: number
	col: number
	row: number
	color: string
}

export type Piece = {
	color: string
	piece: string
	col: number
	row: number
}

export type Move = {
	move: string
	from: [string, number]
	to: [string, number]
}

export type LineStats = {
	name: string
	textMode?: boolean
	time: number
}

export type SeriesStats = {
	name: string
	lines: LineStats[]
}

type GameState = {
	series: SeriesStats
	setSeries: (series: SeriesStats) => void
	line: LineStats|undefined
	setLine: (line: LineStats) => void
	lineName: string|undefined
	setLineName: (name: string|undefined) => void
	lineStats: LineStats|undefined
	setLineStats: (stats: LineStats) => void
	moves: Move[]|undefined
	location: number|undefined
	pieces: Piece[]|undefined
	currentPiece: Piece|undefined
	setCurrentPiece: (piece: Piece|undefined) => void
	squareFrom: Square|undefined
	setSquareFrom: (square: Square) => void
	squareTo: Square|undefined
	setSquareTo: (square: Square) => void
	setLocation: (location: number) => void
	textMove: string
	setTextMove: (text: string) => void
	textMoveOn: boolean
	toggleTextMoveOn: () => void
	showMoves: boolean
	toggleShowMoves: () => void
	movesSquares: Square[]|undefined
	setMovesSquares: (squares: Square[]|undefined) => void
	showMovesSquares: () => void
	flip: boolean
	toggleFlipped: () => void
	flipEach: boolean
	toggleFlipEach: () => void
	scriptCompleted: boolean
	setScriptCompleted: (completed: boolean) => void
	startTimer: () => void
	stopTimer: () => void
	resetTimer: () => void
	elapsed: number|undefined
	errors: number
	setErrors: (errors: number) => void
	restart: () => void
	storageLoaded: boolean
}

const GameStateContext = createContext<GameState>({} as GameState)

function isCastlingMove(move: Move) {
	if(move.from[0] === 'e' && (move.from[1] === 8 || move.from[1] === 1) &&
		move.to[0] === 'g' && (move.to[1] === 8 || move.to[1] === 1)) {
		return true
	}
}

function isLongCastlingMove(move: Move) {
	if(move.from[0] === 'e' && (move.from[1] === 8 || move.from[1] === 1) &&
		move.to[0] === 'c' && (move.to[1] === 8 || move.to[1] === 1)) {
		return true
	}
}

export function GameStateProvider(props: {children: ReactNode}) {

	const [series, setSeries] = useState<SeriesStats>(notationSeries)
	const [line, setLine] = useState<LineStats|undefined>()
	const [lineName, setLineName] = useState<string|undefined>()

	const [lineStats, setLineStats] = useState<LineStats|undefined>(undefined)

	const [moves, setMoves] = useState<Move[]|undefined>()
	const [location, setLocation] = useState<number|undefined>()
	const [pieces, setPieces] = useState<Piece[]|undefined>()
	const [currentPiece, setCurrentPiece] = useState<Piece|undefined>()

	const [squareFrom, setSquareFrom] = useState<Square|undefined>()
	const [squareTo, setSquareTo] = useState<Square|undefined>()

	const [textModeOn, setTextModeOn] = useState<boolean>(true)
	const [textMove, setTextMove] = useState<string>('')

	const [showMoves, setShowMoves] = useState<boolean>(true)
	const [movesSquares, setMovesSquares] = useState<Square[]|undefined>(undefined)

	const [flip, setFlip] = useState(false)
	const [flipEach, setFlipEach] = useState(false)

	const [scriptCompleted, setScriptCompleted] = useState(false)

	const {elapsed, start: startTimer, stop: stopTimer, reset: resetTimer} = useTimer()
	const [errors, setErrors] = useState(0)

	const {notationTrainer, setNotationTrainer} = useLocalStorage()
	const [storageLoaded, setStorageLoaded] = useState(false)

	const [restart, setRestart] = useState(false)

	useEffect(() => {
		if(showMoves && moves) {
			showMovesSquares()
		}
	}, [moves])

	useEffect(() => {
		if(!flip) showMovesSquares()
	}, [location])

	useEffect(() => {
		setLine(series.lines[0])
		setLineName(series.lines[0].name)
	}, [series])

	useEffect(() => {
		if(lineName) {
			pushRestart()
		}
	}, [lineName])

	useEffect(() => {
		if(line) {
			setMoves(toMoves(transcripts[line.name].script))
			setPieces(toPieces(positions.chess))
			setLocation(0)
			setLineStats(statsFromStorage())
			setFlip(false)
		}
	}, [line])

	useEffect(() => {
		if(textModeOn) {
			showMovesSquares()
		} else {
			setMovesSquares(undefined)
			setLineStats(statsFromStorage())
		}
		setLineStats(statsFromStorage())
	}, [textModeOn])

	useEffect(() => {
		if(textMove.match(/[a-h][1-8][-x][a-h][1-8]/)) {
			const move = toMoves(textMove)[0]
			const piece = findPiece(move.from[0], move.from[1])
			if(!piece) {
				setTextMove('')
				return
			}
			showMovesSquares()
			setCurrentPiece(piece)
			setSquareFrom({colId: move.from[0], rowId: move.from[1]} as Square)
		}
	}, [textMove])

	useEffect(() => {
		if(!showMoves) {
			setMovesSquares(undefined)
		} else {
			showMovesSquares()
		}
	}, [showMoves])

	useEffect(() => {
		if(squareTo) {
			if(location === 0) startTimer()
			if(coordsMatch(squareTo, moves![location!].to)) {
				setLocation(prev => ++prev!)
				currentPiece!.row = squareTo.rowId
				currentPiece!.col = toNumber(squareTo.colId)

				const takenPiece = findPiece(squareTo.colId, squareTo.rowId)

				if(isCastlingMove(moves![location!])) {
					let rook = undefined
					if(location! %2 === 0) { //white
						rook = findPiece('h', 1)
					} else { //black
						rook = findPiece('h', 8)
					}
					movePiece(rook!, 'f', rook!.row)
				} else if(isLongCastlingMove(moves![location!])) {
					let rook = undefined
					if(location! %2 === 0) { //white
						rook = findPiece('a', 1)
					} else { //black
						rook = findPiece('a', 8)
					}
					movePiece(rook!, 'd', rook!.row)
				} else if(takenPiece) {
					removePiece(takenPiece)
				}
				addPiece(currentPiece!)
				setCurrentPiece(undefined)
				if(location === moves!.length -1) {
					setScriptCompleted(true)
					return
				}
				if(flipEach) toggleFlipped()
			} else { // wrong move
				currentPiece!.row = squareFrom!.rowId
				currentPiece!.col = toNumber(squareFrom!.colId)
				addPiece(currentPiece!)
				setCurrentPiece(undefined)
				setErrors(prev => ++prev)
			}
		}
	}, [squareTo])

	useEffect(() => {
		if(currentPiece) {
			removePiece(currentPiece) // piece has been taken by mouse
			if(textModeOn) {
				const move = toMoves(textMove)[0]
				const squareTo: Square = {colId: move.to[0], rowId: move.to[1]} as Square
				setSquareTo(squareTo)
				setTextMove('')
			}
		}
	}, [currentPiece])

	useEffect(() => {
		stopTimer()
		const stats: LineStats = {name: lineName!, time: elapsed! +errors *errorPenalty *1000}
		if(lineStats && (lineStats.time === 0 || stats.time <lineStats.time)) {
			setLineStats(stats)
			saveToStorage(stats)
		}
	}, [scriptCompleted])

	useEffect(() => {
		setFlipEach(notationTrainer.settings.flipBoardEachTurn)
		setTextModeOn(notationTrainer.settings.textMode)
		setShowMoves(notationTrainer.settings.showMoves)
		setStorageLoaded(true)
	}, [notationTrainer])

	useEffect(() => {
		if(restart) {
			setLine({...series.lines.find((l) => {
					return l.name === lineName
				})} as LineStats)
			setRestart(false)
		}
	}, [restart])

	function pushRestart() {
		resetTimer()
		setScriptCompleted(false)
		setLocation(0)
		setErrors(0)
		setRestart(true)
	}

	function statsFromStorage() {
		let ntStats = notationTrainer.stats.find(s => {
			if(textModeOn) {
				return s.name === lineName && s.textMode === true
			}
			return s.name === lineName
		})
		if(!ntStats) {
			notationTrainer.stats.push({time: 0, name: lineName!, textMode: textModeOn})
			setNotationTrainer({...notationTrainer})
			ntStats = {name: lineName!, time: 0}
		}
		return ntStats
	}

	function saveToStorage(stats: LineStats) {
		const prevStat = notationTrainer.stats.find(s => s.name === stats.name)
		notationTrainer.stats.splice(notationTrainer.stats.indexOf(prevStat!), 1, stats)
		setNotationTrainer({...notationTrainer})
	}

	function coordsMatch(square: Square, halfMove: [string, number]) {
		return square.colId === halfMove[0] && square.rowId === halfMove[1]
	}

	function showMovesSquares() {
		if(moves && location !== undefined && moves[location]) {
			const from = moves![location!].from
			const to = moves![location!].to
			setMovesSquares([{colId: from[0], rowId: from[1]}, {colId: to[0], rowId: to[1]}] as Square[])
		}
	}

	function removePiece(piece: Piece) {
		pieces!.splice(pieces!.indexOf(piece), 1)
		setPieces([...pieces!])
	}

	function addPiece(piece: Piece) {
		pieces!.push(piece)
		setPieces([...pieces!])
	}

	function movePiece(piece: Piece, col: string, row: number) {
		piece.col = toNumber(col)
		piece.row = row
		setPieces([...pieces!])
	}

	function findPiece(col: string, row: number) {
		return pieces!.find(p => p.col === toNumber(col) && p.row === row)
	}

	function flipTimeout() {
		setFlip(prev => !prev)
	}

	function toggleFlipped() {
		window.setTimeout(flipTimeout, 200)
	}

	function toggleFlipEach() {
		setNotationTrainer({...notationTrainer, ...{settings: {...notationTrainer.settings, flipBoardEachTurn: !flipEach}}})
		setFlipEach(prev => !prev)
	}

	function toggleTextMoveOn() {
		setNotationTrainer({...notationTrainer, ...{settings: {...notationTrainer.settings, textMode: !textModeOn}}})
		setTextModeOn(prev => !prev)
	}

	function toggleShowMoves() {
		setNotationTrainer({...notationTrainer, ...{settings: {...notationTrainer.settings, showMoves: !showMoves}}})
		setShowMoves(prev => !prev)
	}

	return (
		<GameStateContext.Provider value={{
			moves, flip: flip, toggleFlipped, flipEach, toggleFlipEach,
			location, setLocation, squareFrom, setSquareFrom, squareTo, setSquareTo,
			pieces, currentPiece, setCurrentPiece, scriptCompleted, setScriptCompleted,
			series, setSeries, line, setLine, lineName, setLineName,
			elapsed, startTimer, stopTimer, resetTimer, textMove, setTextMove, textMoveOn: textModeOn, toggleTextMoveOn,
			showMoves, toggleShowMoves, movesSquares, setMovesSquares, lineStats, setLineStats,
			errors, setErrors, restart: pushRestart, storageLoaded, showMovesSquares
		}}>
			{props.children}
		</GameStateContext.Provider>
	)

}

export function useGameState() {
	return useContext(GameStateContext)
}