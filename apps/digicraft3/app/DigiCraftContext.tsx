'use client'

import * as React from 'react'
import { createContext, ReactNode, useContext, useEffect, useReducer, useState } from 'react'
import { DigiActionTypes, digiCraftReducer } from './DigiCraftReducer'
import { Worktime } from './worktime/components/worktimeContext'
import cssVars from '../vars.module.scss'
import { Environment, Model } from '../core/model'

export type LocalStorage = {
	download: Function
	upload: Function
	worktime: Worktime
	setWorktime: (worktime: Worktime) => void
	downloadWorktime: (year: number) => void
	uploadWorktime: (file: any, year: number) => void
	storageLoaded: boolean
}

type StorageState = {
	worktime: Worktime
}

export function stringDownload(content: string, filename: string) {
	const downloadAnchorNode = document.createElement('a')
	downloadAnchorNode.setAttribute("href", content)
	downloadAnchorNode.setAttribute("download", `${filename}`)
	document.body.appendChild(downloadAnchorNode)
	downloadAnchorNode.click()
	downloadAnchorNode.remove()
}

const initialStorageState:StorageState = {
	worktime: {2023: {year: 2023, months: []}},
}

function loadStorage() {
	let storage = JSON.parse(localStorage.getItem('digicraft')!)
	if(!storage) {
		saveStorage(initialStorageState)
		storage = JSON.parse(localStorage.getItem('digicraft')!)
	} else {
		if(!storage.worktime) {
			storage.worktime = initialStorageState.worktime
		} else {
			if('year' in storage.worktime) {
				storage.worktime = initialStorageState.worktime
			}
		}
		saveStorage(storage)
	}
	return storage
}

function saveStorage(storage: StorageState) {
	localStorage.setItem('digicraft', JSON.stringify(storage))
}

export type DigiCraftContext = {
	state: Model

	downloadStorage: Function
	uploadStorage: Function
	storageLoaded: boolean
	worktime: Worktime
	setWorktime: (worktime: Worktime) => void
	downloadWorktime: (year: number) => void
	uploadWorktime: (file: any, year: number) => void

	getMainHeight: () => number
	setContentTitle: (title: string | undefined) => void
	setEnvironment: (environment: Environment) => void
	update: () => void

	contextLoaded: boolean
	setContextLoaded: (contextLoaded: boolean) => void
}

const DigiCraftContext = createContext<DigiCraftContext>({} as DigiCraftContext)

export function DigiCraftContextProvider({initialState, children}: { initialState: Model, children: ReactNode}) {

	const [state, dispatch] = useReducer(digiCraftReducer, initialState)

	const [storage, setStorage] = useState<StorageState|undefined>()
	const [storageLoaded, setStorageLoaded] = useState(false)

	const [worktime, setWorktime] = useState<Worktime>(initialStorageState.worktime)

	const [contextLoaded, setContextLoaded] = useState(false)

	function updateState(storage: any) {
		setWorktime(storage.worktime)
	}

	useEffect(() => {

		const storage = loadStorage()

		updateState(storage)

		setStorage(storage)

		setStorageLoaded(true)

		dispatch({type: DigiActionTypes.environment, payload: {environment: {...state.environment,
					headerHeight: Number.parseInt(cssVars.headerHeight),
					footerHeight: Number.parseInt(cssVars.footerHeight)}
		}})
		// dispatch({type: DigiActionTypes.contextLoaded, payload: {contextLoaded: true}})
	}, [])

	useEffect(() => {
		if(storage) {
			if(Object.keys(storage).length === 0) return // don't overwrite with init value
			saveStorage(storage)
		}
	}, [storage])

	useEffect(() => {
		if(storage) {
			setStorage({...storage, worktime: worktime})
		}
	}, [worktime])

	useEffect(() => {
		// clog("Context[state]", state)
	}, [state])


	function downloadStorage() {
		const dataStr = "data:text/jsoncharset=utf-8," + encodeURIComponent(JSON.stringify(localStorage))
		const downloadAnchorNode = document.createElement('a')
		downloadAnchorNode.setAttribute("href", dataStr)
		downloadAnchorNode.setAttribute("download", "digi-craft.json")
		document.body.appendChild(downloadAnchorNode)
		downloadAnchorNode.click()
		downloadAnchorNode.remove()
	}

	function downloadWorktime(year: number) {
		const storage = JSON.parse(localStorage.getItem('digicraft')!)
		const dataStr = "data:text/jsoncharset=utf-8," + encodeURIComponent(JSON.stringify(storage.worktime[year]))
		stringDownload(dataStr, `worktime-${year}.json`)
	}

	function uploadWorktime(file: any, year: number) {
		const reader = new FileReader()
		reader.readAsText(file)
		reader.onload = function() {
			const json = JSON.parse(reader.result as string)
			setWorktime({...worktime, [year]: json})
		}
	}

	function uploadStorage(file: any) {
		const reader = new FileReader()
		reader.readAsText(file)
		reader.onload = function() {
			const json = JSON.parse(reader.result as string)
			const dc = JSON.parse(json.digicraft)
			updateState(dc)
			setStorage(dc)
		}
	}

	function setContentTitle(title: string | undefined) {
		dispatch({type: DigiActionTypes.contentTitle, payload: {contentTitle: title}})
	}

	function setEnvironment(environment: Environment) {
		dispatch({type: DigiActionTypes.environment, payload: {environment: environment}})
	}

	function getMainHeight() {
		return state.environment.clientHeight - state.environment.footerHeight
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
			downloadStorage, downloadWorktime, setWorktime, storageLoaded, uploadStorage, uploadWorktime, worktime,
			contextLoaded, setContextLoaded
		}}>
			{children}
		</DigiCraftContext.Provider>
	)
}

export function useDigiCraftContext() {
	return useContext(DigiCraftContext)
}