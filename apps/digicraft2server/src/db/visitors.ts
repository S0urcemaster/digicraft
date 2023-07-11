import {PoolClient} from 'pg'


export async function getScreens(client: PoolClient) {
	const query = `select screen, count(screen) from visits group by screen`

	try {
		const stats = await client.query(query)
		if(stats.rows) {
			return stats.rows
		}
		return
	} catch (err: any) {
		console.log(err.stack)
	} finally {
		client.release()
	}
}

export async function getTraffic(client: PoolClient) {
	const query = `SELECT DATE_TRUNC('day', datetime) as date, COUNT(*) as count
                  FROM visits
                  GROUP BY date`

	try {
		const stats = await client.query(query)
		if(stats.rows) {
			return stats.rows
		}
		return
	} catch (err: any) {
		console.log(err.stack)
	} finally {
		client.release()
	}
}

export async function getRoutes(client: PoolClient) {
	const query = `SELECT route, COUNT(route) from visits GROUP BY route`

	try {
		const stats = await client.query(query)
		if(stats.rows) {
			return stats.rows
		}
		return
	} catch (err: any) {
		console.log(err.stack)
	} finally {
		client.release()
	}
}

export async function getIps(client: PoolClient) {
	const query = `select distinct ip, count(ip),
			(select country from visits group by country order by count(*) desc limit 1)as country,
			(select region from visits group by region order by count(*) desc limit 1)as region,
			(select city from visits group by city order by count(*) desc limit 1)as city,
		count(ip) from visits group by ip order by ip`

	try {
		const stats = await client.query(query)
		if(stats.rows) {
			return stats.rows
		}
		return
	} catch (err: any) {
		console.log(err.stack)
	} finally {
		client.release()
	}
}