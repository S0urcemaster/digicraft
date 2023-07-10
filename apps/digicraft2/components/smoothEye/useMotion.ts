import {useState, useRef, useEffect} from 'react'

interface Position {
	x: number
	y: number
}

interface Velocity {
	x: number
	y: number
}

interface Motion {
	position: Position
	start: () => void
	stop: () => void
	update: Function
}

function generateValues(input: number) {
	const x = input / 10;
	const y = 1 - x;
	const value1 = (x * 0.9) + 0.1;
	const value2 = (y * 0.9) + 0.1;
	return [value1, value2];
}

function useMotion(props:{speed: number, radius: number, clientWidth: number, clientHeight: number, direction: number}): Motion {
	const isRunning = useRef(false)
	const [radius, setRadius] = useState(props.radius)
	const [positionX, setPositionX] = useState(props.radius)
	const [positionY, setPositionY] = useState(props.radius)
	const velocityX = useRef(generateValues(props.direction)[0])
	const velocityY = useRef(generateValues(props.direction)[1])
	const lastTime = useRef<number>(0)
	const elapsedSinceChange = useRef<number>(0)
	const floatPos = useRef({x: props.radius, y: props.radius})
	const speed = useRef(props.speed)

	useEffect(() => {
	}, [positionX, positionY])

	useEffect(() => {
	}, [velocityX, velocityY])

	const start = (): void => {
		if (!isRunning.current) {
			requestAnimationFrame(animate)
		}
		isRunning.current = true
	}

	const stop = (): void => {
		isRunning.current = false
		elapsedSinceChange.current = 0
		lastTime.current = 0
	}

	function update(radius: number, direction: number, spd: number) {
		stop()
		if(radius >floatPos.current.x) {
			floatPos.current.x = radius
			setPositionX(radius)
		}
		if(radius >floatPos.current.y) {
			floatPos.current.y = radius
			setPositionY(radius)
		}
		velocityX.current = generateValues(direction)[0]
		velocityY.current = generateValues(direction)[1]
		speed.current = spd
		setRadius(radius)
	}

	function animate(): void {
		if (!isRunning.current) {
			return
		}
		const currentTime = performance.now()
		let elapsed = currentTime - lastTime.current

		if(lastTime.current === 0) {
			elapsed = 0
		}

		elapsedSinceChange.current = elapsedSinceChange.current + elapsed / 1000
		lastTime.current = currentTime

		const advanceX = elapsedSinceChange.current * velocityX.current * speed.current
		const advanceY = elapsedSinceChange.current * velocityY.current * speed.current

		floatPos.current.x = floatPos.current.x + advanceX
		floatPos.current.y = floatPos.current.y + advanceY

		if (floatPos.current.x < radius || floatPos.current.x > props.clientWidth -radius) {
			velocityX.current = -velocityX.current
		}

		if (floatPos.current.y < radius || floatPos.current.y > props.clientHeight -radius) {
			velocityY.current = -velocityY.current
		}

		setPositionX((floatPos.current.x))
		setPositionY((floatPos.current.y))
		elapsedSinceChange.current = 0

		requestAnimationFrame(animate)
	}

	return {position: {x: positionX, y: positionY} as Position, start, stop, update}
}

export default useMotion
