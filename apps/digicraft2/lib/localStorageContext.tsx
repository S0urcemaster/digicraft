import {createContext, ReactNode, useContext, useEffect, useState} from 'react'
import {Achievement} from '../components/achievements/context'
import {globals} from './globals'
import {
	EmptyNotationTrainer,
	NotationTrainer,
} from '../components/notationTrainer/NotationTrainer'
import {emptyResume, Resume} from '../components/resumeGenerator/types'
import {Decider, demoLists, Item, List} from '../components/decider/deciderContext'
import {Worktime} from '../components/worktime/worktimeContext'
import {demoWorktime} from '../db/demoWorktime'
import {EditorItem, SVGEditor} from '../components/svgEditorx/editorContext'
import {rootInitial} from '../components/svgEditorx/editorState'
import {removeParents, restoreParents} from './tree'
import {stringDownload} from './localStorageLib'

export type LocalStorage = {
	showExternalImages: boolean
	setShowExternalImages: Function
	achievements: Achievement[]
	setAchievements: Function
	brightness: string
	setBrightness: Function
	download: Function
	upload: Function
	notationTrainer: NotationTrainer
	setNotationTrainer: (trainer: NotationTrainer) => void
	resume: Resume
	setResume: (resume: Resume) => void
	decider: Decider
	setDecider: (decider: Decider) => void
	worktime: Worktime
	setWorktime: (worktime: Worktime) => void
	downloadWorktime: (year: number) => void
	uploadWorktime: (file: any, year: number) => void
	radioPinned: boolean
	toggleRadioPinned: () => void
	svgEditor: SVGEditor
	setSvgEditor: (editor: SVGEditor) => void
	exportSvg: () => void
	saveCurrentSvg: () => void
	loadCurrentSvg: (file: any) => void
	storageLoaded: boolean
}

type StorageState = {
	showExternalImages: boolean
	achievements: Achievement[]
	brightness: string
	notationTrainer: NotationTrainer
	resume: Resume
	decider: Decider
	worktime: Worktime
	radioPinned: boolean
	svgEditor: SVGEditor
	// traits: [date: string, traits: []]
}

const initialStorageState:StorageState = {
	showExternalImages: false,
	achievements: [],
	brightness: globals.brightnessKeys[3],
	notationTrainer: EmptyNotationTrainer,
	resume: emptyResume,
	decider: {lists: demoLists},
	worktime: {2022: demoWorktime, 2023: {year: 2023, months: []}},
	radioPinned: false,
	svgEditor: {current: rootInitial, library: []},
	// traits: ['', []]
}

function loadStorage() {
	let storage = JSON.parse(localStorage.getItem('digicraft')!)
	if(!storage) {
		saveStorage(initialStorageState)
		storage = JSON.parse(localStorage.getItem('digicraft')!)
	} else {
		if(!('showExternalImages' in storage)) {
			storage.showExternalImages = false
		}
		if(!storage.achievements) {
			storage.achievements = []
		}
		if(!('brightness' in storage)) {
			storage.brightness = globals.brightnessKeys[3]
		}
		if(!storage.notationTrainer) {
			storage.notationTrainer = EmptyNotationTrainer
		}
		if(!storage.resume) {
			storage.resume = emptyResume
		}
		if(!storage.decider) {
			storage.decider = {lists: demoLists}
		} else {
			// eslint-disable-next-line no-unsafe-optional-chaining
			if(!('active' in storage.decider.lists[0]?.items[0])) { // convert prev version
				storage.decider.lists.forEach((list: List) => {
					list.items.forEach((item: Item) => {
						item.active = true
					})
				})
			}
		}
		if(!storage.worktime) {
			storage.worktime = initialStorageState.worktime
		} else {
			if('year' in storage.worktime) {
				storage.worktime = initialStorageState.worktime
			}
		}
		if(!('radioPinned' in storage)) {
			storage.radioPinned = initialStorageState.radioPinned
		}
		if(!storage.svgEditor) {
			storage.svgEditor = initialStorageState.svgEditor
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

	const [showExternalImages, setShowExternalImages] = useState(initialStorageState.showExternalImages)
	const [achievements, setAchievements] = useState<Achievement[]>(initialStorageState.achievements)
	const [brightness, setBrightness] = useState<string>(initialStorageState.brightness)
	const [notationTrainer, setNotationTrainer] = useState<NotationTrainer>(initialStorageState.notationTrainer)
	const [resume, setResume] = useState<Resume>(initialStorageState.resume)
	const [decider, setDecider] = useState<Decider>(initialStorageState.decider)
	const [worktime, setWorktime] = useState<Worktime>(initialStorageState.worktime)
	const [radioPinned, setRadioPinned] = useState<boolean>(initialStorageState.radioPinned)
	const [svgEditor, setSvgEditor] = useState(initialStorageState.svgEditor)

	function updateState(storage: any) {
		setBrightness(storage.brightness)
		setShowExternalImages(storage.showExternalImages)
		setAchievements(storage.achievements)
		setNotationTrainer(storage.notationTrainer)
		setResume(storage.resume)
		setDecider(storage.decider)
		setWorktime(storage.worktime)
		setRadioPinned(storage.radioPinned)
		setSvgEditor(storage.svgEditor)
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
			setStorage({...storage, showExternalImages: showExternalImages})
		}
	}, [showExternalImages])

	useEffect(() => {
		if(achievements) {
			if(storage) {
				setStorage({...storage, achievements: achievements})
			}
		} else {
			setAchievements([])
		}
	}, [achievements])

	useEffect(() => {
		if(storage) {
			setStorage({...storage, brightness: brightness})
			document.body.style.backgroundColor = globals.brightness[brightness].background
		}
	}, [brightness])

	useEffect(() => {
		if(storage) {
			setStorage({...storage, notationTrainer: notationTrainer})
		}
	}, [notationTrainer])

	useEffect(() => {
		if(storage) {
			setStorage({...storage, resume: resume})
		}
	}, [resume])

	useEffect(() => {
		if(storage) {
			setStorage({...storage, decider: decider})
		}
	}, [decider])

	useEffect(() => {
		if(storage) {
			setStorage({...storage, worktime: worktime})
		}
	}, [worktime])

	useEffect(() => {
		if(storage) {
			setStorage({...storage, radioPinned: radioPinned})
		}
	}, [radioPinned])

	useEffect(() => {
		if(storage) {
			const current = structuredClone(svgEditor.current)
			removeParents(current)
			const library = structuredClone(svgEditor.library)
			library.forEach(item => {
				removeParents(item)
			})
			setStorage({...storage, svgEditor: {...svgEditor, current: current, library: library}})
			restoreParents(svgEditor.current)
		}
	}, [svgEditor])

	function toggleRadioPinned() {
		setRadioPinned(pinned => !pinned)
	}

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

	function exportSvg() {
		const svg = document.getElementById('root')!
		svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
		const dataStr = "data:text/jsoncharset=utf-8," + encodeURIComponent(svg.outerHTML)
		stringDownload(dataStr, `${svgEditor.current.element.id}.svg`)
	}

	function saveCurrentSvg() {
		console.log('saveSvg')
		const storage = JSON.parse(localStorage.getItem('digicraft')!)
		const dataStr = "data:text/jsoncharset=utf-8," + encodeURIComponent(JSON.stringify(storage.svgEditor.current))
		stringDownload(dataStr, `${svgEditor.current.element.id}.json`)
	}

	function loadCurrentSvg(file: any): EditorItem|null {
		console.log('load', file)
		const reader = new FileReader()
		reader.readAsText(file)
		reader.onload = function() {
			const json = JSON.parse(reader.result as string)
			console.log("logsntr", "json", json)
			setSvgEditor({...svgEditor, current: json})
		}
		return null
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
			showExternalImages, setShowExternalImages,
			achievements, setAchievements,
			brightness, setBrightness,
			download, upload,
			notationTrainer, setNotationTrainer,
			resume, setResume,
			decider, setDecider,
			worktime, setWorktime, downloadWorktime, uploadWorktime,
			radioPinned, toggleRadioPinned,
			storageLoaded: loaded,
			svgEditor, setSvgEditor, exportSvg, saveCurrentSvg, loadCurrentSvg,
		}}>
			{props.children}
		</LocalStorageContext.Provider>
	)
}

export function useLocalStorage() {
	return useContext(LocalStorageContext)
}
