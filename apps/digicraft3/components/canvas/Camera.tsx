import * as React from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Euler } from 'three'
import { useRef } from 'react'

export function Camera({position, rotation}: {position: [number, number, number], rotation: Euler}) {

	const { camera } = useThree()


	camera.setRotationFromEuler(rotation)

	useFrame(() => {

		camera.position.x = position[0]
		camera.position.y = position[1]
		camera.position.z = position[2]
		camera.updateProjectionMatrix()
	})

	return (
		<>

		</>
	)
}