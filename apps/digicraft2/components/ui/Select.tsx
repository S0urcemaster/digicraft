import * as React from 'react'
import {CSSProperties, ForwardedRef, forwardRef, useState} from 'react'

const Select = forwardRef(function Select(props: {
	value: string|undefined, onChange: Function, options: [string, string][]|undefined, size?: number, style?: CSSProperties
}, ref?: ForwardedRef<HTMLSelectElement>) {

	const [value] = useState(props.value)

	return (
		<select size={props.size} value={value} onChange={event => props.onChange(event.target.value)} style={props.style}
				  ref={ref}
		>
			{props.options && props.options.map((o, idx) => (
				<option key={idx} value={o[0]}>{o[1]}</option>
				))
			}
		</select>
	)
})

export default Select