import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react'
import {arrayShiftElement} from '../../lib/collection'
import {wordVariations, wordTypes, presets} from './worddb'
import axios from 'axios'
import {globals} from '../../lib/globals'
import {fetchRow, fetchWord, presetToRow} from '../api/passMaker'


export type Variation = {
	dbName: string
	translation: string
	local?: string
}

export type WordType = {
	singular: string
	plural: string
	translation: string
	local?: Array<string>
	variations?: Array<Variation>
}

export type PresetItem = {
	tipe: WordType
	variation: Variation
}

export type Preset = {
	name: string
	items: PresetItem[]
}

export type RowVariation = Variation & {
	value: string
}

export type Row = {
	tipe: WordType,
	variations: RowVariation[],
	variation: Variation,
	value: string,
}

type RowContext = {
	rows: Row[]
	setRows: Function
	preset: Preset
	changePreset: Function
	insertRow: Function
	deleteRow: Function
	rowUp: Function
	rowDown: Function
	typeChanged: Function
	variationChanged: Function
	reload: Function
	setValue: Function
	password: string
	setPassword: Function
	loading: boolean
}

const RowsContext = createContext<RowContext>({} as RowContext)

export function RowsProvider(props: { children: ReactNode }) {

	const [rows, setRows] = useState<Row[]>([])
	const [preset, setPreset] = useState<Preset>(presets[0])
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const pwd = rows.map(row => {
			return row.value
		}).join('')
		setPassword(pwd)
	}, [rows])

	useEffect(() => {
		(async () => {
			const rows = await rowsFromPreset(preset)
			setRows(rows)
		})()
	}, [preset])

	async function fetchPreset(item: PresetItem): Promise<Row> {
		if (item.tipe.local) {
			return fetchRow(item.tipe, item.variation)
		} else {
			const word = await fetchWord(item.tipe)
			return presetToRow(item, item.variation.dbName, word)
		}
	}

	async function rowsFromPreset(preset: Preset): Promise<Row[]> {
		const presets = await Promise.all(preset.items.map(async (item): Promise<Row> => {
			if (item.variation) {
				return await fetchPreset(item)
			}
			return await fetchPreset(item)
		}))
		setLoading(false)
		return presets
	}

	function changePreset(pre: string) {
		const preset = presets.find(p => {
			return p.name === pre
		})
		setPreset(preset!)
	}

	function rowUp(row: Row) {
		setRows(arrayShiftElement(rows, row, -1))
	}

	function rowDown(row: Row) {
		setRows(arrayShiftElement(rows, row, 1))
	}

	async function typeChanged(row: Row, tipe: string) {
		const r = await fetchRow(wordTypes[tipe])
		rows.splice(rows.indexOf(row), 1, r)
		setRows([...rows])
	}

	async function variationChanged(row: Row, variation: string) {
		let value = ''
		row.variation = row.variations.find(v => {
			if (v.dbName === variation) {
				value = v.value
				return true
			}
			return false
		}) as Variation
		row.value = value
		rows.splice(rows.indexOf(row), 1, row)
		setRows([...rows])
	}

	function insertRow(row: Row) {
		if(rows.length === 15) {
			return
		}
		const newRow: Row = {
			tipe: wordTypes.chars, value: wordVariations.chars.empty.local!,
			variation: wordVariations.chars.empty, variations: Object.values(wordVariations.chars).map(v => {
				return {...v, value: v.local!}
			}),
		}
		const index = rows.indexOf(row)
		rows.splice(index + 1, 0, newRow)
		setRows([...rows])
	}

	function deleteRow(row: Row) {
		if(rows.length === 1) return
		const index = rows.indexOf(row)
		rows.splice(index, 1)
		setRows([...rows])
	}

	async function reload(row: Row) {
		const newRow = await fetchRow(row.tipe)
		rows.splice(rows.indexOf(row), 1, newRow)
		setRows([...rows])
	}

	function setValue(row: Row, value: string) {
		row.value = value
		rows.splice(rows.indexOf(row), 1, row)
		setRows([...rows])
	}

	// function setLoading() {
	// 	setLoading(true)
	// }

	return (
		<RowsContext.Provider value={{
			rows, setRows, preset, changePreset,
			insertRow, deleteRow, rowUp, rowDown, typeChanged, variationChanged,
			reload, setValue, password, setPassword, loading
		}}>
			{props.children}
		</RowsContext.Provider>
	)
}

export function useRows() {
	return useContext(RowsContext)
}