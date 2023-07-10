import * as React from 'react'
import Select from '../ui/Select'
import DeciderContextProvider, {useDeciderContext} from './deciderContext'
import Lists from './Lists'
import {Button} from '../ui/Form'
import List from './List'

export default function Decider(props: {}) {

	const {accelerate} = useDeciderContext()

	return (
			<div style={{display: 'grid', gridTemplateColumns: '3fr 1fr 7fr', background: '#f0f2ff', padding: 10}}>
				<Lists />
				<Button value={'Hold to RNG'} onMouseDown={() => accelerate(true)} onMouseUp={() => accelerate(false)}
						  style={{height: 75, margin: '0 20px 0 20px'}} />
				<List />
			</div>
	)
}