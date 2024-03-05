import * as React from 'react'
import { Canvas } from '@react-three/fiber'
import { BoxGeometry, Euler } from 'three'

export function Plane() {

	// const geometry = new BoxGeometry(100, 100, 100)

	return (
		<Canvas camera={{ position: [5, 5, 25], fov: 25 }}>
			<color attach='background' args={['gray']} />
			<ambientLight intensity={0.3} />
			<directionalLight color="red" position={[0, 0, 5]} />
			{/*<mesh rotation={new Euler(Math.PI / 2, 0, 0)} position={[0, 0, 0]}>*/}
			{/*	<planeGeometry args={[100, 100]} />*/}
			{/*	<meshStandardMaterial />*/}
			{/*</mesh>*/}
			<mesh rotation={new Euler(Math.PI / 2, 0, 0)} position={[0, 0, 0]}>
				<boxGeometry args={[5, 5, 5]} />
				<meshStandardMaterial />
			</mesh>
		</Canvas>
	)
}