import * as React from 'react'
import {useDeciderContext} from './deciderContext'
import {IconButton, TextInput} from '../ui/Form'
import {icons} from '../ui/Icon'
import Item from './Item'
import {KeyboardEvent, useEffect, useState} from 'react'

export default function List(props: {}) {

	const {activeList, item, setItem, addItem, subItem, itemName, setItemName, highlighted, stopped} = useDeciderContext()

	function handleEnter(event: KeyboardEvent<HTMLInputElement>) {
		if (event.key === "Enter") {
			addItem()
		}
	}

	return (
		<div>
			<div style={{display: 'flex', margin: '0 0 10px 0'}}>
				<IconButton name={icons.Minus} size={20} style={{margin: '0 0px 0 0px'}} onClick={() => subItem()} />
				<IconButton name={icons.Plus} size={20} style={{margin: '0 5px 0 5px'}} onClick={() => addItem()} />
				<TextInput onChange={(event) => setItemName(event.target.value)} value={itemName} style={{width: '100%'}}
							  onKeyDown={(e) => handleEnter(e)}
				/>
			</div>
			<div style={{}}>
				<div style={{margin: '0 0 0 0px'}}>
					{activeList?.items.map((i, idx) => (
						<Item item={i} highlighted={i === highlighted} stopped={stopped} key={idx} />
					))}
				</div>
			</div>
		</div>
	)
}