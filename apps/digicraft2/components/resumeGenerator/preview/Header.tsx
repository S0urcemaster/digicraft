import * as React from 'react'
import { CSSProperties, ReactNode, useState } from 'react'
import { colors } from '../Preview'

export default function Header(props: {children: ReactNode, style?: CSSProperties}) {

	const [padding, setPadding] = useState([15, 20, 0, 20])

	return (
		<div style={{height: 80, borderBottom: `4px solid ${colors.darkBackground}`, boxSizing: 'border-box', ...props.style}}>
			{props.children}
		</div>
	)
}
