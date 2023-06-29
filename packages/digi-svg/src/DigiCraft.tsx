
import * as React from 'react'
import chroma from 'chroma-js'
import { CSSProperties } from 'react'

type DigiCraftTheme = {
	color: string
}

type DigiCraftProps = {
	style?: CSSProperties
	theme: DigiCraftTheme
	x: number
	y: number
	fontSize: number
	// children: ReactNode
}

export const digiCraftThemes: {[key:string]: DigiCraftTheme} = {
	light: {
		color: 'white',
	}
}

export function DigiCraft({theme, x, y, style, fontSize}: DigiCraftProps) {

	const stroke = chroma.mix(theme.color, 'rgba(255,255,255,0)', 0.5).hex()

	return (
		<>
			<text x={x} y={y +fontSize -2} fontSize={fontSize} fontWeight={600} fill={theme.color} stroke={stroke} style={style}>Digi Craft</text>
		</>
	)
}
