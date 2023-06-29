import * as React from 'react'
import { CSSProperties } from 'react'
import { gradients } from './content/Gradient'

type HeaderBackgroundProps = {

	style?: CSSProperties
}

export function HeaderBackground({style}: HeaderBackgroundProps) {
	return (
		<>
			<defs>
				{gradients.mozdev_blue('Gradient01')}
			</defs>
			<rect x={'0'} y={'0'} width={'100%'} height={'100%'} fill={'url(#Gradient01)'} />
		</>
	)
}