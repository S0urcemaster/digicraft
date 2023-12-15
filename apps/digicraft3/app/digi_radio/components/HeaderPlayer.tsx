import * as React from 'react'
import cssVars from '../../../vars.module.scss'
import DigiText from '../../../components/svg/logo/DigiText'
import { useWebAudio } from '../../../components/AudioHook'
import { useEffect } from 'react'

export function HeaderPlayer() {

	const audio = useWebAudio()

	useEffect(() => {
		audio.setStream('https://liveradio.swr.de/sw282p3/swr3/play.mp3')
	}, [])

	return (
		<div className={'header-player'} style={{backgroundColor: cssVars.logoBg, paddingLeft: 8, paddingTop: 4}}>
			<DigiText text={'speaker'} height={17} color={cssVars.color} style={{cursor: 'pointer', paddingRight: 10}}/>
			<DigiText text={'T,E,C,H,N,O,S,C,O,U,T'} height={17} color={cssVars.color} style={{paddingRight: 10}}/>
			<DigiText text={'left'} height={17} color={cssVars.color} style={{cursor: 'pointer'}}/>
			<DigiText text={'1'} height={17} color={cssVars.color} style={{cursor: 'pointer'}}/>
			<DigiText text={'2'} height={17} color={cssVars.color} style={{cursor: 'pointer'}}/>
			<DigiText text={'3'} height={17} color={cssVars.color} style={{cursor: 'pointer'}}/>
			<DigiText text={'4'} height={17} color={cssVars.color} style={{cursor: 'pointer'}}/>
			<DigiText text={'5'} height={17} color={cssVars.color} style={{cursor: 'pointer'}}/>
			<DigiText text={'6'} height={17} color={cssVars.color} style={{cursor: 'pointer'}}/>
			<DigiText text={'7'} height={17} color={cssVars.color} style={{cursor: 'pointer'}}/>
			<DigiText text={'8'} height={17} color={cssVars.color} style={{cursor: 'pointer'}}/>
			<DigiText text={'right'} height={17} color={cssVars.color} style={{cursor: 'pointer', paddingRight: 10}}/>
			<DigiText text={'minus'} height={17} color={cssVars.color} style={{cursor: 'pointer'}}/>
			<DigiText text={'8'} height={17} color={cssVars.color}/>
			<DigiText text={'plus'} height={17} color={cssVars.color} style={{cursor: 'pointer', paddingRight: 10}}/>
			<DigiText text={'stop'} height={17} color={cssVars.color} onClick={() => audio.stop()}
						 style={{cursor: 'pointer'}}/>
			{/*<DigiText text={'play'} height={17} color={cssVars.color} onClick={() => audio.play()} style={{cursor: 'pointer', paddingRight: 10}} />*/}
		</div>
	)
}