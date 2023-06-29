import * as React from 'react'
import { CSSProperties, ReactNode } from 'react'

type H1Props = {
	style?: CSSProperties
	children: ReactNode
}

export default function H1({style, children}: H1Props) {
	return (
		<h1 style={{...style}}>
			{children}
		</h1>
	)
}