import * as React from 'react'
import {Fragment, ReactElement, useEffect, useState} from 'react'
import FormLayout, {Layout} from '../../ui/FormLayout'
import {TextInput} from '../../ui/Form'
import {H2} from '../../ui/Typography'
import {pageTitles, useResumeContext} from '../resumeContext'

function mapDataKey(key: string): string {
	switch(key) {
		case 'name': return 'Name'
		case 'street': return 'Straße'
		case 'city': return 'Wohnort'
		case 'birthDate': return 'Geburtsdatum'
		case 'birthCity': return 'Geburtsort'
		case 'citizenship': return 'Staatsangehörigkeit'
		case 'maritalStatus': return 'Familienstand'
		case 'personality': return 'Persönlichkeit'
		case 'telephone': return 'Telefon'
		case 'email': return 'Email'
		case 'urls': return 'Links (Social Media/ Homepage)'
	}
	return 'unset'
}

function generateLayout(data: any, update: (key: string, value: string) => void): Layout {

	function updateField(key: string, value: string) {
		data![key] = value
		// data({...data!})
		update(key, value)
	}

	const layout = Object.keys(data).map(key => {
		let fieldType = String(typeof data[key])
		if(fieldType === 'object') {
			if(Array.isArray(data[key])) {
				fieldType = 'array'
			}
		}
		switch(fieldType) {
			case 'string':
				return [mapDataKey(key), <TextInput value={data[key]} onChange={(e) => updateField(key,e.target.value)}></TextInput>]
			case 'array':
				return [mapDataKey(key), <Fragment>array comp</Fragment>]
		}
		return ['unset', <Fragment>unset</Fragment>]
	})
	return layout as  [string, ReactElement][]
}

export default function Page(props: {data: {[key:string]: any}, update: (key: string, value: any) => void}) {

	const [data, setData] = useState<any>(props.data)
	const {pageId} = useResumeContext()

	useEffect(() => {
		setData(props.data[Object.keys(props.data)[0]])
	}, [props.data])

	useEffect(() => {
	}, [data])

	function update(key: string, value: string) {
		data[key] = value
		setData({...data, [key]: value})
		props.update(Object.keys(props.data)[0], data)
	}

	return (
		<>
			<H2 first>{pageId +1}. {pageTitles[pageId]}</H2>
			{data ? <FormLayout layout={generateLayout(data, update)} /> : ''}
		</>
	)
}