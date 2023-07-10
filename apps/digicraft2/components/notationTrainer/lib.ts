import {Move} from './gameContext'
import {transcripts} from './notation'


export function toNumber(letter: string) {
	const code = letter.charCodeAt(0)
	return code - 96
}

export function toLetter(num: number) {
	return String.fromCharCode(num +96)
}

export function firstTranscriptName() {
	return Object.keys(transcripts)[0]
}

export function transcriptKeyValues() {
	const values = Object.keys(transcripts).map(key => {
		return [key, transcripts[key].title]
	})
	return values
}

function filterUpperCase(str: string): string {
	return str.split('').filter(c => c.toLowerCase() === c).join('')
}

function toCastlingMove(move: string, from: string, to: string, white:boolean) {
	if(from[0] === '0') {
		if(move.split(/[-x–]/)[2]) { // long castling
			if(white) {
				return {move: move, from: ['e', 1], to: ['c', 1]} as Move
			} else {
				return {move: move, from: ['e', 8], to: ['c', 8]} as Move
			}
		} else {
			if(white) {
				return {move: move, from: ['e', 1], to: ['g', 1]} as Move
			} else {
				return {move: move, from: ['e', 8], to: ['g', 8]} as Move
			}
		}
	}
	return {} as Move
}

function toMove(move: string, from: string, to: string) {
	return {move: move, from: [from[0], Number(from[1])],
		to: [to[0], Number(to[1])]
	} as Move
}

export function toMoves(script: string): Move[] {
	const moves: Move[] = []
	const lines = script.split('\n')
	lines.forEach(s => {
		const dotIdx = s.indexOf('.') >=0 ? s.indexOf('.') +2 : 0
		const move = s.trim().substring(dotIdx)
		const white = move.split(' ')[0]
		const black = move.split(' ')[1]
		const whiteFrom = filterUpperCase(white.split(/[-x–]/)[0])
		const whiteTo = filterUpperCase(white.split(/[-x–]/)[1])
		if(whiteFrom[0] === '0') {
			moves.push(toCastlingMove(white, whiteFrom, whiteTo, true))
		} else {
			moves.push(toMove(white, whiteFrom, whiteTo))
		}
		if(black) {
			const blackFrom = filterUpperCase(black.split(/[-x–]/)[0])
			const blackTo = filterUpperCase(black.split(/[-x–]/)[1])
			if(blackFrom[0] === '0') {
				moves.push(toCastlingMove(black, blackFrom, blackTo, false))
			} else {
				moves.push(toMove(black, blackFrom, blackTo))
			}
		}
	})
	return moves
}

export function convertTo2DArray<T>(arr: T[]) {
	const result = []
	for (let i = 0; i < arr.length - 1; i += 2) {
		result.push([arr[i], arr[i + 1]])
	}
	if (arr.length % 2 !== 0) {
		result.push([arr[arr.length - 1], {} as T])
	}
	return result
}

export function toMinutes(millis: number): string {
	if(!millis) return '0'
	const minutes = Math.floor(millis /60000)
	const seconds = millis -minutes *60000
	const mins = minutes >0 ? minutes +':' : ''
	const res = `${mins}${(seconds/1000).toFixed(1)}`
	return res
}
