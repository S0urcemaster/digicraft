'use client'

import * as React from 'react'
import { createContext, ReactNode, useContext, useEffect, useReducer, useState } from 'react'
import { clog } from '@digicraft/lib'
import { DigiActionTypes, digiCraftReducer } from './DigiCraftReducer'

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
	cssVars: {readonly [key: string]: string}
}

export type DigiCraftContext = {
	state: Model
	getMainHeight: () => number
	setContentTitle: (title: string) => void
	setEnvironment: (environment: Environment) => void
	update: () => void
}

const DigiCraftContext = createContext<DigiCraftContext>({} as DigiCraftContext)

export function DigiCraftContextProvider({initialState, children}: { initialState: Model, children: ReactNode}) {

	const [state, dispatch] = useReducer(digiCraftReducer, initialState)

	useEffect(() => {
		clog("Context[]")
	}, [])

	useEffect(() => {
		clog("Context[state]", state)
	}, [state])

	function setContentTitle(title: string) {
		dispatch({type: DigiActionTypes.contentTitle, payload: {contentTitle: title}})
	}

	function setEnvironment(environment: Environment) {
		dispatch({type: DigiActionTypes.environment, payload: {environment: {...state.environment, environment}}})
	}

	function getMainHeight() {
		return state.environment.clientHeight - state.environment.headerHeight
	}

	function update() {

	}

	return (
		<DigiCraftContext.Provider value={{
			state,
			setEnvironment,
			getMainHeight,
			update,
			setContentTitle,
		}}>
			{children}
		</DigiCraftContext.Provider>
	)
}

export function useDigiCraftContext() {
	return useContext(DigiCraftContext)
}