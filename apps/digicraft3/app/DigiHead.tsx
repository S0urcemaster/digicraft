'use client'

import * as React from 'react'
import { useDigiCraftContext } from './DigiCraftContext'
import DigiText from './DigiText'
import { useRouter } from 'next/navigation'

export default function DigiHead() {

	const {state} = useDigiCraftContext()
	const router = useRouter()

	function back() {
		router.back()
	}

	return (
		<header onClick={back}>
			{/*<DigiText text={'ABCDEFGHIJKLMNOPQRSTUVWXYZ'} />*/}
			{state.contentTitle ?
				<DigiText text={`DIGI CRAFT/${state.contentTitle}`}/>
				:
				<DigiText text={`DIGI CRAFT`}/>
			}
		</header>
	)
}
