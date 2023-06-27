import * as React from 'react'
import { useDigiContext } from '@digicraft/context'
import styles from './DigiHead.module.scss'

export default function DigiHead() {

	const {app} = useDigiContext()

	return (
		<header className={styles.header}>
			DigiHead {app.environment.width}
		</header>
	)
}