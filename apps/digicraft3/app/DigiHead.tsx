'use client'

import * as React from 'react'
import { useDigiCraftContext } from './DigiCraftContext'
import DigiText from '../components/svg/logo/DigiText'
import { useRouter } from 'next/navigation'
import cssVars from '../vars.module.scss'

export default function DigiHead() {

	const {state, setContentTitle, setContextLoaded} = useDigiCraftContext()
	const router = useRouter()

	function top() {
		setContextLoaded(false)
		setContentTitle(undefined)
		router.push('/')
	}

	return (
		<header onClick={top}>
			{state.contentTitle ?
				<DigiText text={`DIGI CRAFT/${state.contentTitle}`} height={17} color={cssVars.color}/>
				:
				<DigiText text={`DIGI CRAFT WORKSHOP`} height={17} color={cssVars.color}/>
			}
		</header>
	)
}
