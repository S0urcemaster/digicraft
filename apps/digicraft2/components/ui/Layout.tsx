import * as React from 'react'
import {useLocalStorage} from '../../lib/localStorageContext'
import {globals} from '../../lib/globals'
import {CSSProperties, ReactNode} from 'react'


export function Spacer(props:{height?:number, width?:number, inline?:boolean, className?:string}) {
	const h = props.height ? props.height +'px' : 0
	const w = props.width ? props.width +'px' : 0
	const display = props.inline ? 'inline-block' : 'block'
	return (
		<div style={{minHeight: h, height: h, minWidth: w, width: w, display: display}} className={props.className} />
	)
}

export function HR(props: {style?: CSSProperties}) {
	const {brightness} = useLocalStorage()

	return (
		<hr style={{backgroundColor: globals.brightness[brightness].line, ...props.style}} />
	)
}

export function BR(props:{double?: boolean}) {
	return (
		<>
			<br />
			{props.double && <br />}
		</>
	)
}

export function Tooltip(props:{title: string, children: ReactNode}) {
	return (
		<span title={props.title}>{props.children}</span>
	)
}