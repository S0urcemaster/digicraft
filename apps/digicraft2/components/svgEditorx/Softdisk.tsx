import * as React from 'react'
import {EditorItem, useEditorContext} from './editorContext'
import {useLocalStorage} from '../../lib/localStorageContext'
import {SVG} from './View'
import {CSSProperties, useEffect, useState} from 'react'
import {editorActions, focuses} from './constants'
import {hints} from './Hints'

function Current({current, active}: {current: EditorItem, active: boolean}) {
	return (
		<div style={{outline: active ? '1px solid black' : 'none', height: 60, background: 'white', display: 'flex', padding: 5}}>
			<SVG root={current} style={{margin: '0 5px 0 0', width: 50, height: 50}} viewBox={'0 0 400 400'} />
			<div>
				Current: {current.element.id}
			</div>
		</div>
	)
}

function ListItem({item, current}: {item: EditorItem, current: EditorItem}) {
	return (
		<div style={{display: 'flex', height: 30, outline: current === item ? '1px solid black' : 'none'}}>
			<SVG root={item} style={{margin: '0 5px 0 0'}} viewBox={'0 0 400 400'} />
			<div>{item.element.id}</div>
		</div>
	)
}

function List({list, current}: {list: EditorItem[], current: EditorItem}) {
	console.log("logsntr", "list", list, list.indexOf(current))
	return (
		<div style={{padding: 3}}>
			{list.map((item, idx) => (
				<ListItem item={item} current={current} key={idx} />
			))}
		</div>
	)
}

export default function Softdisk({style}: {style: CSSProperties}) {

	const {state, key, setKey, dispatch, saveToLibrary, loadFromLibrary, deleteFromLibrary} = useEditorContext()
	const {svgEditor} = useLocalStorage()

	const [root, setRoot] = useState<EditorItem>(svgEditor.current)
	const [current, setCurrent] = useState<EditorItem|undefined>()
	const [currentId, setCurrentId] = useState<number|undefined>()

	useEffect(() => {
		if(state.root) {
			setRoot(state.root)
		}
	}, [])

	useEffect(() => {
		if(currentId !== undefined) {
			setCurrent(svgEditor.library[currentId])
			dispatch({name: editorActions.setHints, payload: hints.library.list})
		} else {
			setCurrent(undefined)
			dispatch({name: editorActions.setHints, payload: hints.library.current})
		}
	}, [currentId])

	useEffect(() => {
		state.focus === focuses.library && dispatch({name: editorActions.setHints, payload: hints.library.current})
	}, [state.focus])

	useEffect(() => {
		console.log("logsntr", "keyPressed", key)
		if(state.focus !== focuses.library) return
		if(!key || key && !key!.key) return
		if(current === undefined) setCurrent(state.root)

		switch(key!.key) {
			case 'ArrowUp':
				if(currentId !== undefined && currentId >0) {
					setCurrentId(prev => --prev!)
				} else if(currentId === undefined) {
					setCurrentId(svgEditor.library.length -1)
				}
				else {
					setCurrentId(undefined)
				}
				break
			case 'ArrowDown':
				if(currentId === undefined && svgEditor.library.length >0) {
					setCurrentId(0)
				}
				else if(currentId !== undefined && currentId < svgEditor.library.length -1) {
					setCurrentId(prev => ++prev!)
				}
				else {
					setCurrentId(undefined)
				}
				break
			case '-':
				deleteFromLibrary(current!)
				setCurrentId(undefined)
				break
			case 'l':
				loadFromLibrary(current!)
				break
			case 's':
				saveToLibrary()
				break
		}
		setKey({key: undefined})
	}, [key])

	useEffect(() => {
	}, [current])

	return (
		<div style={{margin: 5, fontSize: 12, background: 'white', ...style}}>
			<Current current={root} active={!current} />
			<List list={svgEditor.library} current={current!} />
		</div>
	)
}