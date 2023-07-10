import * as React from 'react'
import {routes} from '../../../lib/routes'
import {ReactNode} from 'react'
import Link from 'next/link'
import Image, {StaticImageData} from 'next/image'
import longPassGen from '/public/works/longPassGen.png'
import numbGuess from '/public/works/numbGuess.png'
import achievements from '/public/works/mindset.png'
import notationTrainer from '/public/works/notationTrainer.png'
import decider from '/public/works/decider.png'
import worktime from '/public/works/worktime.png'
import radio from '/public/works/radio.png'
import {useRouter} from 'next/router'
import {useLocalStorage} from '../../../lib/localStorageContext'
import {globals} from '../../../lib/globals'


function MenuItem(props: {href: string, image?: StaticImageData, children: ReactNode}) {

	const router = useRouter()
	const {brightness} = useLocalStorage()

	return (
		<div onClick={() => router.push(props.href)} style={{cursor: 'pointer', marginBottom: 20}}>
			<Link href={props.href} style={{fontWeight: 'bold', margin: '0 0 15px 0', textDecoration: 'none', color: globals.brightness[brightness].color}}>{props.children}</Link>
			{props.image && <Image src={props.image} alt={'App Screenshot'} width={220} />}
		</div>
)
}

export default function Source() {
	return (
		<>
			<MenuItem href={routes.source.radio} image={radio}>Digi Radio</MenuItem>
			<MenuItem href={routes.source.worktime} image={worktime}>Arbeitszeiterfassung</MenuItem>
			<MenuItem href={routes.source.decider} image={decider}>Der Entscheider</MenuItem>
			<MenuItem href={routes.source.notationTrainer} image={notationTrainer}>Schach-Notationstrainer</MenuItem>
			<MenuItem href={routes.source.passwordMaker} image={longPassGen}>Long Pass Maker</MenuItem>
			<MenuItem href={routes.source.achievements} image={achievements}>Erfolge</MenuItem>
			<MenuItem href={routes.source.numberGuessing} image={numbGuess}>Zahlenraten</MenuItem>
		</>
	)
}