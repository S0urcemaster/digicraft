import * as React from 'react'
import { useDigiContext } from '@digicraft/context'
import { ReactNode } from 'react'

export default function DigiMain({children}: {
	children: ReactNode
}) {

	return (
		<>
			DigiMain {children}
		</>
	)
}