import * as React from 'react'
import { useDigiContext } from '@digicraft/context'
import styles from './DigiHead.module.scss'
import { noto } from '../app/layout'
import { digiCraftThemes, DigiCraft as DigiCraftLogo, Panel } from '@digicraft/svg'

export default function DigiHead() {

	const {app} = useDigiContext()

	return (
		<header className={styles.header}>
			<Panel relativeX={0} relativeY={0} width={app.environment.width} height={app.environment.height}>
				<DigiCraftLogo x={5} y={22} fontFamily={noto.style.fontFamily} theme={digiCraftThemes.light} />
			</Panel>

		</header>
	)
}