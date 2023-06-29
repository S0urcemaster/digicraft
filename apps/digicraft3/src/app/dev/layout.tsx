'use client'
import * as React from 'react'
import { ReactNode } from 'react'
import { digiCraftThemes, DigiCraft as DigiCraftLogo, Panel } from '@digicraft/svg'
import { useDigiContext } from '@digicraft/context'

export default function({children}: { children: ReactNode }) {

	const {app} = useDigiContext()

	return (
		<>
			{children}
			<Panel relativeX={0} relativeY={0} width={app.environment.clientWidth} height={app.environment.clientHeight}>

			</Panel>
		</>
	)
}