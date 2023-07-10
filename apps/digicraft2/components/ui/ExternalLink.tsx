import * as React from 'react'
import {CSSProperties} from 'react'
import {useLocalStorage} from '../../lib/localStorageContext'
import {globals} from '../../lib/globals'
import Icon, {icons} from './Icon'

type Props = {
	href: string
	children: React.ReactNode
	style?: CSSProperties
	iconSize?: number
}

export default function ExternalLink(props: Props) {

	const {brightness} = useLocalStorage()

	return (
		<span style={{display: 'inline', verticalAlign: 'bottom', ...props.style}}>
			<a href={props.href} style={{color: globals.brightness[brightness].color, textDecoration: props.style?.textDecoration}} target={'_blank'}>
				{props.children}
				<Icon name={icons.ArrowUpRightFromSquare} size={props.iconSize ?? 12} style={{margin: '0 0 5px 3px'}} />
			</a>
			{/*<Image src={linkImage} alt={'External Link Image'} width={12}*/}
			{/*		 style={{display:'inline', marginLeft:'3px', marginRight:'7px', paddingTop:'0px'}} />*/}
		</span>
	)
}