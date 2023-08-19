import * as React from 'react'
import DigiText from '../components/svg/logo/DigiText'
import cssVars from '../vars.module.scss'

export function DigiFoot() {
	return (
		<footer style={{display: 'flex', justifyContent: 'flex-end'}}>
			<DigiText text={`IMPRESSUM/DATENSCHUTZ`} height={13} color={cssVars.color}/>
		</footer>
	)
}