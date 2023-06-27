import * as React from 'react'
import { createContext, ReactNode, useContext, useState } from 'react'

type Environment = {
	width: number
	height: number
	contrast: number
}

export type Model = {
	environment: Environment
}

export type Context = {
	setEnvironment: (environment: Environment) => void
} & Model

const DigiContext = createContext<Context>({} as Context)

export function DigiContextProvider({children}: { children: ReactNode}) {

	const [digicraft, setDigicraft] = useState<Model>({
		environment: {} as Environment,
	})

	const [environment] = useState<Environment>({
		width: 1920,
		height: 1080,
		contrast: 1,
	})

	function setEnvironment(environment: Environment) {
		setDigicraft({...digicraft, environment})
	}

	return (
		<DigiContext.Provider value={{environment, setEnvironment}}>
			{children}
		</DigiContext.Provider>
	)
}

export function useDigiContext() {
	return useContext(DigiContext)
}