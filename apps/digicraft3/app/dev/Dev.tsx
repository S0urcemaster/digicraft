'use client'

import * as React from 'react'
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
			<h2 className={'bp5-heading'}>Creating an Edged Button</h2>
		</div>
	)
}
