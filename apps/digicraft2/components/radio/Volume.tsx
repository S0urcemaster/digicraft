import {useEffect, useState} from 'react'
import * as React from 'react'
import {Stream} from './Radio'

export default function Volume(props: {stream: Stream|undefined}) {
	const [mouseIn, setMouseIn] = useState(false)
	const [rotation, setRotation] = useState(1)

	useEffect(() => {
		props.stream && setRotation(props.stream.volume *270 -270)
	}, [props.stream])

	return (
		<g onMouseEnter={() => setMouseIn(true)} onMouseLeave={() => setMouseIn(false)} transform={`rotate(${rotation} 58.709579 120.89771)`}>
			<ellipse
				fill={mouseIn ? '#fff0b4' : '#d1d1d1'} opacity={1} stroke={'#ffffff'} strokeWidth={0.2} strokeOpacity={1} strokeDasharray={'none'} id="path5010" cx="58.709579" cy="120.89771" rx="4.6673865" ry="4.5039668" />
			<path fill={'#ffffff'} stroke={'#5a5a5a'} strokeWidth={0.21} strokeLinecap={'round'} d="m 58.686828,120.87541 h 4.687768" id="path11862" />
		</g>
	)
}