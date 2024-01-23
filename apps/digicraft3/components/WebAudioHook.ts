import { useRef, useState } from 'react'

type WebAudio = {
	htmlAudioElement: HTMLAudioElement | null
	setStream: (input: string) => void
	playing: boolean
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
	const audio = useRef<WebAudio>({
		htmlAudioElement: null,
		setStream: setStream,
		playing: false,
		play: play,
		stop: stop,
		volume: 9,
		setVolume: setVolume
	})

	function setVolume(volume: number) {
		stop()
		audio.current.volume = volume
		play()
	}

	function play() {
		audio.current.playing = true
		audio.current.htmlAudioElement!.volume = audio.current.volume/ 10
		audio.current.htmlAudioElement?.play()
	}

	function stop() {
		audio.current.playing = false
		audio.current.htmlAudioElement!.pause()
	}

	function setStream(stream: string) {
		if(audio.current.playing) {
			audio.current.htmlAudioElement!.pause()
		}
		audio.current.htmlAudioElement = new Audio(stream)
		if(audio.current.playing) {
			audio.current.htmlAudioElement!.volume = audio.current.volume/ 10
			audio.current.htmlAudioElement?.play()
		}
	}

	return audio.current
}