import * as React from 'react'
import {H3, P} from './Typography'
import {useLocalStorage} from '../../lib/localStorageContext'
import {globals} from '../../lib/globals'
import {useRouter} from 'next/router'
import {IconButton} from './Form'
import {useEffect, useRef, useState} from 'react'
import {routes, routes as allRoutes} from '../../lib/routes'
import {icons} from './Icon'
import {Box} from './Box'
import {HR} from './Layout'

const tour = [
	routes.home.digiCraft,
	routes.home.projects,
	routes.apps.notationTrainer,
	routes.apps.passwordMaker,
	routes.blog.passwordSecurity,
	routes.apps.achievements,
	routes.apps.smoothEye,
	routes.meta.about,
	routes.home.music,
	routes.home.blog,
	routes.apps.neoCortex,
	routes.meta.settings,
	routes.meta.donate,
]

export default function TourBox() {

	const {brightness} = useLocalStorage()
	const router = useRouter()
	const [route, setRoute] = useState(-1)
	const routes = useRef(tour)
	const lock = useRef(true)

	useEffect(() => {
		if (!lock.current) router.push(routes.current[route])
	}, [route])

	function prev() {
		lock.current = false
		setRoute(prev => {
			if (prev - 1 < 0) {
				return routes.current.length - 1
			}
			return prev - 1
		})
	}

	function next() {
		lock.current = false
		setRoute(prev => {
			if (prev + 1 > routes.current.length - 1) {
				return 0
			}
			return prev + 1
		})
	}

	return (
		<Box style={{}}>
			<H3 first style={{}}>Tour</H3>
			<P first>Take the tour {route + 1 > 0 ? `(${route + 1} /${tour.length})` : ''}</P>
			<IconButton name={icons.AngleLeft} size={15} onClick={prev}/>
			<IconButton name={icons.AngleRight} size={15} onClick={next}/>
		</Box>
	)
}