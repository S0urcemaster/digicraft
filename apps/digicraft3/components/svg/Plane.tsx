import * as React from 'react'

function Square({x, y}: {x: number, y: number}) {

	const h1 = [0, 0]
	const h2 = [1000, 0]
	const c = [500, 500]
	const int = 10

	function getPoints(): string {
		const points: [number, number][] = []


		return points.map((p) => p.join(',')).join(' ')
	}

	return (
		<polygon points={getPoints()}>
		</polygon>
	)
}

export function Plane() {

	const squares = []

	return (
		<svg width={1000} height={500} viewBox={'100 50 800 350'}>

		</svg>
	)
}