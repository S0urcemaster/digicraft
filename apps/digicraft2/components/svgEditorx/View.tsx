import * as React from 'react'
import {EditorItem, useEditorContext} from './editorContext'
import {Command, Coord, Element, types} from './model'
import {CSSProperties, ReactNode, useEffect} from 'react'
import {findCommandCoord, getCoordXY, getRelativeCoordXY} from './lib'

function Rect({item}: { item: EditorItem }) {
	const e = item.element
	return (
		<rect x={e.x} y={e.y} width={e.w} height={e.h} stroke={'#' + e.stroke} fill={'#' + e.fill}
				fillOpacity={e.fillOpacity} strokeWidth={e.strokeWidth}/>
	)
}

function Line({item}: { item: EditorItem }) {
	const e = item.element
	return (
		<line x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2} stroke={'#' + e.stroke} strokeWidth={e.strokeWidth}
				fillOpacity={e.fillOpacity}/>
	)
}

function Circle({item}: { item: EditorItem }) {
	const e = item.element
	return (
		<circle cx={e.cx} cy={e.cy} r={e.r} stroke={'#' + e.stroke} strokeWidth={e.strokeWidth} fill={'#' + e.fill}
				  fillOpacity={e.fillOpacity}/>
	)
}

function Ellipse({item}: { item: EditorItem }) {
	const e = item.element
	return (
		<ellipse cx={e.cx} cy={e.cy} rx={e.rx} ry={e.ry} stroke={'#' + e.stroke} strokeWidth={e.strokeWidth}
					fill={'#' + e.fill} fillOpacity={e.fillOpacity}/>
	)
}

function Polyline({item}: { item: EditorItem }) {
	const e = item.element

	function getPoints(): string {
		return item.element.coords!.map(coord => {
			const keys = Object.keys(coord)
			return keys.map(key => coord[key]).join(',')
		}).join(' ')
	}

	return (
		<polyline points={getPoints()} stroke={'#' + e.stroke} strokeWidth={e.strokeWidth} fill={'#' + e.fill}
					 fillOpacity={e.fillOpacity}/>
	)
}

function Polygon({item}: { item: EditorItem }) {
	const e = item.element

	function getPoints(): string {
		return item.element.coords!.map(coord => {
			const keys = Object.keys(coord)
			return keys.map(key => coord[key]).join(',')
		}).join(' ')
	}

	return (
		<polygon points={getPoints()} stroke={'#' + e.stroke} strokeWidth={e.strokeWidth} fill={'#' + e.fill}
					fillOpacity={e.fillOpacity}/>
	)
}

function Path({item}: { item: EditorItem }) {
	const e = item.element

	function makePath(): string {
		const d: string[] = []
		item.element.path!.forEach(command => {
			let toKeys
			let to
			if ('to' in command) {
				toKeys = Object.keys(command.to!)
				to = `${command.to![toKeys[0]]},${command.to![toKeys[1]]}`
			}
			switch (command.type.toLowerCase()) {
				case 'm':
					d.push(`${command.type} ${to}`)
					break
				case 'a':
					const rKeys = Object.keys(command.r!)
					const angleKeys = Object.keys(command.angle!)
					const arcFlagsKeys = Object.keys(command.arcFlags!)
					d.push(`${command.type} ${command.r![rKeys[0]]} ${command.r![rKeys[1]]} ${command.angle![angleKeys[0]]} ${command.arcFlags![arcFlagsKeys[0]]},${command.arcFlags![arcFlagsKeys[1]]} ${to}`)
					break
				case 'c':
					const csKeys = Object.keys(command.cs!)
					const ceKeys = Object.keys(command.ce!)
					d.push(`${command.type} ${command.cs![csKeys[0]]},${command.cs![csKeys[1]]} ${command.ce![ceKeys[0]]},${command.ce![ceKeys[1]]} ${to}`)
					break
				case 'l':
					d.push(`${command.type} ${to}`)
					break
				case 'z':
					d.push(`z`)
			}
		})
		return d.join(' ')
	}

	return (
		<path d={makePath()} stroke={'#' + e.stroke} strokeWidth={e.strokeWidth} fill={'#' + e.fill}
				fillOpacity={e.fillOpacity}/>
	)
}

function RectHighlight({item}: { item: EditorItem }) {
	const e = item.element
	return <rect x={e.x! - 1} y={e.y! - 1} width={e.w! + 2} height={e.h! + 2} stroke={'#666'} strokeLinejoin="round"
					 fill={'none'}
					 className={'svgSelection'}/>
}

function LineHighlight({item}: { item: EditorItem }) {
	const e = item.element
	return <rect x={e.x1! - 1} y={e.y1! - 1} width={e.x2! - e.x1! + 1} height={e.y2! - e.y1! + 1} stroke={'#98d2ff'}
					 strokeLinejoin="round" fill={'none'}
					 className={'svgSelection'}/>
}

function CircleHighlight({item}: { item: EditorItem }) {
	const e = item.element
	return <rect x={e.cx! - e.r! - 1} y={e.cy! - e.r! - 1} width={e.r! * 2 + 2} height={e.r! * 2 + 2} stroke={'#98d2ff'}
					 strokeLinejoin="round" fill={'none'}
					 className={'svgSelection'}/>
}

function EllipseHighlight({item}: { item: EditorItem }) {
	const e = item.element
	return <rect x={e.cx! - e.rx! - 1} y={e.cy! - e.ry! - 1} width={e.rx! * 2 + 2} height={e.ry! * 2 + 2}
					 stroke={'#98d2ff'} strokeLinejoin="round" fill={'none'}
					 className={'svgSelection'}/>
}

function PathHighlight({item, command, currentCoord}: { item: EditorItem, command: Command, currentCoord: string }) {

	function originLine() {
		if (command.type.toLowerCase() === 'c') {
			if (currentCoord === 'cs') {
				const idx = item.element.path!.indexOf(command)
				const m = item.element.path![idx - 1]
				const [tox, toy] = getCoordXY(m.to!)

				const [csx, csy] = getCoordXY(command.cs!)
				return (
					<line x1={tox} y1={toy} x2={csx} y2={csy} stroke={'#b2b2b2'} strokeDasharray={'3 3'}/>
				)
			}
			if (currentCoord === 'ce') {
				const idx = item.element.path!.indexOf(command)
				const m = item.element.path![idx - 1]
				let tox, toy
				if (command.type === 'c') {
					[tox, toy] = getRelativeCoordXY(m.to!, command.to!)
				} else {
					[tox, toy] = getCoordXY(command.to!)
				}
				const [csx, csy] = getCoordXY(command.ce!)
				return (
					<line x1={tox} y1={toy} x2={csx} y2={csy} stroke={'#b2b2b2'} strokeDasharray={'2 2'}/>
				)
			}
		}
	}

	function pointHL() {
		const coord = command[currentCoord] as Coord
		const [x, y] = getCoordXY(coord)
		return (
			<>
				<rect x={x - 2} y={y - 2} width={5} height={5}/>
				{originLine()}
			</>
		)
	}

	return (
		<>
			{pointHL()}
		</>
	)
}

function TreeNode(props: { parent: EditorItem }) {

	const isGroup = props.parent.children
	const hasChildren = props.parent.children && props.parent.children.length > 0

	const {state} = useEditorContext()

	function Group({item, children}: { item: EditorItem, children: ReactNode }) {
		const e = item.element
		// useEffect(() => {
		//
		// })
		function transformString() {
			return `rotate(${e.rotateAngle} ${e.rotateX} ${e.rotateY}) scale(${e.scaleX} ${e.scaleY}) translate(${e.translateX} ${e.translateY})`
		}

		return (
			<g transform={transformString()}>
				{children}
			</g>
		)
	}

	function Element(props: { item: EditorItem, highlight?: boolean }) {
		switch (props.item.element.type) {
			case types.rect:
				return (
					<>
						<Rect item={props.item}/>
						{props.highlight ? <RectHighlight item={props.item}/> : null}
					</>
				)
			case types.line:
				return (
					<>
						<Line item={props.item}/>
						{props.highlight ? <LineHighlight item={props.item}/> : null}
					</>
				)
			case types.circle:
				return (
					<>
						<Circle item={props.item}/>
						{props.highlight ? <CircleHighlight item={props.item}/> : null}
					</>
				)
			case types.ellipse:
				return (
					<>
						<Ellipse item={props.item}/>
						{props.highlight ? <EllipseHighlight item={props.item}/> : null}
					</>
				)
			case types.polyline:
				return (
					<>
						<Polyline item={props.item}/>
						{/*{props.highlight ? <EllipseHighlight item={props.item}/> : null}*/}
					</>
				)
			case types.polygon:
				return (
					<>
						<Polygon item={props.item}/>
						{/*{props.highlight ? <EllipseHighlight item={props.item}/> : null}*/}
					</>
				)
			case types.path:
				const [command, coord] = findCommandCoord(props.item.element.path!, state.currentInput!)

				return (
					<>
						<Path item={props.item}/>
						{props.highlight && command ?
							<PathHighlight item={props.item} command={command} currentCoord={coord}/> : null}
					</>
				)
		}
		return null
	}

	return (
		<>
			{isGroup ?
				<Group item={props.parent}>
					{hasChildren &&
						props.parent.children!.map((child, idx) => (
							<TreeNode parent={child} key={idx}/>
						))
					}
				</Group> :
				<Element item={props.parent} highlight={props.parent === state.currentItem}/>
			}
		</>

	)
}

function GridVNumber({number, x, y}: {number: number, x: number, y: number}) {
	return (
		<text x={x} y={y -1} fill={'#d7d7d7'} stroke={'#000'} strokeWidth={0} style={{fontFamily: '"JetBrains Mono", monospace', fontSize: 12}}>
			{number}
		</text>
	)
}

function GridHNumber({number, x, y}: {number: number, x: number, y: number}) {
	return (
		<text x={x +2} y={y -2} fill={'#d7d7d7'} stroke={'#000'} strokeWidth={0} style={{fontFamily: '"JetBrains Mono", monospace', fontSize: 12}}>
			{number}
		</text>
	)
}

export function SVG({root, style, viewBox}: {root: EditorItem, style?: CSSProperties, viewBox?: string}) {
	return (
		<svg id={root!.element.id} style={{...style}}
			  viewBox={viewBox}>
			{root && root!.children?.map((item, idx) => (
				<TreeNode parent={item} key={idx}/>
			))}
		</svg>
	)
}

export default function View() {

	const {state} = useEditorContext()

	useEffect(() => {
	}, [state.currentItem])

	return (
		<div style={{width: '100%', height: 644, position: 'relative'}}>
			<div style={{
				margin: '5px 0px 5px 0',
				background: 'white',
				position: 'absolute',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				overflow: 'hidden',
			}}>
				{state.root ? <>
					<svg style={{height: 701, width: '100%', position: 'relative', top: 0, left: 0}}
						  transform={'translate(0, 0)'}>
						<defs>
							<pattern id="grid25-h" width="10" height="25" patternUnits="userSpaceOnUse">
								<line x1="0" y1="0" x2="10" y2="0" stroke="#ddd"/>
							</pattern>
							<pattern id="grid25-v" width="25" height="10" patternUnits="userSpaceOnUse">
								<line x1="0" y1="0" x2="0" y2="10" stroke="#ddd"/>
							</pattern>
							<pattern id="grid100-h" width="10" height="100" patternUnits="userSpaceOnUse">
								<line x1="0" y1="0" x2="10" y2="0" stroke="#ccc"/>
							</pattern>
							<pattern id="grid100-v" width="100" height="10" patternUnits="userSpaceOnUse">
								<line x1="0" y1="0" x2="0" y2="10" stroke="#ccc"/>
							</pattern>
							t
						</defs>
						<rect width={'701px'} height={'701px'} fill={'url(#grid25-h)'}/>
						<rect width={'701px'} height={'701px'} fill={'url(#grid25-v)'}/>
						<rect width={'701px'} height={'701px'} fill={'url(#grid100-h)'}/>
						<rect width={'701px'} height={'701px'} fill={'url(#grid100-v)'}/>
						{/*<rect x={100} y={100} width={1} height={1} stroke={'#000'} />*/}
						<line x1={0} y1={100} x2={701} y2={100} stroke={'#ccc'}/>
						<line x1={100} y1={0} x2={100} y2={701} stroke={'#ccc'}/>
						{/*<text x={62} y={82} fill={'#d7d7d7'} stroke={'#000'} strokeWidth={0}*/}
						{/*		style={{fontFamily: '"JetBrains Mono", monospace', fontSize: 23}}>Coder's SVG Editor*/}
						{/*</text>*/}
						<circle cx={100} cy={100} r={5} fillOpacity={0} strokeWidth={1} stroke={'#d7d7d7'} />
						<GridVNumber number={100} x={70} y={200} />
						<GridVNumber number={200} x={70} y={300} />
						<GridVNumber number={300} x={70} y={400} />
						<GridVNumber number={400} x={70} y={500} />
						<GridVNumber number={500} x={70} y={600} />
						<GridHNumber number={100} x={200} y={100} />
						<GridHNumber number={200} x={300} y={100} />
						<GridHNumber number={300} x={400} y={100} />
						<GridHNumber number={400} x={500} y={100} />
						<GridHNumber number={500} x={600} y={100} />
					</svg>
					<SVG root={state.root!} style={{height: '601px', width: '601px', position: 'absolute', top: 0, left: 0, }} viewBox={'-100 -100 601 601'} />
				</> : null}
			</div>
		</div>
	)
}