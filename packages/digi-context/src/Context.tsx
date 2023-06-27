import * as React from 'react'
import { digiModel } from '@digicraft/model'

export default function Context() {

	const model = digiModel

	return (
		<>
			{model.name}
		</>
	)
}