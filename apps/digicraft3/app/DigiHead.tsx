'use client'

import * as React from 'react'
import { useDigiCraftContext } from './DigiCraftContext'
import styles from './DigiHead.module.scss'
import DigiText from './header/DigiText'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function DigiHead() {

	const {state} = useDigiCraftContext()
	const router = useRouter()

	function back() {
		router.back()
	}

	return (
		<header className={styles.header} onClick={back}>
			{/*<DigiText text={'ABCDEFGHIJKLMNOPQRSTUVWXYZ'} />*/}
			{state.contentTitle ?
				<DigiText text={`DIGI CRAFT/${state.contentTitle}`}/>
				:
				<DigiText text={`DIGI CRAFT`}/>
			}
		</header>
	)
}
