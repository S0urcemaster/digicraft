import * as React from 'react'
import {Checkbox} from './Form'
import {CSSProperties} from 'react'

export default function Switch(props: {
	checked: boolean, onChange: Function, title?: string, style?: CSSProperties
}) {

	return (
		<Checkbox title={props.title} checked={props.checked} onChange={event => props.onChange(event.target.value)}
					 style={{width: 20, height: 20, accentColor: 'gray', ...props.style}} />
	)
}
