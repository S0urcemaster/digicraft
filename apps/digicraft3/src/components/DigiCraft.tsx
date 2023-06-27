'use client'

import * as React from 'react'
import DigiHead from './DigiHead'
import DigiMain from './DigiMain'
import { ReactNode, useEffect } from 'react'
import { useDigiContext } from '@digicraft/context'
import { noto } from '../app/layout'

export default function DigiCraft({children}: { children: ReactNode }) {

	const {app, setEnvironment} = useDigiContext()

	useEffect(() => {
		console.log("logsntr", "DigiCraft main", app)
		if(app) {
			console.log('trie')
			setEnvironment({...app.environment, font: noto.style.fontFamily})
		}
	}, [])

	return (
		<>
			<DigiHead/>
			<DigiMain>
				{children}
			</DigiMain>
		</>
	)
}