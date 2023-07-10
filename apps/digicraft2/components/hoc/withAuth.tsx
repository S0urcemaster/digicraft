import { useRouter } from 'next/router'
import {ComponentType, useEffect} from 'react'
import {routes} from '../../lib/routes'
import LoginLink from '../content/user/LoginLink'
import {useUser} from '../content/user/userContext'

// export type AuthProps = {
// 	user: User|undefined
// }

const withAuth = (WrappedComponent: ComponentType, allowedRoles: string[]) => {
	const AuthenticatedComponent = (props: JSX.IntrinsicAttributes) => {

		const router = useRouter()

		const {user, userChecked} = useUser()

		useEffect(() => {
			if(userChecked) {
				if(user) {

				} else {
					router.push(routes.home.login)
				}
			}
		}, [user])

		if(WrappedComponent.displayName === 'LoginLink') {
			return <WrappedComponent {...props} />
		}
		return userChecked && user && allowedRoles.includes(user!.role) ? <WrappedComponent {...props} /> : null
	}

	return AuthenticatedComponent
}

export default withAuth
