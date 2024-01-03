import * as React from 'react'
import { Card, Elevation, Icon } from '@blueprintjs/core'
import { useRouter } from 'next/navigation'
import { Page } from '../components/page/Page'

import { mainMenuContent } from '../cms/MainMenuContent'
import { MenuItem } from '../core/model'
import { useEffect } from 'react'
import { DigiActionTypes } from './DigiCraftReducer'
import { useDigiCraftContext } from './DigiCraftContext'
import { BigMenu } from '../components/BigMenu'

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