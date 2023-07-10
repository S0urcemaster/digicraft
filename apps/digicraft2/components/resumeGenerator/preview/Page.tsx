import * as React from 'react'
import { CSSProperties, ReactNode, useEffect, useState } from 'react'
import {usePreviewContext} from './previewContext'

export default function Page(props: {padding: number[], children: ReactNode, style?: CSSProperties}) {

	const {pageRef, pageHeight, pageWidth} = usePreviewContext()

	useEffect(() => {
		// pageRef.current
	}, [pageHeight])

	return (
		<div ref={pageRef} style={{width: pageWidth, height: pageHeight, margin: 'auto', padding: '',
			background: 'white', boxSizing: 'border-box', ...props.style}}>
			{props.children}
		</div>
	)
}