export const foci = {
	body: 'body',
	mind: 'mind',
	soul: 'soul',
	social: 'sozial',
	work: 'work',
	learning: 'learning',
	leisure: 'leisure'
}

export const traitFocus = {
	body: ['Körper', 'Gesundheit', 'Verfassung'],
	mind: ['Geist', 'Psyche', 'Mindset'],
	soul: ['Seele', 'Gefühlsleben'],
}

export const generalConditions = [
	'Guter Allgemeinzustand',
	'Leicht reduzierter Allgemeinzusdand',
	'Reduzierter Allgemeinzustand',
	'Stark reduzierter Allgemeinzustand',
]

export type Category = {
	name: string
}

export const categories: Category[] = [
	{name: 'Körperliches Befinden'},
]

export type Trait = {
	name: string
	focus: string
	positives: string[]
	negatives: string[]
	value?: number
}

export const traits: Trait[] = [
	{name: 'Generell', focus: 'body', positives: ['positiv'], negatives: ['negativ']},
	{name: 'Vitalität', focus: 'body', positives: ['vital'], negatives: ['krank']},
	{name: 'Körperwärme', focus: 'body', positives: ['warm'], negatives: ['kalt']},
	{name: 'Hunger', focus: 'body', positives: ['satt'], negatives: ['hungrig']},
	{name: 'Körpergefühl', focus: 'body', positives: ['leicht'], negatives: ['schwerfällig']},
	{name: 'Beweglichkeit', focus: 'body', positives: ['locker'], negatives: ['steif']},
	{name: 'Stärke', focus: 'body', positives: ['stark'], negatives: ['schwach']},
	{name: 'Generell', focus: 'mind', positives: ['positiv'], negatives: ['negativ']},
	{name: 'Ehrgeiz', focus: 'mind', positives: ['ehrgeizig'], negatives: ['gleichgültig']},
	{name: 'Klarheit', focus: 'mind', positives: ['focussiert', 'klar'], negatives: ['verwirrt', 'durcheinander']},
	{
		name: 'Ausgeglichenheit',
		focus: 'mind',
		positives: ['gelassen', 'zufrieden', 'ausgeglichen'],
		negatives: ['gereizt', 'aggressiv', 'gierig', 'genervt', 'mürrisch'],
	},
	{name: 'Interesse', focus: 'mind', positives: ['inspiriert'], negatives: ['gelangweilt']},
	{name: 'Konzentration', focus: 'mind', positives: ['konzentriert'], negatives: ['zerstreut']},
	{
		name: 'Einstellung',
		focus: 'mind',
		positives: ['optimistisch', 'hoffnungsvoll', 'zuversichtlich'],
		negatives: ['pessimistisch', 'verzagt', 'verzweifelt'],
	},
	{name: 'Motivation', focus: 'mind', positives: ['unternehmungslustig'], negatives: ['lustlos']},
	{name: 'Orientierung', focus: 'mind', positives: ['zielstrebig'], negatives: ['orientierungslos', 'planlos']},
	{name: 'Mut', focus: 'mind', positives: ['forsch'], negatives: ['zaghaft']},
	{name: 'Generell', focus: 'soul', positives: ['positiv'], negatives: ['negativ']},
	{name: 'Entspannung', focus: 'soul', positives: ['entspannt', 'ruhig'], negatives: ['ernst', 'angespannt']},
	{
		name: 'Unabhängigkeit',
		focus: 'soul',
		positives: ['frei', 'gelöst', 'unabhängig'],
		negatives: ['abhängig', 'getrieben', 'gelähmt'],
	},
	{
		name: 'Gemüt',
		focus: 'soul',
		positives: ['fröhlich', 'heiter', 'unbeschwert'],
		negatives: ['traurig', 'betrübt', 'bedrückt'],
	},
	{name: 'Glück', focus: 'soul', positives: ['glücklich'], negatives: ['unglücklich', 'verbittert']},
	{name: 'Motivation', focus: 'soul', positives: ['motiviert'], negatives: ['antriebslos']},
	{name: 'Wachheit', focus: 'soul', positives: ['munter'], negatives: ['schläfrig']},
	{name: 'Selbstvertrauen', focus: 'soul', positives: ['mutig', 'unerschrocken'], negatives: ['ängstlich', 'mutlos']},
	{name: 'Selbstständigkeit', focus: 'soul', positives: ['reich'], negatives: ['bedürftig']},
	{
		name: 'Emotionalität',
		focus: 'soul',
		positives: ['stabil', 'unerschütterlich', 'widerstandsfähig'],
		negatives: ['dünnhäutig', 'emotional', 'empfindlich'],
	},
	{
		name: 'Resistenz',
		focus: 'soul',
		positives: ['stark', 'resistent', 'robust', 'solide', 'stabil'],
		negatives: ['schwach', 'labil'],
	},
]