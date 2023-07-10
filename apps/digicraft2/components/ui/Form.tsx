import * as React from 'react'
import {CSSProperties, ForwardedRef, forwardRef, KeyboardEventHandler, ReactNode, useEffect, useState} from 'react'
import Image from 'next/image'
import {globals} from '../../lib/globals'
import {useLocalStorage} from '../../lib/localStorageContext'
import Icon from './Icon'

type InputProps = {
	value?: any
	style?: CSSProperties
}

type TextInputProps = InputProps & {
	onChange: React.ChangeEventHandler<HTMLInputElement>
	placeholder?: string
	disabled?: boolean
	onKeyDown?: KeyboardEventHandler<HTMLInputElement>
}

export const TextInput = forwardRef(function TextInput(props: TextInputProps, ref?: ForwardedRef<HTMLInputElement>) {
	return (
		<input type={'text'} value={props.value} onChange={props.onChange} placeholder={props.placeholder}
				 disabled={props.disabled} ref={ref} onKeyDown={props.onKeyDown}
				 style={{
					 ...{
						 paddingLeft: '3px',
						 lineHeight: 0.7,
					 }, ...props.style,
				 }}
		/>
	)
})

type NumberInputProps = TextInputProps

export const NumberInput = forwardRef(function NumberInput(props: NumberInputProps, ref?: ForwardedRef<HTMLInputElement>) {
	return (
		<input type={'number'} value={props.value} onChange={props.onChange} placeholder={props.placeholder}
				 disabled={props.disabled} ref={ref} onKeyDown={props.onKeyDown}
				 style={{
					 ...{
						 paddingLeft: '3px',
						 lineHeight: 0.7,
					 }, ...props.style,
				 }} min={0}
		/>
	)
})

type ButtonProps = InputProps & {
	onClick?: React.MouseEventHandler<HTMLButtonElement>
	onMouseDown?: React.MouseEventHandler<HTMLButtonElement>
	onMouseUp?: React.MouseEventHandler<HTMLButtonElement>
	onMouseOut?: React.MouseEventHandler<HTMLButtonElement>
	altColor?: boolean
	active?: boolean
	children?: ReactNode
	type?: "button" | "reset" | "submit" | undefined
}

const buttonStyle: any = {
	fontWeight: 'bold',
	fontSize: '11pt',
	padding: '3px 5px',
	fontFamily: '"JetBrains Mono", monospace',
}

export function Button(props: ButtonProps) {

	const {brightness} = useLocalStorage()
	const [mouseDown, setMouseDown] = useState(false)

	function getBoxShadow() {
		return `2px 2px 2px ${globals.brightness[brightness].buttonShadow}`
	}

	function getBorder(width: number) {
		return `${width}pt solid ${globals.brightness[brightness].line}`
	}

	function onMouseDown(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		setMouseDown(true)
		props.onMouseDown && props.onMouseDown(event)
	}

	function onMouseUp(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		setMouseDown(false)
		props.onMouseUp && props.onMouseUp(event)
	}

	function onMouseOut(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		setMouseDown(false)
		props.onMouseOut && props.onMouseOut(event)
	}

	const style = props.altColor ?
		{
			...buttonStyle,
			background: globals.brightness[brightness].boxBackground,
			color: globals.brightness[brightness].color,
			boxShadow: mouseDown || props.active ? 'none' : getBoxShadow(),
			border: props.active ? getBorder(5) : getBorder(0.5),
		} :
		{
			...buttonStyle,
			background: globals.brightness[brightness].background,
			color: globals.brightness[brightness].color,
			boxShadow: mouseDown || props.active ? 'none' : getBoxShadow(),
			border: props.active ? getBorder(1) : getBorder(0.5),
		}

	return (
		<>
			{props.children ?
				<button
					type={props.type ? props.type : 'button'}
					onClick={props.onClick}
					onMouseDown={event => onMouseDown(event)}
					onMouseUp={event => onMouseUp(event)}
					onMouseOut={event => onMouseOut(event)}
					style={{...style, ...props.style}}
				>{props.children}</button>
				:
				<button
					type={props.type ? props.type : 'button'}
					onClick={props.onClick}
					onMouseDown={event => onMouseDown(event)}
					onMouseUp={event => onMouseUp(event)}
					onMouseOut={event => onMouseOut(event)}
					style={{...style, ...props.style}}
				>{props.value}</button>
			}
		</>
	)
}

export type RealRadioButton = {
	title: string
	value: string
}

export function RealRadioButtons(props: {buttons: RealRadioButton[], value: string, onChange: Function, space: number, vertical?: boolean}) {

	const [value, setValue] = useState(props.value)

	useEffect(() => {
		setValue(props.value)
	}, [props.value])

	useEffect(() => {
		props.onChange(value)
	}, [value])

	function margin() {
		return props.vertical ? {marginBottom: props.space} : {marginRight: props.space}
	}

	return (
		<>
			<div style={{display: 'flex', flexDirection: props.vertical ? 'column' : 'row'}}>
			{props.buttons.map((b, idx) => (
					<Button key={idx} value={b.title} onClick={() => setValue(b.value)} active={value === b.value}
							  style={margin()} />
			))}
			</div>
		</>
	)
}

type ImageButtonProps = InputProps & {
	width: number
	height: number
	padding: number
	onClick: React.MouseEventHandler<HTMLButtonElement>
	src: string
}

export function ImageButton(props: ImageButtonProps) {
	return (
		<Button onClick={props.onClick} style={{background: 'lightGray', ...props.style}}>
			<Image src={props.src} alt={''}
					 style={{
						 width: props.width - (props.padding * 2),
						 height: props.height - (props.padding * 2),
						 paddingTop: '5px', background: 'lightGray',
					 }}/>
			{props.value ? props.value : <></>}
		</Button>
	)
}

export function IconButton(props: {name: string, size: number, onClick?: React.MouseEventHandler<HTMLButtonElement>,
	style?: CSSProperties
}) {
	return (
		<Button style={{width: props.size +12, height: props.size +12, minWidth: props.size +12, minHeight: props.size +12,
			margin: '2px 20px 0 0', padding: 0, ...props.style}} onClick={props.onClick}>
			<Icon name={props.name} size={props.size} style={props.style} />
		</Button>
	)
}

type CheckboxProps = InputProps & {
	title?: string
	checked: boolean
	onChange?: React.ChangeEventHandler<HTMLInputElement>
	orientation?: 'left' | 'right'
	value?: string
}

const checkboxStyle: CSSProperties = {
	background: 'SeaShell',
	fontSize: '1.1rem',
	height: '2rem',
	verticalAlign: 'middle',
}


export function Checkbox(props: CheckboxProps) {

	let id = 0

	function nextId(): string {
		return 'checkbox' + id++
	}

	function getLabel(title: string) {
		return <label htmlFor={nextId()} style={{verticalAlign: 'middle'}}>
			{title}
		</label>
	}

	return (
		<>
			{props.title && !props.orientation || props.orientation === 'left' ? <>{getLabel(props.title!)} </> : ''}
			<input
				value={props.value}
				checked={props.checked}
				type={'checkbox'}
				onChange={props.onChange}
				style={{...checkboxStyle, ...props.style}}
			>
			</input>
			{props.title && props.orientation === 'right' && getLabel(props.title)}
		</>
	)
}
