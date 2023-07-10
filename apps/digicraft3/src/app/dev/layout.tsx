'use client'
import * as React from 'react'
import { ReactNode } from 'react'
// @ts-ignore
import { useDigiContext } from '@digicraft/context'

export default function({children}: { children: ReactNode }) {

	const {state} = useDigiContext()

	return (
		<>
			{children}
		</>
	)
}