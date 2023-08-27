import React, { useState, useEffect } from 'react'

const numRows = 40
const numCols = 60
const cellSize = 30

const generateEmptyGrid = () => {
	const grid = []
	for (let i = 0; i < numRows; i++) {
		grid.push(Array.from(Array(numCols), () => 0))
	}
	return grid
}

const generateRandomGrid = () => {
	const grid = []
	for (let i = 0; i < numRows; i++) {
		grid.push(Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0)))
	}
	return grid
}

export function GameOfLife() {
	// const [grid, setGrid] = useState(() => generateRandomGrid());
	let grid = generateRandomGrid()
	let prevGrid = grid

	useEffect(() => {

		const updateGrid = () => {
			const newGrid = [...prevGrid]

			for (let i = 0; i < numRows; i++) {
				for (let j = 0; j < numCols; j++) {
					const neighbors = [
						[-1, -1], [-1, 0], [-1, 1],
						[0, -1], [0, 1],
						[1, -1], [1, 0], [1, 1],
					]

					let liveNeighbors = 0
					for (const [dx, dy] of neighbors) {
						const ni = i + dx
						const nj = j + dy

						if (ni >= 0 && ni < numRows && nj >= 0 && nj < numCols) {
							liveNeighbors += prevGrid[ni][nj]
						}
					}

					if (prevGrid[i][j] === 1) {
						newGrid[i][j] = liveNeighbors === 2 || liveNeighbors === 3 ? 1 : 0
					} else {
						newGrid[i][j] = liveNeighbors === 3 ? 1 : 0
					}
				}

				grid = newGrid
			}
		}

		const interval = setInterval(updateGrid, 200)

		return () => {
			clearInterval(interval)
		}
	}, [])

	return (
		<svg
			width={numCols * cellSize}
			height={numRows * cellSize}
			className="grid"
		>
			{grid.map((row, i) =>
				row.map((cell, j) => (
					<rect
						key={`${i}-${j}`}
						x={j * cellSize}
						y={i * cellSize}
						width={cellSize}
						height={cellSize}
						fill={`${cell === 1 ? '#f3f3f3' : '#c5cbd3'}`}
					/>
				))
			)}
		</svg>
	)
}

