import * as React from 'react'
import {H2} from '../../ui/Typography'
import {Button} from '../../ui/Form'
import {useRouter} from 'next/router'
import {routes} from '../../../lib/routes'
import withAuth from '../../hoc/withAuth'
import {useUser} from './userContext'
import {Box} from '../../ui/Box'

function Logout() {

	const router = useRouter()
	const {setUser} = useUser()

	function logout() {
		document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
		setUser(undefined)
		router.push(routes.home.login)
	}

	return (
		<>
			<Box>
				<H2 first>Logout</H2>
				<Button value={'Logout'} onClick={logout} />
			</Box>
		</>
	)
}

export default withAuth(Logout, ['recruiter', 'admin'])