'use client'

import * as React from 'react'
import { useDigiContext } from '@digicraft/context'
import styles from './DigiHead.module.scss'
import { font_main } from './DigiCraft'
// @ts-ignore
import { digiCraftThemes, DigiCraftLogo, Panel, HeaderBackground } from '@digicraft/svg'
// @ts-ignore
import { Text } from '@digicraft/svg'

export default function DigiHead() {

	const {state} = useDigiContext()

	return (
		<header className={styles.header} style={{height: state.environment.headerHeight}}>
			<Panel width={state.environment.clientWidth} height={state.environment.headerHeight}>
				<HeaderBackground />
				<DigiCraftLogo x={5} y={3} fontSize={21} style={{fontFamily: font_main.style.fontFamily}} theme={digiCraftThemes.light} />
				<Text x={150} y={0} fontSize={20} color={'white'}>{state && state.contentTitle}</Text>
			</Panel>
		</header>
	)
}
