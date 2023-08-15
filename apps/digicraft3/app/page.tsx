'use client'

import { useDigiCraftContext } from './DigiCraftContext'
import { useEffect } from 'react'
import { clog } from '@digicraft/lib'
import { MainMenu } from './MainMenu'

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
			<MainMenu />
		</>
	)
}
