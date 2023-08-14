import * as React from 'react'
import Text from './Text'

type Props = {

}

export default function Logo(props: Props) {

	const dotSize = 4

	function Rect(props: {x: number, y: number, width: number, height: number, fill: string}) {
		return (
			<rect x={props.x} y={props.y} width={props.width} height={props.height} fill={props.fill} />
		)
	}

	function getSquaresColor() {
		return '#fff'
	}

	function getGradientColor() {
		return ['#c5cbd3', '#000']
	}

	function getFillGradientColor() {
		return ['#1a2f44', '#c5cbd3']
	}

	return (
		<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"width={150} viewBox={'0 0 200 50'}>
			<title>digicraft logo</title>
			<Text x={2} size={dotSize} text={'DIGI CRAFT'} visible={true} />
		</svg>
	)
}