import * as React from 'react'
import { CSSProperties, ReactNode } from 'react'

type H1Props = {
	style?: CSSProperties
	children: ReactNode
	underline?: boolean
}

export function H1({style, children, underline = false}: H1Props) {
	const borderStyle = underline ? {
		borderBottom: '1px solid black',
		borderColor: '#465',
	} : {}
	return (
		<h1 style={{...style, ...borderStyle}}>
			{children}
		</h1>
	)
}