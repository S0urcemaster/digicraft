import {createContext, ReactNode, useContext, useEffect, useState} from 'react'
import {getToken, getUser} from '../../api/auth'
import {globals} from '../../../lib/globals'
import {routes} from '../../../lib/routes'
import router from 'next/router'

export type User = {
	name: string
	role: string
}

type UserContext = {
	user: User|undefined
	setUser: (user: User|undefined) => void
	userChecked: boolean|undefined // avoid login flashing
	setUserChecked: (checked: boolean|undefined) => void
	login: (name: string, pass: string) => void
}

const UserContext = createContext<UserContext>({} as UserContext)

export function UserContextProvider(props: { children: ReactNode }) {

	const [user, setUser] = useState<User | undefined>()
	const [userChecked, setUserChecked] = useState<boolean|undefined>()

	useEffect(() => {
		checkUser()
	}, [])

	// useEffect(() => {
	// 	if (user) {
	// 		router.push(routes.home.user)
	// 	}
	// }, [user])

	async function checkUser() {
		const user = await getUser()
		setUserChecked(true)
		if(user) {
			setUser({name: user.username, role: user.rolename})
		} else {
			setUser(undefined)
		}
	}

	async function login(username: string, password: string) {
		const token = await getToken(username, password)
		setUserChecked(true)
		if (token) {
			const today = new Date()
			const threeDaysFromNow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3)
			const expires = threeDaysFromNow.toUTCString()
			const devCookie = globals.dev ? ' domain=localhost;' : ' secure;'
			document.cookie = `token=${token}; expires=${expires};${devCookie} path=/;`
			await checkUser()
		}
	}

	return (
		<UserContext.Provider value={{user, setUser, userChecked: userChecked, setUserChecked, login}}>
			{props.children}
		</UserContext.Provider>
	)
}

export function useUser() {
	return useContext(UserContext)
}