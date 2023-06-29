import * as React from 'react'
import { CSSProperties } from 'react'

type HeaderProps = {

	style?: CSSProperties
}

export function Header() {
	return (
		<>
			<defs>
				<linearGradient id={'Gradient01'} >
					<stop offset={'20%'} stopColor={'#39F'} />
					<stop offset={'90%'} stopColor={'#F3F'} />
				</linearGradient>
			</defs>
			<rect x={'0'} y={'0'} width={'100%'} height={'100%'} fill={'url(#Gradient01)'} />
		</>
	)
}