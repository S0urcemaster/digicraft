'use client'

import { useDigiContext } from '@digicraft/context'
import { colorWithContrast } from '@digicraft/lib'
import { HtmlContent } from '@digicraft/ui'
import {H1} from '@digicraft/ui'
import { useEffect } from 'react'
import { clog } from '@digicraft/lib'

export default function Home() {

	const {app, setContentTitle} = useDigiContext()

	useEffect(() => {
		clog('page', app)
		if(app) {
			setContentTitle('Welcomex')
		}
	}, [])

	return (
		<>
			<HtmlContent>
				<H1>Welcome</H1>
			</HtmlContent>
		</>
	)
}
