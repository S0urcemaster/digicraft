import {EditorAction, EditorState} from '../svgEditorx/editorState'
import {createContext, Dispatch, ReactNode} from 'react'
import {useLocalStorage} from '../../lib/localStorageContext'
import {EditorItem} from '../svgEditorx/editorContext'

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
}