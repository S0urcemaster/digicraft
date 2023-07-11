import {PoolClient} from 'pg'

export type Visit = {
	route: string
	ip: string
	country: string
	region: string
	timezone: string
	city: string
	userAgent: string
	language: string
	screen: string
}

export async function getVisits(visit: Visit, client: PoolClient) {

	try {
		const rs = await client.query(`
          SELECT *
          FROM visits
		    LIMIT 1000
		`)
	} catch (err: any) {
		console.log(err.stack)
	} finally {
		client.release()
	}
}

export async function pushVisit(visit: Visit, client: PoolClient) {

	const text = `insert into visits (route, ip, useragent, language, screen, country, region, city) 
						values ($1, $2, $3, $4, $5, $6, $7, $8)`
	const values = [visit.route, visit.ip, visit.userAgent, visit.language, visit.screen, visit.country, visit.region, visit.city]

	try {
		await client.query(text, values)
	} catch (err: any) {
		console.log(err.stack)
	} finally {
		client.release()
	}
}