import {Request, Response} from 'express'
import * as fs from 'fs'

const sourceBase = '/var/www/digi-craft2/components/'
const localBase = 'C:/Users/sebas/IdeaProjects/digi-craft2/components/'

const sourceFiles: Record<string, Record<string, string>> = {
	radio: {
		'Radio.tsx': 'radio/Radio.tsx',
		'Button.tsx': 'radio/Button.tsx',
		'AudioControl.tsx': 'radio/AudioControl.tsx',
		'Stations.tsx': 'radio/Stations.tsx',
		'Display.tsx': 'radio/Display.tsx',
		'Volume.tsx': 'radio/Volume.tsx',
		'Casing.tsx': 'radio/Casing.tsx',
	},
	achievements: {
		'Achievements.tsx': 'achievements/Achievements.tsx',
		'context.tsx': 'achievements/context.tsx',
		'DisplayRow.tsx': 'achievements/DisplayRow.tsx',
		'InputRow.tsx': 'achievements/InputRow.tsx',
	},
	decider: {
		'Decider.tsx': 'decider/Decider.tsx',
		'deciderContext.tsx': 'decider/deciderContext.tsx',
		'Item.tsx': 'decider/Item.tsx',
		'List.tsx': 'decider/List.tsx',
		'Lists.tsx': 'decider/Lists.tsx',
		'timer.ts': 'decider/timer.ts',
	},
	notationTrainer: {
		'Board.tsx': 'notationTrainer/Board.tsx',
		'Game.tsx': 'notationTrainer/Game.tsx',
		'gameContext.tsx': 'notationTrainer/gameContext.tsx',
		'Highlighter.tsx': 'notationTrainer/Highlighter.tsx',
		'lib.ts': 'notationTrainer/lib.ts',
		'Line.tsx': 'notationTrainer/Line.tsx',
		'notation.ts': 'notationTrainer/notation.ts',
		'NotationTrainer.tsx': 'notationTrainer/NotationTrainer.tsx',
		'pieces.tsx': 'notationTrainer/pieces.tsx',
		'Square.tsx': 'notationTrainer/Square.tsx',
		'positions.ts': 'notationTrainer/positions.ts',
		'timer.ts': 'notationTrainer/timer.ts',
	},
	numberguess: {
		'NumberGuess.tsx': 'numberguess/NumberGuess.tsx',
		'useGameState.ts': 'numberguess/useGameState.ts',
	},
	pwdgen: {
		'Display.tsx': 'pwdgen/Display.tsx',
		'FormRow.tsx': 'pwdgen/FormRow.tsx',
		'GenConfig.ts': 'pwdgen/GenConfig.ts',
		'Generator.tsx': 'pwdgen/Generator.tsx',
		'Panel.tsx': 'pwdgen/Panel.tsx',
		'PanelRow.tsx': 'pwdgen/PanelRow.tsx',
		'pwdgenContext.tsx': 'pwdgen/pwdgenContext.tsx',
		'worddb.ts': 'pwdgen/worddb.ts',
	},
	worktime: {
		'Calendar.tsx': 'worktime/Calendar.tsx',
		'Day.tsx': 'worktime/Day.tsx',
		'lib.ts': 'worktime/lib.ts',
		'Worktime.tsx': 'worktime/Worktime.tsx',
		'worktimeContext.tsx': 'worktime/worktimeContext.tsx',
		'year2023.tsx': 'worktime/year2023.tsx',
	}
}

export async function sourceFile(req: Request, res: Response) {
	const app = req.params.app
	const file = req.params.file

	const filename = process.env.DEV ? localBase +sourceFiles[app][file] : sourceBase +sourceFiles[app][file]

	const json = fs.readFileSync(filename, 'utf-8')

	return res.json(json)
}