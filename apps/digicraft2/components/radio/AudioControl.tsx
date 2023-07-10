import {useEffect, useRef, useState} from 'react'
import {useLocalStorage} from '../../lib/localStorageContext'
import * as React from 'react'
import {Stream} from './Radio'
import Button from './Button'

export default function AudioControl(props: {stream: Stream|undefined}) {

	const [playing, setPlaying] = useState(false)
	const [muted, setMuted] = useState(false)
	const audio = useRef<HTMLAudioElement|null>()
	const {radioPinned} = useLocalStorage()

	useEffect(() => {
		audio.current?.pause()
		audio.current = null
	}, [radioPinned])

	useEffect(() => {
		if(playing && props.stream) {
			audio.current?.pause()
			audio.current = new Audio(props.stream.streamUrl())
			audio.current!.volume = props.stream.volume
			audio.current.play()
		} else {
			audio.current?.pause()
			audio.current = null
		}
	}, [playing])

	useEffect(() => {
		audio.current?.pause()
		if(playing && props.stream) {
			audio.current = new Audio(props.stream.streamUrl())
			audio.current!.volume = props.stream.volume
			audio.current.play()
		}
	}, [props.stream])

	function toggleMuted() {
		if(audio.current) {
			audio.current.muted = !audio.current.muted
			setMuted(audio.current.muted)
		}
	}

	return (
		<>
			<Button clicked={toggleMuted} id={'soundOff'} bx={65.956711} by={119.73102} bwidth={5.1540036} bheight={4.8842392} onSwitched={muted} />
			<Button clicked={() => setPlaying(true)} id={'play'} bx={72.111061} by={119.73102} bwidth={5.1540036} bheight={4.8842392} onSwitched={playing} />
			<Button clicked={() => setPlaying(false)} id={'stop'} bx={78.265411} by={119.73102} bwidth={5.1540036} bheight={4.8842392} />
		</>
	)
}