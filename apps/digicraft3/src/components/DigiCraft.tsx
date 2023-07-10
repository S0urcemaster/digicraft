'use client'

import * as React from 'react'
import DigiHead from './DigiHead'
import DigiMain from './DigiMain'
import { ReactNode, useEffect } from 'react'
// @ts-ignore
import { useDigiContext } from '@digicraft/context'
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

	const {state, setEnvironment} = useDigiContext()

	useEffect(() => {
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
				clientWidth: window.innerWidth,
				clientHeight: window.innerHeight
			})
		}
		return () => window.removeEventListener('resize', resize)
	}, [])

	return (
		<div style={{fontFamily: state.environment.mainFont}}>
			<DigiHead/>
			<DigiMain>
				{children}
			</DigiMain>
		</div>
	)
}
