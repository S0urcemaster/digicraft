import { Certificate, Education, Employment, PersonalData, ProfessionData, Project, Resume, Training } from './types'
import ExternalLink from '../ui/ExternalLink'
import { ReactNode } from 'react'


const ExtLink = (props: { href: string, children: ReactNode }) =>
	<ExternalLink href={props.href} iconSize={10}
					  style={{textDecoration: 'none', marginBottom: '-13px'}}>{props.children}</ExternalLink>


const sntrPersonalData: PersonalData = {
	name: 'Sebastian Teister',
	street: 'Lindenstraße 1',
	city: '72555 Metzingen',
	birthDate: '3.5.1975',
	birthCity: 'Kedzierzyn/Polen',
	citizenship: 'Deutsch',
	maritalStatus: 'Ledig',
	personality: 'INTP-T',
	telephone: '0151 64972384',
	email: 'sebastian-teister@outlook.de',
	photo: '',
	website: 'https://digi-craft.de',
	urls: [
		['LinkedIn', 'https://www.linkedin.com/in/sebastian-teister'],
		['Xing', 'https://www.xing.com/profile/Sebastian_Teister'],
		// ['Quora', 'https://www.quora.com/profile/Sebastian-Teister'],
	],
}

const sntrProfessionData: ProfessionData = {
	title: 'Fullstack Entwickler',
	professionReasonText: `
	Eine Vertiefung in Richtung reaktive Web-Frontends würde ich zurzeit bevorzugen und wäre auch meine
	Empfehlung für Neuentwicklungen. Da die Nachfrage nach Java Entwicklern aber nach wie vor hoch ist, ist ein
	Auffrischungsprojekt mit Spring Boot im Backend im Zuge der Neuentwicklung meiner Homepage geplant.
	Für Webfrontends wäre meine erste Wahl jedoch TypeScript mit React und Next.js, die ich 
	auch in meinem Homepage-Projekt einsetze. Besonders freue ich mich auf die Weiterentwicklung des SVG Editors, 
	der aufgrund der erwarteten Komplexität ein sauberes Design erfordert.
	`,
}

const sntrEmployments: Employment[] = [
	{
		dateFrom: '6 / 2023', dateTo: 'heute',
		title: 'Selbstständig*', companyName: 'Digi Craft', companyCity: 'Metzingen', tasks: [
			['Neuentwicklung eines Webfrontends', ['TypeScript', 'React', 'Next']],
			['Weiterentwicklung einer Vektorgrafik App', ['TypeScript', 'React', 'SVG']],
			['Umsetzen einer Projektstruktur in Monorepo-Manier', ['pnpm workspaces']],
		], description: '', techStack: ''
	},
	{
		dateFrom: '5 / 2023', dateTo: '6 / 2023',
		title: 'IT Consultant', companyName: 'BCM Solutions GmbH', companyCity: 'Stuttgart/Remote', tasks: [
			['Workshops', ['Verkauf', 'Kommunikation']],
			['Bearbeitung einer internen Projektaufgabe zur Einstufung', ['JavaScript', 'HTML', 'CSS', 'Srcum']],
			['Erarbeitung und Fertigstellung eines Prototyps für ein internes Projekt',
				['TypeScript', 'Stencil.js', 'web-components', 'SVG', 'Scrum']],
		], description: '', techStack: ''
	},
	{
		dateFrom: '11 / 2022', dateTo: '04 / 2023',
		title: 'Selbstständig', companyName: 'Digi Craft', companyCity: 'Metzingen', tasks: [
			['Neuentwicklung eines Webfrontends', ['TypeScript', 'React', 'Next']],
			['Neuentwicklung einer vektorgrafikbasierten Schachanwendung', ['TypeScript', 'React', 'SVG']],
			['Neuentwicklung eines vektorgrafikbasierten Jahreskalenders mit Arbeitszeitberechnung', ['TypeScript', 'React', 'SVG']],
			['Redesign eines Passwortgenerators und Portierung des Backends auf Express', ['TypeScript', 'React', 'Express', 'SQL']],
			['Entwicklung eines Prototyps für vektorbasierte Grafikbearbeitung mit der Tastatur', ['TypeScript', 'React', 'SVG']],
		], description: '', techStack: ''
	},
	{
		dateFrom: '7 / 2021', dateTo: '9 / 2022',
		title: 'Fullstack Developer', companyName: 'JB Support GmbH', companyCity: 'Pliezhausen', tasks: [
			['Weiterentwicklung einer POS/Point of Sale Webanwendung mit TSE/ JustEat API Anbindung und DSFinV-K Export.', ['TypeScript', 'Vue.js', 'Go']],
			['Automatisierte Social Media Insights Auswertung und Import in Google BigQuery mit Cloud Functions.', ['Go', 'BigQuery', 'Cloud Functions']],
			['Entwicklung zweier Formulargeneratorplugins für Contao CMS.', ['PHP', 'Contao CMS']],
			['Erweiterung einer umfangreichen Datenverwaltungssoftware mit E-Mail Verification und PDF Generierung.', ['PHP', 'Laravel', 'Vue.js']],
		], description: '', techStack: ''
	},
	{
		dateFrom: '10 / 2021',
		dateTo: '10 / 2021',
		title: 'Selbständig',
		companyName: 'Digi Craft',
		companyCity: 'Metzingen',
		tasks: [
			[<>Schreiben eines <ExtLink href={'https://digi-craft.de/apps/notationTrainer'}>Workflowtools</ExtLink> zum
				einfachen Speichern und Abrufen von Pfaden und Befehlen.</>, ['Go', 'WSL']],
		],
		description: 'Terminal-Anwendung mit Menüsteuerung',
		techStack: '',
	},
	{
		dateFrom: '11 / 2020', dateTo: '05 / 2021',
		title: 'Selbstständig', companyName: 'Digi Craft', companyCity: 'Metzingen', tasks: [
			['Neuentwicklung eines Webfrontends', ['JavaScript', 'React']],
			['Neuentwicklung eines Passwortgenerators', ['JavaScript', 'React']],
			['Neuentwicklung eines Webcrawlers mit Datenbank', ['Java', 'SQL', 'Postgres']],
		], description: '', techStack: ''
	},
	{
		dateFrom: '4 / 2019', dateTo: '4 / 2020',
		title: 'Fullstack Developer', companyName: 'Karl Flamm GmbH & Co. KG', companyCity: 'Riederich', tasks: [
			['Entwicklung von Workflowtools für den Speditionsbetrieb', ['PHP', 'Laravel', 'Git', 'Scrum']],
			['Entwicklung einer Customer-Relationship-Webanwendung', ['Vue', 'PHP', 'Laravel']],
			['Administration', ['Linux']]
		], description: '', techStack: '',
	},
	{
		dateFrom: '6 / 2014', dateTo: '8 / 2014',
		title: 'Administrator', companyName: 'Karl Flamm GmbH & Co. KG', companyCity: 'Riederich', tasks: [
			['Linux und Windows Server Administration, Support', ['Linux', 'Windows', 'Support']],
			['Upgrade der Infrastruktur', ['Windows']],
		], description: '', techStack: '',
	},
	{
		dateFrom: '2 / 2008', dateTo: '9 / 2008',
		title: 'Java Programmierer', companyName: 'ASP Technik GmbH', companyCity: 'Rohrbach/Ilm', tasks: [
			['Programmierung eines 3D Datenanalysetools zur Überprüfung von Produktionsprozessen', ['Java', 'Java3D']],
			['Entwicklung von Tools für Dateiim- /Export und zur Datensicherung', ['Java']],
			['Bereitstellung von Tools als Windows Service', ['Sockets']]
		], description: '', techStack: '',
	},
	{
		dateFrom: '1 / 2007',
		dateTo: '9 / 2007',
		title: 'Java Backend Developer',
		companyName: 'Yapoware Business Solutions GmbH',
		companyCity: 'Stuttgart',
		tasks: [
			['Entwicklung einer Software zur Abnahme von Führerscheinprüfungen', ['J2EE', 'Hibernate', 'Oracle']],
			['Umfangreiches Testen von Funktionen, auch im parallelen Kontext', ['JUnit']],
			['Deployment der fertigen Anwendung', ['Bea Server']]
		],
		description: '',
		techStack: '',
	},
	{
		dateFrom: '10 / 2001', dateTo: '3 / 2002',
		title: 'IT Consultant', companyName: 'Exact-Consulting GmbH', companyCity: 'Eningen', tasks: [
			['Programmierung der Firmenhomepage und des Intranets', ['HTML', 'Java', 'Struts']],
			['Support und Produktpflege beim Kunden', []],
			['Workflowanalyse', []],
		], description: '', techStack: '',
	},
]

const sntrOtherEmployments: Employment[] = [
	{
		dateFrom: '2 / 2018', dateTo: '7 / 2018',
		title: 'Berufskraftfahrer', companyName: 'Karl Flamm GmbH & Co. KG', companyCity: 'Riederich', tasks: [
			['Springer im Stückgut-Nahverkehr', []]
		], description: '', techStack: '',
	},
	{
		dateFrom: '2 / 2015', dateTo: '7 / 2016',
		title: 'Berufskraftfahrer', companyName: 'Mosolf GmbH', companyCity: 'Kirchheim/Teck', tasks: [
			['Kfz-Schwertransport im Nahverkehr und Schichtbetrieb', []]
		], description: '', techStack: '',
	},
	{
		dateFrom: '8 / 2008',
		dateTo: '5 / 2014',
		title: 'Arbeitslos**',
		companyName: 'Arbeitsagenturen und Jobcenter',
		companyCity: 'Stuttgart, Reutlingen, Berlin',
		tasks: [
			['Privatinsolvenz, Haus-und-Wohnungsbrand, kürzere Nebenjobs Taxi und Supermarkt, verschiedene Kurse Arge und Jobcenter', []]
		],
		description: '',
		techStack: '',
	},
	{
		dateFrom: '5 / 2005', dateTo: '4 / 2006',
		title: 'Taxi Fahrer', companyName: 'Minicar', companyCity: 'Reutlingen', tasks: [
			['Personenbeförderung.', []]
		], description: '', techStack: '',
	},
	{
		dateFrom: '7 / 2003', dateTo: '3 / 2004',
		title: 'Auslieferungsfahrer 7,5t', companyName: 'Schreyer GmbH', companyCity: 'Metzingen', tasks: [
			['Schreib- und Spielwaren an Firmenkunden liefern.', []]
		], description: '', techStack: '',
	},
	{
		dateFrom: '4 / 2001', dateTo: '9 / 2001',
		title: 'Auslieferungsfahrer 7,5t', companyName: 'Schreyer GmbH', companyCity: 'Metzingen', tasks: [
			['Schreib- und Spielwaren an Firmenkunden liefern.', []]
		], description: '', techStack: '',
	},
]

const sntrProjects: Project[] = [
	{
		dateFrom: '6 / 2021', dateTo: '6 / 2021',
		title: 'Appentwicklung', companyName: 'Analysetool für DJing', companyCity: 'Metzingen', tasks: [
			[<>Entwickeln einer <ExtLink href={'https://digi-craft.de/apps/notationTrainer'}>App</ExtLink> zur Überprüfung
				KI-ermittelter Tonartanalysen von Musiktracks.</>, ['React', 'Electron']],
		], description: '', techStack: '',
	},
	{
		dateFrom: '1 / 2021', dateTo: '3 / 2021',
		title: 'Fullstack Webentwicklung', companyName: 'Homepage mit Apps/Tools', companyCity: 'Metzingen', tasks: [
			['Schreiben einer Webseite und diversen Toolideen mit React (erste Version von Digi Craft).', ['React', 'PHP', 'Java', 'Postgres']]
		], description: '', techStack: '',
	},

	{
		dateFrom: '3 / 2020', dateTo: '3 / 2020',
		title: 'Webentwicklung', companyName: 'Lagerhaltung', companyCity: '', tasks: [
			['Schreiben einer PHP Webseite mit Ideen als Bewerbungsprojekt.', ['PHP', 'Laravel']]
		], description: '', techStack: '',
	},
	{
		dateFrom: '3 / 2017', dateTo: '3 / 2017',
		title: 'Anwendungsentwicklung', companyName: 'Midi Transceiver', companyCity: '', tasks: [
			['Schreiben eines MIDI Transceivers zum Modding von Ableton Push.', ['Java']]
		], description: '', techStack: '',
	},
	{
		dateFrom: '8 / 2015', dateTo: '8 / 2015',
		title: 'Anwendunsentwicklung', companyName: 'Notebook im LKW', companyCity: '', tasks: [
			['Schreiben einer HID Notebooksterung zur Verwendung im LKW während der Fahrt.', ['Autohotkey']]
		], description: '', techStack: '',
	},
	{
		dateFrom: '3 / 2013', dateTo: '3 / 2013',
		title: 'Fullstack Webentwicklung', companyName: 'Spieltool', companyCity: '', tasks: [
			['Entwurf einer Sternsystemdatenbank im Kontext von Elite Dangerous (Computerspiel)', ['Java', 'Spring']]
		], description: '', techStack: '',
	},
	{
		dateFrom: '4 / 2012', dateTo: '8 / 2012',
		title: 'Programmierung', companyName: 'Minecraft Computercraft', companyCity: '', tasks: [
			['Schreiben von Skripten zur Steuerung von Robotern in Minecraft', ['ComputerCraft', 'Lua']],
			['Über 100 Minecraft Videos auf Youtube im Programmierkontext', ['Youtube']],
		], description: '', techStack: '',
	},
	// {
	// 	dateFrom: '', dateTo: '',
	// 	title: '', companyName: '', companyCity: '', tasks: [
	// 		['', []]
	// 	], description: '', techStack: '',
	// },
]

const sntrTrainings: Training[] = [
	{
		dateFrom: '2 / 2023', dateTo: '5 / 2023',
		title: 'Web Application Security', schoolName: 'Skytale', schoolCity: 'Remote', tasks: [
			['Sicherheit beim Anwendungsbau', ['Web Application Security']],
		], description: '', techStack: '',
	},
	{
		dateFrom: '3 / 2021', dateTo: '6 / 2021',
		title: 'Weiterbildungen', schoolName: 'alfatraining', schoolCity: 'Remote', tasks: [
			['2-monatiger Kurs Qt', ['C++', 'Qt']],
			['1-monatiger Kurs Python', ['Python']],
			['1-monatiger Kurs Machine Learning', ['Python']],
		], description: '', techStack: '',
	},
	{
		dateFrom: '1 / 2016', dateTo: '1 / 2018',
		title: 'Umschulung', schoolName: 'etz', schoolCity: 'Stuttgart', tasks: [
			['Mechatronik, nicht abgeschlossen', ['Mechatronik']]
		], description: '', techStack: ''
	},
	{
		dateFrom: '10 / 2014', dateTo: '1 / 2015',
		title: 'Berufskraftfahrerqualifikation', schoolName: 'Dekra', schoolCity: 'Reutlingen', tasks: [
			['Berufskraftfahrerqualifikation', []],
			['Führerschein CE', []],
		], description: '', techStack: '',
	},
	{
		dateFrom: '10 / 2007', dateTo: '1 / 2008',
		title: 'Java Zertifizierungen', schoolName: 'GFN', schoolCity: 'Stuttgart', tasks: [
			['Sun Certified Java Programmer (Basic)', ['Java']],
			['Sun Certified Java Developer (Advanced)', ['Java']],
		], description: '', techStack: '',
	},
	{
		dateFrom: '10 / 1999', dateTo: '3 / 2001',
		title: 'Hochschule', schoolName: 'Fachhochschule', schoolCity: 'Furtwangen', tasks: [
			['Allgemeine Informatik, nicht abgeschlossen', ['Java', 'C++']]
		], description: '', techStack: '',
	},
	// {
	// 	dateFrom: '9 / 1994', dateTo: '5 / 1998',
	// 	title: 'Schüler', schoolName: 'Ferdinand-von-Steinbeis-Schule', schoolCity: 'Reutlingen', tasks: [
	// 		['Technisches Gymnasium', ['Mathe', 'Technik']]
	// 	], description: '', techStack: '',
	// },
	// {
	// 	dateFrom: '9 / 1992', dateTo: '6 / 1994',
	// 	title: 'Schüler', schoolName: 'Berufsfachschule', schoolCity: 'Metzingen', tasks: [
	// 		['Berufsschule Metalltechnik', []]
	// 	], description: '', techStack: '',
	// },
	// {
	// 	dateFrom: '8 / 1985', dateTo: '5 / 1992',
	// 	title: 'Schüler', schoolName: 'Dietrich-Bonhoeffer-Gymnasium', schoolCity: 'Metzingen', tasks: [
	// 		['Allgemeines Gymnasium, nicht abgeschlossen', []]
	// 	], description: '', techStack: '',
	// },
]

const sntrCertificates: Certificate[] = [
	{
		date: '01.05.2023',
		title: 'Web Application Security',
		schoolCity: '4 Wochen Remote',
		schoolName: 'Skytale',
		description: '',
		techStack: ''
	},
	{
		date: '21.07.2021',
		title: 'Maschine Learning',
		schoolCity: '4 Wochen Remote',
		schoolName: 'alfatraining',
		description: '',
		techStack: ''
	},
	{
		date: '04.06.2021',
		title: 'Programmierung mit Python',
		schoolCity: '4 Wochen Remote',
		schoolName: 'alfatraining',
		description: '',
		techStack: ''
	},
	{
		date: '07.05.2021',
		title: 'C++/Qt-Entwickler',
		schoolCity: '8 Wochen Remote',
		schoolName: 'alfatraining',
		description: '',
		techStack: ''
	},
	{
		date: '01.02.2008',
		title: 'Sun Certified Java Developer',
		schoolCity: '4 Wochen in Stuttgart',
		schoolName: 'GFN',
		description: '',
		techStack: ''
	},
	{
		date: '16.12.2007',
		title: 'Sun Certified Java Programmer',
		schoolCity: '8 Wochen Remote',
		schoolName: 'GFN',
		description: '',
		techStack: ''
	}
]

export const sntrResume: Resume = {
	name: 'Neuer Lebenslauf',
	date: '01.03.2023',
	personalData: sntrPersonalData,
	professionData: sntrProfessionData,
	employments: sntrEmployments,
	otherEmployments: sntrOtherEmployments,
	projects: sntrProjects,
	trainings: sntrTrainings,
	education: [] as Education[],
	certificates: sntrCertificates,
	interests: ['Sport', 'Ernährung', 'Klima', 'Technik und Fortschritt', 'Authoring /Schreiben', 'Filme, Serien, Dokus',
		'Schach', 'Psychologie', 'Philosophie', 'Politik und Weltgeschehen', 'Musikproduktion', 'Autos', 'Elektromobilität', 'Gaming',

	]
}
