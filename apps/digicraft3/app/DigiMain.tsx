'use client'
import * as React from 'react'
import { ReactNode } from 'react'
import { useDigiCraftContext } from './DigiCraftContext'
import { Noise } from '../components/NoiseCanvas'

export default function DigiMain({children}: { children: ReactNode }) {

	const {state, getMainHeight, contextLoaded} = useDigiCraftContext()

	return (
		<>
			<Noise bgColor={'#1a2f44'} lifeColor={'#454a51'} duration={1000}
					 width={state.environment.clientWidth +10} height={state.environment.clientHeight} cellSize={50}
					 loaded={contextLoaded}
			/>
			<main style={{height: getMainHeight()}}>
				{children}
			</main>
		</>
		)
}
