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

	const {app, setEnvironment} = useDigiContext()

	useEffect(() => {
		clog("DigiCraft main", app)
		if(app) {
			setEnvironment({...app.environment,
				mainFont: font_main.style.fontFamily,
				specialFont: font_special.style.fontFamily,
				headerHeight: parseInt(vars.headerHeight),
			})
		}
	}, [])

	return (
		<div style={{fontFamily: app.environment.mainFont}}>
			<DigiHead />
			<DigiMain>
				{children}
			</DigiMain>
		</div>
	)
}
