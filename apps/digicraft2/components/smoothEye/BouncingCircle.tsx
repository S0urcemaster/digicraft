import {FC, RefObject, useRef, useState} from 'react'
import {Button} from '../ui/Form'
import * as React from 'react'
import useMotion from './useMotion'
import {Spacer} from '../ui/Layout'

type BouncingCircleProps = {
	radius: number
	speed: number
	width: number
	height: number
}

export default function BouncingCircle({ radius, speed, width, height }: BouncingCircleProps) {

	const {position, start, stop, update} = useMotion({speed: speed, radius: radius, clientWidth: width, clientHeight: height, direction: 5})
	const [range, setRange] = useState(radius)
	const [direction, setDirection] = useState(5)
	const [spd, setSpd] = useState(speed)

	function updateRadius(radius: number) {
		setRange(radius)
		update(radius, direction, spd)
	}

	function updateDirection(dir: number) {
		setDirection(dir)
		update(radius, dir, spd)
	}

	function updateSpeed(spd: number) {
		setSpd(spd)
		update(radius, direction, spd)
	}

	return (
		<>
			<div style={{display: 'flex', alignContent: 'baseline', gap: 10, background: 'lightgrey', padding: '5px 0 5px 5px'}}>
				<Button onClick={() => start()}>Start</Button>
				<Button onClick={() => stop()}>Stop</Button>
				<div style={{display: 'flex', alignContent: 'baseline'}}>
					<span style={{paddingTop: 3}}>&nbsp;Radius: </span>
					<input type={'range'} style={{paddingTop: 0}} value={range} min={10} max={40} onChange={event => updateRadius(Number(event.target.value))} />
				</div>
				<div style={{display: 'flex', alignContent: 'baseline'}}>
					<span style={{paddingTop: 3}}>&nbsp;Richtung: </span>
					<input type={'range'} style={{paddingTop: 0}} value={direction} min={1} max={10} onChange={event => updateDirection(Number(event.target.value))} />
				</div>
				<div style={{display: 'flex', alignContent: 'baseline'}}>
					<span style={{paddingTop: 3}}>&nbsp;Geschwindigkeit: </span>
					<input type={'range'} style={{paddingTop: 0}} value={spd} min={150} max={500} onChange={event => updateSpeed(Number(event.target.value))} />
				</div>
			</div>
			<Spacer height={10} />
			<svg style={{width: '100%', height: '100%', background: 'lightgray'}}>
				<defs>
					{/*<radialGradient id="gradient">*/}
					{/*	<stop offset="0%" stopColor="black" />*/}
					{/*	<stop offset="100%" stopColor="lightGray" />*/}
					{/*</radialGradient>*/}
				</defs>
				{/*<circle cx={position.x} cy={position.y} r={radius} fill="url('#gradient')" />*/}
				<circle cx={position.x} cy={position.y} r={range} fill={'#ffffff'} />
			</svg>
		</>
	)
}
