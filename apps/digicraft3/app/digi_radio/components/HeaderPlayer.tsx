import * as React from 'react'
import cssVars from '../../../vars.module.scss'
import DigiText from '../../../components/svg/logo/DigiText'
import { useWebAudio } from '../../../components/AudioHook'
import { useEffect, useState } from 'react'
import { HeaderButton } from '../../DigiHead'
import { radiostreams } from '../../../cms/radiostreams'

export function HeaderPlayer() {

	const audio = useWebAudio()

	const [speakerOn, setSpeakerOn] = useState(true)
	const [playOn, setPlayOn] = useState(false)
	const [volume, setVolume] = useState(5)
	const [currentStream, setCurrentStream] = useState(0)

	useEffect(() => {
		audio.setStream(radiostreams[currentStream].streamUrl())
	}, [])

	function prevStream() {
		let cs = currentStream
		if(cs === 0) cs = radiostreams.length -1
		else cs--
		setCurrentStream(cs)
		audio.setStream(radiostreams[cs].streamUrl())
	}

	function nextStream() {
		let cs = currentStream
		if(cs === radiostreams.length -1) cs = 0
		else cs++
		setCurrentStream(cs)
		audio.setStream(radiostreams[cs].streamUrl())
	}

	function play() {
		if(playOn) {
			audio.stop()
			setPlayOn(false)
		} else {
			audio.play()
			setPlayOn(true)
		}
	}

	function volumeUp() {
		let v = volume
		v < 9 ? v++ : v = 9
		audio.setVolume(v *10)
		setVolume(v)
	}

	function volumeDown() {
		let v = volume
		v > 0 ? v-- : v = 0
		audio.setVolume(v *10)
		setVolume(v)
	}

	return (
		<div className={'header-player'} style={{paddingLeft: 8, paddingTop: 4}}>
			<HeaderButton
				onText={'left'}
				offText={'left'}
				height={17}
				onColor={cssVars.color}
				offColor={cssVars.color}
				initialOn={false}
				style={{marginRight: 10}}
				onClick={prevStream}
			/>
			<DigiText text={radiostreams[currentStream].host.split('').join()} height={17} color={cssVars.color} style={{paddingRight: 10}}/>
			<HeaderButton
				onText={'right'}
				offText={'right'}
				height={17}
				onColor={cssVars.color}
				offColor={cssVars.color}
				initialOn={false}
				style={{ marginRight: 10}}
				onClick={nextStream}
			/>
			<HeaderButton
				onText={'minus'}
				offText={'minus'}
				height={17}
				onColor={cssVars.color}
				offColor={cssVars.color}
				initialOn={false}
				style={{ marginRight: 2}}
				onClick={volumeDown}
			/>
			<DigiText
				text={volume.toString()}
				height={17}
				color={cssVars.color}
				style={{marginRight: 2, minWidth: 20}}
			/>
			<HeaderButton
				onText={'plus'}
				offText={'plus'}
				height={17}
				onColor={cssVars.color}
				offColor={cssVars.color}
				initialOn={false}
				style={{ marginRight: 10}}
				onClick={volumeUp}
			/>
			<HeaderButton
				onText={'play'}
				offText={'play'}
				height={17}
				onColor={cssVars.magenta}
				offColor={cssVars.color}
				initialOn={playOn}
				style={{ marginRight: 10}}
				onClick={play}
			/>
			{/*<DigiText text={'play'} height={17} color={cssVars.color} onClick={() => audio.play()} style={{cursor: 'pointer', paddingRight: 10}} />*/}
		</div>
	)
}