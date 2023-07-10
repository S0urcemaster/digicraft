import * as React from 'react'
import Link from '../ui/Link'
import {CSSProperties} from 'react'
import PropImage from '../ui/PropImage'

type Props = {
	src: any
	href: string
	alt: string
	style?: CSSProperties
	width: number
}

export default function Ad(props: Props) {
	return (
		<Link href={props.href} style={{marginLeft: 'auto', marginRight: 'auto', ...props.style}}>
			<PropImage src={props.src} alt={'JetBrains-Logo (Haupt) logo'} width={props.width +'px'} />
		</Link>
	)
}