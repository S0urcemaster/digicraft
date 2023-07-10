import * as React from 'react'
import {CSSProperties} from 'react'
import Image, {StaticImageData} from 'next/image'

type Props = {
	src: StaticImageData
	alt: string
	width?: string
	style?: CSSProperties
};

export default function PropImage(props: Props) {
	return (
		<Image src={props.src} alt={props.alt} style={{width: props.width, height: 'auto', ...props.style}} />
	)
}