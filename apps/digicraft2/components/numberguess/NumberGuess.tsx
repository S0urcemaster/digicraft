import * as React from 'react'
import {useEffect, useReducer, useState} from 'react'
import {H3, P} from '../ui/Typography'
import {Button} from '../ui/Form'
import {useWatcher} from '../../lib/hooks'
import {numberRange, sumGauss} from '../../lib/math'
import {globals} from '../../lib/globals'
import {GameActionType} from './useGameState'
import {useLocalStorage} from '../../lib/localStorageContext'

const ideen = [
	'Coins mitnehmen/kassieren',
	'Cookie mit Highscore',
	'Sprüche sammeln',
	'Zahl kaufen (?)',
	'Skills kaufen, die man per Cookie behält',
	'Symbole statt Zahlen',
	'',
]

const levels = [
	3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 15, 20, 30, 50, 100,
]

const results = {
	guessing: 'guessing',
	initial: 'Starten',
	correct: 'Dein Tipp ist richtig!',
	wrong: 'Dein Tipp ist falsch!',
	lost: 'Keine Coins mehr: Game Over!',
	nextLevel: 'Dein Tipp ist richtig! Du steigst ein Level auf!',
	shop: '',
}

function ProgressBar(props: { range: number, progress: number }) {
	return (
		<div style={{
			display: 'grid',
			gridTemplateColumns: `repeat(${props.range}, 1fr)`,
			width: '200px',
			height: '20px',
			columnGap: '5px',
		}}>
			{numberRange(props.progress).map((r, idx) => <div key={idx} style={{background: 'green', width: '100%'}}/>)}
			{numberRange(props.range - props.progress).map((n, i) => (
				<div key={i} style={{background: 'gray'}}/>
			))}
		</div>
	)
}

type GameState = {
	balance: number
	betCorrect: boolean
	buttonRange: number[]
	coins: number
	level: number
	nextRnd: number
	progress: number
	message: string
	range: number[]
	stake: number
}

enum ActionTypes {
	initial = 'initial',
	insertCoin = 'new game',
	bet = 'bet',
	cashOut = 'buy out',
}

type GameAction = {
	type: string,
	payload?: any
}

function loadStorage() {
	let storage = JSON.parse(localStorage.getItem('guessingGame')!)
	if (!storage) {
		saveStorage({account: {balance: 100}})
		storage = JSON.parse(localStorage.getItem('guessingGame')!)
	}
	return storage
}

function saveStorage(account: any) {
	localStorage.setItem('guessingGame', JSON.stringify(account))
}

function loadBalance() {
	let storage = loadStorage()
	return storage.account.balance
}

function saveBalance(balance: number) {
	saveStorage({account: {balance: balance}})
}

function getNextRnd(range: Array<number>, buttonRange: number) {
	let rnd = Math.floor(Math.random() * buttonRange)
	while (!range.includes(rnd)) {
		rnd = Math.floor(Math.random() * buttonRange)
	}
	return rnd
}

function getRange(level: number) {
	return levels[level - 1]
}

const initialState = {
	balance: 0,
	betCorrect: false,
	buttonRange: [],
	coins: 0,
	level: 0,
	nextRnd: -1,
	progress: 0,
	message: 'Initializing',
	range: [],
	stake: 0,
}

function getInitialState() {
	const s: any = {}
	s.message = 'Insert Coin'
	s.level = 1
	s.buttonRange = numberRange(getRange(s.level))
	s.range = numberRange(getRange(s.level))
	s.stake = s.level
	s.balance = loadBalance()
	if (s.balance === 0) {
		s.balance = 100
		saveBalance(s.balance)
	}
	s.nextRnd = getNextRnd(s.range, s.buttonRange.length)
	s.coins = 0
	return s
}

function reducer(state: GameState, action: GameAction): GameState {
	const s: any = {}
	switch (action.type) {
		case ActionTypes.initial:
			return {...state, ...getInitialState()}
		case ActionTypes.insertCoin:
			s.message = 'Start guessing'
			if (state.balance >= state.stake) {
				s.balance = state.balance - state.stake
				s.coins = state.coins + state.stake
				saveBalance(s.balance)
			}
			return {...state, ...s}
		case ActionTypes.bet:
			if (state.coins - state.stake < 0) {
				return state
			}
			s.coins = state.coins - state.stake
			if (state.nextRnd === action.payload) {
				s.message = 'Your bet is correct'
				s.coins += state.stake * 2
				s.range = state.range.filter((r) => r !== action.payload)
				if (s.range.length === 0) {
					s.message = 'Level Up'
					s.level = state.level + 1
					s.range = numberRange(getRange(s.level))
					s.buttonRange = numberRange(getRange(s.level))
					s.progress = 0
					s.coins = s.coins + sumGauss(levels[s.level])
					s.stake = s.level
					s.nextRnd = getNextRnd(s.range, state.buttonRange.length)
				} else {
					s.progress = state.progress + 1
					// s.level = state.level
					s.nextRnd = getNextRnd(s.range, state.buttonRange.length)
				}
				return {...state, ...s}
			} else {
				if (state.coins === 0) {
					return {...state, ...getInitialState()}
				} else {
					s.message = 'Your bet is wrong'
					if (state.coins - state.stake <= 0) {
						s.coins = 0
						return {...state, ...getInitialState()}
					} else {
						s.coins = state.coins - state.stake
					}
				}
				return {...state, ...s}
			}
		case ActionTypes.cashOut:
			if (state.coins > 0) {
				s.balance = state.balance + state.coins
				s.coins = 0
				saveBalance(s.balance)
				return {...state, ...getInitialState()}
			}
			return state
	}
	return state
}

export default function NumberGuess() {

	const [state, dispatch] = useReducer(reducer, initialState)
	const {brightness} = useLocalStorage()

	useWatcher('state', state)

	useEffect(() => {
		dispatch({type: ActionTypes.initial})
	}, [])


	function GuessButton(props: { num: number, rnd: number }) {
		const [pressed, setPressed] = useState(false)
		const [color, setColor] = useState(globals.brightness[brightness].background)

		useEffect(() => {
			if (props.rnd === -1 || state.coins < state.stake) {
				return
			}
			if (pressed) {
				const result = props.num === props.rnd
				if (result) {
					setColor(globals.colors.green)
				} else {
					setColor(globals.colors.red)
				}
			} else {
				setColor(globals.brightness[brightness].background)
			}
		}, [pressed])

		return (
			<Button onClick={() => dispatch({type: GameActionType.bet, payload: props.num})}
					  onMouseDown={() => setPressed(true)}
					  onMouseUp={() => setPressed(false)}
					  onMouseOut={() => setPressed(false)}
					  style={{background: color, width: '50px'}} value={props.num.toString()}/>
		)
	}

	const BetField = () => {
		return (
			<div style={{
				display: 'grid',
				gridTemplateColumns: '1fr 1fr 1fr',
				rowGap: '15px',
				width: '200px',
				justifyItems: 'space-between',
				textAlign: 'center',
			}}>
				{state.buttonRange.map(r => <GuessButton key={r} num={r} rnd={state.nextRnd}/>)}
			</div>
		)
	}

	return (
		<div style={{background: '#eaf1ff', padding: 10, width: '55%'}}>
			<div style={{display: 'flex', gridTemplateColumns: '1fr 1fr 1fr', columnGap: '50px'}}>
				<div>
					<BetField/>
				</div>
				<div>
					<H3 first nohr>Level {state.level}</H3>
					<p>Bet: {state.stake}</p>
					<p>Coins: {state.coins}</p>
				</div>
				<div>
					<H3 first nohr>Account</H3>
					<p>Balance: {state.balance}</p>
				</div>
			</div>
			&nbsp;
			<div style={{display: 'flex', gridTemplateColumns: '1fr 1fr 1fr', columnGap: '20px'}}>
				<ProgressBar range={state.buttonRange.length} progress={state.buttonRange.length - state.range.length}/>
			</div>
			<div>&nbsp;</div>
			<div>&nbsp;</div>
			<div>
				<Button value={'Insert Coin'} onClick={() => dispatch({type: ActionTypes.insertCoin})} altColor/>&nbsp;
				<Button value={'Cash Out'} onClick={() => dispatch({type: ActionTypes.cashOut})} altColor/>
			</div>
			<P>
				{state.message}
			</P>
		</div>
	)
}
