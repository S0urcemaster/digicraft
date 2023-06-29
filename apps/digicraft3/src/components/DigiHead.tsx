'use client'

import * as React from 'react'
import { useDigiContext } from '@digicraft/context'
import styles from './DigiHead.module.scss'
import { font_main, font_special } from './DigiCraft'
// @ts-ignore
import { digiCraftThemes, DigiCraft, Panel, Header } from '@digicraft/svg'
// @ts-ignore
import { Text } from '@digicraft/svg'

export default function DigiHead() {

	const {app} = useDigiContext()

	return (
		<header className={styles.header} style={{height: app.environment.headerHeight}}>
			<Panel width={app.environment.clientWidth} height={app.environment.headerHeight}>
				<Header />
				<DigiCraft x={3} y={0} fontSize={25} style={{fontFamily: font_main.style.fontFamily}} theme={digiCraftThemes.light} />
				<Text x={150} y={0} fontSize={20} color={'white'}>{app.contentTitle}</Text>
			</Panel>
		</header>
	)
}
