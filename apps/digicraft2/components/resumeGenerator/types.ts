import { ReactElement, ReactNode } from 'react'

export type Timespan = {
	dateFrom: string
	dateTo: string
}

export type Company = {
	companyName: string
	companyCity: string
}

export type School = {
	schoolName: string
	schoolCity: string
}

export type Tasks = {
	tasks: [string | ReactNode, string[]][]
}

export type Employment = {
	title: string
	description: string
	techStack: string
} & Timespan & Company & Tasks

export type Project = {
	title: string
	description: string
	techStack: string
} & Timespan & Company & Tasks

export type Training = {
	title: string
	description: string
	techStack: string
} & Timespan & School & Tasks

export type Education = {
	title: string
	description: string
	techStack: string
} & Timespan & School

export type Certificate = {
	title: string
	description: string
	techStack: string
	date: string
} & School

export type PersonalData = {
	name: string
	street: string
	city: string
	birthDate: string
	birthCity: string
	citizenship: string
	maritalStatus: string
	personality: string
	telephone: string
	email: string
	urls: [string, string][]
	photo: string
	website: string
	[key: string]: string | [string, string][]
}

export type ProfessionData = {
	title: string
	professionReasonText: string
	[key: string]: string | string[]
}

export type Resume = {
	name: string
	date: string
	personalData: PersonalData
	professionData: ProfessionData
	employments: Employment[]
	otherEmployments: Employment[]
	projects: Employment[]
	trainings: Training[]
	education: Education[]
	certificates: Certificate[]
	interests: string[]
	[key: string]: any
}

export const emptyPersonalData: PersonalData = {
	name: '',
	street: '',
	city: '',
	birthDate: '',
	birthCity: '',
	citizenship: '',
	maritalStatus: '',
	personality: '',
	telephone: '',
	email: '',
	photo: '',
	website: '',
	urls: [],
}

export const emptyProfessionData: ProfessionData = {
	title: '',
	professionReasonText: '',
}

export const emptyResume: Resume = {
	name: '',
	date: '',
	personalData: emptyPersonalData,
	professionData: emptyProfessionData,
	employments: [] as Employment[],
	otherEmployments: [] as Employment[],
	projects: [] as Project[],
	trainings: [] as Training[],
	education: [] as Education[],
	certificates: [] as Certificate[],
	interests: []
}

export const dummyPersonalData: PersonalData = {
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
	website: '',
	urls: [],
}

export const dummyProfessionData: ProfessionData = {
	title: 'Softwareentwickler',
	professionReasonText: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
	`,
}

const dummyEmployments: Employment[] = [
	{dateFrom: '', dateTo: '',
		title: '', companyName: '', companyCity: '', tasks: [
		['', []]
		], description: '', techStack: '', },
	{dateFrom: '2022.11', dateTo: '2023.01',
		title: 'Fullstack Webentwickler', companyName: 'JB Support GmbH', companyCity: 'Pliezhausen', tasks: [
			['Entwicklung einer Webseite zur Erweiterung', []]
		], description: '', techStack: ''},
]

const dummyTrainings: Training[] = [
	{dateFrom: '', dateTo: '',
		title: '', schoolName: '', schoolCity: '', tasks: [
		['', []]
		], description: '', techStack: '', },
	{dateFrom: '2021.07', dateTo: '2022.08',
		title: 'Selbstständig', schoolName: 'Digi Craft', schoolCity: 'Metzingen', tasks: [
			['Entwicklung einer Webseite zur Erweiterung', []]
		], description: '', techStack: ''},
]

export const dummyResume: Resume = {
	name: 'Neuer Lebenslauf',
	date: '01.03.2023',
	personalData: dummyPersonalData,
	professionData: dummyProfessionData,
	employments: [] as Employment[],
	otherEmployments: [] as Employment[],
	projects: [] as Employment[],
	trainings: [] as Training[],
	education: [] as Education[],
	certificates: [] as Certificate[],
	interests: []
}
