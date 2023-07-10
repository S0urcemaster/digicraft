import * as React from 'react'
import Logo from '../logo/Logo'
import Navbar from './Navbar'
import {useLocalStorage} from '../../lib/localStorageContext'
import {globals} from '../../lib/globals'

export default function Header() {

	const {brightness} = useLocalStorage()

	function getBackgroundImage(from: string, to: string) {
		return `linear-gradient(to top, ${from}, ${to})`
	}

	return (
		<div>
			<div style={{backgroundImage: getBackgroundImage(globals.brightness[brightness].background, globals.brightness[brightness].boxBackground)}}>&nbsp;</div>
			{/*<img src={'/logo50.svg'} alt={'Digi Craft Logo'} />*/}
			{/*<Image src={logo} alt={'Logo'} />*/}
			<Logo />
			<Navbar />
		</div>
	)
}