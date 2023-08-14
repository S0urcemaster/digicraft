'use client'
import * as React from 'react'
import { ReactNode } from 'react'
import { useDigiContext } from '@digicraft/context'
import { Button } from '@blueprintjs/core'

export default function({children}: { children: ReactNode }) {

	const {state} = useDigiContext()

	return (
		<>
			{children}
			<Button text="test" />

		</>
	)
}