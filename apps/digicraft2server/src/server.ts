import * as dotenv from 'dotenv'

dotenv.config()

import express, {json, Request, Response} from 'express'
import cors from 'cors'
import {Pool, Client} from 'pg'
import {adjective, adverb, conjunction, name, noun, particle, preposition, pronoun, verb} from './controller/worddb'
import {ipStats, visitor, routeStats, trafficStats, screenStats} from './controller/visitors'
import {login, getUser} from './controller/auth'
import cookieParser from 'cookie-parser'
import {sourceFile} from './controller/sourceFile'

const app = express()
const port = process.env.SERVER_PORT

app.use(cookieParser())

process.env.DEV && app.use(cors({credentials: true, origin: 'http://localhost:3000'}))

const wordPool = new Pool({
	user: process.env.PGUSER,
	password: process.env.PGPASSWORD,
	host: process.env.PGHOST,
	database: process.env.WORDDB_DATABASE,
})

const digicraftPool = new Pool({
	user: process.env.PGUSER,
	password: process.env.PGPASSWORD,
	host: process.env.PGHOST,
	database: process.env.DIGICRAFT_DATABASE,
})


wordPool.on('error', (err, client) => {
	console.error('Unexpected error on idle worddb client', err)
	process.exit(-1)
})

digicraftPool.on('error', (err, client) => {
	console.error('Unexpected error on idle digicraftdb client', err)
	process.exit(-1)
})


app.use(express.json())


app.get('/auth/login', async (req: Request, res: Response) => login(req, res, digicraftPool))
app.get('/auth/user', async (req: Request, res: Response) => getUser(req, res, digicraftPool))


app.post('/visitor', async (req: Request, res: Response) => visitor(req, res, digicraftPool))
app.get('/visitor/stats/route', async (req: Request, res: Response) => routeStats(req, res, digicraftPool))
app.get('/visitor/stats/ip', async (req: Request, res: Response) => ipStats(req, res, digicraftPool))
app.get('/visitor/stats/traffic', async (req: Request, res: Response) => trafficStats(req, res, digicraftPool))
app.get('/visitor/stats/screens', async (req: Request, res: Response) => screenStats(req, res, digicraftPool))

app.get('/source/:app/:file', async (req: Request, res: Response) => sourceFile(req, res))

app.get('/adjective', async (req: Request, res: Response) => {
	return await adjective(req, res, await wordPool.connect())
})

app.get('/adverb', async (req: Request, res: Response) => {
	return await adverb(req, res, await wordPool.connect())
})

app.get('/conjunction', async (req: Request, res: Response) => {
	return await conjunction(req, res, await wordPool.connect())
})

app.get('/name', async (req: Request, res: Response) => {
	return await name(req, res, await wordPool.connect())
})

app.get('/noun', async (req: Request, res: Response) => {
	return await noun(req, res, await wordPool.connect())
})

app.get('/particle', async (req: Request, res: Response) => {
	return await particle(req, res, await wordPool.connect())
})

app.get('/preposition', async (req: Request, res: Response) => {
	return await preposition(req, res, await wordPool.connect())
})

app.get('/pronoun', async (req: Request, res: Response) => {
	return await pronoun(req, res, await wordPool.connect())
})

app.get('/verb', async (req: Request, res: Response) => {
	return await verb(req, res, await wordPool.connect())
})

// app.get('/', async (req, res) => {
// 	const client = await pool.connect()
// 	try {
// 		const rs = await client.query('SELECT NOW()')
// 		res.send(rs.rows[0].now)
// 	} catch (err:any) {
// 		console.log(err.stack)
// 	} finally {
// 		client.release()
// 	}
//
// })

app.listen(port, () => {
	console.log(`Digicraft api listening on port ${port}`)
})
