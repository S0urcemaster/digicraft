import * as React from 'react'
import { useLoader } from '@react-three/fiber'
import { Group } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useRef } from 'react'

export const basePath = '/workshop'

export function DigiCraft() {

	const gltf = useLoader(GLTFLoader, `${basePath}/digicraft.glb`)

	const primitiveRef = useRef<Group>()

	return (
		<mesh position={[0, -20, 40]}>
			<primitive ref={primitiveRef} object={gltf.scene} />
		</mesh>
	)
}