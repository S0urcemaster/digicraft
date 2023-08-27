import * as React from 'react'
import { Card, Elevation } from '@blueprintjs/core'
import { Icon, IconSize } from '@blueprintjs/core'
import { routes } from './routes'
import { useRouter } from 'next/navigation'
import { useDigiCraftContext } from './DigiCraftContext'
import { ReactNode } from 'react'
import { Page } from '../components/Page'
import { App, Book, Game, Settings, Text } from '../components/svg/menu'

type MenuItem = {
	heading: string
	lines: string[]
	mediaIcons: string[]
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
		heading: 'News',
		lines: ['01.09.2023 - Digi Craft Redesign', '24.07.2023 - Swinging Over to Rust', '28.06.2023 - Reload -> Digi Craft 3'],
		mediaIcons: ['desktop', 'mobile-phone'], route: routes.news, svg: bgSvg.text
	},
	{
		heading: 'Coder\'s SVG Editor',
		lines: ['Erstelle SVG Grafiken per Tastatur und ohne Maus.'],
		mediaIcons: ['desktop'],
		route: routes.svgEditor,
		svg: bgSvg.app
	},
	{
		heading: 'Development Page',
		lines: ['dev page'],
		mediaIcons: ['desktop', 'mobile-phone'],
		route: routes.dev,
		svg: bgSvg.app
	},
	{
		heading: 'Digi Radio',
		lines: ['A radio streamer'],
		mediaIcons: ['desktop', 'mobile-phone'],
		route: routes.radio,
		svg: bgSvg.app
	},
	{
		heading: 'Arbeitszeiterfassung',
		lines: ['Eine App, um Arbeitszeiten zu erfassen.'],
		mediaIcons: ['desktop'],
		route: routes.worktime, svg: bgSvg.app
	},
	{
		heading: 'Schach-Notationstrainer',
		lines: ['Eine App, um Schach-Notation zu trainieren.'],
		mediaIcons: ['desktop'],
		route: routes.notationTrainer, svg: bgSvg.game
	},
	{
		heading: 'Pass Maker',
		lines: ['Eine App, um Passwörter zu generieren.'],
		mediaIcons: ['desktop'],
		route: routes.passMaker, svg: bgSvg.app
	},
	{
		heading: 'Erfolge',
		lines: ['Eine App, um Erfolge zu verwalten.'],
		mediaIcons: ['desktop'],
		route: routes.achievements, svg: bgSvg.app
	},
	{
		heading: 'Zahlenraten Reloaded',
		lines: ['Eine App, um Zahlen zu raten.'],
		mediaIcons: ['desktop', 'mobile-phone'],
		route: routes.numberGuessing, svg: bgSvg.game
	},
	{
		heading: 'Neo Cortex',
		lines: ['Eine Sammlung von interessanten Links.'],
		mediaIcons: ['desktop', 'mobile-phone'],
		route: routes.neoCortex, svg: bgSvg.text
	},
	{
		heading: 'Source Code',
		lines: ['Der Source Code der Apps.'],
		mediaIcons: ['desktop', 'mobile-phone'],
		route: routes.sourceCode, svg: bgSvg.text
	},
	{
		heading: 'Über Digi Craft',
		lines: ['Allgemeines über Digi Craft.'],
		mediaIcons: ['desktop', 'mobile-phone'],
		route: routes.about, svg: bgSvg.text
	},
	{
		heading: 'Einstellungen',
		lines: ['Einstellungen für Digi Craft.'],
		mediaIcons: ['desktop', 'mobile-phone'],
		route: routes.settings, svg: bgSvg.settings
	},
	{
		heading: 'Passwortsicherheit früher und heute',
		lines: ['Die bislang geltenden Regeln für sichere Passwörter gelten als überholt.'],
		mediaIcons: ['desktop', 'mobile-phone'],
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
				{mainMenu.map((m, idx) =>
					<Card interactive={true} elevation={Elevation.TWO} key={idx} onClick={() => onClick(m)}>
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
							{m.lines.map((l, idx) => <div onClick={href} key={idx}>{l}</div>)}
						</div>
					</Card>
				)}
			</div>
		</Page>
	)
}