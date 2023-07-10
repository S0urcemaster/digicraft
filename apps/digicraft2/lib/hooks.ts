import {useState, useEffect} from 'react'

export function useWatcher(name: string, variable: any) {
	useEffect(() => {
		console.log(name, ':', variable)
	}, [variable])
}

export function useWindowDimensions(window:any) {

	function getWindowDimensions() {
		const { innerWidth: width, innerHeight: height } = window;
		return {
			width,
			height
		};
	}

	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowDimensions;
}