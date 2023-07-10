import {Preset, Variation, WordType} from './pwdgenContext'

export const wordVariations: Record<string, Record<string, Variation>> = {
	none: {
		none: {dbName: 'none', translation: 'Keine Formen'},
	},
	adjective: {
		none: {dbName: 'none', translation: 'Keine Formen'},
	},
	adverb: {
		none: {dbName: 'none', translation: 'Keine Formen'},
	},
	article: {
		der: {dbName: '', translation: 'Der', local: 'der'},
		die: {dbName: '', translation: 'Die', local: 'die'},
		das: {dbName: '', translation: 'Das', local: 'das'},
	},
	conjunction: {
		none: {dbName: 'none', translation: 'Keine Formen'},
	},
	name: {
		letters: {dbName: 'letters', translation: 'Grundform'},
		nominative: {dbName: 'nom', translation: 'Nominativ'},
		genetive: {dbName: 'gen', translation: 'Genetiv'},
		dative: {dbName: 'dat', translation: 'Dativ',},
		accusative: {dbName: 'akk', translation: 'Akkusativ'},
	},
	noun: {
		letters: {dbName: 'letters', translation: 'Grundform'},
		nomitative_singular: {dbName: 'nonimative_singular', translation: 'Nominativ Singular'},
		nominative_plural: {dbName: 'nominative_plural', translation: 'Nominativ Plural'},
		genetive_singular: {dbName: 'genetive_singular', translation: 'Genetiv Singular'},
		genetive_plural: {dbName: 'genetive_plural', translation: 'Genetiv Plural'},
		dative_singular: {dbName: 'dative_singular', translation: 'Dativ Singular'},
		dative_plural: {dbName: 'dative_plural', translation: 'Dativ Plural'},
		akkusative_singular: {dbName: 'akkusative_singular', translation: 'Akkusativ Singular'},
		akkusative_plural: {dbName: 'akkusative_plural', translation: 'Akkusativ Plural'},
	},
	particle: {
		none: {dbName: 'none', translation: 'Keine Formen'},
	},
	preposition: {
		none: {dbName: 'none', translation: 'Keine Formen'},
	},
	pronoun: {
		none: {dbName: 'none', translation: 'Keine Formen'},
	},
	chars: {
		space: {dbName: 'space', translation: 'Leerzeichen', local: ' '},
		empty: {dbName: 'empty', translation: 'Leer', local: ''},
	},
	verb: {
		pre1sin: {dbName: 'pre1sin', translation: 'Präsenz 1. Pers. sing. Indikativ'},
		pre1sko: {dbName: 'pre1sko', translation: 'Präsenz 1. Pers. sing. Konjunktiv'},
		pre1sim: {dbName: 'pre1sim', translation: 'Präsenz 1. Pers. sing. Imperativ'},
		pre2sin: {dbName: 'pre2sin', translation: 'Präsenz 2. Pers. sing. Indikativ'},
		pre2sko: {dbName: 'pre2sko', translation: 'Präsenz 2. Pers. sing. Konjunktiv'},
		pre2sim: {dbName: 'pre2sim', translation: 'Präsenz 2. Pers. sing. Imperativ'},
		pre3sin: {dbName: 'pre3sin', translation: 'Präsenz 3. Pers. sing. Indikativ'},
		pre3sko: {dbName: 'pre3sko', translation: 'Präsenz 3. Pers. sing. Konjunktiv'},
		pre3sim: {dbName: 'pre3sim', translation: 'Präsenz 3. Pers. sing. Imperativ'},
		pre1pin: {dbName: 'pre1pin', translation: 'Präsenz 1. Pers. plur. Indikativ'},
		pre1pko: {dbName: 'pre1pko', translation: 'Präsenz 1. Pers. plur. Konjunktiv'},
		pre1pim: {dbName: 'pre1pim', translation: 'Präsenz 1. Pers. plur. Imperativ'},
		pre2pin: {dbName: 'pre2pin', translation: 'Präsenz 2. Pers. plur. Indikativ'},
		pre2pko: {dbName: 'pre2pko', translation: 'Präsenz 2. Pers. plur. Konjunktiv'},
		pre2pim: {dbName: 'pre2pim', translation: 'Präsenz 2. Pers. plur. Imperativ'},
		pre3pin: {dbName: 'pre3pin', translation: 'Präsenz 3. Pers. plur. Indikativ'},
		pre3pko: {dbName: 'pre3pko', translation: 'Präsenz 3. Pers. plur. Konjunktiv'},
		pre3pim: {dbName: 'pre3pim', translation: 'Präsenz 3. Pers. plur. Imperativ'},
	//	... -> WordDB migrations verbs
	},
}

export const wordTypes: Record<string, WordType> = {
	chars: {
		singular: 'chars',
		plural: '',
		translation: 'Zeichen',
		local: ['Leer', 'Leerzeichen'],
		variations: Object.values(wordVariations.chars),
	},
	article: {
		singular: 'article',
		plural: '',
		translation: 'Artikel',
		local: ['Der', 'Die', 'Das'],
		variations: Object.values(wordVariations.article),
	},
	adjective: {
		singular: 'adjective',
		plural: 'adjectives',
		translation: 'Adjektiv',
		variations: Object.values(wordVariations.adjective),
	},
	adverb: {
		singular: 'adverb',
		plural: 'adverbs',
		translation: 'Adverb',
		variations: Object.values(wordVariations.adverb),
	},
	conjunction: {
		singular: 'conjunction',
		plural: 'conjunction',
		translation: 'Konjunktion',
		variations: Object.values(wordVariations.conjunction),
	},
	name: {
		singular: 'name',
		plural: 'names',
		translation: 'Name',
		variations: Object.values(wordVariations.name),
	},
	noun: {
		singular: 'noun',
		plural: 'nouns',
		translation: 'Nomen',
		variations: Object.values(wordVariations.noun),
	},
	particle: {
		singular: 'particle',
		plural: 'particles',
		translation: 'Partikel',
		variations: Object.values(wordVariations.particle),
	},
	preposition: {
		singular: 'preposition',
		plural: 'prepositions',
		translation: 'Präposition',
		variations: Object.values(wordVariations.preposition),
	},
	pronoun: {
		singular: 'pronoun',
		plural: 'pronouns',
		translation: 'Pronomen',
		variations: Object.values(wordVariations.pronoun),
	},
	verb: {
		singular: 'verb',
		plural: 'verbs',
		translation: 'Verb',
		variations: Object.values(wordVariations.verb),
	},

}

export const presets: Array<Preset> = [
	{
		name: 'Satzbau 1', items: [
			{tipe: wordTypes.article, variation: wordVariations.article.der},
			{tipe: wordTypes.adjective, variation: wordVariations.adjective.none},
			{tipe: wordTypes.noun, variation: wordVariations.noun.letters},
			{tipe: wordTypes.verb, variation: wordVariations.verb.pre2sin},
			{tipe: wordTypes.preposition, variation: wordVariations.preposition.none},
			{tipe: wordTypes.noun, variation: wordVariations.noun.letters},
		],
	},
	{
		name: 'Nomen 3', items: [
			{tipe: wordTypes.noun, variation: wordVariations.noun.letters},
			{tipe: wordTypes.chars, variation: wordVariations.chars.space},
			{tipe: wordTypes.noun, variation: wordVariations.noun.letters},
			{tipe: wordTypes.chars, variation: wordVariations.chars.space},
			{tipe: wordTypes.noun, variation: wordVariations.noun.letters},
		],
	},
	{
		name: 'Nomen 4', items: [
			{tipe: wordTypes.noun, variation: wordVariations.noun.letters},
			{tipe: wordTypes.chars, variation: wordVariations.chars.space},
			{tipe: wordTypes.noun, variation: wordVariations.noun.letters},
			{tipe: wordTypes.chars, variation: wordVariations.chars.space},
			{tipe: wordTypes.noun, variation: wordVariations.noun.letters},
			{tipe: wordTypes.chars, variation: wordVariations.chars.space},
			{tipe: wordTypes.noun, variation: wordVariations.noun.letters},
		],
	},
	{
		name: 'Adjektiv Nomen', items: [
			{tipe: wordTypes.adjective, variation: wordVariations.adjective.none},
			{tipe: wordTypes.noun, variation: wordVariations.noun.letters},
			{tipe: wordTypes.adjective, variation: wordVariations.adjective.none},
			{tipe: wordTypes.noun, variation: wordVariations.noun.letters},
			{tipe: wordTypes.adjective, variation: wordVariations.adjective.none},
			{tipe: wordTypes.noun, variation: wordVariations.noun.letters},
		],
	},
	{
		name: 'Namen', items: [
			{tipe: wordTypes.name, variation: wordVariations.name.letters},
			{tipe: wordTypes.name, variation: wordVariations.name.letters},
			{tipe: wordTypes.name, variation: wordVariations.name.letters},
			{tipe: wordTypes.name, variation: wordVariations.name.letters},
		],
	},
]
