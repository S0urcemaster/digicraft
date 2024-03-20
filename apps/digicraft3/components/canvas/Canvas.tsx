import * as React from 'react'

import { Canvas as Canvas3, useFrame, useThree } from '@react-three/fiber'
import { ReactNode, useRef } from 'react'
import { Euler } from 'three'
import { Camera } from './Camera'


export function Canvas({children}: {children: ReactNode}) {

	// useFrame(() => {
	// 	camera.updateProjectionMatrix()
	// 	// camera.position.x = window.innerWidth /2 + (xyz.current[2] -window.innerWidth /2)
	// 	// camera.lookAt(0, 0, 0)
	// 	// console.log("logsntr", "camX, camY, camZ", xyz.current[0], xyz.current[1], xyz.current[2])
	// })

	return (
		<Canvas3>
			{children}
		</Canvas3>
	)
}