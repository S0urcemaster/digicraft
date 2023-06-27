'use client'

import { useDigiContext } from '@digicraft/context'
import { colorWithContrast } from '@digicraft/lib'

export default function Home() {

	const {app} = useDigiContext()

	return (
		<>
			<svg>
				<g style={{transformOrigin: '80px 20px', rotate: '-15deg'}}>
					<rect x={0} y={0} width={100} height={100} fill={colorWithContrast('#002c66', 0.9).hex()}/>
				</g>
			</svg>
		</>

	)
}
