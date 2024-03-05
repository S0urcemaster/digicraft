import * as React from 'react'
import {routes} from '../../../lib/routes'
import {ReactNode} from 'react'
import Link from 'next/link'
import Image, {StaticImageData} from 'next/image'
import longPassGen from '/public/works/longPassGen.png'
import numbGuess from '/public/works/numbGuess.png'
import pasteback from '/public/works/pasteback.jpg'
import mixmatch from '/public/works/djtool.jpg'
import achievements from '/public/works/mindset.png'
import smoothEye from '/public/works/smoothEye.png'
import notationTrainer from '/public/works/notationTrainer.png'
import decider from '/public/works/decider.png'
import worktime from '/public/works/worktime.png'
import radio from '/public/works/radio.png'
import svgEditor from '/public/works/svgEditor.png'
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

export default function App() {
	return (
		<>
			<MenuItem href={routes.apps.svgEditorx} image={svgEditor}>SVG Editor</MenuItem>
			<MenuItem href={routes.apps.radio} image={radio}>Digi Radio</MenuItem>
			<MenuItem href={routes.apps.worktime} image={worktime}>Arbeitszeiterfassung</MenuItem>
			<MenuItem href={routes.apps.decider} image={decider}>Der Entscheider</MenuItem>
			<MenuItem href={routes.apps.notationTrainer} image={notationTrainer}>Schach-Notationstrainer</MenuItem>
			<MenuItem href={routes.apps.passwordMaker} image={longPassGen}>Long Pass Maker</MenuItem>
			<MenuItem href={routes.apps.smoothEye} image={smoothEye}>Smooth Eye Movement</MenuItem>
			<MenuItem href={routes.apps.achievements} image={achievements}>Erfolge</MenuItem>
			<MenuItem href={routes.apps.numberGuessing} image={numbGuess}>Zahlenraten</MenuItem>
			<MenuItem href={routes.apps.neoCortex}>Neo Cortex</MenuItem>
			{/*<MenuItem href={routes.apps.lifeHacks}>Life Hacks</MenuItem>*/}
			{/*<MenuItem href={routes.apps.selfReport}>Self Report</MenuItem>*/}
			{/*<MenuItem href={routes.apps.} image={}></MenuItem>*/}
		</>
	)
}