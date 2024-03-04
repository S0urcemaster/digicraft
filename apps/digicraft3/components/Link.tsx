import * as React from 'react'
import { useRouter } from 'next/navigation'
import { Route } from '../app/routes'

export function Link({text, route}: {text: string, route: Route}) {

	const router = useRouter()

	function clicked() {
		router.push(route.path)
	}

	return (
		<div onClick={clicked}>
			[{text}]
		</div>
	)
}