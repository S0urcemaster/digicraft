'use client'

import * as React from 'react'
import { useDigiContext } from '@digicraft/context'
import styles from './DigiHead.module.scss'
import {default as DigiLogo} from './logo/Logo'

export default function DigiHead() {

	const {state} = useDigiContext()

	return (
		<header className={styles.header} style={{height: state.environment.headerHeight, background: 'linear-gradient(to right, #1a2f44, #c5cbd3)'}}>
			<DigiLogo />
		</header>
	)
}
