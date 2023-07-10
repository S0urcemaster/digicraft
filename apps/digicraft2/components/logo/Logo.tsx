import * as React from 'react'
import {useCallback, useEffect, useRef, useState} from 'react'
import Text from './Text'
import {useLocalStorage} from '../../lib/localStorageContext'
import {globals} from '../../lib/globals'

function useTimer(callback: Function):[number, Function] {

	const requestRef = useRef(0)
	const previousTimeRef = useRef(0)
	const [counter, setCounter] = useState({count: 0})
	const stop = useRef(false)
	const lock = useRef(false)

	function animate(time: any) {
		callback()
		if(!lock.current) {
			lock.current = true
			setCounter(prevCounter => {return { count: prevCounter.count +1}})
		}
		if(!stop.current) {
			requestRef.current = requestAnimationFrame(animate)
		}
	}

	useEffect(() => {
		requestRef.current = requestAnimationFrame(animate)
		return () => cancelAnimationFrame(requestRef.current)
	}, [])
	
	const stopTimer = useCallback(() => {
		stop.current = true
	}, [])

	useEffect(() => {
		// lock.current = false
	}, [counter])

	return [counter.count, stopTimer]
}

type Props = {

}

export default function Logo(props: Props) {

	const [visible, setVisible] = useState(true)
	const [x, setX] = useState(2)
	const {brightness} = useLocalStorage()

	useEffect(() => {
		setVisible(true)
	}, [])

	function Rect(props: {x: number, y: number, width: number, height: number, fill: string}) {
		return (
			<rect x={props.x} y={props.y} width={props.width} height={props.height} fill={props.fill} />
		)
	}

	function getSquaresColor() {
		switch(brightness) {
			case 'dark':
				return '#fff'
			case 'darkLight':
				return '#fff'
			case 'lightLight':
				return '#fff'
			case 'light':
				return '#fff'
			case 'blue':
				return '#d2e7ff'
		}
	}

	function getGradientColor() {
		// return [globals.brightness[brightness].boxBackground, globals.brightness[brightness].buttonShadow]
		switch(brightness) {
			case 'dark':
				return ['#fff', '#000']
			case 'darkLight':
				return ['#fff', '#2a2a2a']
			case 'lightLight':
				return ['#fff', '#000']
			case 'light':
				return ['#fff', '#000']
			case 'blue':
				return ['#d2e7ff', '#fff']
		}
		return ['#000', '#fff']
	}

	function getFillGradientColor() {
		// return [globals.brightness[brightness].boxBackground, globals.brightness[brightness].buttonShadow]
		switch(brightness) {
			case 'dark':
				return ['#000', '#000']
			case 'darkLight':
				return ['#000', globals.brightness[brightness].background]
			case 'lightLight':
				return ['#fff', globals.brightness[brightness].background]
			case 'light':
				return ['#fff', '#fff']
			case 'blue':
				return ['#0076ff', '#fff']
		}
		return ['#000', '#fff']
	}

	return (
		<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
			  viewBox="0 0 2000 80"
		>
			<title>digicraft punchcard logo</title>
			<defs>
				<linearGradient id="punchcard-gradient" x1="100%" y1="100%" x2="0%" y2="100%">
					<stop offset="0%" style={{stopColor: getGradientColor()[0], stopOpacity:0}} />
					<stop offset="100%" style={{stopColor: getGradientColor()[1], stopOpacity:1}} />
				</linearGradient>
				<pattern id="punchcard-pattern-v" x="0" y="0" width="11" height="11" patternUnits="userSpaceOnUse">
					<rect x="0" y="0" width="10" height="10" fill={getSquaresColor()} />
				</pattern>
				<pattern id="punchcard-pattern-h" x="0" y="-3" width="11" height="72" patternUnits="userSpaceOnUse">
					<rect x="0" y="0" width="11" height="10" fill="skyblue" />
					<rect x="0" y="11" width="10" height="44" fill="url(#punchcard-pattern-v)" />
					<rect x="0" y="55" width="10" height="10" fill={getSquaresColor()} />
					<rect x="0" y="66" width="11" height="10" fill="skyblue" />
				</pattern>
				<mask id="punchcard-mask" width="11" height="100%">
					<rect width="100%" height="70" fill="url(#punchcard-pattern-h)" />
				</mask>
				<linearGradient id="fillGradient">
					<stop offset="0%" stopColor={getFillGradientColor()[0]} />
					<stop offset="100%" stopColor={getFillGradientColor()[1]} />
				</linearGradient>
			</defs>
			<g id="logo">
				<rect x="0" y="0" width="100%" height="70px" fill="url('#fillGradient')" />
				<rect x="0" y="0" width="100%" height="100%" fill="url(#punchcard-gradient)"
						mask="url(#punchcard-mask)"
						style={{background: '#900'}}
				/>
				<g id="digi">
					<Text x={x} text={'DIGI CRAFT'} visible={visible} />
				</g>
			</g>
		</svg>
	)
}