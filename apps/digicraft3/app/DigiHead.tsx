'use client'

import * as React from 'react'
import { useDigiCraftContext } from './DigiCraftContext'
import DigiText from '../components/svg/logo/DigiText'
import { useRouter } from 'next/navigation'
import cssVars from '../vars.module.scss'

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
				<DigiText text={`DIGI CRAFT/${state.contentTitle}`} height={17} color={cssVars.cream}/>
				:
				<DigiText text={`DIGICR`} height={19} color={cssVars.cream}/>
			}
		</header>
	)
}
