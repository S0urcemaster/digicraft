export type Route = {
	[route: string]: string
}

export type MainRoute = {
	[route: string]: Route
}

export type Routes = {
	[page: string]: Route
}

export const routes = {
	home: {
		digiCraft: '/',
		projects: '/projects',
		blog: '/blog',
		music: '/music',
		apps: '/apps/worktime',
		source: '/source/radio',
		glossary: '/glossary',
		user: '/user',
		login: '/login',
	},
	blog: {
		notes: '/blog/notes',
		gendern: '/blog/gendern',
		pathOfHumanKind: '/blog/pathOfHumanKind',
		externalContent: '/blog/externalContent',
		afdUndCo: '/blog/afdUndCo',
		reactNextExpress: '/blog/reactNextExpress',
		chatGPT: '/blog/chatGPT',
		freeCountry: '/blog/freeCountry',
		boellerverbot: '/blog/boellerverbot',
		yourCompanyIsDumb: '/blog/yourCompanyIsDumb',
		noSugarInAfrica: '/blog/noSugarInAfrica',
		passwordSecurity: '/blog/passwordSecurity',
		javascriptToRule: '/blog/javascriptToRule',
		developer: '/blog/webDeveloper',
		workingHoursModel: '/blog/workingHoursModel',
		serenity: '/blog/serenity',
	},
	apps: {
		lifeHacks: '/apps/lifehacks',
		neoCortex: '/apps/neoCortex',
		passwordMaker: '/apps/passwordMaker',
		numberGuessing: '/apps/numberGuessing',
		smoothEye: '/apps/smoothEye',
		sizeComparison: 'apps/sizeComparison',
		notationTrainer: '/apps/notationTrainer',
		// sourcesList: 'apps/sourcesList',
		achievements: '/apps/achievements',
		selfReport: '/apps/selfReport',
		resumeGenerator: '/apps/resumeGenerator',
		decider: '/apps/decider',
		worktime: '/apps/worktime',
		radio: '/apps/radio',
		svgEditor: '/apps/svgEditor',
		svgEditorx: '/apps/svgEditorx',
	},
	source: {
		passwordMaker: '/source/passwordMaker',
		numberGuessing: '/source/numberGuessing',
		smoothEye: '/source/smoothEye',
		notationTrainer: '/source/notationTrainer',
		achievements: '/source/achievements',
		decider: '/source/decider',
		worktime: '/source/worktime',
		radio: '/source/radio',
	},
	meta: {
		about: '/meta/about',
		imprint: '/meta/imprint',
		privacy: '/meta/privacy',
		settings: '/meta/settings',
		references: '/meta/references',
		warranty: '/meta/warranty',
		donate: '/meta/donate',
	}
}
