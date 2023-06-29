'use client'
import './globals.scss'
import { DigiContextProvider } from '@digicraft/context'
import { ReactNode } from 'react'
import DigiCraft from '../components/DigiCraft'

export default function RootLayout({children}: { children: ReactNode }) {
	return (
		<html lang="en">
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
