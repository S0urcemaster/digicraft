'use client'

import * as React from 'react'
import DigiHead from './DigiHead'
import DigiMain from './DigiMain'
import { ReactNode, useEffect } from 'react'
import { useDigiContext } from '@digicraft/context'
import vars from '../vars.module.scss'
import { clog } from '@digicraft/lib'

import { Noto_Sans_Display, Montserrat } from 'next/font/google'

export const font_noto = Noto_Sans_Display({
	subsets: ['latin'],
	display: 'swap',
})

export const font_montserrat = Montserrat({
	subsets: ['latin'],
	display: 'swap',
})

export default function DigiCraft({children}: { children: ReactNode }) {

	const {app, setEnvironment} = useDigiContext()

	useEffect(() => {
		clog("DigiCraft main", app)
		if(app) {
			setEnvironment({...app.environment,
				mainFont: font_montserrat.style.fontFamily,
				monoFont: font_noto.style.fontFamily,
				headerHeight: parseInt(vars.headerHeight),
			})
		}
	}, [])

	return (
		<>
			<DigiHead />
			<DigiMain>
				{children}
			</DigiMain>
		</>
	)
}
