import { Button, Card } from '@blueprintjs/core'
import React from 'react'

export function News() {
	return (
		<Card interactive={true} elevation={1}>
			<h5><a href="#">Card heading</a></h5>
			<p>Card content</p>
			<Button text="test" />
		</Card>
	)
}