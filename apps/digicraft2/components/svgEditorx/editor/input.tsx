import * as React from 'react'
import {CSSProperties, ForwardedRef, forwardRef, KeyboardEvent, useEffect, useState} from 'react'
import {colors} from '../constants'

const Input = forwardRef(function (props: {
	type: string, value: string | number, change: (value: string | number) => void, style?: CSSProperties
	step?: number, min?: number, max?: number, highlight?: boolean, enterPressed: (value: string|number) => void },
	ref?: ForwardedRef<HTMLInputElement>
) {

	const [value, setValue] = useState<string|number>(props.value)

	useEffect(() => {
		setValue(props.value)
	}, [props.value])

	useEffect(() => {
	}, [value])

	function keyDown(event: KeyboardEvent<HTMLInputElement>) {
		event.stopPropagation()
		switch (event.key) {
			case 'Enter':
				props.enterPressed(value)
				break
		}
	}

	return (
		<input className={'svgEditor'} type={props.type} value={value} onChange={e => setValue(e.target.value)}
				 style={{
					 padding: 0, background: props.highlight ? colors.inputHighlight : colors.inputBg, paddingLeft: 2, boxSizing: 'border-box',
					 textAlign: 'right', fontSize: 12, ...props.style,
				 }}
				 step={props.step} min={props.min} max={props.max} ref={ref} onKeyDown={(e) => keyDown(e)}
		/>
	)
})

export const TextInput = forwardRef(function TextInput(props: {
	value: string, change: (value: string | number) => void, style?: CSSProperties
	highlight?: boolean, changed: (value: string) => void }, ref?: ForwardedRef<HTMLInputElement>
) {
	return (
		<Input type={'text'} value={props.value ? props.value : ''} change={props.change} style={{...props.style}}
				 highlight={props.highlight} ref={ref} enterPressed={(value) => props.changed(String(value))} />
	)
})

export const NumberInput = forwardRef(function TextInput(props: {
	value: number, change: (value: string | number) => void, style?: CSSProperties,
	highlight?: boolean, changed: (value: number) => void, step: number, min: number, max: number
}, ref?: ForwardedRef<HTMLInputElement>) {
	return (
		<Input type={'number'} value={props.value ? props.value : 0} change={props.change} step={props.step} min={props.min} max={props.max}
				 style={{...props.style}} highlight={props.highlight} ref={ref} enterPressed={(value) => props.changed(Number(value))}/>
	)
})