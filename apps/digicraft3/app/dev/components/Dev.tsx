'use client'

import * as React from 'react'
import DigiText from '../../../components/svg/logo/DigiText'
import { Game } from '../../../components/svg/menu'
import { GameOfLife } from '../../../components/GameOfLiveCanvas'
import * as wasm from 'game-of-life'
import { useEffect } from 'react'

const devStyle = {
	margin: '10px 10px 10px 10px',
	border: '1px solid black',
}

export function Dev() {

	useEffect(() => {
		wasm.greet()
	}, [])

	return (
		<div style={devStyle}>
			{/*<DigiText text={'DIGITEXT'} color={'black'} height={100} />*/}
		</div>
	)
}
