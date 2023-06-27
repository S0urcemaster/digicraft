'use client'
import * as React from 'react'
import { useDigiContext } from '@digicraft/context'
import { useEffect } from 'react'

export function DigiCraft() {

	const {app, setEnvironment} = useDigiContext()

	useEffect(() => {
		console.log("logsntr", "environment digicraft svg", app)
	}, [app])
	return (
		<svg>
			<text x="0" y="15" fill="red" style={{fontFamily: app.environment.font}}>Digicraft</text>
		</svg>
	)
}