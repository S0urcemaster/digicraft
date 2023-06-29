import * as React from 'react'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { clog } from '@digicraft/lib'

type Environment = {
	mainFont: string
	monoFont: string
	specialFont: string
	clientWidth: number
	clientHeight: number
	headerHeight: number
	contrast: number // 0- dark theme, 1- light theme
}

export type Model = {
	contentTitle: string
	environment: Environment
}

export type Context = {
	app: Model
	getMainHeight: () => number
	setContentTitle: (title: string) => void
	setEnvironment: (environment: Environment) => void
	update: () => void
}

const DigiContext = createContext<Context>({} as Context)

export function DigiContextProvider({children}: { children: ReactNode}) {

	const [app, setApp] = useState<Model>({
		contentTitle: 'Digi Craft',
		environment: {
			clientWidth: 1921,
			clientHeight: 1080,
			headerHeight: 30,
			contrast: 0,
			mainFont: 'Sans-serif',
			monoFont: 'Monospace',
			specialFont: 'Fantasy',
		},
	})

	useEffect(() => {
		clog("app", app)
	}, [app])

	function setContentTitle(title: string) {

	}

	function setEnvironment(environment: Environment) {
		clog("setEnvironment", environment)
		setApp({...app, environment: environment})
	}

	function getMainHeight() {
		return app.environment.clientHeight - app.environment.headerHeight
	}

	function update() {

	}

	return (
		<DigiContext.Provider value={{app, setEnvironment, getMainHeight, update, setContentTitle}}>
			{children}
		</DigiContext.Provider>
	)
}

export function useDigiContext() {
	return useContext(DigiContext)
}