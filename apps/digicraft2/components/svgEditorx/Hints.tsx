import * as React from 'react'
import {arrowSymbols} from '../../db/htmlSymbols'
import {useEditorContext} from './editorContext'
import {colors} from './constants'


export type Hint = {
	key: string
	description: string
	color: string
}

const buttonColors = {
	yellow: '#ffebb4',
	rose: '#ffc7c7',
	blue: '#b9bfff',
	green: '#e8ffb3',
	orange: '#ffc99c',
	purple: '#c898ff',
}

const undoHints: Hint[] = [
	{key: '<', description: 'undo', color: buttonColors.orange},
	// {key: '>', description: 'redo', color: colors.blue},
]

const keys: { [key: string]: string } = {
	left: arrowSymbols.left.text,
	right: arrowSymbols.right.text,
}

const colorGroups: { [key: string]: { [key: string]: string } } = {
	blue: {
		right: keys.right,
		color: buttonColors.blue,
	},
}

export const navigationHints: Hint[] = [
	{key: arrowSymbols.right.text, description: 'select form', color: buttonColors.blue},
	{key: arrowSymbols.up.text, description: 'up list', color: buttonColors.blue},
	{key: arrowSymbols.down.text, description: 'down list', color: buttonColors.blue},
]

const moveHints: Hint[] = [
	{key: 't', description: 'translate', color: buttonColors.rose},
]

export const formHints: Hint[] = [
	{key: 'enter', description: 'edit field', color: buttonColors.blue},
	{key: arrowSymbols.left.text, description: 'select tree', color: buttonColors.blue},
	{key: arrowSymbols.up.text, description: 'up list', color: buttonColors.blue},
	{key: arrowSymbols.down.text, description: 'down list', color: buttonColors.blue},
]

export const translateHints: Hint[] = [
	{key: arrowSymbols.left.text, description: '-x', color: buttonColors.orange},
	{key: arrowSymbols.right.text, description: '+x', color: buttonColors.orange},
	{key: arrowSymbols.up.text, description: '-y', color: buttonColors.orange},
	{key: arrowSymbols.down.text, description: '+y', color: buttonColors.orange},
	{key: 'enter', description: 'done', color: buttonColors.orange},
]

export const copyPasteHints: Hint[] = [
	{key: 'x', description: 'cut', color: buttonColors.green},
	{key: 'c', description: 'copy', color: buttonColors.green},
	{key: 'v', description: 'paste', color: buttonColors.green},
]

export const fileHints: Hint[] = [
	{key: 'n', description: 'new document', color: buttonColors.green},
	{key: 'x', description: 'export svg', color: buttonColors.green},
	{key: 's', description: 'save file', color: buttonColors.green},
	{key: 'l', description: 'load file', color: buttonColors.green},
	// {key: 'l', description: 'load', color: colors.green},
]

export const hints: Record<string, Record<string, Hint[]>> = {
	tree: {
		add: [
			{key: 'c', description: '<circle>', color: buttonColors.yellow},
			{key: 'e', description: '<ellipse>', color: buttonColors.yellow},
			{key: 'g', description: '<g>', color: buttonColors.yellow},
			{key: 'l', description: '<line>', color: buttonColors.yellow},
			{key: 'n', description: '<polygon>', color: buttonColors.yellow},
			{key: 'p', description: '<path>', color: buttonColors.yellow},
			{key: 'r', description: '<rect>', color: buttonColors.yellow},
			{key: 'y', description: '<polyline>', color: buttonColors.yellow},
			{key: 'esc', description: 'cancel', color: buttonColors.yellow},
		],
		svg: [
			{key: '+', description: 'add element', color: buttonColors.rose},
			...navigationHints, ...undoHints,
			{key: 'f', description: 'file', color: buttonColors.purple},
		],
		group: [
			{key: 'r', description: 'rotate', color: buttonColors.rose},
			{key: 's', description: 'scale', color: buttonColors.rose},
			{key: 't', description: 'translate', color: buttonColors.rose},
			{key: '+', description: 'add element', color: buttonColors.rose},
			{key: '-', description: 'remove element', color: buttonColors.rose},
			...navigationHints, ...undoHints,
		],
		rect: [
			{key: '-', description: 'remove element', color: buttonColors.rose},
			...moveHints, ...copyPasteHints, ...undoHints, ...navigationHints,
		],
		line: [
			{key: '-', description: 'remove element', color: buttonColors.rose},
			...moveHints, ...copyPasteHints, ...undoHints, ...navigationHints,
		],
		circle: [
			{key: '-', description: 'remove element', color: buttonColors.rose},
			...moveHints, ...copyPasteHints, ...undoHints, ...navigationHints,
		],
		ellipse: [
			{key: '-', description: 'remove element', color: buttonColors.rose},
			...moveHints, ...copyPasteHints, ...undoHints, ...navigationHints,
		],
		polyline: [
			{key: '-', description: 'remove element', color: buttonColors.rose},
			...moveHints, ...copyPasteHints, ...undoHints, ...navigationHints,
		],
		polygon: [
			{key: '-', description: 'remove element', color: buttonColors.rose},
			...moveHints, ...copyPasteHints, ...undoHints, ...navigationHints,
		],
		path: [
			{key: '-', description: 'remove element', color: buttonColors.rose},
			...moveHints, ...copyPasteHints, ...undoHints, ...navigationHints,
		],
		translate: translateHints,
		file: fileHints,
	},
	form: {
		standard: formHints,
		coord: [
			{key: 't', description: 'translate xy', color: buttonColors.rose}, ...formHints,
		],
		translate: translateHints,
		polyline: [
			{key: '+', description: 'add point', color: buttonColors.orange},
			{key: '-', description: 'remove point', color: buttonColors.orange},
			{key: 't', description: 'translate xy', color: buttonColors.rose},
			...formHints,
		],
		polygon: [
			{key: '+', description: 'add point', color: buttonColors.orange},
			{key: '-', description: 'remove point', color: buttonColors.orange},
			{key: 't', description: 'translate xy', color: buttonColors.rose},
			...formHints,
		],
		path: [
			{key: 'a/A', description: 'add arc curve', color: buttonColors.orange},
			{key: 'c/C', description: 'add cubic bézier', color: buttonColors.orange},
			{key: 'm/M', description: 'add move to', color: buttonColors.orange},
			{key: 'l/L', description: 'add line to', color: buttonColors.orange},
			{key: 'z', description: 'add close path', color: buttonColors.orange},
			{key: '-', description: 'remove command', color: buttonColors.orange},
			{key: 't', description: 'translate xy', color: buttonColors.rose},
			...formHints,
		],
	},
	library: {
		current: [
			{key: 's', description: 'save', color: buttonColors.rose},
			{key: 'n', description: 'new svg', color: buttonColors.rose},
			{key: arrowSymbols.down.text, description: 'down list', color: buttonColors.blue},
		],
		list: [
			// {key: 'w', description: 'swap with current', color: buttonColors.rose},
			{key: 'l', description: 'load', color: buttonColors.rose},
			{key: 'x', description: 'export', color: buttonColors.rose},
			{key: 'd', description: 'delete svg', color: buttonColors.rose},
			{key: arrowSymbols.up.text, description: 'up list', color: buttonColors.blue},
			{key: arrowSymbols.down.text, description: 'down list', color: buttonColors.blue},
		]
	}
}

export default function Hints() {

	const {state} = useEditorContext()

	return (
		<div style={{display: 'flex', margin: '0 0px 0px 0px', padding: '0 6px 6px 6px', flexWrap: 'wrap', flexShrink: 1,
			fontSize: 12, background: colors.formBg}}>
			{state.hints.map((hint, idx) => (
				<div style={{marginRight: 10}} key={idx}>
					<kbd style={{marginRight: 3, background: hint.color}}>{hint.key}</kbd>{hint.description}
				</div>
			))}
		</div>
	)
}
