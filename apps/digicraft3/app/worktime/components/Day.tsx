import * as React from 'react'
import {Day as DayType, useWorktimeContext} from './worktimeContext'
import {getShortDay, padZero} from './lib'
import {useState} from 'react'

export default function Day(props: { x: number, y: number, day: DayType, onClick: Function, future: boolean }) {

	const {dayWidth, dayHeight} = useWorktimeContext()

	const [mouseIn, setMouseIn] = useState(false)

	function getDayOfMonth() {
		return (
			props.day.date.getDate() > 9 ?
				<text x={props.x + 6} y={props.y + 39} fontSize={16} style={{cursor: 'default'}}
						fill={'#e0e0e0'}>{props.day.date.getDate()}</text> :
				<text x={props.x + 10} y={props.y + 39} fontSize={16} style={{cursor: 'default'}}
						fill={'#e0e0e0'}>{props.day.date.getDate()}</text>
		)
	}

	function Line(props: { x: number, y: number, color: string }) {
		return (
			<line x1={props.x} y1={props.y} x2={props.x + 15} y2={props.y} stroke={props.color} strokeWidth={'1px'}/>
		)
	}

	function getHours(color: string) {
		const hours = Math.floor(props.day.hoursWorked)
		return (
			<>
				{hours < 10 ?
					<text x={props.x + 11} y={props.y + 33} fontSize={16} style={{cursor: 'default'}}
							fill={color}>{hours}</text>
					:
					<text x={props.x + 5} y={props.y + 33} fontSize={16} style={{cursor: 'default'}}
							fill={'#159f12'}>{hours}</text>
				}
			</>
		)
	}

	function getMinutes(color: string) {
		return (
			<>
				<text x={props.x + 8} y={props.y + 48} fontSize={12} style={{cursor: 'default'}}
						fill={color}>{padZero(Math.floor((props.day.hoursWorked * 60) % 60))}</text>
			</>
		)
	}

	function getHoursWorked() {
		return (
			props.day.hoursWorked >= 5 ?
				<>
					{getHours('#159f12')}
					<Line x={props.x + 8} y={props.y + 36} color={'#159f12'}/>
					{getMinutes('#159f12')}
				</>
				:
				<>
					{getHours('#ab3b21')}
					<Line x={props.x + 8} y={props.y + 36} color={'#ab3b21'}/>
					{getMinutes('#ab3b21')}
				</>
		)
	}

	return (
		<g onMouseEnter={() => setMouseIn(true)} onMouseLeave={() => setMouseIn(false)}
			onClick={props.future ? () => {} : () => props.onClick(props.day)}>
			<rect x={props.x} y={props.y} width={dayWidth} height={dayHeight} style={{}}
					fill={mouseIn ? '#d3edff' : props.future ? '#c2c2c2' : '#fff'}/>
			<text x={props.x + 8} y={props.y + 12} fontSize={10}
					style={{cursor: 'default'}}>{getShortDay(props.day.date)}</text>
			{props.day && props.day.hoursWorked > 0 ?
				getHoursWorked()
				:
				getDayOfMonth()
			}
		</g>
	)
}
