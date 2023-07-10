import * as React from 'react'
import {Item as ItemType, useDeciderContext} from './deciderContext'
import {useEffect} from 'react'
import {Checkbox} from '../ui/Form'

export default function Item(props: {item: ItemType, highlighted: boolean, stopped: boolean}) {

	const {itemName, setActiveItem, setItemActive} = useDeciderContext()

	return (
		<div style={{display: 'flex'}}>
			<Checkbox checked={props.item.active} style={{width: 20, margin: '0 5px 0 0'}} onChange={(e) => setItemActive(props.item, e.target.checked)} />
			<div onClick={() => setActiveItem(props.item)}
				  style={{display: 'grid', width: '100%', gridTemplateColumns: 'auto', margin: '0 0 5px 0',
					  padding: 5, boxSizing: 'border-box', color: 'black', cursor: 'pointer',
					  background: props.highlighted ? props.stopped ? '#c8ffa6' : '#ffbfd1' : 'white',
					  outline: itemName === props.item.name ? '1px solid black' : '',
				  }}>
				{props.item.name}
			</div>
		</div>
		)
}