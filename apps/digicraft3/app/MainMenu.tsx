import * as React from 'react'
import { Card, Elevation } from '@blueprintjs/core'
import { Icon, IconSize } from '@blueprintjs/core'
import { routes } from './routes'
import { useRouter } from 'next/navigation'
import { useDigiCraftContext } from './DigiCraftContext'
import { ReactNode } from 'react'
import { Page } from '../components/Page'

type MenuItem = {
	heading: string
	lines: string[]
	mediaIcons: string[]
	route: [string, string]
	svg: ReactNode
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

const bgSvg = {
	text: <svg width="500" height="500" viewBox="0 0 43 42" xmlns="http://www.w3.org/2000/svg"
				  transform={'translate(20 10)'}>
		<g stroke={'#eee'} strokeWidth={0.499583}>
			<ellipse fill={'none'}
						id="path3630"
						cx="5.6552444"
						cy="5.5106483"
						rx="5.2054529"
						ry="5.0608568"/>
			<text fill={'#eee'} stroke={'none'} fontFamily={'Arial'} fontWeight={'normal'} fontSize={8.47} x={4.8199156}
					y={8.4716091}>i
			</text>
		</g>
	</svg>,
	app: <svg width="500" height="500" viewBox="0 0 116 115" transform={'translate(20 20)'}
				 xmlns="http://www.w3.org/2000/svg">
		<g fill={'none'} stroke={'#eee'} strokeWidth={0.899583} strokeLinecap={'round'} strokeOpacity={1}>
			<rect
				width="23.706627"
				height="23.815084"
				x="3.3633366"
				y="3.2548842"
				ry="2.624547"
				rx="2.4942772"/>
			<circle
				id="path1010"
				cx="6.0890298"
				cy="6.0167327"
				r="1.0121714"/>
			<circle
				id="path1010-5"
				cx="24.344263"
				cy="6.0528808"
				r="1.0121714"/>
			<circle
				id="path1010-0"
				cx="6.0528817"
				cy="24.308115"
				r="1.0121714"/>
			<circle
				id="path1010-1"
				cx="24.344263"
				cy="24.308115"
				r="1.0121714"/>
			<path
				d="m 24.416561,15.053977 -0.0723,-6.0368787 C 22.712284,8.3840405 22.164399,7.2595835 21.488493,6.0528825 c -3.897441,-0.127973 -8.141021,0.12117 -12.3268036,2e-6 -0.657412,1.408398 -1.620468,2.422402 -2.855768,2.675023 l 1e-6,12.7967395 c 1.403733,0.604054 2.005362,1.325087 2.638875,2.891916 l 12.2545016,-0.03615 c 0.745765,-1.103505 0.797505,-2.361238 3.144962,-3.108812 z"
				id="path1180"/>
			<path
				d="m 7.1734984,0.55823749 0.03615,2.60272601"
				id="path1351"/>
			<path
				d="m 11.240261,0.44979149 0.03615,2.60272601"
				id="path1351-0"/>
			<path
				d="m 15.180499,0.48594049 0.03615,2.60272601"
				id="path1351-08"/>
			<path
				d="m 19.265334,0.48594049 0.03615,2.60272601"
				id="path1351-3"/>
			<path
				d="m 23.205572,0.48594049 0.03615,2.60272601"
				id="path1351-5"/>
			<path
				d="m 7.1554254,27.163885 0.03615,2.602726"
				id="path1351-4"/>
			<path
				d="m 11.348708,27.272333 0.03615,2.602726"
				id="path1351-1"/>
			<path
				d="m 15.325095,27.272333 0.03615,2.602726"
				id="path1351-18"/>
			<path
				d="m 19.301482,27.314867 0.03615,2.602726"
				id="path1351-6"/>
			<path
				d="m 23.277869,27.27233 0.03615,2.602726"
				id="path1351-2"/>
			<path
				d="M 0.52208849,7.1554275 3.1248145,7.1192775"
				id="path1351-42"/>
			<path
				d="M 0.48594049,11.240262 3.0886665,11.204112"
				id="path1351-42-4"/>
			<path
				d="M 0.55823849,15.144351 3.1609645,15.108201"
				id="path1351-42-1"/>
			<path
				d="M 0.44979149,19.174962 3.0525175,19.138812"
				id="path1351-42-9"/>
			<path
				d="M 0.55823849,23.205573 3.1609645,23.169423"
				id="path1351-42-7"/>
			<path
				d="m 27.453078,7.1915765 2.602726,-0.03615"
				id="path1351-42-11"/>
			<path
				d="m 27.561525,11.31256 2.602726,-0.03615"
				id="path1351-42-8"/>
			<path
				d="m 27.482484,15.307022 2.602726,-0.03615"
				id="path1351-42-6"/>
			<path
				d="M 27.597674,19.301484 30.2004,19.265334"
				id="path1351-42-2"/>
			<path
				d="m 27.525373,23.295946 2.602726,-0.03615"
				id="path1351-42-3"/>
		</g>
	</svg>,
	game:
		<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox={'0 0 50 50'}>
			<g fill="none" fillRule="evenodd" stroke="#eee" strokeLinecap="round" strokeLinejoin="round"
				strokeWidth="1.5">
				<path strokeLinejoin="miter" d="M22.5 11.63V6M20 8h5"/>
				<path fill="none" strokeLinecap="butt" strokeLinejoin="miter"
						d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"/>
				<path fill="none"
						d="M12.5 37c5.5 3.5 14.5 3.5 20 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-2.5-7.5-12-10.5-16-4-3 6 6 10.5 6 10.5v7"/>
				<path d="M12.5 30c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0"/>
			</g>
		</svg>,
	music: <svg></svg>,
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
		route: routes.news, svg: bgSvg.app
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
		heading: 'Music',
		lines: ['Musik, die ich gemacht habe.'],
		mediaIcons: ['desktop', 'mobile-phone'],
		route: routes.music, svg: bgSvg.music
	},
	{
		heading: 'Über Digi Craft',
		lines: ['Allgemeines über Digi Craft.'],
		mediaIcons: ['desktop', 'mobile-phone'],
		route: routes.about, svg: bgSvg.text
	},
	{
		heading: 'Impressum',
		lines: ['Impressum von Digi Craft.'],
		mediaIcons: ['desktop', 'mobile-phone'],
		route: routes.imprint, svg: bgSvg.text
	},
	{
		heading: 'Datenschutz',
		lines: ['Datenschutz von Digi Craft.'],
		mediaIcons: ['desktop', 'mobile-phone'],
		route: routes.privacy, svg: bgSvg.text
	},
	{
		heading: 'Einstellungen',
		lines: ['Einstellungen für Digi Craft.'],
		mediaIcons: ['desktop', 'mobile-phone'],
		route: routes.settings, svg: bgSvg.app
	},
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
		<Page center>
			<div className={'main-menu-container'}>
				{mainMenu.map((m, idx) =>
					<Card interactive={true} elevation={Elevation.TWO} key={idx} onClick={() => onClick(m)}>
						<div style={{position: 'absolute', top: 0, left: 0}}>
							{m.svg}
						</div>
						<div style={{display: 'flex', justifyContent: 'space-between', position: 'relative'}}>
							<h3 className={'bp5-heading'}>{m.heading}</h3>
							<div style={{color: 'gray'}}>
								{
									// @ts-ignore (icon={i})
									m.mediaIcons.map((i, idx) => <Icon key={idx} icon={i} size={16}/>)
								}
							</div>
						</div>
						<div style={{position: 'relative', fontWeight: 600}}>
							{m.lines.map((l, idx) => <div key={idx}>{l}</div>)}
						</div>
					</Card>
				)}
			</div>
		</Page>
	)
}