import * as React from 'react'
import { useDigiContext } from '@digicraft/context'

export default function DigiHead() {

	const context = useDigiContext()

	return (
		<>
			DigiHead {context.environment.width}
		</>
	)
}