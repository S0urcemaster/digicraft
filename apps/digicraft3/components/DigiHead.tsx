'use client'

import * as React from 'react'
import { useDigiContext } from '@digicraft/context'
import styles from './DigiHead.module.scss'
import DigiText from './header/DigiText'
import { useRouter } from 'next/navigation'

export default function DigiHead() {

	const {state} = useDigiContext()
	console.log('logsntr', 'state.contentTitle', state.contentTitle)
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
