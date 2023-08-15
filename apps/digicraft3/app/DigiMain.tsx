'use client'
import * as React from 'react'
import { ReactNode } from 'react'
import { useDigiCraftContext } from './DigiCraftContext'

export default function DigiMain({children}: { children: ReactNode }) {

	const {getMainHeight} = useDigiCraftContext()

	return (
		<main style={{height: getMainHeight()}}>
			{children}
		</main>
	)
}
