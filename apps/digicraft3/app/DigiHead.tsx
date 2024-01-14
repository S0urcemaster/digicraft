'use client'

import * as React from 'react'
import { useDigiCraftContext } from './DigiCraftContext'
import DigiText from '../components/svg/logo/DigiText'
import { useRouter } from 'next/navigation'
import cssVars from '../vars.module.scss'
import { useWebAudio } from '../components/AudioHook'
import { useEffect } from 'react'
import { HeaderPlayer } from './digi_radio/components/HeaderPlayer'

export default function DigiHead() {

	const {state, setContentTitle, setContextLoaded} = useDigiCraftContext()
	const router = useRouter()

	function top() {
		setContextLoaded(false)
		setContentTitle(undefined)
		router.push('/')
	}

	const commaSep = state.contentTitle?.split('').join(',')

	return (
		<header>
			{state.contentTitle ?
				<div style={{display: 'flex', justifyContent: 'space-between'}}>
					<DigiText text={`D,I,G,I, ,C,R,A,F,T,/,${commaSep}`} height={17} color={cssVars.logoBg} onClick={top} style={{cursor: 'pointer', marginTop: 4}} />
					<HeaderPlayer />
				</div>
				:
				// <DigiText text={`D,I,G,I, ,C,R,A,F,T, ,W,O,R,K,S,H,O,P`} height={17} color={cssVars.color}/>
				<div style={{paddingTop: 4, cursor: 'pointer'}}>
					<DigiText text={`1,2,3,4,5,6,7,8,9,0,stop,play,play_pressed,left,right,speaker,speaker_off,plus,minus`} height={17} color={cssVars.logoBg} onClick={top} />
				</div>
			}
		</header>
	)
}
