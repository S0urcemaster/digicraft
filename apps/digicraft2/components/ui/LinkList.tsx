import * as React from 'react'
import {CSSProperties} from 'react'
import Link from './Link'

export type ListLink = {
	href: string
	title: string
}

type Props = {
	list: ListLink[]
	style?: CSSProperties
}

export default function LinkList(props: Props) {
	return (
		<ul style={{listStyle: 'none', ...props.style, margin: '10px 0', padding: 0}}>
			{props.list.map((l, idx) => (
				<li key={idx} style={{paddingBottom: 3}}>
					<Link href={l.href}>{l.title}</Link>
				</li>
			))}
		</ul>
	)
}