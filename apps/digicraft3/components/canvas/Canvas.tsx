import * as React from 'react'

import { Canvas as Canvas3 } from '@react-three/fiber'
import { ReactNode } from 'react'


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