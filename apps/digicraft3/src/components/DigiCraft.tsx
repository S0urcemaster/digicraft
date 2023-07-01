'use client'

import * as React from 'react'
import DigiHead from './DigiHead'
import DigiMain from './DigiMain'
import { ReactNode, useEffect } from 'react'
import { useDigiContext } from '@digicraft/context'
import vars from '../vars.module.scss'
import { clog } from '@digicraft/lib'

// import { Noto_Sans_Display, Montserrat, Nunito, Quicksand } from 'next/font/google'
import { Montserrat, Quicksand } from 'next/font/google'

export const font_main = Quicksand({
	subsets: ['latin'],
	display: 'swap',
})

export const font_special = Montserrat({
	subsets: ['latin'],
	display: 'swap',
})

export default function DigiCraft({children}: { children: ReactNode }) {

	const {state, setEnvironment, setCSSVars} = useDigiContext()

	useEffect(() => {
	}, [])

	useEffect(() => { // set css vars
		if(state) {
			clog('vars', vars)
			setCSSVars(vars)
		}
	}, [])


	useEffect(() => { // add resize listener
		function resize() {
			setEnvironment({...state.environment, clientWidth: window.innerWidth, clientHeight: window.innerHeight})
		}
		if(state) {
			window.addEventListener('resize', resize)
			setEnvironment({...state.environment,
				mainFont: font_main.style.fontFamily,
				specialFont: font_special.style.fontFamily,
				headerHeight: parseInt(vars.headerHeight),
				clientWidth: window.innerWidth,
				clientHeight: window.innerHeight
			})
		}
		return () => window.removeEventListener('resize', resize)
	}, [])

	return (
		<div style={{fontFamily: state.environment.mainFont}}>
			<DigiHead />
			<DigiMain>
				{children}
			</DigiMain>
		</div>
	)
}
