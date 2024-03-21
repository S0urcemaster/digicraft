import Image from 'next/image'
import newsThumb from './images/digi-newspaper-page.png'
import { routes } from '../app/routes'
import componentsThumb from './images/digi-components-bricks.png'
import digiCraftThumb from './images/digi-craft.png'
import digiMusicThumb from './images/digi-music.jpg'
import * as React from 'react'
import { bgSvg, MediaIcon } from '../core/model'
import { MenuItem } from '../components/BigMenu'

const NewsImage = <Image alt={''} src={newsThumb} width={100} height={100} style={{marginRight: 20}} />
const ComponentsImage = <Image alt={''} src={componentsThumb} width={100} height={100} style={{marginRight: 20}} />
const DigiCraftImage = <Image alt={''} src={digiCraftThumb} width={200} height={40} style={{marginRight: 20}} />
const DigiMusicImage = <Image alt={''} src={digiMusicThumb} width={100} height={100} style={{marginRight: 20}} />

export const mainMenuContent: MenuItem[] = [
	{
		heading: 'News',
		icon: NewsImage,
		body: <>
			<div style={{fontWeight: 700}}>01.09.2023 Re-Kill</div>
			<div>Ich habe mich entschieden, den aktuellen Projektstand zu killen und den neuen, noch sehr groben Zustand online zu bringen.</div>
			</>,
		mediaIcons: [MediaIcon.desktop, MediaIcon.mobilePhone], route: routes.news, svg: bgSvg.text
	},
	{
		heading: 'Components', icon: ComponentsImage,
		body: <><div>UI Komponenten zur Verwendung in der eigenen Webapp.</div></>,
		mediaIcons: [MediaIcon.desktop, MediaIcon.mobilePhone],
		route: routes.components,
		svg: bgSvg.app,
		// dev: true,
	},
	{
		heading: 'Digi Music',
		icon: DigiMusicImage,
		body: <><div>Radio & Technoscout</div></>,
		mediaIcons: [MediaIcon.desktop, MediaIcon.mobilePhone],
		route: routes.music,
		svg: bgSvg.app
	},
	{
		heading: 'Waypoints',
		body: <>
			<strong>Release Digi Craft 3 Early Access</strong>
			<ul>
				<li>Loading Screen/ Noise on Button Down</li>
				<li>Routes and Components for all Menu Items</li>
				<li></li>
			</ul>
		</>,
		mediaIcons: [MediaIcon.desktop, MediaIcon.mobilePhone],
		route: routes.svgEditor,
		svg: bgSvg.text,
		dev: true,
	},
	{
		heading: 'Digi Craft',
		icon: DigiCraftImage,
		body: <><div>
			Digi Craft ist Anbieter von Ideen, Prototypen, Bauteilen und Anwendungen.
		</div></>,
		mediaIcons: [MediaIcon.desktop, MediaIcon.mobilePhone],
		route: routes.digicraft,
		svg: bgSvg.text,
		dev: true,
	},
	{
		heading: 'Body Craft',
		body: <><div>Fitness für Zuhause</div></>,
		mediaIcons: [MediaIcon.desktop, MediaIcon.mobilePhone],
		route: routes.bodycraft,
		svg: bgSvg.app,
		// dev: true,
	},
	{
		heading: 'Jobs',
		body: <><div>Arbeit gegen Geld</div></>,
		mediaIcons: [MediaIcon.desktop, MediaIcon.mobilePhone],
		route: routes.jobs,
		svg: bgSvg.text,
		// dev: true,
	},
	{
		heading: 'Mental Aid Kit',
		body: <><div>Get back on the Highway</div></>,
		mediaIcons: [MediaIcon.desktop, MediaIcon.mobilePhone],
		route: routes.mentalAidKit,
		svg: bgSvg.app,
		// dev: true,
	},
	{
		heading: 'Digi Clock',
		body: <><div>Online Performance Test</div></>,
		mediaIcons: [MediaIcon.desktop, MediaIcon.mobilePhone],
		route: routes.svgEditor,
		svg: bgSvg.app,
		dev: true,
	},
	{
		heading: 'Coder\'s SVG Editor',
		body: <><div>Erstelle SVG Grafiken per Tastatur und ohne Maus.</div></>,
		mediaIcons: [MediaIcon.desktop],
		route: routes.svgEditor,
		svg: bgSvg.app,
		// dev: true,
	},
	{
		heading: 'Arbeitszeiterfassung',
		body: <><div>Eine App, um Arbeitszeiten zu erfassen.</div></>,
		mediaIcons: [MediaIcon.desktop],
		route: routes.worktime, svg: bgSvg.app,
		// dev: true,
	},
	{
		heading: 'Schach-Notationstrainer',
		body: <><div>Eine App, um Schach-Notation zu trainieren.</div></>,
		mediaIcons: [MediaIcon.desktop],
		route: routes.notationTrainer, svg: bgSvg.game,
		// dev: true,
	},
	{
		heading: 'Pass Maker',
		body: <><div>Eine App, um Passwörter zu generieren.</div></>,
		mediaIcons: [MediaIcon.desktop],
		route: routes.passMaker, svg: bgSvg.app,
		// dev: true,
	},
	{
		heading: 'Erfolge',
		body: <><div>Eine App, um Erfolge zu verwalten.</div></>,
		mediaIcons: [MediaIcon.desktop],
		route: routes.achievements, svg: bgSvg.app,
		// dev: true,
	},
	{
		heading: 'Zahlenraten Reloaded',
		body: <><div>Eine App, um Zahlen zu raten.</div></>,
		mediaIcons: [MediaIcon.desktop, MediaIcon.mobilePhone],
		route: routes.numberGuessing, svg: bgSvg.game,
		// dev: true,
	},
	{
		heading: 'Neo Cortex',
		body: <><div>Eine Sammlung von interessanten Links.</div></>,
		mediaIcons: [MediaIcon.desktop, MediaIcon.mobilePhone],
		route: routes.neoCortex, svg: bgSvg.text,
		// dev: true,
	},
	{
		heading: 'Source Code',
		body: <><div>Der Source Code der Apps.</div></>,
		mediaIcons: [MediaIcon.desktop, MediaIcon.mobilePhone],
		route: routes.sourceCode, svg: bgSvg.text,
		// dev: true,
	},
	{
		heading: 'Über Digi Craft',
		body: <><div>Allgemeines über Digi Craft.</div></>,
		mediaIcons: [MediaIcon.desktop, MediaIcon.mobilePhone],
		route: routes.about, svg: bgSvg.text,
		// dev: true,
	},
	{
		heading: 'Einstellungen',
		body: <><div>Einstellungen für Sie.</div></>,
		mediaIcons: [MediaIcon.desktop, MediaIcon.mobilePhone],
		route: routes.settings, svg: bgSvg.settings,
		// dev: true,
	},
	{
		heading: 'Passwortsicherheit früher und heute',
		body: <><div>Die bislang geltenden Regeln für sichere Passwörter gelten als überholt.</div></>,
		mediaIcons: [MediaIcon.desktop, MediaIcon.mobilePhone],
		route: routes.settings, svg: bgSvg.blog,
		// dev: true,
	},
	// {heading: '', lines: ['']},
	// {heading: '', lines: ['']},
	// {heading: '', lines: ['']},
	// {heading: '', lines: ['']},
]