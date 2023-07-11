import {Request, Response} from 'express'
import {getToken as getTokenDb, getUser as getUserDb} from '../db/auth'
import {Pool} from 'pg'

export async function login(req: Request, res: Response, clientPool: Pool) {
	const user = req.query.user
	const pass = req.query.pass

	const token = await getTokenDb(user as string, pass as string, await clientPool.connect())
	if(token) {
		return res.json({token: token})
	}
	return res.sendStatus(401)
}

export async function getUser(req: Request, res: Response, clientPool: Pool) {
	const token = req.cookies.token
	if(token) {
		const user = await getUserDb(token as string, await clientPool.connect())
		if(user) {
			return res.json({user: user})
		}
	}
	return res.sendStatus(401)
}