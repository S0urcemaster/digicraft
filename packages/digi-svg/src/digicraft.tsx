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
			<text x="0" y="30" fill={'rgb(0,0,0)'} stroke={'rgba(0,0,0,0.5)'} style={{fontFamily: app.environment.font, fontSize: 30}}>Digicraft</text>
			<text x="0" y="60" fill={'rgb(0,0,0)'} stroke={'rgba(0,0,0,1)'} style={{fontFamily: app.environment.font, fontSize: 30}}>Digicraft</text>
		</svg>
	)
}