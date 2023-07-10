import * as React from 'react'
import {H1} from '../components/ui/Typography'
import {Button} from '../components/ui/Form'
import {FormEvent, useState} from 'react'
import {useUser} from '../components/content/user/userContext'
import router from 'next/router'
import {routes} from '../lib/routes'
import ContentLayout from '../components/content/ContentLayout'

export default function Login(props: {}) {

	const {login} = useUser()

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	async function handleSubmit(e: FormEvent) {
		e.preventDefault()
		await login(username, password)
		router.push(routes.home.user)
	}

	return (
		<>
			<ContentLayout left={
				<>
				</>
			} right={
				<>
				</>
			}
			>
				<H1>Login</H1>
				<form onSubmit={handleSubmit}>
					<div style={{margin: '0 0px 10px 0'}}>
						<label htmlFor="username" style={{margin: '0 5px 0px 0'}}>Username:</label>
						<input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
					</div>
					<div style={{margin: '0 0px 10px 0'}}>
						<label htmlFor="password" style={{margin: '0 5px 0px 0'}}>Password:</label>
						<input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
					</div>
					<Button type="submit">Login</Button>
				</form>
			</ContentLayout>
		</>
	)
}