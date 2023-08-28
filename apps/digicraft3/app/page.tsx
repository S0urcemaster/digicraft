'use client'

import { useDigiCraftContext } from './DigiCraftContext'
import { useEffect, useState } from 'react'
import { clog } from '@digicraft/lib'
import { MainMenu } from './MainMenu'
import { Game } from '../components/svg/menu'
import { GameOfLife } from '../components/GameOfLiveCanvas'

export default function Home() {

	const {state, setContentTitle, environment} = useDigiCraftContext()
	const [cycleState, setCycleState] = useState(0)

	useEffect(() => {
		setContentTitle('')
		clog('page', state)
		// if(state) {
		// 	setContentTitle('Welcomex')
		// }
	}, [])

	return (
		<div onClick={() => setCycleState(prevState => prevState +1)}>
			<div style={{position: 'absolute', left: -10, top: 0, overflow: 'hidden'}}>
				{environment ?
					<GameOfLife bgColor={'#1a2f44'} lifeColor={'#454a51'}
									width={environment.clientWidth +10} height={environment.clientHeight} cellSize={6}
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
