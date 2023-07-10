import * as React from 'react'
import {routes} from '../../../lib/routes'
import {ReactNode} from 'react'
import Link from 'next/link'
import {globals} from '../../../lib/globals'
import {useLocalStorage} from '../../../lib/localStorageContext'


function MenuItem(props: {href: string, children: ReactNode}) {
	const {brightness} = useLocalStorage()
	return (
		<Link href={props.href} style={{margin: '0 0 20px 0', color: globals.brightness[brightness].color}}>{props.children}</Link>
	)
}

export default function Blog() {
	return (
		<>
			<MenuItem href={routes.blog.serenity}>Methoden für mehr Gelassenheit</MenuItem>
			<MenuItem href={routes.blog.workingHoursModel}>Neues Arbeitszeitmodell</MenuItem>
			<MenuItem href={routes.blog.afdUndCo}>Wie man mit der AfD, ihren Anhängern und anderen "Schwurblern" umgehen sollte</MenuItem>
			<MenuItem href={routes.blog.chatGPT}>Chat GPT ist phänomenal!</MenuItem>
			<MenuItem href={routes.blog.boellerverbot}>Anarchie statt Böllerverbot</MenuItem>
			<MenuItem href={routes.blog.yourCompanyIsDumb}>Deine Firma ist doof</MenuItem>
			<MenuItem href={routes.blog.noSugarInAfrica}>Es gibt keinen Zucker in Afrika</MenuItem>
			<MenuItem href={routes.blog.passwordSecurity}>Passwortsicherheit früher und heute</MenuItem>
			<MenuItem href={routes.blog.javascriptToRule}>JavaScript - One to Rule Them All</MenuItem>
			<MenuItem href={routes.blog.developer}>Webentwickler</MenuItem>
		</>
	)
}