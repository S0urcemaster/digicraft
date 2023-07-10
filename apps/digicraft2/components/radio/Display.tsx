import * as React from 'react'
import {Stream} from './Radio'

export default function Display(props: {stream: Stream|undefined}) {

	function Station() {
		switch(props.stream?.host) {
			case 'SWR3':
				return <text style={{pointerEvents: 'none'}} fontSize={'2.5'} fill={'#5a5a5a'} strokeWidth={0.264583} x={85.2} y={119}>
					{props.stream.host}</text>
			case 'DASDING':
				return <text style={{pointerEvents: 'none'}} fontSize={'2.5'} fill={'#5a5a5a'} strokeWidth={0.264583} x={85.2} y={119}>
					{props.stream.host}</text>
			case 'Deutschlandfunk Nova':
				return (
					<>
						<text style={{pointerEvents: 'none'}} fontSize={'2.5'} fill={'#5a5a5a'} strokeWidth={0.264583} x={85.2} y={119}>
							Deutsch-</text>
						<text style={{pointerEvents: 'none'}} fontSize={'2.5'} fill={'#5a5a5a'} strokeWidth={0.264583} x={85.2} y={122}>
							landfunk</text>
						<text style={{pointerEvents: 'none'}} fontSize={'2.5'} fill={'#5a5a5a'} strokeWidth={0.264583} x={85.2} y={125}>
							Nova</text>
					</>
				)
			case 'Deutschlandfunk':
				return (
					<>
						<text style={{pointerEvents: 'none'}} fontSize={'2.5'} fill={'#5a5a5a'} strokeWidth={0.264583} x={85.2} y={119}>
							Deutsch-</text>
						<text style={{pointerEvents: 'none'}} fontSize={'2.5'} fill={'#5a5a5a'} strokeWidth={0.264583} x={85.2} y={122}>
							landfunk</text>
					</>
				)
			case 'rm.fm':
				return (
					<>
						<text style={{pointerEvents: 'none'}} fontSize={'2.5'} fill={'#5a5a5a'} strokeWidth={0.264583} x={85.2} y={119}>
							rm.fm</text>
						<text style={{pointerEvents: 'none'}} fontSize={'2.5'} fill={'#5a5a5a'} strokeWidth={0.264583} x={85.2} y={122}>
							Techhouse</text>
					</>
				)
			case 'sunshine live':
				return (
					<>
						<text style={{pointerEvents: 'none'}} fontSize={'2.5'} fill={'#5a5a5a'} strokeWidth={0.264583} x={85.2} y={119}>
							sunshine</text>
						<text style={{pointerEvents: 'none'}} fontSize={'2.5'} fill={'#5a5a5a'} strokeWidth={0.264583} x={85.2} y={122}>
							live</text>
					</>
				)
			case 'lounge plus':
				return (
					<>
						<text style={{pointerEvents: 'none'}} fontSize={'2.5'} fill={'#5a5a5a'} strokeWidth={0.264583} x={85.2} y={119}>
							lounge</text>
						<text style={{pointerEvents: 'none'}} fontSize={'2.5'} fill={'#5a5a5a'} strokeWidth={0.264583} x={85.2} y={122}>
							plus</text>
					</>
				)
			case 'beats radio':
				return (
					<>
						<text style={{pointerEvents: 'none'}} fontSize={'2.5'} fill={'#5a5a5a'} strokeWidth={0.264583} x={85.2} y={119}>
							beats</text>
						<text style={{pointerEvents: 'none'}} fontSize={'2.5'} fill={'#5a5a5a'} strokeWidth={0.264583} x={85.2} y={122}>
							radio</text>
					</>
				)
		}
		return <></>
	}

	return (
		<>
			<rect fill={'#d1d1d1'} opacity={1} stroke={'#ffffff'} strokeWidth={0.2} strokeOpacity={1} id="list" width="15.414782" height="20.876774" x="84.803726" y="116.23913" ry="0.24766761" />
			<Station />
		</>
	)
}