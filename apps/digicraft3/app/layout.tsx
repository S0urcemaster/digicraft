'use client'

import './globals.scss'
import { DigiCraftContextProvider } from './DigiCraftContext'
import { ReactNode } from 'react'
import DigiCraft from './DigiCraft'
import cssVars from '../vars.module.scss'

import { Open_Sans as FontDefault } from 'next/font/google'
// import { Josefin_Sans as FontDefault } from 'next/font/google'
import { Model } from '../core/model'
import Image from 'next/image'

// const fontHeading = FontHeading({
// 	subsets: ['latin'],
// 	variable: '--font-heading',
// 	display: 'swap',
// })

// numbers are monospaced -> dates are justified
const fontDefault = FontDefault({
	subsets: ['latin'],
	variable: '--font-default',
	display: 'swap',
})

// const fontCode = FontCode({
// 	subsets: ['latin'],
// 	variable: '--font-code',
// 	display: 'swap',
// })

const initialState: Model = {
	contentTitle: undefined,
	environment: {
		clientWidth: 1921,
		clientHeight: 1080,
		headerHeight: Number.parseInt(cssVars.headerHeight),
		footerHeight: Number.parseInt(cssVars.footerHeight),
	},
	cssVars: cssVars,
	images: {
		// newsThumb: <Image src={} alt={}
	},
	contextLoaded: false,
}


export default function RootLayout({children}: { children: ReactNode }) {
	return (
		<html lang="en" className={`${fontDefault.variable}`}>
		<head>
			<title>Digi Craft</title>
		</head>
		<body>
		<DigiCraftContextProvider initialState={initialState}>
			<DigiCraft>
				{children}
			</DigiCraft>
		</DigiCraftContextProvider>

		</body>
		</html>
	)
}
