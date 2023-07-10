import {H3, P} from '../ui/Typography'
import * as React from 'react'
import {Project} from './Source'

export const projects: Record<string, Project> = {
	radio: {
		name: 'Digi Radio', folder: 'radio', files: [
			{name: 'Radio.tsx', description: <>
					<H3>Main Component</H3>
					<P>Streams are hard coded. No more planned.</P>
					<P>Long rows because there is no relevant information beyond and it looks cleaner without breaks.</P>
				</>},
			{name: 'Button.tsx', description: ''},
			{name: 'AudioControl.tsx', description: ''},
			{name: 'Stations.tsx', description: ''},
			{name: 'Display.tsx', description: ''},
			{name: 'Volume.tsx', description: ''},
			{name: 'Casing.tsx', description: ''},
		],
	},
	achievements: {
		name: 'Erfolge', folder: 'achievements', files: [
			{name: 'Achievements.tsx', description: <>
					<H3> </H3>
				</>},
			{name: 'context.tsx', description: <></>},
			{name: 'DisplayRow.tsx', description: <></>},
			{name: 'InputRow.tsx', description: <></>}
		]
	},
	decider: {
		name: 'Der Entscheider', folder: 'decider', files: [
			{name: 'Decider.tsx', description: <></>},
			{name: 'deciderContext.tsx', description: <></>},
			{name: 'Item.tsx', description: <></>},
			{name: 'List.tsx', description: <></>},
			{name: 'Lists.tsx', description: <></>},
			{name: 'timer.ts', description: <></>},
		]
	},
	notationTrainer: {
		name: 'Chess Notation Trainer', folder: 'notationTrainer', files: [
			{name: 'Board.tsx', description: <></>},
			{name: 'Game.tsx', description: <></>},
			{name: 'gameContext.tsx', description: <></>},
			{name: 'Highlighter.tsx', description: <></>},
			{name: 'lib.ts', description: <></>},
			{name: 'Line.tsx', description: <></>},
			{name: 'notation.ts', description: <></>},
			{name: 'NotationTrainer.tsx', description: <></>},
			{name: 'pieces.tsx', description: <></>},
			{name: 'positions.ts', description: <></>},
			{name: 'Square.tsx', description: <></>},
			{name: 'timer.ts', description: <></>}
		]
	},
	numberGuess: {
		name: 'Zahlenraten', folder: 'numberguess', files: [
			{name: 'NumberGuess.tsx', description: <></>},
			{name: 'useGameState.ts', description: <></>}
		]
	},
	passwordMaker: {
		name: 'Pass Maker', folder: 'pwdgen', files: [
			{name: 'Display.tsx', description: <></>},
			{name: 'FormRow.tsx', description: <></>},
			{name: 'GenConfig.ts', description: <></>},
			{name: 'Generator.tsx', description: <></>},
			{name: 'Panel.tsx', description: <></>},
			{name: 'PanelRow.tsx', description: <></>},
			{name: 'pwdgenContext.tsx', description: <></>},
			{name: 'worddb.ts', description: <></>}
		]
	},
	worktime: {
		name: 'Arbeitszeiterfassung', folder: 'worktime', files: [
			{name: 'Calendar.tsx', description: <></>},
			{name: 'Day.tsx', description: <></>},
			{name: 'lib.ts', description: <></>},
			{name: 'Worktime.tsx', description: <></>},
			{name: 'worktimeContext.tsx', description: <></>},
			{name: 'year2023.tsx', description: <></>},
		]
	},
}