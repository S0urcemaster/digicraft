import React, { useState, useEffect, useRef } from 'react'

const numRows = 220
const numCols = 360
const cellSize = 5

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

let grid = generateRandomGrid()
let prevGrid = grid

export function GameOfLife() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null)

	const state = useRef('running')

	let interval: NodeJS.Timer

	useEffect(() => {
		if (!canvasRef.current) return

		const canvas = canvasRef.current
		const context = canvas.getContext('2d')

		if (!context) return

		const updateGrid = () => {
			if(state.current === 'paused') {
				grid = generateRandomGrid()
				clearInterval(interval)
				return
			}
			else if(state.current === 'restart') {
				state.current = 'running'
				grid = generateRandomGrid()
				interval = setInterval(drawGrid, 100)
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
						if(Math.random() > 0.5)
						newGrid[i][j] = liveNeighbors === 2 || liveNeighbors === 3 ? 1 : 0
					} else {
						newGrid[i][j] = liveNeighbors === 3 ? 1 : 0
					}
				}
			}

			grid = newGrid
		}

		const drawGrid = () => {
			context.clearRect(0, 0, canvas.width, canvas.height)

			for (let i = 0; i < numRows; i++) {
				for (let j = 0; j < numCols; j++) {
					context.fillStyle = grid[i][j] === 1 ? '#454a51' : '#1a2f44'
					// context.fillStyle = grid[i][j] === 1 ? '#454a51' : '#c5cbd3'
					context.fillRect(j * cellSize, i * cellSize, cellSize, cellSize)
				}
			}

			updateGrid() // Rasterzustände aktualisieren
		}

		interval = setInterval(drawGrid, 100)

		return () => {
			clearInterval(interval)
		}
	}, [])

	function toggle() {
		console.log("logsntr", "toggle")
		switch(state.current) {
			case 'running':
				state.current = 'paused'
				break
			case 'paused':
				state.current = 'restart'
				break
		}
	}

	return <canvas ref={canvasRef} width={numCols * cellSize} height={numRows * cellSize} onClick={toggle}/>
}

