import * as React from 'react'
import {RealRadioButton, RealRadioButtons} from '../ui/Form'
import {useLocalStorage} from '../../lib/localStorageContext'
import {useEffect} from 'react'

const themeButtons: RealRadioButton[] = [
	{title: 'Dunkel', value: 'dark'},
	{title: 'Medium Dunkel', value: 'darkLight'},
	{title: 'Medium Hell', value: 'lightLight'},
	{title: 'Hell', value: 'light'},
	{title: 'Blau', value: 'blue'},
]

export default function BrightnessSelector(props: {vertical?: boolean}) {

	const {brightness, setBrightness} = useLocalStorage()

	useEffect(() => {
	}, [brightness])

	return (
		<>
			<RealRadioButtons buttons={themeButtons} value={brightness} onChange={(value:string) => setBrightness(value)} space={10} vertical={props.vertical} />

		</>
	)
}