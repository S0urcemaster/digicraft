import * as React from 'react'
import {CSSProperties, ReactNode, useState} from 'react'
import PageColumn from './PageColumn'
import {usePreviewContext} from './previewContext'

export default function PageLeft(props: {children: ReactNode, firstPage?: boolean}) {

	// const [padding, setPadding] = useState([0, 5, 0, 0])
	const [padding, setPadding] = useState([5, 5, 5, 5])

	return (
		<PageColumn firstPage={props.firstPage} style={{padding: padding.map(p => p +'mm').join(' ')}}>
			{props.children}
		</PageColumn>
	)
}