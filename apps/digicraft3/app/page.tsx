'use client'

import { Noise } from '../components/NoiseCanvas'
import { useDigiCraftContext } from './DigiCraftContext'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const Dynamic = dynamic(() => import('./MainMenu'), {ssr: false})

export default function Home() {

	const {contextLoaded} = useDigiCraftContext()
	const [cycleState, setCycleState] = useState(0)

	useEffect(() => {
		// setInterval(() => {
		// 	setLoaded(true)
		// }, 1000)
		// setLoaded(true)

	}, [])

	return (
		<div style={{position: 'relative', overflowX: 'hidden', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0)',
			display: contextLoaded ? 'block' : 'none'}}>

			<Dynamic />
		</div>
	)
}
