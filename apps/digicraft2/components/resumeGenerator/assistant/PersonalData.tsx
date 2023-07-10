import * as React from 'react'
import FormLayout, {Layout} from '../../ui/FormLayout'
import {TextInput} from '../../ui/Form'
import {useResumeContext} from '../resumeContext'
import {PersonalData as PersonalDataType} from '../types'
import {Fragment, ReactElement, useEffect, useState} from 'react'
import {H2} from '../../ui/Typography'

export default function PersonalData(props: {data: {}, layout: Layout, setLayout: (layout: Layout) => void}) {

	const {resume, pageId} = useResumeContext()

	const [personalData, setPersonalData] = useState<PersonalDataType>({} as PersonalDataType)

	useEffect(() => {
	}, [])

	useEffect(() => {
		setPersonalData(props.data as PersonalDataType)
	}, [props.data])

	useEffect(() => {
		// props.setLayout(generateLayout())
	}, [personalData])

	return (
		<>
			<H2 first>{pageId +1}. Persönliche Angaben</H2>
			<FormLayout layout={props.layout} />
		</>
	)
}