import {useReducer} from 'react'

export enum GameActionType {
	initial = 'initial',
	bet = 'bet',
}

export type GameAction = {
	type: GameActionType
	payload?: any
}

type GameState = {
	level: number,
	coins: number,
}

export const initialState:GameState = {
	level: 1,
	coins: 0,
}

const shop = {
	kostenloserTipp: 0,

}

// const initialState = GameState

export function reducer(state: GameState, action: GameAction): GameState {
	const {type, payload} = action
	switch (type) {
		case GameActionType.initial:
			return {
				...state, coins: 3
			}
	}
	return state

}

export default function useGameState(action: GameAction) {

	const [state, dispatch] = useReducer(reducer, initialState)

	// switch (action.type) {
	// 	case GameActionType.initial:
	// 		setRange(numberRange(levels[level - 1], 1))
	// 		setResult(results.initial)
	// 		let storage = JSON.parse(localStorage.getItem('guessingGame')!)
	// 		if(!storage) {
	// 			localStorage.setItem('guessingGame', JSON.stringify({account: {balance: 97}}))
	// 			storage = JSON.parse(localStorage.getItem('guessingGame')!)
	// 		}
	// 		setAccount(storage.account.balance)
	// 		break
	// 	case results.correct:
	// 		setCoins(coins + stake)
	// 		setResult(results.correct)
	// 		setState(results.guessing)
	// 		break
	// 	case results.wrong:
	// 		setCoins(coins - stake)
	// 		setResult(results.wrong)
	// 		setState(results.guessing)
	// 		break
	// 	case results.lost:
	// 		setCoins(initialCoins)
	// 		setResult(results.lost)
	// 		break
	// 	case results.nextLevel:
	// 		setLevel(level + 1)
	// 		setCoins(coins + (levels[level] - 1) * 3 + level)
	// 		setResult(results.nextLevel)
	// 		break
	// }
	return [state, dispatch]

}