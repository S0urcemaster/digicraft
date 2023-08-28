import * as React from 'react'
import { Card, Elevation } from '@blueprintjs/core'
import { Icon } from '@blueprintjs/core'
import { routes } from './routes'
import { useRouter } from 'next/navigation'
import { useDigiCraftContext } from './DigiCraftContext'
import { ReactNode } from 'react'
import { Page } from '../components/page/Page'
import { App, Book, Game, Settings, Text } from '../components/svg/menu'
import Image from 'next/image'

import newsThumb from '../../../resources/news.png'
import componentsThumb from '../../../resources/bricks.png'

enum MediaIcon {
	desktop = 'desktop',
	mobilePhone = 'mobile-phone'
}

type MenuItem = {
	heading: string
	icon?: ReactNode
	body: string[]
	mediaIcons: MediaIcon[]
	route: [string, string]
	svg: ReactNode
}

const bgSvg = {
	text: <Text/>,
	app: <App/>,
	game: <Game/>,
	settings: <Settings/>,
	blog: <Book/>
}

const mainMenu: MenuItem[] = [
	{
		heading: 'News', icon: <Image alt={''} src={newsThumb} width={100} height={100} style={{marginRight: 20}} />,
		// lines: ['01.09.2023 - Digi Craft Redesign', '24.07.2023 - Swinging Over to Rust', '28.06.2023 - Reload -> Digi Craft 3'],
		body: ['01.09.2023 - Re-Kill', 'Ich habe mich entschieden, den aktuellen Projektstand zu killen und den neuen, noch sehr groben Zustand online zu bringen.'],
		mediaIcons: [MediaIcon.desktop, MediaIcon.mobilePhone], route: routes.news, svg: bgSvg.text
	},
	{
		heading: 'Components', icon: <Image alt={''} src={componentsThumb} width={100} height={100} style={{marginRight: 20}} />,
		body: ['UI Komponenten zur Verwendung in der eigenen Webapp.'],
		mediaIcons: [MediaIcon.desktop, MediaIcon.mobilePhone],
		route: routes.components,
		svg: bgSvg.app
	},
	{
		heading: 'Digi Clock',
		body: ['Online Performance Test'],
		mediaIcons: [MediaIcon.desktop, MediaIcon.mobilePhone],
		route: routes.svgEditor,
		svg: bgSvg.app
	},
	{
		heading: 'Coder\'s SVG Editor',
		body: ['Erstelle SVG Grafiken per Tastatur und ohne Maus.'],
		mediaIcons: [MediaIcon.desktop],
		route: routes.svgEditor,
		svg: bgSvg.app
	},
	{
		heading: 'Development Page',
		body: ['dev page'],
		mediaIcons: [MediaIcon.desktop, MediaIcon.mobilePhone],
		route: routes.dev,
		svg: bgSvg.app
	},
	{
		heading: 'Digi Radio',
		body: ['A radio streamer'],
		mediaIcons: [MediaIcon.desktop, MediaIcon.mobilePhone],
		route: routes.radio,
		svg: bgSvg.app
	},
	{
		heading: 'Arbeitszeiterfassung',
		body: ['Eine App, um Arbeitszeiten zu erfassen.'],
		mediaIcons: [MediaIcon.desktop],
		route: routes.worktime, svg: bgSvg.app
	},
	{
		heading: 'Schach-Notationstrainer',
		body: ['Eine App, um Schach-Notation zu trainieren.'],
		mediaIcons: [MediaIcon.desktop],
		route: routes.notationTrainer, svg: bgSvg.game
	},
	{
		heading: 'Pass Maker',
		body: ['Eine App, um Passwörter zu generieren.'],
		mediaIcons: [MediaIcon.desktop],
		route: routes.passMaker, svg: bgSvg.app
	},
	{
		heading: 'Erfolge',
		body: ['Eine App, um Erfolge zu verwalten.'],
		mediaIcons: [MediaIcon.desktop],
		route: routes.achievements, svg: bgSvg.app
	},
	{
		heading: 'Zahlenraten Reloaded',
		body: ['Eine App, um Zahlen zu raten.'],
		mediaIcons: [MediaIcon.desktop, MediaIcon.mobilePhone],
		route: routes.numberGuessing, svg: bgSvg.game
	},
	{
		heading: 'Neo Cortex',
		body: ['Eine Sammlung von interessanten Links.'],
		mediaIcons: [MediaIcon.desktop, MediaIcon.mobilePhone],
		route: routes.neoCortex, svg: bgSvg.text
	},
	{
		heading: 'Source Code',
		body: ['Der Source Code der Apps.'],
		mediaIcons: [MediaIcon.desktop, MediaIcon.mobilePhone],
		route: routes.sourceCode, svg: bgSvg.text
	},
	{
		heading: 'Über Digi Craft',
		body: ['Allgemeines über Digi Craft.'],
		mediaIcons: [MediaIcon.desktop, MediaIcon.mobilePhone],
		route: routes.about, svg: bgSvg.text
	},
	{
		heading: 'Einstellungen',
		body: ['Einstellungen für Digi Craft.'],
		mediaIcons: [MediaIcon.desktop, MediaIcon.mobilePhone],
		route: routes.settings, svg: bgSvg.settings
	},
	{
		heading: 'Passwortsicherheit früher und heute',
		body: ['Die bislang geltenden Regeln für sichere Passwörter gelten als überholt.'],
		mediaIcons: [MediaIcon.desktop, MediaIcon.mobilePhone],
		route: routes.settings, svg: bgSvg.blog
	},
	// {heading: '', lines: ['']},
	// {heading: '', lines: ['']},
	// {heading: '', lines: ['']},
	// {heading: '', lines: ['']},
]

export function MainMenu() {

	const router = useRouter()

	function onClick(menuItem: MenuItem) {
		const [route] = menuItem.route
		router.push(route)
	}

	function href(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		// event.preventDefault()
		// event.stopPropagation()
	}

	return (
		<Page center>
			<div className={'main-menu-container'}>
				<>
					{mainMenu.map((m, idx) => {
							return idx < 3 ?
								<Card interactive={true} elevation={Elevation.TWO} key={idx} onClick={() => onClick(m)}
										style={{borderRadius: 30}}>
									<div style={{position: 'absolute', top: 0, right: -10}}>
										{m.svg}
									</div>
									<div style={{display: 'flex'}}>
										<div>
											{m.icon}
										</div>
										<div>
											<div style={{display: 'flex', justifyContent: 'space-between', position: 'relative'}}>
												<h3 className={'bp5-heading'} style={{marginTop: -5}}>{m.heading}</h3>
												<div style={{color: 'gray', whiteSpace: 'nowrap'}}>
													{
														// @ts-ignore (icon={i})
														m.mediaIcons.map((i, idx) => <Icon key={idx} icon={i} size={16}/>)
													}
												</div>
											</div>
											<div style={{position: 'relative', fontWeight: 600}}>
												{m.body.map((l, idx) => <div onClick={href} key={idx}>{l}</div>)}
											</div>
										</div>
									</div>

								</Card>
								:
								<Card interactive={true} elevation={Elevation.TWO} key={idx} onClick={() => onClick(m)}
										style={{borderRadius: 2}}>
									<div style={{position: 'absolute', top: 0, right: -10}}>
										{m.svg}
									</div>
									<div style={{display: 'flex', justifyContent: 'space-between', position: 'relative'}}>
										<h3 className={'bp5-heading'} style={{marginTop: -5}}>{m.heading}</h3>
										<div style={{color: 'gray', whiteSpace: 'nowrap'}}>
											{
												// @ts-ignore (icon={i})
												m.mediaIcons.map((i, idx) => <Icon key={idx} icon={i} size={16}/>)
											}
										</div>
									</div>
									<div style={{position: 'relative', fontWeight: 600}}>
										{m.body.map((l, idx) => <div onClick={href} key={idx}>{l}</div>)}
									</div>
								</Card>
						}
					)}
				</>
			</div>
		</Page>
	)
}