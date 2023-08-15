'use client'
import * as React from 'react'
import styles from './DigiMain.module.scss'
import { ReactNode } from 'react'
import { useDigiCraftContext } from './DigiCraftContext'

export default function DigiMain({children}: { children: ReactNode }) {

	const {getMainHeight} = useDigiCraftContext()

	return (
		<main className={styles.main} style={{height: getMainHeight()}}>
			{children}
		</main>
	)
}
