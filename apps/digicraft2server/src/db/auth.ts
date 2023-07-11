import {PoolClient} from 'pg'
import {generateToken} from '../lib/auth'

type User = {
	name: string
	pass: string
	role: Role
	token: string
	tokenExpires: string
}

type Role = {
	name: string
	routes: []
}

export async function getUser(token: string, client: PoolClient) {

	const query = 'select users.name as username, roles.name as rolename from users left join roles on users.role=roles.id  where token=$1'
	try {
		const userRes = await client.query(query, [token])
		if(userRes.rows[0]) {
			return userRes.rows[0]
		}
		return
	} catch (err: any) {
		console.log(err.stack)
	} finally {
		client.release()
	}
}

export async function getToken(name: string, pass: string, client: PoolClient) {

	const userQuery = 'select name from users where users.name=$1 and users.pass=$2'
	const saveTokenQuery = 'update users set token=$1, tokenexpires=now() + interval \'3 days\' where name=$2'

	try {
		const userRes = await client.query(userQuery, [name, pass])
		if(userRes.rows[0]) {
			const token = generateToken()
			const updateRes = await client.query(saveTokenQuery, [token, name])
			console.log("Token updated:", updateRes.rowCount)
			if(updateRes.rowCount <1) {
				// todo check?
			}
			return token
		} else {
			return undefined
		}
	} catch (err: any) {
		console.log(err.stack)
	} finally {
		client.release()
	}

}