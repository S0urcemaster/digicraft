export type Feature = {
	title: string
	specialty: string
	techStack: string[]
	description: string
}

const features: Feature[] = [
	{
		title: 'Punchcard/Lochmaske -Logo',
		specialty: 'Skalierender Gradient auf verschachtelten Pattern',
		techStack: ['SVG'],
		description: `
		Das seit Version 2 existierende, manuell programmierte Image implementiert das SVG- Feature,
sich wiederholende Muster zu erzeugen, die auch andere Muster enthalten können.
Die vormals existierende Browserinkompatibilität, ergab auch einen positiv bewerteten Lösungsvorschlag auf
stackoverflow [TODO link].
		`
	},
	{
		title: 'Eigenes Komponenten-Framework',
		specialty: 'Neuentwicklung',
		techStack: ['React', 'CSS', 'Tailwind'],
		description: `
		Es wird kein bereits existierendes Komponentenframework verwendet.
Jedes Framework hat immer auch Schwächen. Das kann dadurch belegt werden, dass Technologien
veralten und durch neue ersetzt werden. Durch die Entwicklung eigener Lösungsansätze versteht man
Problematiken besser, als bei der schlichten Anwendung einer bestehenden Lösung.
		`
	},
	// {
	// 	title: '',
	// 	specialty: '',
	// 	techStack: [''],
	// 	description: `
	//
	// 	`
	// },
]

export default features