import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import * as React from 'react'

export type Prompt = {
	name: string
	model: string
	system: string
	user: string
	assistant: string
}

export type TextBud = {
	prompts: Prompt[]
	saved: Prompt[]
}

export type TextBudContext = {
	textBud: TextBud
	clipboard: string
	tabNo: number
	currentPrompt: () => Prompt
	setCurrentPrompt: (prompt: Prompt) => void
}

const initialTextBudContext: TextBudContext = {
	clipboard: '',
	textBud: {
		prompts: [{name: '', model: '', system: '', user: '', assistant: ''}],
		saved: []
	},
	tabNo: 0,
	currentPrompt: () => ({} as Prompt),
	setCurrentPrompt: () => {}
}

const TextBudContext = createContext<TextBudContext>({} as TextBudContext)

export function TextBudContextProvider({children}: { children: ReactNode}) {

	const [textBud, setTextBud] = useState(initialTextBudContext.textBud)
	const [clipboard, setClipboard] = useState('')
	const [tabNo, setTabNo] = useState(0)

	function currentPrompt(): Prompt {
		return textBud.prompts[tabNo]
	}

	function setCurrentPrompt(prompt: Prompt) {
		textBud.prompts.splice(tabNo, 1, prompt)
		setTextBud({...textBud})
	}

	return (
		<TextBudContext.Provider value={{
			textBud, clipboard, tabNo, currentPrompt, setCurrentPrompt
		}}>
			{children}
		</TextBudContext.Provider>
	)
}

export function useTextBudContext() {
	return useContext(TextBudContext)
}