import React, { useState, useEffect, useRef } from 'react'

type Props = {
	bgColor: string
	lifeColor: string
	width: number
	height: number
	cellSize: number
}

export function GameOfLife({bgColor, lifeColor, width, height, cellSize}: Props) {

	const numRows = Math.ceil(height /cellSize)
	const numCols = Math.ceil(width /cellSize)

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
			grid.push(Array.from(Array(numCols), () => (Math.random() > 0.95 ? 1 : 0)))
		}
		return grid
	}

	const canvasRef = useRef<HTMLCanvasElement | null>(null)
	const state = useRef('running')

	let grid = generateRandomGrid()
	let prevGrid = grid

	useEffect(() => {
		if (!canvasRef.current) return

		const canvas = canvasRef.current
		const context = canvas.getContext('2d')

		let currentFrame: number

		if (!context) return

		const updateGrid = () => {
			if (state.current === 'paused') {
				grid = generateRandomGrid()
				return
			} else if (state.current === 'restart') {
				state.current = 'running'
				grid = generateRandomGrid()
				currentFrame = requestAnimationFrame(drawGrid)
			}

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
						if (Math.random() > 0.5)
							newGrid[i][j] = liveNeighbors === 2 || liveNeighbors === 3 ? 1 : 0
					} else {
						newGrid[i][j] = liveNeighbors === 3 ? 1 : 0
					}
				}
			}

			grid = newGrid
		}

		const drawGrid = (timestamp: DOMHighResTimeStamp) => {

			context.clearRect(0, 0, canvas.width, canvas.height)

			for (let i = 0; i < numRows; i++) {
				for (let j = 0; j < numCols; j++) {
					// context.fillStyle = grid[i][j] === 1 ? lifeColor : bgColor
					// context.fillStyle = grid[i][j] === 1 ? '#dee3ea' : '#f1f1f1'
					context.fillStyle = grid[i][j] === 1 ? '#c2c5c9' : '#a1abb6'
					context.fillRect(j * cellSize, i * cellSize, cellSize, cellSize)
				}
			}

			updateGrid()
			currentFrame = requestAnimationFrame(drawGrid)
		}

		currentFrame = requestAnimationFrame(drawGrid)

		return () => {
			cancelAnimationFrame(currentFrame)
		}
	}, [])

	function toggle() {
		console.log('logsntr', 'toggle')
		switch (state.current) {
			case 'running':
				state.current = 'paused'
				break
			case 'paused':
				state.current = 'restart'
				break
		}
	}

	return <canvas ref={canvasRef} width={width} height={height} onClick={toggle}/>
}

