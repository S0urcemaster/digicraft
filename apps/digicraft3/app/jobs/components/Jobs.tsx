import * as React from 'react'
import { H3 } from '@blueprintjs/core'

export type Job = {
	title: string
	description: string
}

export function JobComp({title, backgroundColor, children}: {title: string, backgroundColor: string, children: React.ReactNode}) {
	return (
		<div style={{padding: 5, backgroundColor: backgroundColor}}>
			<H3>{title}</H3>
			<div>{children}</div>
		</div>
	)
}

export function JobsComp({children}: {children: React.ReactNode}) {
	return (
		<div style={{padding: 5}}>
			{children}
		</div>
	)
}