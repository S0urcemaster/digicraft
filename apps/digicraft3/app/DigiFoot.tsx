import * as React from 'react'
import DigiText from '../components/svg/logo/DigiText'
import cssVars from '../vars.module.scss'

export function DigiFoot() {
	return (
		<footer style={{display: 'flex', justifyContent: 'flex-end'}}>
			<DigiText text={`I,M,P,R,E,S,S,U,M,/,D,A,T,E,N,S,C,H,U,T,Z`} height={10} color={cssVars.logoBg}/>
		</footer>
	)
}