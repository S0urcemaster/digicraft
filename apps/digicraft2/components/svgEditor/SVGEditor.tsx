import * as React from 'react'
import {useEffect, useState} from 'react'
import Tree from './Tree'
import Form from './Form'
import View from './View'
import Library from './Library'
import Focus from './Focus'
import Grid from './svg/Grid'
import {brightnessToColor} from './lib'


export type SVGEditor = {
	current: EditorItem
	library: EditorItem[]
}

export type EditorItem = {
	element: Element
	expanded: boolean
	parent: EditorItem | undefined
	children: EditorItem[] | undefined
}

export const appStates = {
	tree: 'tree',
	form: 'form',
	View: 'view',
	library: 'library',
	treeSelect: 'treeSelect',
}

export default function SVGEditor() {

	const [appState, setAppState] = useState(appStates.tree)
	const [keysPressed, setKeysPressed] = useState<string[]>([])
	const [mouseMode, setMouseMode] = useState(true)

	const [brightness, setBrightness] = useState(255)

	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown)
		document.addEventListener('keyup', handleKeyUp)
		return () => {
			document.removeEventListener('keydown', handleKeyDown)
			document.removeEventListener('keyup', handleKeyUp)
		}
	}, [])

	const handleKeyDown = (event: KeyboardEvent) => {
		setKeysPressed([...keysPressed, event.key])
		event.stopImmediatePropagation()
	}

	const handleKeyUp = (event: KeyboardEvent) => {
		setKeysPressed([...keysPressed, event.key])
		event.stopImmediatePropagation()
	}

	return (
		<div style={{position: 'relative', height: 701, width: 1576, margin: 'auto', background: '#343742',
			fontSize: 11, fontWeight: 'lighter', padding: '0 5px 0 5px', boxSizing: 'content-box',
		}}>
			<div style={{position: 'absolute', display: 'grid', gridTemplateColumns: '2fr 2fr 1fr 1fr', padding: 5,
				left: 0, height: 691, width: 701, background: '#343742', color: brightnessToColor(brightness), opacity: 0.8}}>
				<div>
					<div style={{fontSize: 13}}>
						Coder's SVG Editor
					</div>
				</div>
				<div>
					2
				</div>
				<div>
				</div>
				<div style={{textAlign: 'right'}}>
					Cursor (456/153)<br />
					<br />
					M1 (456/153)<br />
					M2 (456/153)<br />
					M3 (456/153)<br />
				</div>
			</div>
			<div style={{position: 'absolute', height: 701, width: 701, background: '#343742', top: 0, right: 175}}>
				<Grid brightness={brightness} />
			</div>
			<div style={{position: 'absolute', height: 701, width: 175, background: '#343742', top: 0, right: 0}}>
				<div style={{position: 'absolute', height: 175, width: 175, background: '#343742', top: 0, right: 0}} />
				<div style={{position: 'absolute', height: 175, width: 175, background: '#444556', top: 175, right: 0}} />
				<div style={{position: 'absolute', height: 175, width: 175, background: '#9da7c9', top: 350, right: 0}} />
				<div style={{position: 'absolute', height: 175, width: 175, background: '#c5d2fa', top: 525, right: 0}} />
			</div>
		</div>
		// <div style={{position: 'fixed', left: 0, top: 0, bottom: '100', right: '100', background: '#423934'}}>
		// <div>
		// 	<div style={{
		// 		display: 'grid', gridTemplateColumns: '300px 200px auto 300px',
		// 		background: '#423934', height: 600,
		// 	}}>
		// 		<div>
		// 			<Focus />
		// 			<Tree />
		// 		</div>
		// 		<Form />
		// 		<View />
		// 		<Library />
		// 	</div>
		// </div>
	)
}