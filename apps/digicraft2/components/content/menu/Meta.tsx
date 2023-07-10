import * as React from 'react'
import {routes} from '../../../lib/routes'
import {ReactNode} from 'react'
import Link from 'next/link'
import {globals} from '../../../lib/globals'
import {useLocalStorage} from '../../../lib/localStorageContext'


function MenuItem(props: {href: string, children: ReactNode}) {
	const {brightness} = useLocalStorage()
	return (
		<Link href={props.href} style={{fontWeight: 'bold', margin: '0 0 15px 0', color: globals.brightness[brightness].color}}>{props.children}</Link>
	)
}

export default function Meta(props: {}) {
	return (
		<>
			<MenuItem href={routes.meta.about}>About</MenuItem>
			<MenuItem href={routes.meta.imprint}>Impressum</MenuItem>
			<MenuItem href={routes.meta.privacy}>Datenschutz</MenuItem>
			<MenuItem href={routes.meta.references}>Quellenangaben</MenuItem>
			<MenuItem href={routes.meta.warranty}>Gewährleistung</MenuItem>
			<MenuItem href={routes.meta.settings}>Einstellungen</MenuItem>
			<MenuItem href={routes.meta.donate}>Spenden</MenuItem>
		</>
	)
}