'use client'

import * as React from 'react'
import { H1, Button } from '@digicraft/ui'

const devStyle = {
	margin: '10px 10px 10px 10px',
}

export function Dev() {
	return (
		<div style={devStyle}>
			<H1 underline>Development Page</H1>
			<h2>Creating an Edged Button</h2>
			<Button width={200} height={200}>Click Me!</Button>
		</div>
	)
}
