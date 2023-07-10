import {useState} from 'react'
import * as React from 'react'
import Button from './Button'

export default function Stations(props: {clicked: (id: number) => void}) {

	const [active, setActive] = useState(1)

	function clicked(id: number) {
		setActive(id)
		props.clicked(id)
	}

	return (
		<>
			<Button clicked={() => clicked(1)} id={'1'} bx={54.035992} by={126.39487} bwidth={8.0642147} bheight={4.8940158} tx={57.221107} ty={129.90594} bold onSwitched={active === 1} />
			<Button clicked={() => clicked(2)} id={'2'} bx={63.035053} by={126.40807} bwidth={8.0642147} bheight={4.8940158} tx={66.229195} ty={129.90594} bold onSwitched={active === 2} />
			<Button clicked={() => clicked(3)} id={'3'} bx={54.052998} by={132.26625} bwidth={8.0642147} bheight={4.8940158} tx={57.221107} ty={135.7339} bold onSwitched={active === 3} />
			<Button clicked={() => clicked(4)} id={'4'} bx={63.035053} by={132.26625} bwidth={8.0642147} bheight={4.8940158} tx={66.229195} ty={135.7339} bold onSwitched={active === 4} />
			<Button clicked={() => clicked(5)} id={'5'} bx={72.111061} by={126.40807} bwidth={5.1540036} bheight={4.8842392} tx={73.948669} ty={129.90594} onSwitched={active === 5} />
			<Button clicked={() => clicked(6)} id={'6'} bx={78.265411} by={126.40807} bwidth={5.1540036} bheight={4.8842392} tx={79.929985} ty={129.90594} onSwitched={active === 6} />
			<Button clicked={() => clicked(7)} id={'7'} bx={72.111061} by={132.26625} bwidth={5.1540036} bheight={4.8842392} tx={73.948669} ty={135.7339} onSwitched={active === 7} />
			<Button clicked={() => clicked(8)} id={'8'} bx={78.265411} by={132.26625} bwidth={5.1540036} bheight={4.8842392} tx={79.929985} ty={135.7339} onSwitched={active === 8} />
		</>
	)
}