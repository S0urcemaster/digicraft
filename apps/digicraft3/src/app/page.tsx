'use client'

import { useDigiContext } from '@digicraft/context'
import { colorWithContrast } from '@digicraft/lib'

export default function Home() {

	const {app} = useDigiContext()

	const angle = 20
	const scale = 0.8
	const translate = (100 -(100 *scale)) /2
	
	return (
		<svg width={100} height={100}>
			<g style={{transformOrigin: '50px 50px', rotate: `${angle}deg`}}>
				<rect x={0} y={0} width={100} height={100} fill={'#717aff'}/>

			</g>
		</svg>
	)
}
