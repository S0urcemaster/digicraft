import React, { useState, useEffect, useRef, MutableRefObject } from 'react'
import { clog } from '@digicraft/digi-lib'

type Props = {
	bgColor: string
	lifeColor: string
	width: number
	height: number
	cellSize: number
	startAmount?: number
	loaded: boolean
}

export function Noise({bgColor, lifeColor, width, height, cellSize, loaded}: Props) {

	const numRows = Math.ceil(height / cellSize)
	const numCols = Math.ceil(width / cellSize)

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

	let grid = generateRandomGrid()

	const opacity = useRef(1)

	const running = useRef(false)

	const [visible, setVisible] = useState(true)

	let currentFrame: number

	let context: CanvasRenderingContext2D

	useEffect(() => {
	}, [])

	useEffect(() => {
		if(loaded) {
			running.current = false
			setVisible(false)
		} else {
			setVisible(true)
			running.current = true

			context = canvasRef.current!.getContext('2d')!
			if (!context) return
			currentFrame = requestAnimationFrame((timestamp) => drawGrid(timestamp))
		}
	}, [loaded])


	const drawGrid = (timestamp: DOMHighResTimeStamp) => {
		if (!running.current) return
		if(!context) return

		context.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height)

		for (let i = 0; i < numRows; i++) {
			for (let j = 0; j < numCols; j++) {
				// context.fillStyle = grid[i][j] === 1 ? lifeColor : bgColor
				// context.fillStyle = grid[i][j] === 1 ? '#dee3ea' : '#f1f1f1'
				// context.fillStyle = grid[i][j] === 1 ? '#c2c5c9' : '#a1abb6'
				context.fillStyle = Math.random() > 0.55 ? '#bec4cc' : '#c5cbd3'
				context.fillRect(j * cellSize, i * cellSize, cellSize, cellSize)
			}
		}

		currentFrame = requestAnimationFrame((timestamp) => drawGrid(timestamp))
	}

	useEffect(() => {
		if (!canvasRef.current) return

		context = canvasRef.current.getContext('2d')!

		if (!context) return

		currentFrame = requestAnimationFrame((timestamp) => drawGrid(timestamp))

		return () => {
			cancelAnimationFrame(currentFrame)
		}
	}, [])

	return <canvas ref={canvasRef} width={width} height={height} style={{
		opacity: opacity.current,
		display: visible ? 'block' : 'none',
		position: 'absolute',
		left: -10,
		top: 0,
		overflow: 'hidden',
		zIndex: 10
	}}/>
}

