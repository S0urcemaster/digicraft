import * as React from 'react'
import Game from './Game'
import {GameStateProvider, LineStats, SeriesStats} from './gameContext'


export type NotationTrainerSettings = {
	flipBoardEachTurn: boolean
	textMode: boolean
	showMoves: boolean
}

export type NotationTrainer = {
	settings: NotationTrainerSettings
	stats: LineStats[]
}

export const EmptySettings: NotationTrainerSettings = {
	flipBoardEachTurn: false,
	textMode: false,
	showMoves: false,
}

export const EmptyNotationTrainer: NotationTrainer = {
	settings: EmptySettings,
	stats: []
}

export default function NotationTrainer(props: {}) {
	return (
		<>
			<GameStateProvider>
				<Game />
			</GameStateProvider>
		</>
	)
}