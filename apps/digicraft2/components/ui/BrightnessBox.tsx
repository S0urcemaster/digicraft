import * as React from 'react'
import {H3, P} from './Typography'
import {useLocalStorage} from '../../lib/localStorageContext'
import {globals} from '../../lib/globals'
import BrightnessSelector from '../content/BrightnessSelector'
import {Box} from './Box'
import {HR} from './Layout'

export default function BrightnessBox() {

	const {brightness} = useLocalStorage()

	return (
		<Box>
			<H3 first style={{}}>Helligkeit</H3>
			<BrightnessSelector vertical />

		</Box>
	)
}