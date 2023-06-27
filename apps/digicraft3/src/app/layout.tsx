'use client'
import './globals.scss'
import { DigiContextProvider } from '@digicraft/context'
import { ReactNode } from 'react'
import { Noto_Sans_Display } from 'next/font/google'
import DigiCraft from '../components/DigiCraft'

export const noto = Noto_Sans_Display({
	subsets: ['latin'],
	display: 'swap',
})

export default function RootLayout({children}: { children: ReactNode }) {
	return (
		<html lang="en" className={noto.className}>
		<body>
		<DigiContextProvider>
			<DigiCraft>
				{children}
			</DigiCraft>
		</DigiContextProvider>

		</body>
		</html>
	)
}
