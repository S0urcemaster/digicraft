import * as React from 'react'
import {useEffect, useState} from 'react'
import {Move, useGameState} from './gameContext'
import {convertTo2DArray} from './lib'

function TextMoveLine({moveList, location, completed}: {moveList: Move[][], location: number, completed: boolean}) {
	return (
		<>
			{moveList.map((m, idx) => (
				<div key={idx} style={{display: 'grid', gridTemplateColumns: '1fr 3fr 3fr'}}>
					<div>{idx + 1}.</div>
					<div>{idx === location! / 2 ? <b>{m[0].move}</b> : m[0].move}</div>
					{idx === location! / 2 - .5 ?
						<div>{completed ? '' : <b>?</b>}</div> :
						<div>{idx === location! / 2 - .5 ? <b>{m[1].move}</b> : m[1].move}</div>
					}
				</div>
			))}
			{location! % 2 === 0 && // white questionmark
				<>
					<div style={{display: 'grid', gridTemplateColumns: '1fr 3fr 3fr'}}>
						<div>{location /2 -location %2 + 1}.</div>
						<div>{completed ? moveList[location/2 -1][0].move : <b>?</b>}</div>
						<div></div>
					</div>
				</>
			}
		</>
	)
}

function MouseMoveLine({moveList, location}: {moveList: Move[][], location: number}) {
	return (
		<>
			{moveList.map((m, idx) => (
				<div key={idx} style={{display: 'grid', gridTemplateColumns: '1fr 3fr 3fr'}}>
					<div>{idx + 1}.</div>
					<div>{idx === location! / 2 ? <b>{m[0].move}</b> : m[0].move}</div>
					<div>{idx === location! / 2 - .5 ? <b>{m[1].move}</b> : m[1].move}</div>
				</div>
			))}
		</>
	)
}

function InitialMoveLine() {
	return (
		<>
			<div style={{display: 'grid', gridTemplateColumns: '1fr 3fr 3fr'}}>
				<div>1.</div>
				<div>?</div>
				<div></div>
			</div>
		</>
	)
}

export default function Line() {

	const {location, moves, textMoveOn, scriptCompleted} = useGameState()

	const [moveList, setMoveList] = useState<Move[][]|undefined>()

	const [top, setTop] = useState(-0)

	useEffect(() => {
		if (moves) {
			if (!textMoveOn) { // remove move square highlighting
				setMoveList(convertTo2DArray(moves))
			}
			setTop(0)
		}
	}, [moves])

	useEffect(() => {
		if (moves) {
			if(textMoveOn) {
				setMoveList(convertTo2DArray(moves.slice(0, location)))
			} else {
				setMoveList(convertTo2DArray(moves))
			}
		}
	}, [location, textMoveOn])

	useEffect(() => {
		if(location && location %2 === 0 && !scriptCompleted) {
			setTop(-(Math.floor(location /2)) *19 +19)
		}
	}, [location])

	return (
		<div style={{height: 191, overflow: 'hidden'}}>
			<div style={{position: 'relative', top: top}}>
				{moveList ?
					textMoveOn ? <TextMoveLine moveList={moveList} location={location!} completed={scriptCompleted} /> :
						<MouseMoveLine moveList={moveList} location={location!} />
					:
					scriptCompleted ? '' :
						<InitialMoveLine />
				}
			</div>
		</div>
	)
}