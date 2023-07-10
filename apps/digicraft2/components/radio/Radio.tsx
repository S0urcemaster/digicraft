import * as React from 'react'
import {useEffect, useRef, useState} from 'react'
import {useLocalStorage} from '../../lib/localStorageContext'
import Display from './Display'
import Volume from './Volume'
import AudioControl from './AudioControl'
import Stations from './Stations'
import Casing from './Casing'

export type Stream = {
	host: string
	hostUrl: string
	streamUrl: () => string
	volume: number
}

const streams:Stream[] = [
	{host: 'SWR3', hostUrl: '', volume: 0.8, streamUrl: () => 'https://liveradio.swr.de/sw282p3/swr3/play.mp3' + '?date=' + new Date().getTime()},
	{host: 'DASDING', hostUrl: '', volume: 0.8, streamUrl: () => 'https://liveradio.swr.de/sw282p3/dasding/play.mp3' + '?date=' + new Date().getTime()},
	{host: 'Deutschlandfunk Nova', hostUrl: '', volume: 1, streamUrl: () => 'https://st03.sslstream.dlf.de/dlf/03/128/mp3/stream.mp3?aggregator=web' + '&date=' + new Date().getTime()},
	{host: 'Deutschlandfunk', hostUrl: '', volume: 1, streamUrl: () => 'https://st01.sslstream.dlf.de/dlf/01/128/mp3/stream.mp3?aggregator=web' +'&date=' +new Date().getTime()},
	{host: 'rm.fm', hostUrl: '', volume: 0.6, streamUrl: () => 'https://techhouse-high.rautemusik.fm/stream.mp3?ref=rm5beta' +'&date=' +new Date().getTime()},
	{host: 'sunshine live', hostUrl: '', volume: 0.6, streamUrl: () => 'https://stream.sunshine-live.de/live/mp3-192/homepage/' +'&date=' +new Date().getTime()},
	{host: 'lounge plus', hostUrl: '', volume: 1, streamUrl: () => 'https://loungeplus-live.cast.addradio.de/loungeplus/live/mp3/mid?ar-distributor=f0b7' +'&date=' +new Date().getTime()},
	{host: 'beats radio', hostUrl: '', volume: 1, streamUrl: () => 'https://live.streams.klassikradio.de/beats-radio?aggregator=Webseite&mode=preroll' +'&date=' +new Date().getTime()},
]

export default function Radio() {

	const [stream, setStream] = useState<Stream|undefined>()

	useEffect(() => {
		setStream(streams[0])
	}, [])

	function clicked(id: number) {
		setStream(streams[id -1])
	}

	return (
		<svg width="276.15396" height="129.69286" viewBox="0 0 73.065734 34.314568" version="1.1" id="svg5" xmlns="http://www.w3.org/2000/svg">
			<defs id="defs2">
				<linearGradient id="linearGradient9639">
					<stop color={'#282828'} opacity={'1'} offset="0" id="stop9637" />
				</linearGradient>
			</defs>
			<g id="layer1" transform="matrix(1.5,0,0,1.5,-79.288453,-172.80531)">
				<Casing />
				<Display stream={stream} />
				<Volume stream={stream} />
				<AudioControl stream={stream} />
				<Stations clicked={clicked} />

				<text style={{pointerEvents: 'none'}} xmlSpace="preserve" fontStyle={'italic'} fontWeight={'bold'} fontSize={'2.75px'} fill={'#ffffff'} strokeWidth={0.264583} x="65.809975" y="118.7" id="text379">
					Digi Radio
				</text>
				<path fill={'none'} stroke={'#ffffff'} strokeWidth={0.2} strokeLinecap={'round'} d="M 65.957997,125.49725 H 83.395042" id="path11608" />
			</g>
		</svg>

	)
}