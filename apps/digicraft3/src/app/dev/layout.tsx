'use client'
import * as React from 'react'
import { ReactNode } from 'react'
import { digiCraftThemes, DigiCraftLogo, Panel } from '@digicraft/svg'
import { useDigiContext } from '@digicraft/context'

export default function({children}: { children: ReactNode }) {

	const {state} = useDigiContext()

	return (
		<>
			{children}
			<Panel x={0} y={0} width={state.environment.clientWidth} height={state.environment.clientHeight}>

			</Panel>
		</>
	)
}