import { App, Book, Game, Settings, Text } from '../components/svg/menu'
import * as React from 'react'
import { ReactNode } from 'react'

export type MenuItem = {
	heading: string
	icon?: ReactNode
	body: ReactNode
	mediaIcons: MediaIcon[]
	route: [string, string]
	svg: ReactNode
}

export const enum MediaIcon {
	desktop = 'desktop',
	mobilePhone = 'mobile-phone'
}

export const bgSvg = {
	text: <Text/>,
	app: <App/>,
	game: <Game/>,
	settings: <Settings/>,
	blog: <Book/>
}