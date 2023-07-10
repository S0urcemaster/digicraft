import * as React from 'react'
import {brightnessToColor} from '../lib'

function GridVNumber({number, x, y, brightness}: {number: number, x: number, y: number, brightness: number}) {
	return (
		<text x={x} y={y -1} fill={brightnessToColor(brightness)} stroke={'#000'} strokeWidth={0}
				style={{fontFamily: '"JetBrains Mono", monospace', fontSize: 11}}>
			{number}
		</text>
	)
}

function GridHNumber({number, x, y, brightness}: {number: number, x: number, y: number, brightness: number}) {
	return (
		<text x={x +2} y={y -2} fill={brightnessToColor(brightness)} stroke={'#000'} strokeWidth={0} style={{fontFamily: '"JetBrains Mono", monospace', fontSize: 12}}>
			{number}
		</text>
	)
}

function GridVNumbers({x, y, brightness}: {x: number, y: number, brightness: number}) {
	return (
		<>
			<GridVNumber number={-100} x={x -7} y={y} brightness={brightness} />
			<GridVNumber number={100} x={x} y={y +200} brightness={brightness} />
			<GridVNumber number={200} x={x} y={y+ 300} brightness={brightness} />
			<GridVNumber number={300} x={x} y={y+ 400} brightness={brightness} />
			<GridVNumber number={400} x={x} y={y+ 500} brightness={brightness} />
			<GridVNumber number={500} x={x} y={y+ 600} brightness={brightness} />
		</>
	)
}

function GridHNumbers({x, y, brightness}: {x: number, y: number, brightness: number}) {
	return (
		<>
			<GridHNumber number={-100} x={x -8} y={y} brightness={brightness} />
			<GridHNumber number={100} x={x+ 200} y={y} brightness={brightness} />
			<GridHNumber number={200} x={x+ 300} y={y} brightness={brightness} />
			<GridHNumber number={300} x={x+ 400} y={y} brightness={brightness} />
			<GridHNumber number={400} x={x+ 500} y={y} brightness={brightness} />
			<GridHNumber number={500} x={x+ 600} y={y} brightness={brightness} />
		</>
	)
}

export default function Grid({brightness}: {brightness: number}) {
	return (
		<svg style={{height: 701}}
			  transform={'translate(0, 0)'} viewBox={'-150 -150 701 701'}>
			  {/*transform={'translate(0, 0)'} viewBox={'-150 -150 701 701'}>*/}
			<defs>
				<pattern id="grid25-h" width="10" height="25" patternUnits="userSpaceOnUse">
					<line x1="0" y1="0" x2="10" y2="0" stroke={brightnessToColor(brightness -120)}/>
				</pattern>
				<pattern id="grid25-v" width="25" height="10" patternUnits="userSpaceOnUse">
					<line x1="0" y1="0" x2="0" y2="10" stroke={brightnessToColor(brightness -120)}/>
				</pattern>
				<pattern id="grid100-h" width="10" height="100" patternUnits="userSpaceOnUse">
					<line x1="0" y1="0" x2="10" y2="0" stroke={brightnessToColor(brightness -110)} />
				</pattern>
				<pattern id="grid100-v" width="100" height="10" patternUnits="userSpaceOnUse">
					<line x1="0" y1="0" x2="0" y2="10" stroke={brightnessToColor(brightness -110)} />
				</pattern>
			</defs>
			<rect x={0} y={0} width={400} height={400} fill={'#363b3f'} />
			<rect x={-150} y={-150} width={'701px'} height={'701px'} fill={'url(#grid25-h)'}/>
			<rect x={-150} y={-150} width={'701px'} height={'701px'} fill={'url(#grid25-v)'}/>
			<rect x={-150} y={-150} width={'701px'} height={'701px'} fill={'url(#grid100-h)'}/>
			<rect x={-150} y={-150} width={'701px'} height={'701px'} fill={'url(#grid100-v)'}/>
			{/*<rect x={100} y={100} width={1} height={1} stroke={'#000'} />*/}
			<line x1={-150} y1={0} x2={601} y2={0} stroke={brightnessToColor(brightness -100)}/>
			<line x1={0} y1={-150} x2={0} y2={601} stroke={brightnessToColor(brightness -100)}/>
			<line x1={-150} y1={200} x2={601} y2={200} stroke={'#0051ff'} strokeWidth={3} opacity={0.2} />
			<line x1={200} y1={-150} x2={200} y2={601} stroke={'#0051FF'} strokeWidth={3} opacity={0.2} />
			{/*<text x={62} y={82} fill={'#d7d7d7'} stroke={'#000'} strokeWidth={0}*/}
			{/*		style={{fontFamily: '"JetBrains Mono", monospace', fontSize: 23}}>Coder's SVG Editor*/}
			{/*</text>*/}
			{/*<circle cx={100} cy={100} r={5} fillOpacity={0} strokeWidth={1} stroke={brightnessToColor(brightness -10)} />*/}
			<GridVNumbers x={-23} y={-101} brightness={brightness -100} />
			<GridHNumbers x={-125} y={-1} brightness={brightness -100} />

			
		</svg>
	)
}