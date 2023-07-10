import Link from '../ui/Link'
import {routes} from '../../lib/routes'
import React, {useEffect, useRef, useState} from 'react'
import {useRouter} from 'next/router'
import {useLocalStorage} from '../../lib/localStorageContext'
import {globals} from '../../lib/globals'
import LoginLink from './user/LoginLink'

type NavItem = {
	route: string
	title: string
}

const navbars: Record<string, NavItem[]> = {
	main: [
		{route: routes.home.digiCraft, title: 'Digi Craft'},
		{route: routes.home.apps, title: 'Apps'},
		{route: routes.home.source, title: 'Source Code'},
		{route: routes.home.projects, title: 'Projekte'},
		// {route: routes.blog.workingHoursModel, title: 'Blog'},
		{route: routes.home.music, title: 'Music'},
		// {route: routes.home.glossary, title: 'Glossar'},
		{route: routes.meta.about, title: 'Meta'},
	],
	meta: [
		{route: routes.meta.about, title: 'Über'},
		{route: routes.meta.imprint, title: 'Impressum'},
		{route: routes.meta.privacy, title: 'Datenschutz'},
		{route: routes.meta.references, title: 'Quellenangaben'},
		{route: routes.meta.warranty, title: 'Gewährleistung'},
		{route: routes.meta.settings, title: 'Einstellungen'},
		{route: routes.meta.donate, title: 'Spenden'},
	],
	apps: [
		{route: routes.apps.passwordMaker, title: 'Pass Maker'},
		{route: routes.apps.neoCortex, title: 'Neo Cortex'},
		{route: routes.apps.lifeHacks, title: 'Life Hacks'},
		{route: routes.apps.numberGuessing, title: 'Zahlenraten'},
		{route: routes.apps.smoothEye, title: 'Augenübung'},
		{route: routes.apps.notationTrainer, title: 'Chess Trainer'},
		{route: routes.apps.achievements, title: 'Erfolge'},
		{route: routes.apps.selfReport, title: 'Selbsteinschätzung (WiP)'},
		{route: routes.apps.resumeGenerator, title: 'Lebenslaufgenerator'},
		{route: routes.apps.decider, title: 'Der Entscheider'},
		{route: routes.apps.worktime, title: 'Arbeitszeit'},
		{route: routes.apps.radio, title: 'Digi Radio'},
		{route: routes.apps.svgEditor, title: 'SVG Editor'},
	],
	// blog: [
		// {route: routes.home.blog, title: 'Blog'},
		// {route: routes.blog.notes, title: 'Hinweise'},
		// {route: routes.blog.gendern, title: 'Gendern'},
		// {route: routes.blog.externalContent, title: 'Externer Content'},
	// ],
}

export function Item(props: {title: string, href: string, brightness: string}) {

	const [mouseIn, setMouseIn] = useState(false)
	const router = useRouter()

	return (
		<div style={{padding: '10px 5px 11px 5px',
			background: mouseIn ? globals.brightness[props.brightness].menuHighlight : globals.colors.transparent, cursor: 'pointer'}}
			onMouseEnter={() => setMouseIn(true)} onMouseLeave={() => setMouseIn(false)}
			onClick={() => router.push(props.href)}
		>
			<Link href={props.href} style={{color: globals.brightness[props.brightness].color}}

			>{props.title}</Link>
		</div>
	)
}

export default function Navbar() {

	// const [user, setUser] = useState<string|undefined>()

	const [nav, setNav] = useState('main')
	const router = useRouter()
	const {brightness} = useLocalStorage()

	const timeoutId = useRef<number | null>(null)

	// function click(event: MouseEvent<HTMLAnchorElement>, href: string) {
	// 	switch(href) {
	// 		case routes.home.apps:
	// 			event.preventDefault()
	// 			setNav('apps')
	// 			break
	// 		case routes.home.blog:
	// 			// event.preventDefault()
	// 			setNav('blog')
	// 			break
	// 	}
	// }

	function mouseLeave() {
		timeoutId.current = window.setTimeout(() => {
			setNav('main')
		}, 500)
	}

	function mouseEnter() {
		if(timeoutId.current !== null) {
			window.clearTimeout(timeoutId.current)
			timeoutId.current = null
		}
	}

	function getBackgroundImage(from: string, to: string) {
		return `linear-gradient(to top, ${from}, ${to})`
	}

	return (
		<nav style={{display: 'grid', gridTemplateColumns: '5fr 1fr', padding: '0px 0px 0px 30px',
			marginTop: '-10px', borderBottom: '1px solid ' +globals.brightness[brightness].line,
			backgroundImage: getBackgroundImage(globals.brightness[brightness].boxBackground, globals.brightness[brightness].background),
		}} onMouseLeave={mouseLeave} onMouseEnter={mouseEnter}>
			<div style={{display: 'flex', justifyContent: 'space-between', padding: '0 30px 0 0px'}}>
				<div style={{display: 'flex', columnGap: '20px', flexWrap: 'wrap'}}>
					{navbars[nav].map((nb, idx) => (
						<Item title={nb.title} href={nb.route} key={idx} brightness={brightness} />
					))}
				</div>
				<div style={{display: 'flex'}}>
					<LoginLink />
					{/*<Spacer width={10} />*/}
					{/*{nav === 'main' ?*/}
					{/*	<Link href={routes.meta.about} style={{marginLeft: '10px', color: globals.brightness[brightness].color}}*/}
					{/*			onClick={() => setNav('meta')}>Meta</Link>*/}
					{/*	:*/}
					{/*	<Link href={router.route} style={{marginLeft: '10px', color: globals.brightness[brightness].color}}*/}
					{/*			onClick={() => setNav('main')}>&nbsp;&lt;-&nbsp;</Link>*/}
					{/*}*/}
				</div>
			</div>
			<div />
		</nav>
	)
}