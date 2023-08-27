'use client'

import { useDigiCraftContext } from './DigiCraftContext'
import { useEffect } from 'react'
import { clog } from '@digicraft/lib'
import { MainMenu } from './MainMenu'
import { Game } from '../components/svg/menu'
import { GameOfLife } from '../components/GameOfLiveCanvas'

export default function Home() {

	const {state, setContentTitle} = useDigiCraftContext()

	useEffect(() => {
		setContentTitle('')
		clog('page', state)
		// if(state) {
		// 	setContentTitle('Welcomex')
		// }
	}, [])

	return (
		<>
			<div style={{position: 'absolute', left: 0, top: 0, overflow: 'hidden'}}>
				<GameOfLife />
			</div>
			<div style={{position: 'relative', overflowX: 'hidden', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0)'}}>

				<MainMenu />
			</div>
		</>
	)
}
