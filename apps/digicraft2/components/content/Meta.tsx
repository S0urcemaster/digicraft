import * as React from 'react'
import Head from 'next/head'

type MetaType = {
	title: string
	description: string
	keywords: string
}

export const metas = {
	digiCraft: {
		title: 'Digi Craft',
		description: 'Homepage von Sebastian Teister',
		keywords: 'Homepage, Sebastian Teister, Digi Craft, Digitale Arbeiten, Programmierung, Musik, Schreiben, Programmieren, Produzieren',
	},
	projects: {
		title: 'Digi Craft Projects',
		description: 'Projektübersicht Sebastian Teister',
		keywords: 'Projekte, Programmierung, Projektliste, Digitale Arbeiten, Sebastian Teister',
	},
	music: {
		title: 'Technoscout Music',
		description: 'Technoscout Recordings Music Production',
		keywords: 'Electronic Music, Music Production, Electronic Tracks, Techno, Melodic, House, Disco',
	},
	glossary: {
		title: 'Digi Craft Glossar',
		description: 'Erklärungen verwendeter Begriffe auf dieser Homepage',
		keywords: 'Digi Craft Glossar',
	},
	blog: {
		title: 'Blog Sebastian Teister',
		description: 'Artikel von Sebastian Teister',
		keywords: 'Blog, Artikel, Sebastian Teister, Artikel Sebastian Teister, Information, Psychologie, Philosophie, Soziologie, Technik, Programmierung, JavaScript, TypeScript, React.js, Next.js, Express.js, Webprogrammierung, Entwicklung, Kritik, Überlegungen, Gedanken, Weltgeschehen',
	},
	smoothEye: {
		title: 'Digi Craft Smooth Eye',
		description: 'App zur Augenentspannung',
		keywords: 'Smooth Eye Movement, Weiche Augenbewegungen',
	},
	passMaker: {
		title: 'Digi Craft Pass Maker App',
		description: 'App zur Generierung moderner, langer Passwörter',
		keywords: 'Passwortgenerator, Password Generator, Moderne Passwörter',
	},
	numberGuessing: {
		title: 'Digi Craft Guessing Game',
		description: 'Erweiterte Übungsaufgabe aus dem Programmier-Kontext',
		keywords: 'Number Guessing, Zahlenraten',
	},
	neoCortex: {
		title: 'Digi Craft Neo Cortex',
		description: 'Linksammlung im eigenen Kontext',
		keywords: 'Neo Cortex, Linkliste',
	},
	lifeHacks: {
		title: 'Digi Craft Life Hacks',
		description: 'Selected Life Hacks',
		keywords: 'Life Hacks',
	},
	privacy: {
		title: 'Digi Craft Datenschutz',
		description: 'Datenschutzangaben',
		keywords: 'Datenschutz',
	},
	imprint: {
		title: 'Digi Craft Impressum',
		description: 'Impressum',
		keywords: 'Impressum',
	},
	about: {
		title: 'Über Digi Craft',
		description: 'Seitenbeschreibung und -Statistik',
		keywords: 'Digi Craft, Beschreibung, Statistik',
	},
	achievements: {
		title: 'Digi Craft Erfolge App',
		description: 'Eine App, mit der man seine Erfolge festhalten kann',
		keywords: 'Erfolg, Erfolge, App, Programm',
	},
	yourCompanyIsDumb: {
		title: 'Deine Firma ist doof',
		description: 'Artikel über Firmenkultur',
		keywords: 'Firmenkultur',
	},
	passwordSecurity: {
		title: 'Passwortsicherheit früher und heute',
		description: 'Die bislang geltenden Regeln für sichere Passwörter gelten als überholt',
		keywords: 'Passwortsicherheit, veraltete Regeln, moderne Passwörter',
	},
	noSugarInAfrica: {
		title: 'Es gibt keinen Zucker in Afrika',
		description: 'Artikel über überflüssige Kohlenhydrate und ketogene Ernährung',
		keywords: 'Kohlenhydrate, Ketose, Ketogene Ernährung, Kohlenhydratarme Ernährung',
	},
	chatGPT: {
		title: 'Chat GPT ist phänomenal!',
		description: 'Artikel über Chat GPT',
		keywords: 'Chat GPT',
	},
	boellerverbot: {
		title: 'Anarchie statt Böllerverbot',
		description: 'Artikel über selbstverantwortliches Handeln',
		keywords: 'Anarchie, Verbote, selbstverantwortliches Handeln',
	},
	notationTrainer: {
		title: 'Chess Notation Trainer',
		description: 'Schachnotationstrainer',
		keywords: 'Chess, Chess Notation, Chess Notation Trainer, Notation Trainer',
	},
	serenity: {
		title: 'Methoden für mehr Gelassenheit',
		description: 'Wie können Menschen lernen, ihre Emotionen zu regulieren und zu kontrollieren, um ihre Reaktionen auf Stress oder Konflikte zu verbessern?',
		keywords: 'Gelassenheit, Ausgeglichenheit, Selbstcoaching, Ernährung, Meditation, Geistiges Training',
	},
	workingHoursModel: {
		title: 'Neues Arbeitszeitmodell',
		description: 'Wie freie Zeiteinteilung die Work-Life-Balance verbessert.',
		keywords: '5 Stunden pro Tag, Arbeitszeit, Alternativen, Freie Zeiteinteilung',
	},
	resumeGenerator: {
		title: 'Lebenslaufgenerator',
		description: 'Lebenslaufgenerator',
		keywords: 'Lebenslauf, Generator, Lebenslaufgenerator, PDF, PDF Generator',
	},
	decider: {
		title: 'Der Entscheider',
		description: 'Eine App, die dir Entscheidungen abnimmt.',
		keywords: 'Entscheider, Entscheidungen treffen, Zufallsgenerator, Schicksal, ToDo, ToDos erledigen',
	},
	worktime: {
		title: 'Arbeitszeiterfassung nach neuem Arbeitszeitmodell',
		description: 'Eine Zeiterfassung für das 5/365 -Modell',
		keywords: 'Arbeitszeit, Work-Life-Balance, Weniger Arbeiten, Mehr Arbeiten, Arbeitszeitplanung, Freie Zeiteinteilung',
	},
	radio: {
		title: 'Digi Radio Convenience Player',
		description: 'Kleine Radio App zum Streamen - Keine zusätzliche Werbung',
		keywords: 'Internet Radio, Radio, Streamen, App',
	},
	svgEditor: {
		title: 'Coder\'s SVG Editor',
		description: 'Create and Edit SVGs for your web components just with the keyboard',
		keywords: 'SVG, SVG Editor, SVG keyboard editor',
	},
	applicationRedesign: {
		title: 'Application Redesign',
		description: 'Article about what to do if the iterative software model doesn\'t fit well',
		keywords: 'programming article, sowftware architecture, software design',
	},
	// projects: {
	// 	title: '',
	// 	description: '',
	// 	keywords: '',
	// },

}

export default function Meta(props: {meta: MetaType}) {
	return (
		<Head>
			<title>{props.meta.title}</title>
			<meta name={'description'} content={props.meta.description} key={'description'}/>
			<meta name={'keywords'} content={props.meta.keywords} key={'keywords'}/>
		</Head>
	)
}