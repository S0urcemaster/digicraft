'use client'

import { useDigiContext } from '@digicraft/context'
import { colorWithContrast } from '@digicraft/lib'
import { HtmlContent } from '@digicraft/ui'

export default function Home() {

	const {app, setContentTitle} = useDigiContext()

	const angle = 20
	const scale = 0.8
	const translate = (100 -(100 *scale)) /2

	return (
		<>
			<HtmlContent setTitle={setContentTitle}>

			</HtmlContent>
		</>
	)
}
