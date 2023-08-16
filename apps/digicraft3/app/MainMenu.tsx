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
	text: <svg height="150" viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg"
				  transform={'translate(20 20)'}>
		<g stroke={'#eee'} strokeWidth={0.8}>
			<ellipse fill={'none'}
						id="path3630"
						cx="5.6552444"
						cy="5.5106483"
						rx="5.2054529"
						ry="5.0608568"/>
			<text fill={'#eee'} stroke={'none'} fontFamily={'Arial'} fontWeight={'bold'} fontSize={8.47} x={4.6199156}
					y={8.4716091}>i
			</text>
		</g>
	</svg>,
	app: <svg height="150" viewBox="0 0 30 30" transform={'translate(20 20)'}
				 xmlns="http://www.w3.org/2000/svg">
		<g fill={'none'} stroke={'#eee'} strokeWidth={1.299583} strokeLinecap={'round'} strokeOpacity={1}>
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
		<svg xmlns="http://www.w3.org/2000/svg" height="150" viewBox={'0 0 40 40'}>
			<g fill="none" fillRule="evenodd" stroke="#eee" strokeLinecap="round" strokeLinejoin="round"
				strokeWidth="2.5">
				<path strokeLinejoin="miter" d="M22.5 11.63V6M20 8h5"/>
				<path fill="none" strokeLinecap="butt" strokeLinejoin="miter"
						d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"/>
				<path fill="none"
						d="M12.5 37c5.5 3.5 14.5 3.5 20 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-2.5-7.5-12-10.5-16-4-3 6 6 10.5 6 10.5v7"/>
				<path d="M12.5 30c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0"/>
			</g>
		</svg>,
	settings:
		<svg fill="#eee" stroke={'none'} height="150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" transform={'translate(20 20)'}>
			<g>
				<g>
					<path d="M486.4,204.8h-32.299c-4.779-18.466-12.134-36.233-21.82-52.676l22.835-22.844c10.001-10.001,10.001-26.206,0-36.207
					L418.91,56.866c-4.804-4.804-11.315-7.501-18.099-7.501c-6.793,0-13.303,2.697-18.099,7.501L359.868,79.71
					c-16.435-9.677-34.202-17.033-52.668-21.811V25.6c0-14.14-11.46-25.6-25.6-25.6h-51.2c-14.14,0-25.6,11.46-25.6,25.6v32.299
					c-18.466,4.779-36.233,12.134-52.676,21.82l-22.835-22.844c-4.804-4.804-11.315-7.501-18.099-7.501S97.886,52.07,93.09,56.875
					L56.883,93.082c-10.001,10.001-10.001,26.206,0,36.207l22.844,22.844c-9.694,16.435-17.05,34.202-21.828,52.668H25.6
					C11.46,204.8,0,216.26,0,230.4v51.2c0,14.14,11.46,25.6,25.6,25.6h32.299c4.779,18.466,12.134,36.233,21.82,52.676L56.875,382.72
					c-10.001,10.001-10.001,26.206,0,36.207l36.207,36.207c5.001,5.001,11.554,7.501,18.099,7.501c6.545,0,13.107-2.5,18.099-7.501
					l22.844-22.844c16.444,9.685,34.21,17.05,52.676,21.82v32.29c0,14.14,11.46,25.6,25.6,25.6h51.2c14.14,0,25.6-11.46,25.6-25.6
					v-32.299c18.466-4.779,36.233-12.134,52.676-21.82l22.844,22.844c5,5,11.554,7.501,18.099,7.501s13.107-2.5,18.099-7.501
					l36.198-36.207c10.001-10.001,10.001-26.206,0-36.207l-22.835-22.844c9.685-16.444,17.041-34.21,21.82-52.676H486.4
					c14.14,0,25.6-11.46,25.6-25.6v-51.2C512,216.26,500.54,204.8,486.4,204.8z M486.4,281.6h-53.239
					c-4.352,30.327-16.239,58.138-33.792,81.57l37.641,37.641l-36.207,36.207l-37.641-37.641
					c-23.432,17.545-51.243,29.44-81.57,33.792V486.4h-51.2v-53.239c-30.327-4.352-58.138-16.239-81.57-33.792l-37.641,37.641
					l-36.207-36.207l37.641-37.641c-17.544-23.432-29.44-51.243-33.792-81.57H25.6v-51.2h53.24
					c4.352-30.327,16.239-58.138,33.792-81.57l-37.641-37.641l36.207-36.207l37.641,37.641c23.433-17.544,51.243-29.44,81.57-33.783
					V25.6h51.2v53.24c30.328,4.352,58.138,16.239,81.57,33.783l37.641-37.641l36.207,36.207l-37.641,37.641
					c17.544,23.432,29.44,51.243,33.792,81.57H486.4V281.6z"/>
				</g>
			</g>
			<g>
				<g>
					<path d="M256,128c-70.69,0-128,57.31-128,128s57.31,128,128,128s128-57.31,128-128S326.69,128,256,128z M256,358.4c-56.465,0-102.4-45.935-102.4-102.4S199.535,153.6,256,153.6S358.4,199.535,358.4,256S312.465,358.4,256,358.4z"/>
				</g>
			</g>
		</svg>,
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
		route: routes.settings, svg: bgSvg.settings
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

	return (
		<Page center>
			<div className={'main-menu-container'}>
				{mainMenu.map((m, idx) =>
					<Card interactive={true} elevation={Elevation.TWO} key={idx} onClick={() => onClick(m)}>
						<div style={{position: 'absolute', top: 0, left: 0}}>
							{m.svg}
						</div>
						<div style={{display: 'flex', justifyContent: 'space-between', position: 'relative'}}>
							<h3 className={'bp5-heading'} style={{marginTop: -5}}>{m.heading}</h3>
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