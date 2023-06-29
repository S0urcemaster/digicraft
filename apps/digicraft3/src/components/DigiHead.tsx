'use client'

import * as React from 'react'
import { useDigiContext } from '@digicraft/context'
import styles from './DigiHead.module.scss'
import { font_noto, font_montserrat } from './DigiCraft'
import { digiCraftThemes, DigiCraft as DigiCraftLogo, Panel } from '@digicraft/svg'

export default function DigiHead() {

	const {app} = useDigiContext()

	return (
		<header className={styles.header}>
			<Panel relativeX={0} relativeY={0} width={app.environment.clientWidth} height={app.environment.headerHeight}>
				<DigiCraftLogo x={5} y={22} style={{fontFamily: font_montserrat.style.fontFamily, fontSize: 20}} theme={digiCraftThemes.light} />
			</Panel>

		</header>
	)
}
