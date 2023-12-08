'use client'

import * as React from 'react'
import { useDigiCraftContext } from './DigiCraftContext'
import DigiText from '../components/svg/logo/DigiText'
import { useRouter } from 'next/navigation'
import cssVars from '../vars.module.scss'
import { useWebAudio } from '../components/AudioHook'
import { useEffect } from 'react'

export default function DigiHead() {

	const {state, setContentTitle, setContextLoaded} = useDigiCraftContext()
	const router = useRouter()

	const audio = useWebAudio()

	useEffect(() => {
		audio.setStream('https://liveradio.swr.de/sw282p3/swr3/play.mp3')
		audio.setVolume(50)
		audio.play()
	}, [])

	function top() {
		setContextLoaded(false)
		setContentTitle(undefined)
		router.push('/')
	}

	const commaSep = state.contentTitle?.split('').join(',')

	return (
		<header onClick={top}>
			{state.contentTitle ?
				<DigiText text={`D,I,G,I, ,C,R,A,F,T,/,${commaSep}`} height={17} color={cssVars.color}/>
				:
				// <DigiText text={`D,I,G,I, ,C,R,A,F,T, ,W,O,R,K,S,H,O,P`} height={17} color={cssVars.color}/>
				<DigiText text={`1,2,3,4,5,6,7,8,9,0,stop,play,play_pressed,left,right,speaker,speaker_off`} height={17} color={cssVars.color}/>
			}
		</header>
	)
}
