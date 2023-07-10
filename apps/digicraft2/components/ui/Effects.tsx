import * as React from 'react'
import {CSSProperties, ReactNode} from 'react'


export function Transition(props: {visible: boolean, children: ReactNode}) {

	const hidden:CSSProperties = {
		visibility: 'hidden',
		opacity: 0,
		maxHeight: 0,
		transition: 'max-height 0.5s ease-out, visibility 0.5s ease-out, opacity 0.5s ease-out',
	}

	const visible:CSSProperties = {
		visibility: 'visible',
		opacity: 1,
		maxHeight: '2000px',
		transition: 'max-height 0.5s ease-out, opacity 0.5s ease-out',
	}

	return (
		<div style={props.visible ? visible : hidden}>
			{props.children}
		</div>
	)
}