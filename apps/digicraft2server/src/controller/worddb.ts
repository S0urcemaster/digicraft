import {Request, Response} from 'express'
import {PoolClient} from 'pg'
import {randomRow} from '../db/query'

export const tables = {
	adjectives: 'adjectives',
	adverbs: 'adverbs',
	conjunctions: 'conjunctions',
	names: 'names',
	nouns: 'nouns',
	particles: 'particles',
	prepositions: 'prepositions',
	pronouns: 'pronouns',
	verbs: 'verbs',
}

export async function adjective(req: Request, res: Response, client: PoolClient) {
	const row = await randomRow(client, 'adjectives')
	res.send(row)
}

export async function adverb(req: Request, res: Response, client: PoolClient) {
	const row = await randomRow(client, 'adverbs')
	res.send(row)
}

export async function conjunction(req: Request, res: Response, client: PoolClient) {
	const row = await randomRow(client, 'conjunctions')
	res.send(row)
}

export async function name(req: Request, res: Response, client: PoolClient) {
	const row = await randomRow(client, 'names')
	res.send(row)
}

export async function noun(req: Request, res: Response, client: PoolClient) {
	const row = await randomRow(client, 'nouns')
	res.send(row)
}

export async function particle(req: Request, res: Response, client: PoolClient) {
	const row = await randomRow(client, 'particles')
	res.send(row)
}

export async function preposition(req: Request, res: Response, client: PoolClient) {
	const row = await randomRow(client, 'prepositions')
	res.send(row)
}

export async function pronoun(req: Request, res: Response, client: PoolClient) {
	const row = await randomRow(client, 'pronouns')
	res.send(row)
}

export async function verb(req: Request, res: Response, client: PoolClient) {
	const row = await randomRow(client, 'verbs')
	res.send(row)
}

