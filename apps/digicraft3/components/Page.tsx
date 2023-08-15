'use client'

import * as React from 'react'
import { useDigiCraftContext } from '../app/DigiCraftContext'
import { ReactNode, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { routes } from '../app/routes'

export function Page({children}: { children: ReactNode }) {

	const {setContentTitle} = useDigiCraftContext()
	const path = usePathname()

	useEffect(() => {
		const routeArr = Object.values(routes)
		console.log("logsntr", "routeArr", routeArr)
		const [_, title] = routeArr.find(([route, title]) => {
			return route === path
		}) ?? ['', 'NOOO']
		console.log("logsntr", "title.toUpperCase()", title.toUpperCase())
		setContentTitle(path ? title.toUpperCase() : '')
	}, [])

	return (
		<>
			{children}
		</>
	)
}