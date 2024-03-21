'use client'

import { Noise } from '../components/NoiseCanvas'
import { useDigiCraftContext } from './DigiCraftContext'
import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import * as React from 'react'
import cssVars from '../vars.module.scss'
import { Origin } from '../cms/canvas/Origin'

import {Canvas} from '../components/canvas/Canvas'
import { Camera } from '../components/canvas/Camera'
import { Euler } from 'three'

const Dynamic = dynamic(() => import('./MainMenu'), {ssr: false})

export default function Home() {

	const {contextLoaded} = useDigiCraftContext()
	const [cycleState, setCycleState] = useState(0)

	return (
		<div style={{
			position: 'relative', overflowX: 'hidden', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0)',
			display: contextLoaded ? 'block' : 'none'
		}}>
			<Dynamic/>
		</div>
	)
}
