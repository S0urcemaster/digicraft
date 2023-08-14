'use client'

import * as React from 'react'
import { useDigiContext } from '@digicraft/context'
import styles from './DigiHead.module.scss'
import { font_main } from './DigiCraft'
// @ts-ignore
import { digiCraftThemes, Logo, Panel, HeaderBackground, Text, ContentTitle } from '@digicraft/svg'

export default function DigiHead() {

	const {state} = useDigiContext()

	return (
		<header className={styles.header} style={{height: state.environment.headerHeight}}>
			<Panel width={state.environment.clientWidth} height={state.environment.headerHeight}>
				<HeaderBackground />
				<Logo x={5} y={3} fontSize={21} style={{fontFamily: font_main.style.fontFamily}} theme={digiCraftThemes.light} />
				<ContentTitle theme={digiCraftThemes.light} x={150} y={2} fontSize={19} title={state ? state.contentTitle : ''} />
			</Panel>
		</header>
	)
}
