import * as React from 'react'
import {useDeciderContext} from './deciderContext'
import {IconButton, TextInput} from '../ui/Form'
import {icons} from '../ui/Icon'
import Select from '../ui/Select'
import {useEffect, useRef} from 'react'

export default function Lists() {

	const {lists, activeList, setActiveList, listName, setListName, addList, subList} = useDeciderContext()
	const selectRef = useRef<HTMLSelectElement>(null)

	useEffect(() => {
		// if(selectRef && sel) {
			selectRef && selectRef.current && (selectRef.current.value = activeList?.name!)
		// }
	}, [activeList])

	function setActive(name: string) {
		setActiveList(lists!.find(l => l.name === name)!)
	}

	return (
		<div>
			<div style={{display: 'flex', margin: '0 0 10px 0'}}>
				<TextInput onChange={(event) => setListName(event.target.value)} value={listName} style={{width: '100%'}} />
				<IconButton name={icons.Minus} size={20} style={{margin: '0 5px 0 5px'}} onClick={() => subList()} />
				<IconButton name={icons.Plus} size={20} style={{margin: '0 0 0 0'}} onClick={() => addList()} />
			</div>
			<Select value={activeList?.name} onChange={(s: string) => setActive(s)} options={lists?.map(list => [list.name, list.name])}
					  size={10} style={{width: '100%'}} ref={selectRef} />
		</div>
	)
}