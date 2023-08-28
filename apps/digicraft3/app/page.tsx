'use client'

import { useDigiCraftContext } from './DigiCraftContext'
import { useEffect, useState } from 'react'
import { clog } from '@digicraft/lib'
import { MainMenu } from './MainMenu'
import { Game } from '../components/svg/menu'
import { GameOfLife } from '../components/GameOfLiveCanvas'

export default function Home() {

	const {state, setContentTitle} = useDigiCraftContext()
	const [cycleState, setCycleState] = useState(0)

	useEffect(() => {
		// setContentTitle('')
	}, [])

	return (
		<div onClick={() => setCycleState(prevState => prevState +1)}>
			<div style={{position: 'absolute', left: -10, top: 0, overflow: 'hidden'}}>
				{state.environment ?
					<GameOfLife bgColor={'#1a2f44'} lifeColor={'#454a51'}
									width={state.environment.clientWidth +10} height={state.environment.clientHeight} cellSize={6}
									cycleState={cycleState}
					/>
					: null
				}
			</div>
			<div style={{position: 'relative', overflowX: 'hidden', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0)'}}>

				<MainMenu />
			</div>
		</div>
	)
}
