'use client'
import * as React from 'react'
import styles from './DigiMain.module.scss'
import { ReactNode } from 'react'
import { useDigiContext } from '@digicraft/context'

export default function DigiMain({children}: { children: ReactNode }) {

	const {getMainHeight} = useDigiContext()

	return (
		<main className={styles.main} style={{height: getMainHeight()}}>
			{children}
		</main>
	)
}
