export default function TopButton(props: {left?: boolean, right?: boolean}) {

	const [offset, setOffset] = useState(0);
	const [display, setDisplay] = useState('none')

	const style:React.CSSProperties = {
		display: display,
		position: 'fixed',
		bottom: '20px',
		fontWeight: 'bold',
		// border: '1px solid black',
		// outline: '2px solid gray',
		// background: 'gray',
		// color: 'white',
		cursor: 'pointer',
		padding: '10px',
		// borderRadius: '10px',
		fontSize: '14px',
	}

	useEffect(() => {
		const onScroll = () => setOffset(window.scrollY);
		// clean up code
		window.removeEventListener('scroll', onScroll);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		setDisplay(offset > 20 ? 'block' : 'none')
	}, [offset])

	function top(event:React.MouseEvent<HTMLElement>) {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth'
		})
	}

	return (
		<>
			{props.left && <button onClick={top} style={{...style, left: 30}} title={'Goto top'}>Top</button>}
			{props.right && <button onClick={top} style={{...style, right: 30}} title={'Goto top'}>Top</button>}
		</>
)
}


import React, {useEffect, useState} from 'react'
