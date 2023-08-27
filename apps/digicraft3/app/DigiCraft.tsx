'use client'

import * as React from 'react'
import DigiHead from './DigiHead'
import DigiMain from './DigiMain'
import { ReactNode, useEffect } from 'react'
import { clog } from '@digicraft/lib'

import { useDigiCraftContext } from './DigiCraftContext'
import { DigiFoot } from './DigiFoot'

import cssVars from '../vars.module.scss'


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
				headerHeight: Number.parseInt(cssVars.headerHeight),
				footerHeight: Number.parseInt(cssVars.footerHeight),
				clientWidth: window.innerWidth,
				clientHeight: window.innerHeight
			})
		}
		return () => window.removeEventListener('resize', resize)
	}, [])

	return (
		<>
			<DigiHead/>
			<DigiMain>
				{children}
			</DigiMain>
			<DigiFoot/>
		</>
	)
}
