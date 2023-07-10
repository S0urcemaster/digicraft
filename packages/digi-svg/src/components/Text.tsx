import * as React from 'react'
import chroma from 'chroma-js'
import { CSSProperties, ReactNode } from 'react'
import { clog } from '@digicraft/lib'

type TextProps = {
	x: number
	y: number
	fontSize: number
	fontWeight?: number
	color: string
	smooth?: number
	style?: CSSProperties
	children: ReactNode
}

export function Text({x, y, fontSize, color, smooth, style, children, fontWeight}: TextProps) {
	const stroke = smooth ? chroma.mix(color, 'rgba(255,255,255,1)', smooth).hex() : color
	return <text x={x} y={y +fontSize -5} fontSize={fontSize} fontWeight={fontWeight ?? 400} fill={color} stroke={stroke} style={style}>{children}</text>
}
