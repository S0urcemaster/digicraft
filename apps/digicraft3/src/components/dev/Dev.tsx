'use client'

import * as React from 'react'
import { H1, Button } from '@digicraft/ui'
// @ts-ignore
import { useDigiContext } from '@digicraft/context'
import { useEffect } from 'react'

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
			{/*<H1 underline>Development Page</H1>*/}
			<h2>Creating an Edged Button</h2>
			<Button width={200} height={200} color={'#464'}>Click Me!</Button>
		</div>
	)
}
