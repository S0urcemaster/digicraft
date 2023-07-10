import axios from 'axios'
import {globals} from '../../lib/globals'
import {PresetItem, Row, RowVariation, Variation, WordType} from '../pwdgen/pwdgenContext'
import {wordVariations} from '../pwdgen/worddb'


export function presetToRow(item: PresetItem, variation: string, dbWord: any): Row {
	return {
		tipe: item.tipe, value: dbWord.letters, variation: wordVariations[item.tipe.singular][variation],
		variations: mapVariations(item.tipe, dbWord),
	}
}

function mapVariations(tipe: WordType, dbWord?: any): Array<RowVariation> {
	const variations: RowVariation[] = Object.values(wordVariations[tipe.singular]).map(v => {
		const rowV: RowVariation = {
			dbName: v.dbName,
			translation: v.translation,
			value: dbWord ? dbWord[v.dbName] : v.local,
		}
		return rowV
	}).filter(v => {
		return v.value
	})
	if (variations.length === 0) {
		if(dbWord) {
			return [{...wordVariations.none.none, value: dbWord.letters}]
		}
		return [{...wordVariations.none.none, value: ''}]
	}
	return variations
}

export async function fetchWord(tipe: WordType): Promise<any> {
	const res = await axios.get(`${globals.root}/${tipe.singular}`)
	return res.data
}

export async function fetchRow(tipe: WordType, variation?: Variation): Promise<Row> {
	let word = null
	if (tipe.local) {

	} else {
		word = await fetchWord(tipe)
	}
	const variations = mapVariations(tipe, word)
	let selected = null
	if(variation) {
		selected = variations.find(v => {
			return v.dbName === variation.dbName
		})
		// if(!selected && variation)
	}
	const row: Row = {
		tipe: tipe,
		value: variations[0].value,
		variations: mapVariations(tipe, word),
		variation: selected ?? variations[0],
	}
	return row
}