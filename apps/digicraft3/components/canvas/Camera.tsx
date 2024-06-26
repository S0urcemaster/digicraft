import * as React from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Euler, PerspectiveCamera } from 'three'


export function Camera({position, rotation}: {position: [number, number, number], rotation: Euler}) {

	const { camera } = useThree()

	// const camera = new PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
	// scene.add( camera );

	camera.setRotationFromEuler(rotation)

	useFrame(() => {

		camera.position.x = position[0]
		camera.position.y = position[1]
		camera.position.z = position[2]

		camera.updateProjectionMatrix()
	})

	return (
		<>
			{/*<PerspectiveCamera*/}
			{/*	ref={camera}*/}
			{/*	fov={75}*/}
			{/*	near={0.1}*/}
			{/*	far={1000}*/}
			{/*	position={[0, 0, 5]} // Beispielposition*/}
			{/*/>*/}
		</>
	)
}