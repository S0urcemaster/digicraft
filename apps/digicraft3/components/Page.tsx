'use client'

import * as React from 'react'
import { useDigiCraftContext } from '../app/DigiCraftContext'
import { ReactNode, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { routes } from '../app/routes'

export function Page({children, center}: { children: ReactNode, center: boolean }) {

	const {setContentTitle} = useDigiCraftContext()
	const path = usePathname()

	useEffect(() => {
		const routeArr = Object.values(routes)
		const [_, title] = routeArr.find(([route, title]) => route === path) ?? ['', 'PATH NOT FOUND']
		setContentTitle(path ? title.toUpperCase() : '')
	}, [])

	return (
		<div className={center ? 'page-center' : 'page'}>
			{children}
		</div>
	)
}