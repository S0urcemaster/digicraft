import { useState } from 'react'

type WebAudio = {
	htmlAudioElement: HTMLAudioElement | null
	setStream: (input: string) => void
	play: () => void
	stop: () => void
	setVolume: (volume: number) => void
}

export function useWebAudio(): WebAudio {
	const [audio, setAudio] = useState<WebAudio>({
		htmlAudioElement: null,
		setStream: setStream,
		play: play,
		stop: stop,
		setVolume: setVolume
	})

	function setVolume(volume: number) {
		audio.htmlAudioElement!.volume = volume/ 100
	}

	function play() {
		audio.htmlAudioElement?.play()
	}

	function stop() {
		audio.htmlAudioElement?.pause()
	}

	function setStream(stream: string) {
		audio.htmlAudioElement = new Audio(stream)
		// setAudio({...audio, htmlAudioElement: new Audio(stream)})
	}

	return audio
}