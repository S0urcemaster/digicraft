import * as React from 'react'
import { useRouter } from 'next/navigation'
import { Page } from '../components/page/Page'

import { useEffect } from 'react'
import { useDigiCraftContext } from './DigiCraftContext'
import { BigMenu, MenuItem } from '../components/BigMenu'

function MenuItem() {

	return (
		<></>
	)
}
function MenuItemPinned() {

	return (
		<></>
	)
}

export default function MainMenu() {

	const router = useRouter()
	const {setContextLoaded} = useDigiCraftContext()


	function onClick(menuItem: MenuItem) {
		setContextLoaded(false)
		const [route] = menuItem.route
		router.push(route)
	}

	function href(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		// event.preventDefault()
		// event.stopPropagation()
	}

	useEffect(() => {
		setContextLoaded(true)
	}, [])

	return (
		<Page center>
			<BigMenu clicked={onClick} />
		</Page>
	)
}