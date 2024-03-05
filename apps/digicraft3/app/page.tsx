'use client'

import { Noise } from '../components/NoiseCanvas'
import { useDigiCraftContext } from './DigiCraftContext'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import * as React from 'react'
import { Plane } from '../components/svg/Plane'

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
		<div style={{
			position: 'relative', overflowX: 'hidden', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0)',
			display: contextLoaded ? 'block' : 'none'
		}}>
			<div style={{position: 'absolute', top: 0, left: 0, right: 1000, bottom: 0}}>
				<Plane />
			</div>
			<Dynamic/>
		</div>
	)
}
