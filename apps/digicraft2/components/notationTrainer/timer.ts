import {useEffect, useRef, useState} from 'react'

export function useTimer() {

	const interval = 100

	const [elapsed, setElapsed] = useState<number|undefined>(undefined)
	const timerRunning = useRef(false)
	const timerId = useRef(0)

	const intStart = useRef(0)
	const intEnd = useRef(0)
	const intDiff = useRef(interval)

	useEffect(() => {
	}, [elapsed])

	function timerFunc() {
		intEnd.current = Date.now()
		const elapsed = intEnd.current -intStart.current
		intStart.current = Date.now()
		if(timerRunning.current) setElapsed(prev => prev! +elapsed)

		intDiff.current = interval -elapsed
		timerId.current = window.setTimeout(timerFunc, elapsed +intDiff.current)
	}

	function start() {
		timerRunning.current = true
		intStart.current = Date.now()
		setElapsed(0)
		timerId.current = window.setTimeout(timerFunc, interval)
	}

	function stop() {
		timerRunning.current = false
	}

	function reset() {
		stop()
		setElapsed(undefined)
	}

	return {elapsed: elapsed, start, stop, reset}

}