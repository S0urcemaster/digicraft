import * as React from 'react'
import {createContext, ReactNode, useContext, useEffect, useRef, useState} from 'react'
import {useTimer} from './timer'
import {useLocalStorage} from '../../lib/localStorageContext'

export type Decider = {
	lists: List[]
}

export type Item = {
	name: string
	active: boolean
}

export class List {
	name: string = ''
	items: Item[] = []
}

const dummyLists: List[] = [
	{name: 'dummy', items: [{name: 'Element 1', active: true}, {name: 'Element 2', active: true}, {name: 'Element 3', active: true}, {name: 'Element 4', active: true}, {name: 'Element 5', active: true}]},
	{name: 'dummy 2', items: [{name: 'Element 1', active: true}, {name: 'Element 2', active: true}, {name: 'Element 3', active: true}]},
	{name: 'Haushalt', items: [{name: 'Küche', active: true}, {name: 'Bad', active: true}, {name: 'Saugen', active: true}, {name: 'Staub', active: true}, {name: 'Aufräumen', active: true}
		, {name: 'Schuhe putzen', active: true}, {name: 'Wischen', active: true}]},
]

export const demoLists: List[] = [
	{name: 'Nächstes Auto', items: [{name: 'BMW M235i xDrive Gran Coupé', active: true}, {name: 'Mercedes-AMG SL 43', active: true}, {name: 'smart EQ fortwo', active: true}, {name: 'Tesla Model Y', active: true}, {name: 'Hyundai IONIQ 6', active: true}]}
]

const deciderMethods = {
	sequential: 'sequential',
	random: 'random',
}

export type DeciderContext = {
	lists: List[]|undefined
	setLists: (lists: List[]) => void
	listName: string
	setListName: (name: string) => void
	// list: List|undefined
	// setList: (list: List) => void
	addList: () => void
	subList: () => void
	itemName: string
	setItemName: (name: string) => void
	item: Item|undefined
	setItem: (item: Item) => void
	addItem: () => void
	subItem: () => void
	setAccelerate: (acc: boolean) => void
	highlighted: Item|undefined,
	setHighlighted: (item: Item) => void
	activeItem: Item|undefined,
	setActiveItem: (item: Item) => void
	setItemActive: (item: Item, active: boolean) => void
	activeList: List|undefined,
	setActiveList: (list: List) => void
	accelerate: (acc: boolean) => void
	stopped: boolean
}

const DeciderContext = createContext<DeciderContext>({} as DeciderContext)

export default function DeciderContextProvider(props: { children: ReactNode }) {

	const {setDecider, decider} = useLocalStorage()

	const [lists, setLists] = useState<List[]>(decider.lists)
	const [activeList, setActiveList] = useState<List|undefined>()
	const [listName, setListName] = useState<string>('')
	const [itemName, setItemName] = useState<string>('')
	const [item, setItem] = useState<Item|undefined>()
	const [highlighted, setHighlighted] = useState<Item|undefined>()
	const [activeItem, setActiveItem] = useState<Item|undefined>()
	const [method, setMethod] = useState(deciderMethods.random)

	const {elapsed, setAccelerate, stopped} = useTimer()

	const highlightPointer = useRef(0)
	const activeListId = useRef<number|undefined>(undefined)

	const save = useRef(false)

	useEffect(() => {
		if(decider) {
			setLists(decider.lists)
			activeListId.current = 0
		}
	}, [decider])

	useEffect(() => {
		if(lists) {
			!activeListId.current ? activeListId.current = 0 : null
			save.current && setDecider({...{lists: lists}})
			// activeListId && setActiveList(lists[activeListId.current!])
			// save.current = false
			setActiveList(lists[activeListId.current])
		}
	}, [lists])

	useEffect(() => {
		// setList(lists.find(list => list.name === listName))
	}, [listName])

	useEffect(() => {
		activeListId.current = lists.indexOf(lists.find(l => activeList?.name === l.name)!)
		if(save.current) {
			lists.splice(activeListId.current, 1, activeList!)
			setLists([...lists])
		}
		activeList && setListName(activeList.name)
	}, [activeList])

	// useEffect(() => {
	// }, [itemName])

	useEffect(() => {
		if(activeList && !stopped) {
			const actives = activeList.items.filter(i => i.active)
			switch(method) {
				case deciderMethods.random:
					setHighlighted(randomItem(actives, highlighted!))
					break
				case deciderMethods.sequential:
					setHighlighted(actives[highlightPointer.current++])
					if(highlightPointer.current >actives.length! -1) {
						highlightPointer.current = 0
					}
					break
			}
		}
	}, [elapsed])

	useEffect(() => {
		item ? setItemName(item.name) : ''
	}, [item])

	useEffect(() => {
		if(activeItem) {
			activeList?.items.splice(activeList?.items.indexOf(activeItem), 1, activeItem)
			setActiveList({...activeList!})
			setItemName(activeItem.name)
		}
	}, [activeItem])

	function setItemActive(item: Item, active: boolean) {
		item.active = active
		save.current = true
		// activeList!.items.splice(activeList!.items.indexOf(item), 1, item)
		setActiveList({...activeList!})
	}

	function addList() {
		if(listName && listName !== '' && !lists.find(item => item.name === listName)) {
			save.current = true
			activeListId.current = lists.length
			setLists([...lists, {name: listName, items: []}])
		}
	}

	function subList() {
		if(lists) {
			save.current = true
			activeListId.current = 0
			setLists([...lists.filter(item => activeList !== item)])
			setActiveList(undefined)
		}
	}

	function addItem() {
		if(activeList && itemName && itemName != '' && !activeList.items.find(item => item.name === itemName)) {
			save.current = true
			activeList.items.push({name: itemName, active: true})
			setActiveList({...activeList})
		}
	}

	function subItem() {
		if(activeList && activeItem) {
			save.current = true
			activeList.items.splice(activeList.items.indexOf(activeItem!), 1)
			setActiveList({...activeList})
		}
	}

	function doAccelerate(acc: boolean) {
		if(activeList!.items.filter(i => i.active).length <2) return
		setAccelerate(acc)
	}

	function randomItem(arr: Item[], lastSelected: Item) {
		let randomIndex = Math.floor(Math.random() * arr.length);
		let randomItem = arr[randomIndex];

		while (randomItem === lastSelected) {
			randomIndex = Math.floor(Math.random() * arr.length);
			randomItem = arr[randomIndex];
		}

		return randomItem;
	}

	return (
		<DeciderContext.Provider value={{lists, setLists, listName, setListName, addList, subList, setAccelerate,
			highlighted, setHighlighted, stopped, addItem, subItem, itemName, setItemName, activeItem, setActiveItem,
			accelerate: doAccelerate, activeList, setActiveList, item, setItem, setItemActive
		}}>
			{props.children}
		</DeciderContext.Provider>
	)
}

export function useDeciderContext() {
	return useContext(DeciderContext)
}