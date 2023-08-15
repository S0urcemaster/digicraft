import * as React from 'react'
import { Card, Elevation } from '@blueprintjs/core'
import { Icon, IconSize } from "@blueprintjs/core";
import { routes } from './routes'
import { useRouter } from 'next/navigation'
import { useDigiCraftContext } from './DigiCraftContext'

type MenuItem = {
	heading: string
	lines: string[]
	mediaIcons: string[]
	route: [string, string]
}

const news230815 = `
# Digi Craft Redesign
Nach dem Ausflug zu Rust, einer wirklich guten, neuen Programmiersprache, die jedoch noch kaum eingesetzt wird und
Web Assembly (WASM), was es erst seit 2019 gibt und wo das entsprechende Rust Framework Yew erst bei Version 0.20 ist,
kehre ich nun zu meinem vorherigen Plan, dem SVG Editor zurück.
Die Umgestaltung des Repos zu eienem Monorepo habe ich bereits gemacht. Im neuen Repo sind jetzt die neue Webseite,
der alte Server und Palyoad CMS beheimatet (was ich wohl erst mal nicht brauche) sowie gemeinsam verwendbare
Packages für context, lib und svg. Außerdem habe ich diesmal Blueprint JS als Design System gewählt, da es sehr
technisch und platzsparend rüberkommt, im Gegensatz zu anderen bekannten, die eher voluminös veranlagt sind.
Grundsätzlich soll die auf Masse getrimmte, alte Webseite entschlackt und vereinfacht werden: alle wesentlichen Teile
sollen auf der Startseite zugänglich sein, ohne einen Zwischenschritt oder weitere Gruppierung. Man soll auch
auf einen Blick sehen, wieviel es hier zu sehen gibt. Responsive soll es auch noch sein. Nicht, dass
jemand denkt, so was Einfaches könnte ich nicht. Zur Vereinfachung wähle ich auch ein Medium Helles Design und lasse
die anderen Farben weg.
`

const mainMenu: MenuItem[] = [
	{heading: 'News',
		lines: ['01.09.2023 - Digi Craft Redesign', '24.07.2023 - Swinging Over to Rust', '28.06.2023 - Reload -> Digi Craft 3'],
		mediaIcons: ['desktop', 'mobile-phone'], route: routes.news
	},
	{heading: 'SVG Editor', lines: ['An App to train chess notation.'], mediaIcons: ['desktop'], route: routes.svgEditor},
	{heading: 'Development Page', lines: ['dev page'], mediaIcons: ['desktop', 'mobile-phone'], route: routes.dev},
	{heading: 'Digi Radio', lines: ['A radio streamer'], mediaIcons: ['desktop', 'mobile-phone'], route: routes.radio},
	{heading: 'Arbeitszeiterfassung', lines: ['Eine App, um Arbeitszeiten zu erfassen.'], mediaIcons: ['desktop'], route: routes.news},
	{heading: 'Schach-Notationstrainer', lines: ['Eine App, um Schach-Notation zu trainieren.'], mediaIcons: ['desktop'], route: routes.notationTrainer},
	{heading: 'Pass Maker', lines: ['Eine App, um Passwörter zu generieren.'], mediaIcons: ['desktop'], route: routes.passMaker},
	{heading: 'Erfolge', lines: ['Eine App, um Erfolge zu verwalten.'], mediaIcons: ['desktop'], route: routes.achievements},
	{heading: 'Zahlenraten Reloaded', lines: ['Eine App, um Zahlen zu raten.'], mediaIcons: ['desktop', 'mobile-phone'], route: routes.numberGuessing},
	{heading: 'Neo Cortex', lines: ['Eine Sammlung von interessanten Links.'], mediaIcons: ['desktop', 'mobile-phone'], route: routes.neoCortex},
	{heading: 'Source Code', lines: ['Der Source Code der Apps.'], mediaIcons: ['desktop', 'mobile-phone'], route: routes.sourceCode},
	{heading: 'Music', lines: ['Musik, die ich gemacht habe.'], mediaIcons: ['desktop', 'mobile-phone'], route: routes.music},
	{heading: 'Über Digi Craft', lines: ['Allgemeines über Digi Craft.'], mediaIcons: ['desktop', 'mobile-phone'], route: routes.about},
	{heading: 'Impressum', lines: ['Impressum von Digi Craft.'], mediaIcons: ['desktop', 'mobile-phone'], route: routes.imprint},
	{heading: 'Datenschutz', lines: ['Datenschutz von Digi Craft.'], mediaIcons: ['desktop', 'mobile-phone'], route: routes.privacy},
	{heading: 'Einstellungen', lines: ['Einstellungen für Digi Craft.'], mediaIcons: ['desktop', 'mobile-phone'], route: routes.settings},
	// {heading: '', lines: ['']},
	// {heading: '', lines: ['']},
	// {heading: '', lines: ['']},
	// {heading: '', lines: ['']},
]

export function MainMenu() {

	const router = useRouter()

	function onClick(menuItem: MenuItem) {
		const [route, title] = menuItem.route
		router.push(route)
	}

	return (
		<div className={'main-menu-container'} style={{}}>
			{mainMenu.map((m, idx) =>
				<Card interactive={true} elevation={Elevation.TWO} key={idx} onClick={() => onClick(m)}>
					<div style={{display: 'flex', justifyContent: 'space-between'}}>
						<h3 className={'bp5-heading'}>{m.heading}</h3>
						<div style={{color: 'gray'}}>
							{
								// @ts-ignore (icon={i})
								m.mediaIcons.map((i, idx) => <Icon key={idx} icon={i} size={16} />)
							}
						</div>
					</div>
					{m.lines.map((l, idx) => <div key={idx}>{l}</div>)}
				</Card>
			)}
		</div>
	)
}