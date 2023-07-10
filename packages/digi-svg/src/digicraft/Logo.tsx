
import * as React from 'react'
import { CSSProperties } from 'react'
import {Text} from '../components/Text'

type DigiCraftTheme = {
	color: string
}

type DigiCraftLogoProps = {
	style?: CSSProperties
	theme: DigiCraftTheme
	x: number
	y: number
	fontSize: number
}

export const digiCraftThemes: {[key:string]: DigiCraftTheme} = {
	light: {
		color: 'white',
	}
}

export function Logo({theme, x, y, style, fontSize}: DigiCraftLogoProps) {
	return (
		<Text x={x} y={y} fontSize={fontSize} fontWeight={600} color={theme.color} style={{letterSpacing: 4, ...style}}>Digi Craft</Text>
	)
}
