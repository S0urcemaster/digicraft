'use client'

import * as React from 'react'
import { useDigiCraftContext } from './DigiCraftContext'
import DigiText from '../components/svg/logo/DigiText'
import { useRouter, usePathname } from 'next/navigation'
import cssVars from '../vars.module.scss'
import { CSSProperties, useEffect, useState } from 'react'
import { HeaderPlayer } from './music/components/HeaderPlayer'
import { routes } from './routes'

export function HeaderButton(
	{
		onText,
		offText,
		onColor,
		offColor,
		height,
		initialOn,
		onClick,
		style,
	} :
	{
		onText: string,
		offText: string,
		onColor: string,
		offColor: string,
		height: number
		initialOn: boolean,
		onClick: (state: boolean) => void,
		style?: CSSProperties,
	})
{
	const [on, setOn] = useState(initialOn)
	const [color, setColor] = useState(initialOn ? onColor : offColor)

	function click() {
		setOn(!on)
		setColor(!on ? onColor : offColor)
		onClick(!on)
	}

	return (
		<DigiText
			text={on ? onText : offText}
			onClick={click}
			color={on ? onColor : offColor}
			height={height}
			style={{cursor: 'pointer', ...style}} />
	)
}

export default function DigiHead() {

	const {state, setContentTitle, setContextLoaded} = useDigiCraftContext()
	const router = useRouter()
	const pathname = usePathname()

	useEffect(() => {
	}, [pathname])

	function top() {
		setContextLoaded(false)
		setContentTitle(undefined)
		router.push('/')
	}

	return (
		<header>
			{state.contentTitle ?
				<div style={{display: 'flex', justifyContent: 'space-between'}}>
					<DigiText text={`Digi Craft/${state.contentTitle}`.toUpperCase().split('').join(',')} height={17} color={cssVars.logoBg} onClick={top} style={{cursor: 'pointer', marginTop: 4}} />
					{pathname === '/' ?
						<HeaderPlayer />
						: null}
					{pathname === routes.music.path ?
						<HeaderPlayer />
						: null}
				</div>
				:
				<DigiText text={'Digi Craft'.toUpperCase().split('').join(',')} height={17} color={cssVars.logoBg} style={{cursor: 'pointer', marginTop: 4}} />
				// <div style={{paddingTop: 4, cursor: 'pointer'}}>
				// 	<DigiText text={`1,2,3,4,5,6,7,8,9,0,stop,play,play_pressed,left,right,speaker,speaker_off,plus,minus`} height={17} color={cssVars.logoBg} onClick={top} />
				// </div>
			}
		</header>
	)
}
