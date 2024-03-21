'use client'

import * as React from 'react'
import DigiHead from './DigiHead'
import DigiMain from './DigiMain'
import { ReactNode, useEffect, useState } from 'react'
import { clog } from '@digicraft/lib'

import { useDigiCraftContext } from './DigiCraftContext'
import { DigiFoot } from './DigiFoot'
import { Canvas } from '../components/canvas/Canvas'
import cssVars from '../vars.module.scss'
import { Camera } from '../components/canvas/Camera'
import { Euler } from 'three'
import { DigiCraft as DC3D } from '../cms/canvas/DigiCraft'

export default function DigiCraft({children}: { children: ReactNode }) {

	const {state, setEnvironment} = useDigiCraftContext()


	const [mouseX, setMouseX] = useState(window.innerWidth /2)
	const [mouseY, setMouseY] = useState(window.innerHeight /2)

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
		return cameraX -(diff /50)
	}
	function getCameraY() {
		const diff = mouseY -window.innerHeight
		return cameraY +(diff /100)
	}

	useEffect(() => {
	}, [])


	useEffect(() => { // add resize listener
		function resize() {
			setEnvironment({...state.environment, clientWidth: window.innerWidth, clientHeight: window.innerHeight})
		}
		if(state) {
			window.addEventListener('resize', resize)
			setEnvironment({...state.environment,
				clientWidth: window.innerWidth,
				clientHeight: window.innerHeight
			})
		}
		return () => window.removeEventListener('resize', resize)
	}, [])

	return (
		<>
			<div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
				<Canvas>
					<color attach='background' args={[cssVars.pageBg]}/>
					<ambientLight position={[0, 10, 0]} intensity={1}/>
					{/*<directionalLight color="white" position={[0, 100, 10]} rotation={[0, 0, 0]}/>*/}
					<directionalLight color={'white'} intensity={1} position={[0.1, 1, 0.1]}/>
					{/*<mesh position={[50, 66, 5]} rotation={[0, 0, 0]}>*/}
					{/*	<coneGeometry args={[5, 100, 4]}/>*/}
					{/*	<meshStandardMaterial color={'yellow'}/>*/}
					{/*</mesh>*/}
					<DC3D />
					{/*<Origin/>*/}
					<Camera position={[getCameraX(), getCameraY(), 100]}
							  rotation={new Euler((Math.PI / 360) * -30, 0, 0, 'XYZ')}/>
				</Canvas>
			</div>
			<DigiHead/>
			<DigiMain>
				{children}
			</DigiMain>
			<DigiFoot/>
		</>
	)
}
