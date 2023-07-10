import {createContext, ReactNode, useContext} from 'react'
import {globals} from './globals'

type DevContext = {
	local: boolean
}

const LocalContext = createContext<DevContext>({} as DevContext)

export function DevContextProvider(props: { children: ReactNode }) {
	// for DevBoxes
	return (
		<LocalContext.Provider value={{local: globals.dev}}>
			{props.children}
		</LocalContext.Provider>
	)
}

export function useLocalContext() {
	return useContext(LocalContext)
}