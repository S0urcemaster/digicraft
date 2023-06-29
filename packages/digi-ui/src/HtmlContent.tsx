'use client'

import * as React from 'react'
import H1 from './typography/H1'
import { CSSProperties, ReactNode, useEffect } from 'react'

type HtmlContentProps = {
	style?: CSSProperties
	children: ReactNode
	setTitle: (title: string) => void
}

export function HtmlContent({style, children, setTitle}: HtmlContentProps) {

	useEffect(() => {
		setTitle('HtmlContent')
	}, [])

	return (
		<>
			<H1>HtmlContent</H1>
			<h2>HtmlContent</h2>
		</>
	)
}