'use client'

import * as React from 'react'
import DigiHead from './DigiHead'
import DigiMain from './DigiMain'
import { ReactNode, useEffect } from 'react'
import { clog } from '@digicraft/lib'

import { useDigiCraftContext } from './DigiCraftContext'

export default function DigiCraft({children}: { children: ReactNode }) {

	const {state, setEnvironment} = useDigiCraftContext()

	useEffect(() => {
	}, [])


	useEffect(() => { // add resize listener
		function resize() {
			setEnvironment({...state.environment, clientWidth: window.innerWidth, clientHeight: window.innerHeight})
		}
		if(state) {
			window.addEventListener('resize', resize)
			setEnvironment({...state.environment,
				mainFont: '',
				specialFont: '',
				clientWidth: window.innerWidth,
				clientHeight: window.innerHeight
			})
		}
		return () => window.removeEventListener('resize', resize)
	}, [])

	return (
		<div>
			<DigiHead/>
			<DigiMain>
				{children}
			</DigiMain>
		</div>
	)
}
