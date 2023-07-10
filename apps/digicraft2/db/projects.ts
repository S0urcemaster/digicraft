export type Project = {
	title: string
	date: string
	client: string
	techStack: string[]
	details: string[]
}

const projects: Project[] = [
	{
		title: 'Web Application Security Kurs',
		date: 'Seit Januar 2022',
		client: 'Skytale',
		techStack: ['Web Application Security'],
		details: [
			'Schwachstellen kennen',
			'Sichere Applikationen entwickeln',
			'Web- und Applicationserver konfigurieren',
		]
	},
	{
		title: 'Digi Craft 3.0 (Neues Projekt mit Übertrag)',
		date: 'Seit November 2022',
		client: 'Mich selbst',
		techStack: ['TypeScript', 'React.js', 'Next.js', 'Express.js', 'HTML', 'CSS'],
		details: [
			'Überführen der statischen Homepage nach React/Next',
			'Überarbeitung des Passwortgenerators',
			'Entwickeln von Komponenten mit Framework-Intension (Layout, Typography)',
			'Wiedererweckung des Sprüche-Features',
			'Extra: Umsetzung einer kleinen Spielidee',
			'Extra: Schreiben von Blog-Artikeln',
			'Extra: SVG-Logo als React Komponente'
		]
	},
	{
		title: 'Point of Sale (Übernommen)',
		date: 'Juni 2021 – Januar 2022',
		client: 'IT Dienstleister',
		techStack: ['Go', 'Gorm', 'GraphQL', 'Vue.js', 'VueX', 'AWS S3', 'Html', 'CSS', 'MySQL'],
		details: [
			'Weiterentwicklung Frontend und Backend',
			'TSE Kassenanbindung und Transaktionen',
			'JustEat Api Anbindung',
			'Datenaufbereitung für Finanzprüfungsexport (DSFinV-K)',
			'Backup von Kassensturz auf S3',
			'Vereinfachung des Softwaredesigns (Komponenten-, Objektorientierung)',
		]
	},
	{
		title: 'Social Media Insights Auswertung (Neues Projekt)',
		date: 'September - November 2021',
		client: 'IT Dienstleister',
		techStack: ['Go', 'Facebook API', 'LinkedIn API', 'Google Cloud Functions', 'BigQuery', 'SQL'],
		details: [
			'Erhalten der Berechtigungen für Facebook Apps',
			'Setup der Kundenkonten',
			'Auslesen von Beitragsstatistiken per REST Api',
			'Schreiben der Statistikdaten mit Cloud Functions nach BigQuery',
		]
	},
	{
		title: 'Terminal Workflow (Copy/Paste) Tool (Neues Projekt)',
		date: 'Oktober 2021 (+Updates)',
		client: 'Mich selbst',
		techStack: ['Go', 'WSL Terminal'],
		details: [
			'Vereinfachung von Vorgängen bei der Entwicklung',
		]
	},
	{
		title: 'Content Management Plugin Entwicklung x2 (Neue Projekte)',
		date: 'Juni – August 2022',
		client: 'IT Dienstleister\n',
		techStack: ['PHP', 'Contao CMS', 'Active Directory Login', 'Html', 'CSS'],
		details: [
			'Formulargenerierung im Contao Modul Context',
			'Word Document-Scan',
			'PDF-Generierung',
		]
	},
	{
		title: 'Erweiterung einer umfangreichen Datenverwaltungssoftware (Übernommen)',
		date: 'Januar – März 2022',
		client: 'IT Dienstleister',
		techStack: ['PHP', 'Laravel', 'JavaScript', 'jQuery', 'Vue.js', 'AWS S3', 'Html', 'CSS', 'SQL', 'Tailwind'],
		details: [
			'Erweiterung des Frontends/Backends',
			'Authentication mit exclusiver User Group',
			'Email Verification',
			'PDF-Generierung',
			'User Management',
		]
	},
	{
		title: 'Tonart Analysetool für Musik (Neues Projekt)',
		date: 'Juni 2021',
		client: 'Mich Selbst',
		techStack: ['React.js', 'TypeScript', 'Electron', 'Web Audio API', 'Html', 'CSS'],
		details: [
			'Vergleich von maschinell analysierten Tonarten mit dem Gehör',
		]
	},
	{
		title: 'Schulung Python, Machine Learning, C++/Qt',
		date: 'Mai - Juni 2021',
		client: 'Alfa Training',
		techStack: ['Python', 'C++', 'Qt'],
		details: [
			'Maschine Learning war vergleichsweise einfach. Man kommt zu dem Schluss, dass die "Maschinen" ' +
			'noch recht weit davon entfernt sind, "intelligent" zu sein.',
		]
	},
	{
		title: 'Single Page Application R&D Project (Neues Projekt)',
		date: 'Januar – März 2021',
		client: 'Mich Selbst',
		techStack: ['React.js', 'TypeScript', 'Ant Design', 'Java', 'PHP', 'Html', 'CSS'],
		details: [
			'Schreiben einer Webseite mit verschiedenen Ideen für Tools',
		]
	},
	{
		title: 'CRM Software (Neues Projekt /Portierung)',
		date: 'Dezember 2019 – April 2020',
		client: 'Spedition',
		techStack: ['PHP', 'Laravel', 'Vue.js', 'Html', 'CSS', 'PostgreSQL', 'SQL', 'Git'],
		details: [
			'Portierung einer bestehenden Customer Relationship Management Software',
		]
	},
	{
		title: 'Lebenslauf',
		date: 'Januar 2018',
		client: 'Mich selbst',
		techStack: ['XSL', 'XSLT', 'HTML', 'CSS'],
		details: [
			'Womit den Lebenslauf schreiben, so dass man in 1 Jahr immer noch weiß, wie man den damals hinformatiert hat?',
		]
	},
	{
		title: 'Schulung Mechatronik',
		date: 'August 2016 – Januar 2018',
		client: 'ETZ Stuttgart',
		techStack: ['Elektrotechnik', 'Metalltechnik'],
		details: [
			'Eine Idee',
		]
	},
	{
		title: 'Prüfarbeitsplatz Dieselmotor Beleuchtung',
		date: '3 Abende in November 2017',
		client: 'Möglicherweise Mercedes',
		techStack: ['CAD', 'Parametrische Modellierung'],
		details: [
			'Erstellung eines Beleuchtungskonzepts in 3D für einen Prüfarbeitsplatz.',
		]
	},
	{
		title: 'MIDI Transceiver für umprogrammierten Ableton Push DAW Controller zum DJ Controller',
		date: 'März 2017',
		client: 'Mich selbst',
		techStack: ['Java', 'MIDI'],
		details: [
			'Jog-Wheels sind unnötig, wenn man nicht Scratchen will.',
		]
	},
	{
		title: 'Administration und Support',
		date: 'Juni - August 2014',
		client: 'Spedition',
		techStack: ['Linux', 'Windows Server', 'Netzwerk', 'Gebäudetechnik'],
		details: [
			'Administration',
			'Netzwerkaus- und Umbau',
			'Mitarbeitersupport',
		]
	},
	{
		title: 'Datenverwaltung für Sternsystemdaten für Elite Dangerous (Computerspiel)',
		date: '1 Monat in 2013',
		client: 'Mich selbst (und Enthusiasten)',
		techStack: ['Java', 'Servlets', 'Html', 'CSS', 'SQL Server', 'SQL'],
		details: [
			'Netter Versuch, aber zu Umfangreich.',
		]
	},
	{
		title: 'Programmierung einer Notebooksteuerung nur mit Tastatur-Nummernblock zur Blindbedienung im LKW während der Fahrt',
		date: '1 Monat in 2015',
		client: 'Mich selbst (so langweilig)',
		techStack: ['Autohotkey'],
		details: [
			'Entwicklung eines Konzepts zu risikoarmen Notebookverwendung',
			'Vollständige Texteingabe',
			'Maussteuerung',
			'(Der größte Risikofaktor ist der lange Blickweg von der Straße auf Armaturen und die Verweildauer darauf.',
			'Wenn das Notbook direkt unterhalb der Frontscheibe montiert ist, hat man immer auch die Straße im Blick.)'
		]
	},
	{
		title: 'Stempeluhr',
		date: '1 Monat in 2013',
		client: 'Mich selbst',
		techStack: ['Scala', 'ScalaFX'],
		details: [
			'Einlernen in eine interessante Programmiersprache',
		]
	},
	{
		title: 'Minecraft Computercraft',
		date: '3 Monate in 2012',
		client: 'Mich selbst',
		techStack: ['Lua'],
		details: [
			'Einlernen in Lua',
			'Schreiben von Hoch- Tiefbau Scripts',
		]
	},
	{
		title: 'Spielentwicklung Einstieg',
		date: '1 Monat in 2010',
		client: 'Mich selbst',
		techStack: ['C#', 'XNA Framework', 'Blender3D'],
		details: [
			'Einlernen und DirectX',
			'Einlernen in Blender3D',
		]
	},
	{
		title: 'Altes Notebook zum Radiowecker umbauen',
		date: '1 Monat in 2010',
		client: 'Mich selbst',
		techStack: ['C#'],
		details: [
			'Einlernen in C#',
		]
	},
	{
		title: 'Backup Software und diverse Tools im Bereich CAD (Neue Projekte)',
		date: 'Februar – August 2008',
		client: 'Automobilzulieferer',
		techStack: ['Java', 'Java3D', 'Catia', 'RobCAD', 'Parallele Programmierung'],
		details: [
			'Datenanalyse in 3D',
			'Socketprogrammierung',
			'Java Anwendung als Windows Service',
		]
	},
	{
		title: 'Schulung Java mit Zertifizierungen',
		date: 'Februar – August 2008',
		client: 'GFN Stuttgart',
		techStack: ['Java', 'Concurrency'],
		details: [
			'SCJP - Sun Certified Java Programmer - Multiple Choice Test',
			'SCJD - Sun Certified Java Developer - Programmieraufgabe mit Parallelität, Mündliche Abnahme'
		]
	},
	{
		title: 'Dekra Führerscheinprüfungssoftware (Neues Projekt)',
		date: 'Januar – September 2007',
		client: 'IT Dienstleister',
		techStack: ['Java EE', 'JPA/Hibernate', 'JUnit', 'JMS', 'Bea Application Server', 'Context Aware'],
		details: [
			'Implementierung einer vorgegebenen Architektur',
			'Erstellen von umfangreichen Testcases mit Concurrency',
			'Datenbankanbindung',
			'Entwicklung eines Data Merging Algorithmus',
			'Messaging',
		]
	},
	{
		title: 'Intranet (Neues Projekt)',
		date: 'Juni – August 2003',
		client: 'IT Dienstleister',
		techStack: ['Java', 'JSP', 'Servlets', 'Tomcat', 'MySQL', 'Sun Solaris', 'Html', 'CSS'],
		details: [
			'Aufbau des Intranets',
		]
	},
]

export default projects