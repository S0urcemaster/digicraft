import * as React from 'react'
import { Context, useDigiContext } from '@digicraft/context'

export default function Digicraft({context}: {context: Context}) {

	const {environment} = useDigiContext()

	return (
		<svg>
			<text x="0" y="15" fill="red">Digicraft</text>
		</svg>
	)
}