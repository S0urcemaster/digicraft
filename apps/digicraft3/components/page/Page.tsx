'use client'

import * as React from 'react'
import { useDigiCraftContext } from '../../app/DigiCraftContext'
import { ReactNode, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { routes } from '../../app/routes'

type Props = {
	width?: number
	center?: boolean
	children: ReactNode
}

export function Page({children, center, width}: Props) {

	const {setContentTitle, contextLoaded, setContextLoaded} = useDigiCraftContext()
	const path = usePathname()

	useEffect(() => {
		const routeArr = Object.values(routes)
		const [_, title] = routeArr.find(([route, title]) => route === path) ?? ['', undefined]
		setContentTitle(path && title ? title.toUpperCase() : undefined)
		setContextLoaded(true)
	}, [])

	return (
		contextLoaded ? <div className={center ? 'page-center' : 'page'} style={{maxWidth: width}}>
			{children}
		</div> : null

	)
}