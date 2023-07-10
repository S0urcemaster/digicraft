import withAuth from '../../hoc/withAuth'
import React, {useEffect, useState} from 'react'
import {routes} from '../../../lib/routes'
import Link from '../../ui/Link'
import {globals} from '../../../lib/globals'
import {useLocalStorage} from '../../../lib/localStorageContext'
import {useUser} from './userContext'
import {Item} from '../Navbar'

function LoginLink() {

	const {brightness} = useLocalStorage()
	const {user, userChecked} = useUser()

	function getHref() {
		return userChecked ? user ? routes.home.user : routes.home.login : ''
	}

	function getTitle() {
		return userChecked ? user ? user.name : 'Login' : ''
	}

	return (
		<>
			<Item title={getTitle()} href={getHref()} brightness={brightness} />
			{/*<Link href={getHref()} style={{marginLeft: '10px', color: globals.brightness[brightness].color}}>*/}
			{/*	{getTitle()}</Link>*/}
		</>
	)
}

LoginLink.displayName = 'LoginLink'
export default withAuth(LoginLink, ['admin', 'user'])