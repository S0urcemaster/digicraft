import * as React from 'react'
import {CSSProperties, ReactNode, useState} from 'react'
import {usePreviewContext} from './previewContext'

export default function PageColumn(props: {children: ReactNode, style?: CSSProperties, firstPage?: boolean}) {

	const {contentHeight, pageHeight} = usePreviewContext()

	function getHeight() {
		if(props.firstPage) return contentHeight +20
		return pageHeight
	}

	return (
		<div style={{height: getHeight(), ...props.style, boxSizing: 'border-box'}}>
			{props.children}
		</div>
	)
}