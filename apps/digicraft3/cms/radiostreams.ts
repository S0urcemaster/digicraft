import { RadioStream } from '../components/AudioHook'

export const radiostreams:RadioStream[] = [
	{host: 'SWR3', hostUrl: '', volume: 0.8, streamUrl: () => 'https://liveradio.swr.de/sw282p3/swr3/play.mp3' + '?date=' + new Date().getTime()},
	{host: 'DASDING', hostUrl: '', volume: 0.8, streamUrl: () => 'https://liveradio.swr.de/sw282p3/dasding/play.mp3' + '?date=' + new Date().getTime()},
	{host: 'DEUTSCHL.F. NOVA', hostUrl: '', volume: 1, streamUrl: () => 'https://st03.sslstream.dlf.de/dlf/03/128/mp3/stream.mp3?aggregator=web' + '&date=' + new Date().getTime()},
	{host: 'DEUTSCHLANDFUNK', hostUrl: '', volume: 1, streamUrl: () => 'https://st01.sslstream.dlf.de/dlf/01/128/mp3/stream.mp3?aggregator=web' +'&date=' +new Date().getTime()},
	{host: 'RM.FM', hostUrl: '', volume: 0.6, streamUrl: () => 'https://techhouse-high.rautemusik.fm/stream.mp3?ref=rm5beta' +'&date=' +new Date().getTime()},
	{host: 'SUNSHINE LIVE', hostUrl: '', volume: 0.6, streamUrl: () => 'https://stream.sunshine-live.de/live/mp3-192/homepage/' +'&date=' +new Date().getTime()},
	{host: 'LOUNGE PLUS', hostUrl: '', volume: 1, streamUrl: () => 'https://loungeplus-live.cast.addradio.de/loungeplus/live/mp3/mid?ar-distributor=f0b7' +'&date=' +new Date().getTime()},
	{host: 'BEATS RADIO', hostUrl: '', volume: 1, streamUrl: () => 'https://live.streams.klassikradio.de/beats-radio?aggregator=Webseite&mode=preroll' +'&date=' +new Date().getTime()},
]