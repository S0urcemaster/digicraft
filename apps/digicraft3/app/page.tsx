'use client'

import { GameOfLife } from '../components/GameOfLiveCanvas'
import { useDigiCraftContext } from './DigiCraftContext'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const Dynamic = dynamic(() => import('./MainMenu'), {ssr: false})

export default function Home() {

	const {state, setContentTitle} = useDigiCraftContext()
	const [cycleState, setCycleState] = useState(0)

	const [loaded, setLoaded] = useState(false)

	useEffect(() => {
		setInterval(() => {
			setLoaded(true)
		}, 1500)
		// setLoaded(true)

	}, [])

	return (
		<div onClick={() => setCycleState(prevState => prevState +1)}>
			{/*<div style={{position: 'absolute', left: -10, top: 0, overflow: 'hidden', zIndex: 98}}>*/}
				{state.environment ?
					<GameOfLife bgColor={'#1a2f44'} lifeColor={'#454a51'}
									width={state.environment.clientWidth +10} height={state.environment.clientHeight} cellSize={10}
									cycleState={cycleState} loaded={loaded}
					/>
					: null
				}
			{/*</div>*/}
			<div style={{position: 'relative', overflowX: 'hidden', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0)', display: loaded ? 'block' : 'none'}}>

				<Dynamic />
			</div>
		</div>
	)
}
