
import * as React from 'react'
import chroma from 'chroma-js'

type DigiCraftTheme = {
	color: string
}

type DigiCraftProps = {
	fontFamily: string
	theme: DigiCraftTheme
	x: number
	y: number
	// children: ReactNode
}

export const digiCraftThemes: {[key:string]: DigiCraftTheme} = {
	light: {
		color: 'white',
	}
}

export function DigiCraft({fontFamily, theme, x, y}: DigiCraftProps) {

	const stroke = chroma(theme.color).brighten(0.5).hex()

	return (
		<text x={x} y={y} fill={theme.color} stroke={stroke} style={{fontFamily: fontFamily, fontSize: 30}}>Digicraft</text>
	)
}