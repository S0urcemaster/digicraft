import * as React from 'react'
import {createContext, Dispatch, ReactNode, RefObject, useContext, useEffect, useReducer, useRef, useState} from 'react'
import {Element} from './model'
import {EditorAction, EditorState, initialTreeState, reducer} from './editorState'
import {editorActions, focuses} from './constants'
import {useLocalStorage} from '../../lib/localStorageContext'
import {setNextLibraryId} from './lib'
import {hints} from './Hints'

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

export type EditorContext = {
	state: EditorState
	setValue: (value: string | number) => void
	inputFocused: boolean
	unfocus: () => void
	setKey: (key: {key: string|undefined}) => void
	key: {key: string|undefined}
	dispatch: Dispatch<EditorAction>
	saveToLibrary: () => void
	loadFromLibrary: (item: EditorItem) => void
	deleteFromLibrary: (item: EditorItem) => void
}

const EditorContext = createContext<EditorContext>({} as EditorContext)

export function EditorContextProvider(props: { children: ReactNode }) {

	const {svgEditor, setSvgEditor, exportSvg, saveCurrentSvg, loadCurrentSvg} = useLocalStorage()

	const [state, dispatch] = useReducer(reducer, initialTreeState, createInitialState)

	const load = useRef(2)

	const fileInputRef = useRef<HTMLInputElement>(null)

	const [key, setKey] = useState<{key: string|undefined}>({key: undefined})

	function createInitialState(treeState: EditorState) {
		return treeState
	}

	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown)
		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [])

	useEffect(() => {
	}, [state])

	useEffect(() => {
		if (load.current > 0) {
			const root = svgEditor.current
			load.current--
			dispatch({name: editorActions.setRoot, payload: {...root}})
		}
	}, [svgEditor])

	useEffect(() => {
		if (state.save > 0) {
			setSvgEditor({current: state.root!, library: svgEditor.library})
		}
	}, [state.save])

	useEffect(() => {
		if (state.exportFile) {
			exportSvg()
		}
	}, [state.exportFile])

	useEffect(() => {
		if (state.saveFile) {
			saveCurrentSvg()
		}
	}, [state.saveFile])

	useEffect(() => {
		if (state.loadFile) {
			fileInputRef.current!.click()
		}
	}, [state.loadFile])

	const handleKeyDown = (event: KeyboardEvent) => {
		console.log('logsntr', 'event.key', event.key)
		switch (event.key) {
			case 'ArrowUp':
				event.preventDefault()
				setKey({key: 'ArrowUp'})
				dispatch({name: editorActions.up})
				break
			case 'ArrowDown':
				event.preventDefault()
				setKey({key: 'ArrowDown'})
				dispatch({name: editorActions.down})
				break
			case 'ArrowLeft':
				dispatch({name: editorActions.left})
				break
			case 'ArrowRight':
				dispatch({name: editorActions.right})
				break
			case 'Enter':
				dispatch({name: editorActions.enter})
				break
			case 'Escape':
				dispatch({name: editorActions.escape})
				break
			case 'Backspace':
				event.preventDefault()
				break
			case 'Tab':
				break
			case '+':
				dispatch({name: editorActions.plus})
				break
			case '-':
				setKey({key: '-'})
				dispatch({name: editorActions.minus})
				break
			case '<':
				dispatch({name: editorActions.less})
				break
			// case '>':
			// 	dispatch({name: editorActions.letter})
			// 	break
			case 'a':
				dispatch({name: editorActions.a, payload: 'a'})
				break
			case 'A':
				dispatch({name: editorActions.a, payload: 'A'})
				break
			case 'c':
				dispatch({name: editorActions.c, payload: 'c'})
				break
			case 'C':
				dispatch({name: editorActions.c, payload: 'C'})
				break
			case 'e':
				dispatch({name: editorActions.e})
				break
			case 'f':
				dispatch({name: editorActions.f})
				break
			case 'g':
				dispatch({name: editorActions.g})
				break
			case 'l':
				setKey({key: 'l'})
				// keyx.current = 'l'
				dispatch({name: editorActions.l, payload: 'l'})
				break
			case 'L':
				dispatch({name: editorActions.l, payload: 'L'})
				break
			case 'm':
				dispatch({name: editorActions.m, payload: 'm'})
				break
			case 'M':
				dispatch({name: editorActions.m, payload: 'M'})
				break
			case 'n':
				dispatch({name: editorActions.n})
				break
			case 'p':
				dispatch({name: editorActions.p})
				break
			case 'r':
				dispatch({name: editorActions.r})
				break
			case 's':
				// querying the state does not give the current result for state.focus
				// thus it's done like this
				setKey({key: 's'})
				break
			case 't':
				dispatch({name: editorActions.t})
				break
			case 'v':
				dispatch({name: editorActions.v})
				break
			case 'x':
				dispatch({name: editorActions.x})
				break
			case 'y':
				dispatch({name: editorActions.y})
				break
			case 'z':
				dispatch({name: editorActions.z, payload: 'z'})
				break
		}
		event.stopImmediatePropagation()
	}

	function saveToLibrary() {
		setNextLibraryId(svgEditor.library, state.root!)
		svgEditor.library.push(state.root!)
		setSvgEditor({...svgEditor})
	}

	function loadFromLibrary(current: EditorItem) {
		const libItem = svgEditor.library.find(item => item.element.id === current.element.id)!
		const rootItem = svgEditor.library.find(item => item.element.id === state.root!.element.id)!
		const idx = svgEditor.library.indexOf(libItem)

		if(rootItem) {
		} else {
			svgEditor.library.splice(idx, 1, rootItem)
			saveToLibrary()
		}
		dispatch({name: editorActions.setRoot, payload: libItem})
		dispatch({name: editorActions.setHints, payload: hints.tree.svg})
		setSvgEditor({...svgEditor})
	}

	function deleteFromLibrary(current: EditorItem) {
		const libItem = svgEditor.library.find(item => item.element.id === current.element.id)!
		const idx = svgEditor.library.indexOf(libItem)
		svgEditor.library.splice(idx, 1)
		setSvgEditor({...svgEditor})
	}

	function setValue(value: string | number) {
		dispatch({name: editorActions.setValue, payload: value})
	}

	function loadSvg(file: File | null) {
		load.current++
		loadCurrentSvg(file)
	}

	function unfocus() {
		dispatch({name: editorActions.enter})
	}

	return (
		<EditorContext.Provider value={{
			state,
			setValue,
			inputFocused: state.inputFocused, unfocus,
			key, setKey,
			dispatch,
			saveToLibrary, loadFromLibrary, deleteFromLibrary
		}}>
			{props.children}
			<input type={'file'} style={{display: 'none'}}
					 onChange={event => loadSvg(event.target.files && event.target.files[0])} ref={fileInputRef}/>
		</EditorContext.Provider>
	)
}

export function useEditorContext() {
	return useContext(EditorContext)
}