import {Request, Response} from 'express'
import geoip from 'geoip-lite'
import {pushVisit, Visit} from '../db/digicraft'
import {Pool} from 'pg'
import {getIps, getRoutes, getScreens, getTraffic} from '../db/visitors'

const localIp = process.env.DEV && '94.134.93.27'

export async function screenStats(req: Request, res: Response, clientPool: Pool) {
	const rows = await getScreens(await clientPool.connect())
	return res.json(rows)
}

export async function routeStats(req: Request, res: Response, clientPool: Pool) {
	const rows = await getRoutes(await clientPool.connect())
	return res.json(rows)
}

export async function trafficStats(req: Request, res: Response, clientPool: Pool) {
	const rows = await getTraffic(await clientPool.connect())
	return res.json(rows)
}

export async function ipStats(req: Request, res: Response, clientPool: Pool) {
	const rows = await getIps(await clientPool.connect())
	return res.json(rows)
}


export async function visitor(req: Request, res: Response, clientPool: Pool) {
	const r = JSON.parse(JSON.stringify(req.body))
	const ip = localIp ?? req.headers['x-forwarded-for']
	let geo = null
	if(ip) {
		geo = geoip.lookup(ip as string)
	}

	const visit: Visit = {
		route: r.route,
		ip: ip ? ip as string : 'error getting ip',
		country: geo ? geo.country : '-',
		region: geo ? geo.region : '-',
		timezone: geo ? geo.timezone : '-',
		city: geo ? geo.city : '-',
		userAgent: r.userAgent,
		language: r.language,
		screen: r.screen,
	}
	await pushVisit(visit, await clientPool.connect())
	res.sendStatus(200)
}