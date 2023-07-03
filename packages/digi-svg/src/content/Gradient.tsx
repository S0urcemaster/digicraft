import { ReactNode } from 'react'
import * as React from 'react'

export const gradients: ReactNode = {
	pink_blue: (id: string) => (
		<linearGradient id={id} gradientTransform={'rotate(90)'}>
			<stop offset={'20%'} stopColor={'#39F'}/>
			<stop offset={'90%'} stopColor={'#F3F'}/>
		</linearGradient>
	),
	gray: (id: string) => (
		<linearGradient id={id} gradientTransform={'rotate(90)'}>
			<stop offset={'20%'} stopColor={'#878787'}/>
			<stop offset={'90%'} stopColor={'#d9d9d9'}/>
		</linearGradient>
	),
	mozdev_blue: (id: string) => (
		<linearGradient
			id={id} gradientTransform={'rotate(90)'}>
			<stop offset={'0%'} stopColor={'darkblue'}/>
			<stop offset={'20%'} stopColor={'skyblue'}/>
			<stop offset={'70%'} stopColor={'skyblue'}/>
			<stop offset={'100%'} stopColor={'darkblue'}/>
		</linearGradient>
	),
	mozdev_blue_reverse: (id: string) => (
		<linearGradient id={id} gradientTransform={'rotate(90)'}>
			<stop offset={'0%'} stopColor={'#fde9d5'}/>
			<stop offset={'20%'} stopColor={'#987'}/>
			<stop offset={'80%'} stopColor={'#21349a'}/>
			<stop offset={'100%'} stopColor={'#c3ccff'}/>
		</linearGradient>
	),
	mozdev_blue_reverse_reverse: (id: string) => (
		<linearGradient id={id} gradientTransform={'rotate(90)'}>
			<stop offset={'0%'} stopColor={'#c3ccff'}/>
			<stop offset={'20%'} stopColor={'#21349a'}/>
			<stop offset={'80%'} stopColor={'#987'}/>
			<stop offset={'100%'} stopColor={'#fde9d5'}/>
		</linearGradient>
	),
	mozdev_blue_reverse_plate: (id: string) => (
		<linearGradient id={id} gradientTransform={'rotate(90)'}>
			<stop offset={'0%'} stopColor={'#958578'}/>
			{/*<stop offset={'20%'} stopColor={'#987'} />*/}
			<stop offset={'100%'} stopColor={'#454d90'}/>
		</linearGradient>
	),
	gray_gray: (id: string) => (
		<linearGradient id={id} gradientTransform={'rotate(90)'}>
			<stop offset={'0%'} stopColor={'#d4c1ae'}/>
			<stop offset={'20%'} stopColor={'#61503f'}/>
			<stop offset={'80%'} stopColor={'#998877'}/>
			<stop offset={'100%'} stopColor={'#61503f'}/>
		</linearGradient>
	),
}