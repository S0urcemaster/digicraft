import * as React from 'react'
import { useRouter } from 'next/navigation'
import { Page } from '../components/page/Page'

import { useEffect } from 'react'
import { useDigiCraftContext } from './DigiCraftContext'
import { BigMenu, MenuItem } from '../components/BigMenu'
import { mainMenuContent } from '../cms/MainMenuContent'

import cssVars from '../vars.module.scss'

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
		router.push(menuItem.route.path)
	}

	function href(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		// event.preventDefault()
		// event.stopPropagation()
	}

	useEffect(() => {
		setContextLoaded(true)
	}, [])

	return (
		<Page center style={{position: 'relative'}}>
			<BigMenu items={mainMenuContent} clicked={onClick} colors={{
				text: 'white',
				title: cssVars.coloredTitle,
				titleBorder: cssVars.coloredTitleBorder,
				menuItemBorder: cssVars.coloredBigMenuItemBorder,
			}} dev={false && process.env.NODE_ENV === 'development'} />
		</Page>
	)
}