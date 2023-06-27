import * as React from 'react'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

type Environment = {
	font: string
	width: number
	height: number
	contrast: number
}

export type Model = {
	environment: Environment
}

export type Context = {
	app: Model
	setEnvironment: (environment: Environment) => void
}

const DigiContext = createContext<Context>({} as Context)

export function DigiContextProvider({children}: { children: ReactNode}) {

	const [app, setApp] = useState<Model>({
		environment: {
			width: 1920,
			height: 1080,
			contrast: 1,
			font: 'Arial',
		},
	})

	function setEnvironment(environment: Environment) {
		setApp({...app, environment})
	}

	useEffect(() => {
		console.log("logsntr", "context digicraft", app)
	}, [app])

	return (
		<DigiContext.Provider value={{app, setEnvironment}}>
			{children}
		</DigiContext.Provider>
	)
}

export function useDigiContext() {
	return useContext(DigiContext)
}