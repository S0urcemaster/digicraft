import * as React from 'react'
import styles from './DigiHead.module.scss'
import { ReactNode } from 'react'

export default function DigiMain({children}: {
	children: ReactNode
}) {

	return (
		<main className={styles.main}>
			DigiMain {children}
		</main>
	)
}