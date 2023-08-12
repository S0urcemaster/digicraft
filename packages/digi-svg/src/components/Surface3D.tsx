import * as React from 'react'

export function Surface3D({width, height, squareSize, depth}: {width: number, height: number, squareSize: number, depth: number}) {

	const xPoints = () => {
		const points = []
		for (let i = -100; i < width; i += squareSize) {
			points.push(i)
		}
		return points
	}

	const surface = () => {
		const surface = []
		for (let i = -100; i < width; i += squareSize) {
			surface.push(<line x1={i} y1={0} x2={i} y2={100} stroke="black" strokeWidth={0.5}/>)
		}
		for (let j = -100; j < height; j += squareSize) {
			surface.push(<line x1={0} y1={j} x2={100} y2={j} stroke="black" strokeWidth={0.5}/>)
		}
		return surface
	}

	return (
		// <svg width={width} height={height} viewBox={`0 0 100 100`} style={{position: 'relative', top: 20}}>
		// 	{xPoints().map((x, i) => {
		// 		return <line x1={x} y1={100} x2={50} y2={0} stroke="black" strokeWidth={0.5} />
		// 	})}
		//
		// </svg>
		<svg width={width} height={height} viewBox={`0 0 100 100`} style={{position: 'relative', top: 50}}>
			<g style={{transform: 'rotate3d(0, 1, 0, 85deg)'}}>
				{surface()}
			</g>

		</svg>
	)
}