'use client'

import * as React from 'react'
import { CSSProperties, ReactNode, useEffect } from 'react'
import { useDigiContext } from '@digicraft/context'

type HtmlContentProps = {
	style?: CSSProperties
	children: ReactNode
}

export function HtmlContent({style, children}: HtmlContentProps) {

	return (
		<div style={style}>
			{children}
		</div>
	)
}