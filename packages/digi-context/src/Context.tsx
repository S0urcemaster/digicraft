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
	environment: Environment
}

export type Context = {
	app: Model
	setEnvironment: (environment: Environment) => void
	getMainHeight: () => number
	update: () => void
}

const DigiContext = createContext<Context>({} as Context)

export function DigiContextProvider({children}: { children: ReactNode}) {

	const [app, setApp] = useState<Model>({
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
		function resize() {
			setApp({...app, environment: {...app.environment, clientWidth: window.innerWidth, clientHeight: window.innerHeight}})
		}
		if(app) {
			window.addEventListener('resize', resize)
		}
		return () => window.removeEventListener('resize', resize)
	}, [])

	useEffect(() => {
		const now = new Date()
		clog("app", app)
	}, [app])

	function setEnvironment(environment: Environment) {
		setApp({...app, environment})
	}

	function getMainHeight() {
		return app.environment.clientHeight - app.environment.headerHeight
	}

	function update() {

	}

	return (
		<DigiContext.Provider value={{app, setEnvironment, getMainHeight, update}}>
			{children}
		</DigiContext.Provider>
	)
}

export function useDigiContext() {
	return useContext(DigiContext)
}