'use client'

import { Noise } from '../components/NoiseCanvas'
import { useDigiCraftContext } from './DigiCraftContext'
import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import * as React from 'react'
import { DigiCraft } from '../cms/canvas/DigiCraft'
import cssVars from '../vars.module.scss'
import { Origin } from '../cms/canvas/Origin'

import {Canvas} from '../components/canvas/Canvas'
import { Camera } from '../components/canvas/Camera'
import { Euler } from 'three'

const Dynamic = dynamic(() => import('./MainMenu'), {ssr: false})

export default function Home() {

	const {contextLoaded} = useDigiCraftContext()
	const [cycleState, setCycleState] = useState(0)

	const [mouseX, setMouseX] = useState(0)
	const [mouseY, setMouseY] = useState(0)

	const cameraX = 0
	const cameraY = 20
	const cameraZ = 100

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			setMouseX(event.clientX)
			setMouseY(event.clientY)
			// console.log("logsntr", "xyz.current[0], xyz.current[1], xyz.current[2]", xyz.current[0], xyz.current[1], xyz.current[2])
		}

		window.addEventListener('mousemove', handleMouseMove)


		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
		}

	}, [])

	function getCameraX() {
		const diff = mouseX -window.innerWidth
		return cameraX -(diff /10) -60
	}
	function getCameraY() {
		const diff = mouseY -window.innerHeight
		return cameraY +(diff /50)
	}

	return (
		<div style={{
			position: 'relative', overflowX: 'hidden', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0)',
			display: contextLoaded ? 'block' : 'none'
		}}>
			<div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
				<Canvas>
					<color attach='background' args={[cssVars.pageBg]}/>
					{/*<ambientLight position={[120, 10, 10]} intensity={0.3}/>*/}
					<directionalLight color="white" position={[0, 100, 10]}
											rotation={[0, 0, 0]}/>
					{/*<mesh position={[12, 10, 10]} rotation={[0, 0, 0]}>*/}
					{/*	<coneGeometry args={[5, 100, 4]}/>*/}
					{/*	<meshStandardMaterial color={'yellow'}/>*/}
					{/*</mesh>*/}
					<DigiCraft />
					{/*<Origin/>*/}
					<Camera position={[getCameraX(), getCameraY(), 100]} rotation={new Euler((Math.PI /360) *-30, 0, 0, 'XYZ')} />
				</Canvas>
			</div>
			<Dynamic/>
		</div>
	)
}
