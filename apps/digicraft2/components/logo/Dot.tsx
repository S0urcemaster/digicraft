import * as React from 'react'
import {Position, usePosition} from './hooks'
import {useLocalStorage} from '../../lib/localStorageContext'
import {globals} from '../../lib/globals'

type Props = {
	position?: Position
	coords: number[]
	visible: boolean
	// x: number
	// y: number
}

export const maxX = 30

export default function Dot(props: Props) {

	const {brightness} = useLocalStorage()

	// const {position, setX, setY, setVisible} = usePosition(props.position!)
	//
	// function push(dx: number): Position {
	// 	if(dx >0) {
	// 		if(position.x +dx > maxX) {
	// 			position.visible = false
	// 			position.x = maxX
	// 		}
	// 		else position.x = position.x +dx
	// 	}
	// 	else if(dx <0) {
	// 		if(position.x -dx <0) {
	// 			position.visible = false
	// 			position.x = 0
	// 		}
	// 		else position.x = position.x -dx
	// 	}
	// 	return {x: position.x, y: position.y, visible: position.visible}
	// }
	//
	function getPositionX(x: number) {
		return (x -1) * 11 + 5 +33
	}

	function getPositionY(y: number) {
		return y *11 + 2 +11
	}

	function getColor() {
		switch(brightness) {
			case 'dark':
				return '#fff'
			case 'darkLight':
				return '#afafaf'
			case 'lightLight':
				return '#cdcdcd'
			case 'light':
				return '#fff'
			case 'blue':
				return '#0067ff'
		}
	}

	return (
		<>
			{props.visible ?
				<circle cx={getPositionX(props.coords[0])} cy={getPositionY(props.coords[1])} r="4"
				fill={getColor()}/>
				: ''}
		</>
	)
}