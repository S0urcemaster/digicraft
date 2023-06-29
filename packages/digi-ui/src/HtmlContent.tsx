'use client'

import * as React from 'react'
import { CSSProperties, ReactNode, useEffect } from 'react'
import { useDigiContext } from '@digicraft/context'

type HtmlContentProps = {
	style?: CSSProperties
	children: ReactNode
	title: string
}

export function HtmlContent({style, children, title}: HtmlContentProps) {

	const {app, setContentTitle} = useDigiContext()

	useEffect(() => {
		setContentTitle(title)
	}, [])

	return (
		<>
			{children}
		</>
	)
}