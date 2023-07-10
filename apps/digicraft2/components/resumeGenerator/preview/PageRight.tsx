import * as React from 'react'
import {ReactNode, useState} from 'react'
import PageColumn from './PageColumn'

export default function PageRight(props: {children: ReactNode, firstPage?: boolean}) {

	// const [padding, setPadding] = useState([0, 0, 0, 5])
	const [padding, setPadding] = useState([5, 5, 5, 5])

	return (
		<PageColumn style={{backgroundImage: 'linear-gradient(to right, #f8f2ff, white, white)',
			background: '#384b70', color: 'white', height: '100%', padding: padding.map(p => p +'mm').join(' ')}} firstPage={props.firstPage}>
			{props.children}
		</PageColumn>
	)
}