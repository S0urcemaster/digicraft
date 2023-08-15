'use client'

import { useDigiContext } from '@digicraft/context'
import { useEffect } from 'react'
import { clog } from '@digicraft/lib'
import { MainMenu } from './MainMenu'

export default function Home() {

	const {state, setContentTitle} = useDigiContext()

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
