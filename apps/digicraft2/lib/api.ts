import axios from 'axios'
import {globals} from './globals'

export type Visit = {
	route: string
	userAgent: string
	language: string
	screen: string
}

export async function postVisit(route: string) {
	const visit: Visit = {
		route: route,
		userAgent: navigator.userAgent,
		language: navigator.language,
		screen: `{"width": ${window.screen.width}, "height": ${window.screen.height}}`
	}
	const res = axios.post(`${globals.root}/visitor`, visit)
}

