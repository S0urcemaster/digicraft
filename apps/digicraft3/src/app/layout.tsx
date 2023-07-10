'use client'

import './globals.scss'
import { DigiContextProvider } from '@digicraft/context'
import { ReactNode } from 'react'
import DigiCraft from '../components/DigiCraft'
import { Model } from '@digicraft/context'
import vars from '../vars.module.scss'


const initialState: Model = {
	contentTitle: 'Digi Craft',
	environment: {
		clientWidth: 1921,
		clientHeight: 1080,
		headerHeight: parseInt(vars.headerHeight.replace('px', '')),
		contrast: 0,
		mainFont: 'Sans-serif',
		monoFont: 'Monospace',
		specialFont: 'Fantasy',
	},
	cssVars: vars,
}


export default function RootLayout({children}: { children: ReactNode }) {
	return (
		<html lang="en">
		<body>
		<DigiContextProvider initialState={initialState}>
			<DigiCraft>
				{children}
			</DigiCraft>
		</DigiContextProvider>

		</body>
		</html>
	)
}
