import * as React from 'react'
import cssVars from '../../vars.module.scss'

export function Origin() {

	return (
		<>
			<mesh>
				<cylinderGeometry args={[1, 1, 100, 32]} />
				<meshStandardMaterial color={'green'}/>
			</mesh>
			<mesh rotation={[0, 0, Math.PI /2]}>
				<cylinderGeometry args={[1, 1, 100, 32]} />
				<meshStandardMaterial color={'red'}/>
			</mesh>
			<mesh rotation={[Math.PI /2, 0, 0]}>
				<cylinderGeometry args={[1, 1, 100, 32]} />
				<meshStandardMaterial color={'blue'}/>
			</mesh>
		</>
	)}