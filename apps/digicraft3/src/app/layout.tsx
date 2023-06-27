'use client'
import './globals.scss'
import { DigiContextProvider } from '@digicraft/context'
import DigiHead from '../components/DigiHead'
import DigiMain from '../components/DigiMain'
import { ReactNode } from 'react'
import { Noto_Sans_Display } from 'next/font/google'

const noto = Noto_Sans_Display({
	subsets: ['latin'],
	display: 'swap',
})

export default function RootLayout({children}: {
	children: ReactNode
}) {
	return (
		<html lang="en" className={noto.className}>
		<body>
		<DigiContextProvider>
			<DigiHead/>
			<DigiMain>
				{children}
			</DigiMain>
		</DigiContextProvider>

		</body>
		</html>
	)
}
