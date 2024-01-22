import { useState } from 'react'

type WebAudio = {
	htmlAudioElement: HTMLAudioElement | null
	stream: string
	setStream: (input: string) => void
	play: () => void
	stop: () => void
	volume: number
	setVolume: (volume: number) => void
}

export type RadioStream = {
	host: string
	hostUrl: string
	streamUrl: () => string
	volume: number
}

export function useWebAudio(): WebAudio {
	const [audio, setAudio] = useState<WebAudio>({
		htmlAudioElement: null,
		stream: '',
		setStream: setStream,
		play: play,
		stop: stop,
		volume: 5,
		setVolume: setVolume
	})

	const [playing, setPlaying] = useState(false)

	function setVolume(volume: number) {
		console.log("logsntr", "volume", volume)
		audio.volume = volume
		console.log("logsntr", "volume", volume)
	}

	function play() {
		audio.htmlAudioElement!.volume = audio.volume/ 100
		audio.htmlAudioElement?.play()
		setPlaying(true)
	}

	function stop() {
		audio.htmlAudioElement?.pause()
		setPlaying(false)
	}

	function setStream(stream: string) {
		audio.stream = stream
		if(playing) {
			audio.htmlAudioElement?.pause()
		}
		audio.htmlAudioElement = new Audio(audio.stream)
		if(playing) {
			audio.htmlAudioElement!.volume = audio.volume/ 100
			audio.htmlAudioElement?.play()
		}
	}

	return audio
}