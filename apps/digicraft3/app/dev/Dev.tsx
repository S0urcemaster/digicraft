'use client'

import * as React from 'react'
// @ts-ignore
import { H1, Button } from '@digicraft/ui'
// @ts-ignore
import { useDigiContext } from '@digicraft/context'
import { useEffect } from 'react'
import { Surface3D } from '@digicraft/svg'

const devStyle = {
	margin: '10px 10px 10px 10px',
}

export function Dev() {

	const {setContentTitle} = useDigiContext()

	useEffect(() => {
		setContentTitle('Development Page')
	}, [])

	return (
		<div style={devStyle}>
			{/*<h2>Creating a 3D Surface</h2>*/}
			{/*<Surface3D width={200} height={200} squareSize={10} depth={0} />*/}
			<h2>Creating an Edged Button</h2>
			<Button width={200} height={200} color={'#464'}>Click Me!</Button>
		</div>
	)
}
