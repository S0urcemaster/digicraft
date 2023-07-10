import React, {MouseEvent} from 'react'
import {CSSProperties, ReactNode} from 'react'
import {default as NextLink} from 'next/link'
import {useLocalStorage} from '../../lib/localStorageContext'
import {globals} from '../../lib/globals'

export default function Link(props: {
	href: string
	children: ReactNode
	style?: CSSProperties
	onClick?: (event: MouseEvent<HTMLAnchorElement>, href: string) => void
	onMouseOut?: (event: MouseEvent<HTMLAnchorElement>, href: string) => void
}
){
	const {brightness} = useLocalStorage()

	return (
		<NextLink href={props.href} style={{color: globals.brightness[brightness].color, ...props.style}}
					 onClick={(event) => props.onClick && props.onClick(event, props.href)}
		>{props.children}</NextLink>
	)
}