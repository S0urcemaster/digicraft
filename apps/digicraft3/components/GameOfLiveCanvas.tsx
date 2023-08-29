import React, { useState, useEffect, useRef, MutableRefObject } from 'react'

type Props = {
	bgColor: string
	lifeColor: string
	width: number
	height: number
	cellSize: number
	cycleState: number
	startAmount?: number
	loaded: boolean
}

export function GameOfLife({bgColor, lifeColor, width, height, cellSize, cycleState, loaded}: Props) {

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
			grid.push(Array.from(Array(numCols), () => (Math.random() > 0.55 ? 1 : 0)))
		}
		return grid
	}

	const canvasRef = useRef<HTMLCanvasElement | null>(null)
	const state = useRef('running')
	let restart = true
	let grid = generateRandomGrid()
	let prevGrid = grid
	// const [opacity, setOpacity] = useState(1)
	const opacity = useRef(1)
	const [visible, setVisible] = useState(true)

	useEffect(() => {
	}, [])

	useEffect(() => {
		loaded && setVisible(false)
	}, [loaded])

	useEffect(() => {
		if(state.current === 'running') {
			state.current = 'paused'
		} else {
			state.current = 'running'
			restart = true
		}
	}, [cycleState])

	useEffect(() => {
		if (!canvasRef.current) return

		const canvas = canvasRef.current
		const context = canvas.getContext('2d')

		if (!context) return

		let currentFrame: number

		const updateGrid = () => {
			return
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
						if (Math.random() > 0.6)
							newGrid[i][j] = liveNeighbors === 2 || liveNeighbors === 3 ? 1 : 0
					} else {
						newGrid[i][j] = liveNeighbors === 3 ? 1 : 0
					}
				}
			}

			grid = newGrid
		}

		const drawGrid = (timestamp: DOMHighResTimeStamp, state: MutableRefObject<string>) => {

			if(state.current === 'paused') {
				cancelAnimationFrame(currentFrame)
				return
			}
			if (restart) {
				grid = generateRandomGrid()
				restart = false
			}

			context.clearRect(0, 0, canvas.width, canvas.height)

			for (let i = 0; i < numRows; i++) {
				for (let j = 0; j < numCols; j++) {
					// context.fillStyle = grid[i][j] === 1 ? lifeColor : bgColor
					// context.fillStyle = grid[i][j] === 1 ? '#dee3ea' : '#f1f1f1'
					// context.fillStyle = grid[i][j] === 1 ? '#c2c5c9' : '#a1abb6'
					context.fillStyle = grid[i][j] === 1 ? '#bec4cc' : '#c5cbd3'
					context.fillRect(j * cellSize, i * cellSize, cellSize, cellSize)
				}
			}
			grid = generateRandomGrid()

			// updateGrid()

			if(visible) {
				console.log("logsntr", "visible")
				currentFrame = requestAnimationFrame((timestamp) => drawGrid(timestamp, state))
			} else {
				console.log("logsntr", "cancel")
				cancelAnimationFrame(currentFrame)
			}

			// if(opacity.current > 0.7) {
			// 	opacity.current = opacity.current - 0.001
			// 	// console.log("logsntr", "opacity", opacity)
			// 	currentFrame = requestAnimationFrame((timestamp) => drawGrid(timestamp, state))
			// } else {
			// 	// console.log("logsntr", "done")
			// 	opacity.current = 0
			// 	setVisible(false)
			// }
		}

		currentFrame = requestAnimationFrame((timestamp) => drawGrid(timestamp, state))

		return () => {
			cancelAnimationFrame(currentFrame)
		}
	}, [cycleState])

	return <canvas ref={canvasRef} width={width} height={height} style={{
		opacity: opacity.current,
		display: visible ? 'block' : 'none',
		position: 'absolute',
		left: -10,
		top: 0,
		overflow: 'hidden',
		zIndex: 0}} />
}

