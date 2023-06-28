import * as React from 'react'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

type Environment = {
	font: string
	width: number
	height: number
	contrast: number // 0- dark theme, 1- light theme
}

export type Model = {
	environment: Environment
}

export type Context = {
	app: Model
	setEnvironment: (environment: Environment) => void
	update: () => void
}

const DigiContext = createContext<Context>({} as Context)

export function DigiContextProvider({children}: { children: ReactNode}) {

	const [app, setApp] = useState<Model>({
		environment: {
			width: 1921,
			height: 1080,
			contrast: 0,
			font: 'Arial',
		},
	})

	useEffect(() => {
		function resize() {
			console.log("logsntr", "resize")
			setApp({...app, environment: {...app.environment, width: window.innerWidth, height: window.innerHeight}})
		}
		if(app) {
			window.addEventListener('resize', resize)

		}
		return () => window.removeEventListener('resize', resize)
	}, [])

	useEffect(() => {
		console.log("logsntr", "app", app)
	}, [app])

	function setEnvironment(environment: Environment) {
		setApp({...app, environment})
	}

	function update() {

	}

	return (
		<DigiContext.Provider value={{app, setEnvironment, update}}>
			{children}
		</DigiContext.Provider>
	)
}

export function useDigiContext() {
	return useContext(DigiContext)
}