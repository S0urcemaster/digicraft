import {createContext, ReactNode, useContext, useEffect, useState} from 'react'
import {Worktime} from './worktime/components/worktimeContext'

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

const LocalStorageContext = createContext<LocalStorage>({} as LocalStorage)

export function LocalStorageProvider(props: {children: ReactNode}) {

	const [storage, setStorage] = useState<StorageState|undefined>()
	const [loaded, setLoaded] = useState(false)

	const [worktime, setWorktime] = useState<Worktime>(initialStorageState.worktime)

	function updateState(storage: any) {
		setWorktime(storage.worktime)
	}

	useEffect(() => {
		const storage = loadStorage()
		updateState(storage)
		setStorage(storage)
		setLoaded(true)
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

	function download() {
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

	function upload(file: any) {
		const reader = new FileReader()
		reader.readAsText(file)
		reader.onload = function() {
			const json = JSON.parse(reader.result as string)
			const dc = JSON.parse(json.digicraft)
			updateState(dc)
			setStorage(dc)
		}
	}

	return (
		<LocalStorageContext.Provider value={{
			download, upload,
			worktime, setWorktime, downloadWorktime, uploadWorktime,
			storageLoaded: loaded,
		}}>
			{props.children}
		</LocalStorageContext.Provider>
	)
}

export function useLocalStorage() {
	return useContext(LocalStorageContext)
}
