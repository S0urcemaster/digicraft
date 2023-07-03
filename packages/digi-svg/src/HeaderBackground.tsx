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
				{gradients.gray_gray('bg')}
				{gradients.mozdev_blue_reverse_plate('panel')}
			</defs>
			<rect x={0} y={0} width={'100%'} height={'100%'} fill={'url(#bg)'} />
			<g>
				<rect x={0} y={3} width={'100%'} height={17} fill={'#998877'} />
			</g>
		</>
	)
}
