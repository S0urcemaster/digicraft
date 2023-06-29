'use client'
import * as React from 'react'
import { ReactNode } from 'react'
import { digiCraftThemes, DigiCraft as DigiCraftLogo, Panel } from '@digicraft/svg'
import { useDigiContext } from '@digicraft/context'

export default function({children}: { children: ReactNode }) {

	const {app} = useDigiContext()

	return (

		<Panel x={0} y={0} width={app.environment.clientWidth} height={app.environment.clientHeight}>

		</Panel>
	)
}