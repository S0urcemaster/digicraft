import * as React from 'react'
import cssVars from '../../vars.module.scss'

type Props = {
	year: number
	month: number
	day: number
}

export function DateCircle({year, month, day}: Props) {

	const center = 100
	const radius = 100

	const daysInMonth = new Date(year, month, 0).getDate()

	const [x1, y1]: [number, number] = (() => {
		const angle = ((day -1) / daysInMonth) * 360 -90
		const radians = (angle * Math.PI) / 180
		const x = center + radius * Math.cos(radians)
		const y = center + radius * Math.sin(radians)
		return [ x, y ];
	})()

	const [x2, y2]: [number, number] = (() => {
		const angle = ((day) / daysInMonth) * 360 -90
		const radians = (angle * Math.PI) / 180
		const x = center + radius * Math.cos(radians)
		const y = center + radius * Math.sin(radians)
		return [ x, y ];
	})()


	const monthName = new Intl.DateTimeFormat('de-DE', {month: 'short'}).format(new Date(year, month - 1, day));

	return (
		<svg id="clock" width="50" height="50" viewBox={'0 0 200 200'} xmlns="http://www.w3.org/2000/svg">
			{/*<line x1="100" y1="100" x2={x2} y2={y2} stroke="red" strokeWidth={4} />*/}
			<circle cx={center} cy={center} r={radius} fill={cssVars.cream} stroke={'none'} strokeWidth={4} />
			<line x1={center} y1={15} x2={center} y2={0} stroke={cssVars.color} strokeWidth={2} />
			<path d={`M${center},${center} L${x1},${y1} A${radius},${radius} 0 0,1 ${x2},${y2} Z`} fill={cssVars.pageBg} />

			<text x="100" y="100" textAnchor="middle" dominantBaseline="middle" fontSize="50" fill={cssVars.color}>
				<tspan x="100" dy="-0.5em">{monthName}</tspan>
				<tspan x="100" dy="1.3em">{year -2000}</tspan>
			</text>

		</svg>

	)
}