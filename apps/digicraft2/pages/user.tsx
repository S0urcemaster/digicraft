import * as React from 'react'
import Dashboard from '../components/content/user/Dashboard'
import Logout from '../components/content/user/Logout'
import {H1} from '../components/ui/Typography'
import {HR} from '../components/ui/Layout'
import ContentLayout from '../components/content/ContentLayout'

export default function User() {

	return (
		<>
			<ContentLayout left={
				<>
				</>
			} right={
				<>
				</>
			}
			>
				<H1>User Space</H1>
				<Dashboard/>
				{/*{props.login}*/}
				{/*{props.dashboard}*/}
				<Logout/>
			</ContentLayout>
		</>
	)
}