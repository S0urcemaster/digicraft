
import * as React from 'react'
import { CSSProperties } from 'react'
import {Text} from '../components/Text'

type DigiCraftTheme = {
	color: string
}

type ContentTitleProps = {
	style?: CSSProperties
	theme: DigiCraftTheme
	x: number
	y: number
	fontSize: number
	title: string
}

export function ContentTitle({theme, x, y, style, fontSize, title}: ContentTitleProps) {
	return (
		<g transform={'scale(1 0.8)'}>
			<Text x={x} y={y} fontSize={fontSize} color={theme.color} style={{...style}}>{title}</Text>
		</g>
	)
}
