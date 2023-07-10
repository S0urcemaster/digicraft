import {useState} from 'react'
import * as React from 'react'

export default function Button(props: {id: string, tx?: number, ty?: number, bx: number, by: number, bwidth: number, bheight: number,
	bold?: boolean, clicked: (id: string) => void, onSwitched?: boolean}) {

	const [mouseIn, setMouseIn] = useState(false)

	function text() {
		switch(props.id) {
			case('soundOff'):
				return <path style={{pointerEvents: 'none'}} id="path14534" fill={'#5a5a5a'} stroke={'#ffffff'} strokeWidth={0.101068} strokeLinecap={'round'} d="m 68.742555,120.89598 c 0.0663,0.03 0.108968,0.0957 0.108968,0.16833 v 2.21388 c 0,0.0727 -0.04267,0.13837 -0.108968,0.16833 -0.0663,0.03 -0.144132,0.0179 -0.198325,-0.0305 l -0.777732,-0.69126 h -0.390884 c -0.203515,0 -0.368977,-0.16546 -0.368977,-0.36898 v -0.36898 c 0,-0.20351 0.165462,-0.36898 0.368977,-0.36898 h 0.390884 l 0.777732,-0.69124 c 0.05419,-0.0484 0.132024,-0.0599 0.198325,-0.0306 z m 0.714315,0.76217 0.31709,0.31709 0.317088,-0.31709 c 0.05419,-0.0542 0.141825,-0.0542 0.195442,0 0.05363,0.0543 0.05419,0.14182 0,0.19544 l -0.317089,0.31709 0.317089,0.31709 c 0.05419,0.0542 0.05419,0.14182 0,0.19544 -0.05419,0.0537 -0.141825,0.0543 -0.195442,0 l -0.317088,-0.31708 -0.31709,0.31708 c -0.05419,0.0543 -0.141825,0.0543 -0.195442,0 -0.05363,-0.0543 -0.05419,-0.14182 0,-0.19544 l 0.317089,-0.31709 -0.317089,-0.31709 c -0.05419,-0.0541 -0.05419,-0.14183 0,-0.19544 0.05419,-0.0537 0.141825,-0.0542 0.195442,0 z"/>
			case('play'):
				return <path style={{pointerEvents: 'none'}} id="path3197" fill={'#5a5a5a'} stroke={'#ffffff'} strokeWidth={0.1} strokeOpacity={0} d="m 74.158974,120.88965 c -0.08562,-0.0526 -0.193217,-0.0544 -0.28057,-0.005 -0.08734,0.0493 -0.141731,0.14173 -0.141731,0.24239 v 2.0363 c 0,0.10065 0.05438,0.19322 0.141731,0.24238 0.08734,0.0491 0.194953,0.0469 0.28057,-0.005 l 1.666063,-1.01814 c 0.08272,-0.0504 0.133053,-0.14 0.133053,-0.23718 0,-0.0972 -0.05034,-0.18628 -0.133053,-0.23718 z"/>
			case('stop'):
				return <path style={{pointerEvents: 'none'}} id="path4288" d="m 79.768196,121.41745 c 0,-0.1936 0.157402,-0.351 0.351002,-0.351 h 1.404005 c 0.1936,0 0.351002,0.1574 0.351002,0.351 v 1.404 c 0,0.1936 -0.157402,0.35101 -0.351002,0.35101 h -1.404005 c -0.1936,0 -0.351002,-0.15741 -0.351002,-0.35101 z" fill={'#5a5a5a'} stroke={'#f4f4f4'} strokeWidth={0.1} strokeOpacity={0} />
		}
		return <text style={{pointerEvents: 'none'}} fontWeight={props.bold ? 'bold' : 'normal'} fontSize={'2.85'} fill={'#5a5a5a'} strokeWidth={0.264583} x={props.tx} y={props.ty} id={'t' +props.id}>
			{props.id}
		</text>
	}

	return (
		<g onMouseEnter={() => setMouseIn(true)} onMouseLeave={() => setMouseIn(false)} onClick={() => props.clicked(props.id)}>
			<rect
				fill={mouseIn ? '#fff0b4' : props.onSwitched ? '#ff949d' : '#d1d1d1'} opacity={1}
				stroke={'#ffffff'} strokeWidth={0.2} id={'b' +props.id} width={props.bwidth} height={props.bheight} x={props.bx} y={props.by} ry="0.1659188" />
			{text()}
		</g>
	)
}