import {ImageButton} from '../ui/Form'
import copy from '/public/fa/copy.svg'
import * as React from 'react'
import localFont from '@next/font/local'
import {useEffect, useRef, useState} from 'react'
import {useRows} from './pwdgenContext'

const vt323 = localFont({src: '../..//public/font/LcdSolid-VPzB.ttf'})

export default function Display(props: {height: number}) {

	const {password} = useRows()

	const [passwordCache, setPasswordCache] = useState([] as Array<string>)

	const cacheDisplay = useRef<null | HTMLDivElement>(null)
	const cacheContent = useRef<null | HTMLDivElement>(null)

	function scrollDown() {
		cacheDisplay.current!.scroll(0, cacheContent.current!.clientHeight -cacheDisplay.current!.clientHeight +13)
	}

	function updatePasswordCache() {
		if(passwordCache.length > 29) {
			passwordCache.splice(0, 1)
		}
		setPasswordCache([...passwordCache, password])
	}

	useEffect(() => {
		if(password !== '') {
			updatePasswordCache()
		}
	}, [password])

	useEffect(() => {
		scrollDown()
	}, [passwordCache])

	function copyToClipboard(pwd: string) {
		navigator.clipboard.writeText(pwd)
	}

	return (
		<div className={vt323.className} ref={cacheDisplay} style={{
			fontSize: '20px',
			background: '#76807c',
			color: '#fffd80',
			height: props.height +'px',
			boxShadow: '0 0 4px #d4e8df inset',
			padding: '8px 5px 5px 10px',
			overflowY: 'scroll',
		}}>
			<div style={{fontFamily: '"VT323", monospace'}} ref={cacheContent}>
				{passwordCache.map((pwd, id) => (
					<div key={id} style={{display: 'grid', gridTemplateColumns: '1fr auto', gap: '5px',
						fontFamily: '"VT323", monospace', fontSize: '80%'}}>
						<div style={{overflowX: 'hidden'}}>{pwd}</div>
						<ImageButton onClick={() => copyToClipboard(pwd)} src={copy} width={30} height={30} padding={5}/>
					</div>
				))}
			</div>
		</div>
	)
}