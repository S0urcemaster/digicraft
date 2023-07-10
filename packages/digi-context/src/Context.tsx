'use client'

import * as React from 'react'
import { createContext, ReactNode, useContext, useEffect, useReducer, useState } from 'react'
import { clog } from '@digicraft/lib'
import { DigiActionTypes, reducer } from './reducer'

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

export type Context = {
	state: Model
	getMainHeight: () => number
	setContentTitle: (title: string) => void
	setEnvironment: (environment: Environment) => void
	update: () => void
}

const DigiContext = createContext<Context>({} as Context)

export function DigiContextProvider({initialState, children}: { initialState: Model, children: ReactNode}) {

	const [state, dispatch] = useReducer(reducer, initialState)

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
		<DigiContext.Provider value={{
			state,
			setEnvironment,
			getMainHeight,
			update,
			setContentTitle,
		}}>
			{children}
		</DigiContext.Provider>
	)
}

export function useDigiContext() {
	return useContext(DigiContext)
}