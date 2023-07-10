import {H1, P} from '../components/ui/Typography'
import {routes} from '../lib/routes'
import {Box} from '../components/ui/Box'
import {DevBox} from '../components/ui/Box'
import LinkList, {ListLink} from '../components/ui/LinkList'
import {Spacer} from '../components/ui/Layout'
import * as React from 'react'
import Meta, {metas} from '../components/content/Meta'
import ContentLayout from '../components/content/ContentLayout'

const linkList: ListLink[] = [
	// {href: routes.blog.pathOfHumanKind, title: '09.02.2023 Der Pfad der Menschheit - Drogen als Rettung'},
	// {href: routes.blog.serenity, title: '26.02.2023 Methoden für mehr Gelassenheit'},
	// {href: routes.blog.workingHoursModel, title: '25.02.2023 Neues Arbeitszeitmodell'},
	// {
	// 	href: routes.blog.afdUndCo,
	// 	title: '08.02.2023 Wie man mit der AfD, ihren Anhängern und anderen "Schwurblern" umgehen sollte',
	// },
	// {href: routes.blog.chatGPT, title: '31.01.2023 Chat GPT ist phänomenal!'},
	// {href: routes.blog.boellerverbot, title: '19.01.2023 Anarchie statt Böllerverbot'},
	// {href: routes.blog.yourCompanyIsDumb, title: '18.01.2023 Deine Firma ist doof'},
	// {href: routes.blog.noSugarInAfrica, title: '17.01.2023 Es gibt keinen Zucker in Afrika'},
	// {href: routes.blog.passwordSecurity, title: '23.12.2022 Passwortsicherheit früher und heute'},
	// {href: routes.blog.javascriptToRule, title: '13.12.2022 JavaScript - One to Rule Them All'},
	// {href: routes.blog.developer, title: '08.12.2022 Webentwickler'},
]

const devList: ListLink[] = [
	{href: routes.blog.reactNextExpress, title: '01.02.2023 Webprogrammierung mit React, Next und Express'},
	{href: routes.blog.freeCountry, title: '29.12.2022 Kein freies Land'},
]

export default function Blog() {
	return (
		<>
			<Meta meta={metas.blog}/><ContentLayout left={
			<>
			</>
		} right={
			<>
			</>
		}
		>
			<H1>Blog</H1>
			<Spacer height={10}/>
			<Box>
				<LinkList list={linkList}/>
			</Box>
			<Spacer height={10}/>
			<DevBox>
				<LinkList list={devList}/>
			</DevBox>
		</ContentLayout>
		</>
	)
}