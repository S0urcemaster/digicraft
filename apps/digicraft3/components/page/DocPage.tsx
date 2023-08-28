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

export function DocPage({children, center, width}: Props) {

	const {setContentTitle} = useDigiCraftContext()
	const path = usePathname()

	useEffect(() => {
		const routeArr = Object.values(routes)
		const [_, title] = routeArr.find(([route, title]) => route === path) ?? ['', 'PATH NOT FOUND']
		setContentTitle(path ? title.toUpperCase() : '')
	}, [])

	return (
		<div className={center ? 'page-center' : 'page'} style={{maxWidth: width}}>
			{children}
		</div>
	)
}