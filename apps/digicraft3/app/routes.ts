export type Route = {
	path: string,
	title: string
}

export const routes: { [key: string]: Route } = {
	about: {path: '/about', title: 'Über Digi Craft'},
	achievements: {path: '/achievements', title: 'Erfolge'},
	bodycraft: {path: '/bodycraft', title: 'Body Craft'},
	components: {path: '/components', title: 'Components'},
	decider: {path: '/decider', title: 'Der Entscheider'},
	dev: {path: '/dev', title: 'Development Page'},
	digicraft: {path: '/digicraft', title: 'Digi Craft'},
	framework: {path: '/framework', title: 'Digi Craft Framework'},
	imprint: {path: '/meta/imprint', title: 'Impressum'},
	jobs: {path: '/jobs', title: 'Jobs'},
	mentalAidKit: {path: '/mental-aid-kit', title: 'Mental Aid Kit'},
	music: {path: '/music', title: 'Music'},
	neoCortex: {path: '/neoCortex', title: 'Neo Cortex Collection'},
	news: {path: '/news', title: 'News'},
	notationTrainer: {path: '/apps/notationTrainer', title: 'Schach-Notationstrainer'},
	numberGuessing: {path: '/numberGuessing', title: 'Zahlenraten Reloaded'},
	passMaker: {path: '/passMaker', title: 'Pass Maker'},
	privacy: {path: '/privacy', title: 'Datenschutz'},
	settings: {path: '/meta/settings', title: 'Einstellungen'},
	svgEditor: {path: '/svg-editor', title: 'Coder\'s SVG Editor'},
	sourceCode: {path: '/sourceCode', title: 'Source Code'},
	textbud: {path: '/text-bud', title: 'text-bud'},
	worktime: {path: '/worktime', title: 'Arbeitszeit'},
}
