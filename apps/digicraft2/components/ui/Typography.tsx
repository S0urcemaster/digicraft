import * as React from 'react'
import {CSSProperties} from 'react'
import {typography} from './styles'
import {IconButton} from './Form'
import {useRouter} from 'next/router'
import {icons} from './Icon'
import {HR} from './Layout'
import {globals} from '../../lib/globals'
import {useLocalStorage} from '../../lib/localStorageContext'

type Props = {
	first?: boolean
	style?: CSSProperties
	children: React.ReactNode
	backButton?: boolean
}

function BackButton(props: {onClick: Function}) {
	return (
		<IconButton name={icons.ArrowLeft} size={15} onClick={() => props.onClick()} />
	)
}

export function H1(props: Props) {

	const router = useRouter()

	function prevRoute() {
		return '/' + router.route.split('/')[1]
	}
	const h1 = <h1 style={{...typography.H1, ...props.style}}>{props.children}</h1>

	return (
		<>
			{props.backButton ?
				<div style={{display: 'flex'}}><BackButton onClick={() => router.push(prevRoute())} />{h1}</div>
				: <>{h1}</>}
		</>
	)
}

export function H2(props: Props & {date?: string, nohr?: boolean}) {
	const style = props.first ? typography.H2First : typography.H2
	return (
		<div style={{display: 'flex', alignItems: 'center', width: '100%'}}>
			<h2 style={{...style, ...props.style, paddingRight: 10}}>{props.children}</h2>
			{!props.nohr && <HR style={{flexGrow: 1, margin: style.margin}} />}
			{props.date && <P first style={{flexGrow: 0, paddingLeft: 10, margin: style.margin}}>{props.date}</P>}
		</div>
	)
}

export function H3(props: Props & {nohr?: boolean}) {
	const style = props.first ? typography.H3First : typography.H3
	return (
		<div style={{display: 'flex', alignItems: 'center', width: '100%'}}>
			<h3 style={{...style, ...props.style, paddingRight: 10}}>{props.children}</h3>
			{!props.nohr && <HR style={{flexGrow: 1, margin: style.margin}} />}
		</div>
	)
}

export function P(props: Props) {
	const style = props.first ? typography.P2First : typography.P
	return (
		<p style={{...style, ...props.style}}>
			{props.children}
		</p>
	)
}

export function B(props: Props) {
	return (
		<b style={{...typography.B, ...props.style}}>
			{props.children}
		</b>
	)
}