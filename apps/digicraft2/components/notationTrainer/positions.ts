import {toNumber} from './lib'
import {Piece} from './gameContext'

const white = 'white'
const black = 'black'

const king = 'king'
const queen = 'queen'
const rook = 'rook'
const knight = 'knight'
const bishop = 'bishop'
const pawn = 'pawn'

const a = 'a'
const b = 'b'
const c = 'c'
const d = 'd'
const e = 'e'
const f = 'f'
const g = 'g'
const h = 'h'

type Position = {
	white: [string, string, number][]
	black: [string, string, number][]
}

export function toPieces(position: Position) {
	const pieces: Piece[] = position.white.map(w => {
		return {color: white, piece: w[0], col: toNumber(w[1]), row: w[2]}
	}).concat(position.black.map(w => {
		return {color: black, piece: w[0], col: toNumber(w[1]), row: w[2]}
	}))
	return pieces
}

export const positions: Record<string, Position> = {
	test: {
		white: [
			[rook, a, 1],
			[king, e, 1],
			[rook, h, 1],
		],
		black: [
			[rook, a, 8],
			[king, e, 8],
			[rook, h, 8],
		],
	},
	chess: {
		white: [
			[rook, a, 1],
			[knight, b, 1],
			[bishop, c, 1],
			[queen, d, 1],
			[king, e, 1],
			[bishop, f, 1],
			[knight, g, 1],
			[rook, h, 1],
			[pawn, a, 2],
			[pawn, b, 2],
			[pawn, c, 2],
			[pawn, d, 2],
			[pawn, e, 2],
			[pawn, f, 2],
			[pawn, g, 2],
			[pawn, h, 2],
		],
		black: [
			[rook, a, 8],
			[knight, b, 8],
			[bishop, c, 8],
			[queen, d, 8],
			[king, e, 8],
			[bishop, f, 8],
			[knight, g, 8],
			[rook, h, 8],
			[pawn, a, 7],
			[pawn, b, 7],
			[pawn, c, 7],
			[pawn, d, 7],
			[pawn, e, 7],
			[pawn, f, 7],
			[pawn, g, 7],
			[pawn, h, 7],
		],
	}
}
