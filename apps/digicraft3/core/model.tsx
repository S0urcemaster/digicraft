import { App, Book, Game, Settings, Text } from '../components/svg/menu'
import * as React from 'react'
import { ReactNode } from 'react'

export type Environment = {
	clientWidth: number
	clientHeight: number
	headerHeight: number
	footerHeight: number
}

export type Model = {
	contentTitle: string | undefined
	environment: Environment
	cssVars: {readonly [key: string]: string}
	images: {readonly [key: string]: ReactNode}
	contextLoaded: boolean
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
	blog: <Book/>,
}