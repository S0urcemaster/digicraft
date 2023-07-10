import {useEffect, useRef, useState} from 'react'

export function useTimer() {

	const [elapsed, setElapsed] = useState<number|undefined>(undefined)
	const [stopped, setStopped] = useState<boolean>(true)
	const [accelerate, setAccelerate] = useState(false)

	const interval = useRef(200)

	const accel = useRef(false)
	const time = useRef(1)

	const accelLine = [200, 150, 120, 90, 70, 60, 55, 60, 70, 90, 120, 150, 200]
	const accelPointer = useRef(0)
	const center = 7

	useEffect(() => {
		setElapsed(0)
		interval.current = 200
		time.current = 1
		accelPointer.current = 0
	}, [stopped])

	useEffect(() => {
		accel.current = accelerate
		if(accelerate) {
			setStopped(false)
		}
		if(stopped) {
			window.setTimeout(timerFunc, accelLine[accelPointer.current])
		}
	}, [accelerate])

	function getVelocityAtTime(t: number): number {
		const g = 500; // Gravitationsbeschleunigung in m/s^2
		return g * (1/t);
	}

	function nextInterval() {
		if(accel.current) {
			interval.current = getVelocityAtTime(time.current)
			time.current++
		} else {
			interval.current = getVelocityAtTime(time.current)
			time.current--
		}
		if(time.current === 21) {
			time.current = 20
		} else if(time.current === -1) {
			time.current = 0
		}
	}

	function timerFunc() {
		if(!accel.current && time.current === 0) {
			setStopped(true)
			return
		} else {
			setElapsed(prev => prev! +1)
		}
		nextInterval()
		window.setTimeout(timerFunc, interval.current)
	}

	return {elapsed, accelerate, setAccelerate, stopped}

}