import {PoolClient} from 'pg'

export async function randomRow(client: PoolClient, table: string) {
	try {
		const rs = await client.query(`
			SELECT * FROM ${table}
			ORDER BY RANDOM()
			LIMIT 1
		`)
		return rs.rows[0]
	} catch (err:any) {
		console.log(err.stack)
	} finally {
		client.release()
	}
}