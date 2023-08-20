import * as React from 'react'
import {Day as DayType, useWorktimeContext} from './worktimeContext'
import {getShortDay, padZero} from './lib'
import {useState} from 'react'

type DayProps = {
	x: number
	y: number
	day: DayType
	onClick: Function
	future: boolean
	selected: boolean
}

export default function Day({x, y, day, onClick, future, selected}: DayProps) {

	const {dayWidth, dayHeight} = useWorktimeContext()

	const [mouseIn, setMouseIn] = useState(false)

	function getDayOfMonth() {
		return (
			day.date.getDate() > 9 ?
				<text x={x + 6} y={y + 39} fontSize={16} style={{cursor: 'default'}}
						fill={'#e0e0e0'}>{day.date.getDate()}</text> :
				<text x={x + 10} y={y + 39} fontSize={16} style={{cursor: 'default'}}
						fill={'#e0e0e0'}>{day.date.getDate()}</text>
		)
	}

	function Line(props: { x: number, y: number, color: string }) {
		return (
			<line x1={props.x} y1={props.y} x2={props.x + 15} y2={props.y} stroke={props.color} strokeWidth={'1px'}/>
		)
	}

	function getHours(color: string) {
		const hours = Math.floor(day.hoursWorked)
		return (
			<>
				{hours < 10 ?
					<text x={x + 11} y={y + 33} fontSize={16} style={{cursor: 'default'}}
							fill={color}>{hours}</text>
					:
					<text x={x + 5} y={y + 33} fontSize={16} style={{cursor: 'default'}}
							fill={'#159f12'}>{hours}</text>
				}
			</>
		)
	}

	function getMinutes(color: string) {
		return (
			<>
				<text x={x + 8} y={y + 48} fontSize={12} style={{cursor: 'default'}}
						fill={color}>{padZero(Math.floor((day.hoursWorked * 60) % 60))}</text>
			</>
		)
	}

	function getHoursWorked() {
		return (
			day.hoursWorked >= 5 ?
				<>
					{getHours('#159f12')}
					<Line x={x + 8} y={y + 36} color={'#159f12'}/>
					{getMinutes('#159f12')}
				</>
				:
				<>
					{getHours('#ab3b21')}
					<Line x={x + 8} y={y + 36} color={'#ab3b21'}/>
					{getMinutes('#ab3b21')}
				</>
		)
	}

	return (
		<g onMouseEnter={() => setMouseIn(true)} onMouseLeave={() => setMouseIn(false)}
			onClick={future ? () => {} : () => onClick(day)}>
			<rect x={x} y={y} width={dayWidth} height={dayHeight} style={{}}
					fill={mouseIn || selected ? '#d3edff' : future ? '#c2c2c2' : '#fff'}/>
			<text x={x + 8} y={y + 12} fontSize={10}
					style={{cursor: 'default'}}>{getShortDay(day.date)}</text>
			{day && day.hoursWorked > 0 ?
				getHoursWorked()
				:
				getDayOfMonth()
			}
		</g>
	)
}
