import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import * as React from 'react'

export type Prompt = {
	name: string
	model: string
	system: string
	user: string
	assistant: string
}

export const emptyPrompt: Prompt = {
	assistant: '', model: '', name: '', system: '', user: ''
}

const emptyPrompts: Prompt[] = Array.from({length: 13}, (_, ix) => {
	return {...emptyPrompt}
})

export type TextBud = {
	prompts: Prompt[]
	saved: Prompt[]
}

export type TextBudContext = {
	textBud: TextBud
	clipboard: string
	tabNo: number
	setTabNo: (n: number) => void
	currentPrompt: () => Prompt
	setCurrentPrompt: (prompt: Prompt) => void
}

const initialTextBudContext: TextBudContext = {
	clipboard: '',
	textBud: {
		prompts: emptyPrompts,
		saved: []
	},
	tabNo: 0,
	setTabNo: () => {},
	currentPrompt: () => ({} as Prompt),
	setCurrentPrompt: () => {}
}

const dummyTextBudContext: TextBudContext = {...initialTextBudContext,
	clipboard: '',
	textBud: {
		prompts: [
			{name: 'P1', model: '', system: 'system1', user: 'user1', assistant: 'assistant1'},
			{name: 'P2', model: '', system: 'system2', user: 'user2', assistant: 'assistant2'},
			{name: 'P3', model: '', system: 'system3', user: 'user3', assistant: 'assistant3'},
		],
		saved: [
			{name: 'L1', model: '', system: 'system1', user: 'user1', assistant: 'assistant1'},
			{name: 'L2', model: '', system: 'system2', user: 'user2', assistant: 'assistant2'},
			{name: 'L3', model: '', system: 'system3', user: 'user3', assistant: 'assistant3'},
		]
	},
	tabNo: 0,
	setTabNo: () => {},
	currentPrompt: () => ({} as Prompt),
	setCurrentPrompt: () => {}
}

const TextBudContext = createContext<TextBudContext>({} as TextBudContext)

export function TextBudContextProvider({children}: { children: ReactNode}) {

	const [textBud, setTextBud] = useState(initialTextBudContext.textBud)
	const [clipboard, setClipboard] = useState('')
	const [tabNo, setTabNo] = useState(0)

	useEffect(() => {
		// setCurrentPrompt(textBud.prompts[tabNo])
		console.log("logsntr", "tabNo", tabNo)
	}, [tabNo])

	function currentPrompt(): Prompt {
		return textBud.prompts[tabNo]
	}

	function setCurrentPrompt(prompt: Prompt) {
		textBud.prompts.splice(tabNo, 1, prompt)
		setTextBud({...textBud})
	}

	return (
		<TextBudContext.Provider value={{
			textBud, clipboard, tabNo, setTabNo, currentPrompt, setCurrentPrompt
		}}>
			{children}
		</TextBudContext.Provider>
	)
}

export function useTextBudContext() {
	return useContext(TextBudContext)
}