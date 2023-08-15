'use client'
import * as React from 'react'
import { ReactNode } from 'react'
import { useDigiCraftContext } from '../DigiCraftContext'

export default function({children}: { children: ReactNode }) {

	return (
		<>
			{children}
		</>
	)
}