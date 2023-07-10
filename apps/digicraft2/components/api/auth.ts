import axios from 'axios'
import {globals} from '../../lib/globals'

export async function getToken(user: string, pass: string): Promise<any> {
	const res = await axios.get(`${globals.root}/auth/login`, {params: {user: user, pass: pass}})
	return res.data.token
}

export async function getUser(): Promise<any> {
	const config = globals.dev ? {withCredentials: true} : {}
	try {
		const res = await axios.get(`${globals.root}/auth/user`, config)
		return res.data.user
	} catch(err) {
		return undefined
	}
}