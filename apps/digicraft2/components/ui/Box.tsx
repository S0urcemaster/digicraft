import * as React from 'react'
import {CSSProperties, ReactNode, useState} from 'react'
import {globals} from '../../lib/globals'
import {H2, P} from './Typography'
import {useLocalContext} from '../../lib/devContext'
import {Button} from './Form'
import {Spacer} from './Layout'
import {Transition} from './Effects'
import {useLocalStorage} from '../../lib/localStorageContext'

function BoxContent(props: { children: ReactNode, style?: CSSProperties }) {

	const {brightness} = useLocalStorage()

	return (
		<div style={{
			padding: '10px 10px 10px 0px',
			marginBottom: 30,
			// background: globals.brightness[brightness].background,
			// color: globals.brightness[brightness].color,
			...props.style,
		}}>
			{props.children}
		</div>
	)
}

type BoxProps = {
	style?: CSSProperties
	children: React.ReactNode
}

export function Box(props: {
	style?: CSSProperties
	children: React.ReactNode
}) {
	return (
		<BoxContent style={props.style}>
			{props.children}
		</BoxContent>
	)
}

type Props = {
	title?: string
	style?: CSSProperties
	children: ReactNode
}

export function TitledBox(props: Props) {
	return (
		<article style={{...props.style}}>
			<BoxContent>
				{props.title && <H2 first>{props.title}</H2>}
				{props.children}
			</BoxContent>
		</article>
	)
}

export function ExpandButtonBox(props: {
	buttonTitle: string
	title?: string
	conditional?: boolean
	style?: CSSProperties
	children: ReactNode
	last?: boolean
	altButtonColor?: boolean
}) {

	const [switchOn, setSwitchOn] = useState(false)

	return (
		<>
			<Button onClick={() => setSwitchOn(!switchOn)} value={props.buttonTitle} altColor={props.altButtonColor}/>
			<Spacer height={10}/>
			<Transition visible={switchOn}>
				<TitledBox title={props.title}>
					{props.children}
				</TitledBox>
			</Transition>
			{switchOn && !props.last ? <Spacer height={20}/> : ''}
		</>
	)
}

export function DevBox(props: { children: ReactNode, style?: CSSProperties }) {

	const {local} = useLocalContext()
	const {brightness} = useLocalStorage()

	return (
		<>
			{local ?
				<Box style={{marginBottom: 20, ...props.style}}>
					<P first>Dev</P>
					{props.children}
				</Box>
				: ''
			}
		</>
	)
}