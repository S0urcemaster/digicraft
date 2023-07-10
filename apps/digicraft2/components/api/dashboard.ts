import {globals} from '../../lib/globals'
import axios from 'axios'

export async function getScreens() {

	const config = globals.dev ? {withCredentials: true} : {}

	try {
		const res = await axios.get(`${globals.root}/visitor/stats/screens`, config)
		return res.data
	} catch(err) {
		return undefined
	}
}

export async function getTraffic() {

	const config = globals.dev ? {withCredentials: true} : {}

	try {
		const res = await axios.get(`${globals.root}/visitor/stats/traffic`, config)
		return res.data
	} catch(err) {
		return undefined
	}
}

export async function getRoutes() {

	const config = globals.dev ? {withCredentials: true} : {}

	try {
		const res = await axios.get(`${globals.root}/visitor/stats/route`, config)
		return res.data
	} catch(err) {
		return undefined
	}
}

export async function getIps() {

	const config = globals.dev ? {withCredentials: true} : {}

	try {
		const res = await axios.get(`${globals.root}/visitor/stats/ip`, config)
		return res.data
	} catch(err) {
		return undefined
	}
}
