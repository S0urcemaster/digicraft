// import {PoolClient} from 'pg'
import {globals} from '../../lib/globals'

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