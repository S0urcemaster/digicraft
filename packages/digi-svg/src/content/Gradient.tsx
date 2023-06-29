import { ReactNode } from 'react'
import * as React from 'react'

export const gradients: ReactNode = {
	pink_blue: (id: string) => (
		<linearGradient id={id} gradientTransform={'rotate(90)'}>
			<stop offset={'20%'} stopColor={'#39F'} />
			<stop offset={'90%'} stopColor={'#F3F'} />
		</linearGradient>
	),
	gray: (id: string) => (
		<linearGradient id={id} gradientTransform={'rotate(90)'}>
			<stop offset={'20%'} stopColor={'#878787'} />
			<stop offset={'90%'} stopColor={'#d9d9d9'} />
		</linearGradient>
	),
	mozdev_blue: (id: string) => (
		<linearGradient
			id={id} gradientTransform={'rotate(90)'}>
			<stop offset={'0%'} stopColor={'darkblue'} />
			<stop offset={'20%'} stopColor={'skyblue'} />
			<stop offset={'70%'} stopColor={'skyblue'} />
			<stop offset={'100%'} stopColor={'darkblue'} />
		</linearGradient>
	),
}