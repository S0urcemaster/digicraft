import {ReactNode, useEffect, useRef, useState} from 'react'
import {EditorItem, useEditorContext} from '../editorContext'
import {NumberInput, TextInput} from './input'
import * as React from 'react'
import {colors, focuses} from '../constants'
import {Command, Coord} from '../model'

export function Label(props: { children: ReactNode }) {
	return (
		<div style={{}}>{props.children}</div>
	)
}

export function Form({item}: { item: EditorItem }) {

	const {state, inputFocused, unfocus, setValue} = useEditorContext()

	const [element, setElement] = useState(item.element)

	const integerInput = useRef<HTMLInputElement>(null)
	const stringInput = useRef<HTMLInputElement>(null)
	const colorInput = useRef<HTMLInputElement>(null)

	useEffect(() => {
	}, [state])

	useEffect(() => {
		setElement(item.element)
	}, [item])

	useEffect(() => {
		if (inputFocused) {
			switch (state.currentItem!.element.type) {
				case 'id':
					return stringInput.current!.focus()
				case 'stroke':
				case 'fill':
					return colorInput.current!.focus()
				case 'path':
					if (state.currentInput === 'z') break
				default:
					return integerInput.current!.focus()
			}
		} else if (state.currentInput) {
			// down()
		}
	}, [inputFocused])

	function changed(value: number | string) {
		integerInput.current!.blur()
		unfocus()
		setValue(value)
	}

	function Single({p1, current, children}: { p1: string, current: string, children: ReactNode }) {
		return (
			<div style={{
				outline: state.focus === focuses.form && p1 === current ? '1px solid gray' : 'none',
				padding: '0 2px 0 2px',
				margin: '0 1px 0 1px',
				display: 'grid', gridTemplateColumns: 'auto 90px',
				alignItems: 'center',
			}}>
				{children}
			</div>
		)
	}

	function Pair({p1, p2, current, children}: { p1: string, p2: string, current: string, children: ReactNode }) {
		return (
			<div style={{
				outline: p1 === current || p2 === current ? '1px solid gray' : 'none',
				padding: '0 2px 0 2px',
				margin: '0 1px 0 1px',
				display: 'grid', gridTemplateColumns: 'auto 90px',
				alignItems: 'center',
			}}>
				{children}
			</div>
		)
	}

	function PathPair({p1, p2, current, children}: { p1: string, p2: string, current: string, children: ReactNode }) {
		return (
			<div style={{
				outline: p1 === current || p2 === current ? '1px solid gray' : 'none',
				padding: '0 2px 0 2px',
				margin: '0 1px 0px 1px',
				display: 'grid', gridTemplateColumns: 'auto 90px',
				alignItems: 'center', boxSizing: 'border-box',
			}}>
				{children}
			</div>
		)
	}

	function PathSingle({p1, current, children}: { p1: string, current: string, children: ReactNode }) {
		return (
			<div style={{
				outline: p1 === current ? '1px solid gray' : 'none',
				padding: '0 2px 0 2px',
				margin: '0 1px 0px 1px',
				display: 'grid', gridTemplateColumns: 'auto 90px',
				alignItems: 'center', boxSizing: 'border-box',
			}}>
				{children}
			</div>
		)
	}

	function CommandPair({command, children}: { command: string, children: ReactNode }) {
		return (
			<div style={{display: 'grid', gridTemplateColumns: '30px auto', alignContent: 'center'}}>
				<div style={{
					display: 'flex',
					alignItems: 'center',
					padding: '0 0 0 3px',
					margin: 0,
					height: '100%',
					width: '100%',
				}}>{command}</div>
				<div>
					{children}
				</div>
			</div>
		)
	}

	function Command({command, children}: { command: Command, children: ReactNode }) {
		return (
			<div style={{display: 'grid', gridTemplateColumns: '20px auto', alignContent: 'center'}}>
				<div style={{
					display: 'flex',
					alignItems: 'center',
					paddingLeft: 5,
					background: '#dee9ff',
					height: '100%',
				}}>{command.type}</div>
				<div>{children}</div>
			</div>
		)
	}

	function getCoordFormItem(key: string, name: string, coord: Coord) {
		return (
			<>
				<div>{name}</div>
				{key === state.currentInput ?
					<NumberInput value={coord[key]} change={(value) => element[key] = Number(value)}
									 highlight={state.currentInput === key} ref={integerInput}
									 changed={(value) => changed(value)}
									 step={1} min={0} max={2000}
					/> :
					<div style={{
						textAlign: 'right', height: 20, padding: '0 2px 0 0', margin: '0 0 0 2px',
						background: colors.inputBg,
					}}>
						<span style={{verticalAlign: 'middle', paddingTop: 2}}>{coord[key]}</span>
					</div>
				}
			</>
		)
	}

	function getPathFormItem(key: string, name: string, coord: Coord) {
		return (
			<>
				<div>{name}</div>
				{key === state.currentInput ?
					<NumberInput value={coord[key]} change={(value) => coord[key] = Number(value)}
									 highlight={state.currentInput === key} ref={integerInput}
									 changed={(value) => changed(value)}
									 step={1} min={0} max={2000}
					/> :
					<div style={{
						textAlign: 'right', height: 20, padding: '0 2px 0 0', margin: '0 0 0 2px',
						background: colors.inputBg,
					}}>
						<span style={{verticalAlign: 'middle', paddingTop: 2}}>{coord[key]}</span>
					</div>
				}
			</>
		)
	}

	function getPathFormZItem() {
		return (
			<>
				<div></div>
				<div style={{
					textAlign: 'right', height: 20, padding: '0 2px 0 0', margin: '0 0 0 2px',
					background: colors.inputBg,
				}}>
					<span style={{verticalAlign: 'middle', paddingTop: 2}}>{'-'}</span>
				</div>

			</>
		)
	}

	function getIntegerFormItem(type: string, name: string) {
		return (
			<>
				<div>{name}</div>
				{type === state.currentInput ?
					<NumberInput value={Number(item.element[type]!)} change={(value) => element[type] = Number(value)}
									 highlight={state.currentInput === type} ref={integerInput}
									 changed={(value) => changed(value)}
									 step={1} min={0} max={2000}
					/> :
					<div style={{
						textAlign: 'right', height: 20, padding: '0 2px 0 0', margin: '0 0 0 2px',
						background: colors.inputBg,
					}}>
						<span style={{verticalAlign: 'middle', paddingTop: 2}}>{Number(item.element[type])}</span>
					</div>
				}
			</>
		)
	}

	function getFloatFormItem(type: string, name: string, min: number, max: number, step: number) {
		return <>
			<Label>{name}</Label>
			{type === state.currentInput ?
				<NumberInput value={Number(item.element[type]!)} change={(value) => element[type] = Number(value)}
								 highlight={state.currentInput === type} ref={integerInput}
								 changed={(value) => changed(value)}
								 step={step} min={min} max={max}
				/> :
				<div style={{
					textAlign: 'right', height: 20, padding: '0 2px 0 0', margin: '0 0 0 2px',
					background: colors.inputBg,
				}}>
					<span style={{verticalAlign: 'middle', paddingTop: 2}}>{Number(item.element[type])}</span>
				</div>
			}
		</>
	}

	function getStringFormItem(type: string, name: string) {
		return <>
			<Label>{name}</Label>
			{type === state.currentInput ?
				<TextInput value={String(item.element[type]!)} change={(value) => element[type] = String(value)}
							  highlight={state.currentInput === type} ref={integerInput}
							  changed={(value) => changed(value)}
				/> :
				<div style={{
					textAlign: 'right', height: 20, padding: '0 2px 0 0', margin: '0 0 0 2px',
					background: colors.inputBg, overflow: 'hidden',
				}}>
					<span style={{verticalAlign: 'middle', paddingTop: 2}}>{String(item.element[type])}</span>
				</div>
			}
		</>
	}

	function getColorFormItem(type: string, name: string) {
		return <>
			<div style={{display: 'flex', justifyContent: 'space-between', marginRight: 5}}>
				<Label>{name}</Label>
				<div>#</div>
			</div>
			{type === state.currentInput ?
				<TextInput value={String(item.element[type]!)} change={(value) => element[type] = String(value)}
							  highlight={state.currentInput === type} ref={integerInput}
							  changed={(value) => changed(value)}
				/> :
				<div style={{
					textAlign: 'right', height: 20, padding: '0 2px 0 0', margin: '0 0 0 2px',
					background: colors.inputBg,
				}}>
					<span style={{verticalAlign: 'middle', paddingTop: 2}}>{String(item.element[type])}</span>
				</div>
			}
		</>
	}

	function getCoords() {
		if (contains(['coords'])) {
			return state.currentItem!.element.coords!.map((coord, key) => (
				<Pair p1={Object.keys(coord)[0]} p2={Object.keys(coord)[1]} current={state.currentInput!}
						key={key}>
					{getCoordFormItem(Object.keys(coord)[0], Object.keys(coord)[0], coord)}
					{getCoordFormItem(Object.keys(coord)[1], Object.keys(coord)[1], coord)}
				</Pair>
			))
		}
	}

	function Coord({command, name}: { command: Command, name: string }) {
		if(command.type.toLowerCase() !== 'z') {
			const x = Object.keys(command[name]!)[0]
			const y = Object.keys(command[name]!)[1]
			return <PathPair p1={x} p2={y} current={state.currentInput!}>
				{getPathFormItem(x, 'x', command[name] as Coord)}
				{getPathFormItem(y, 'y', command[name] as Coord)}
			</PathPair>
		} else {
			return <PathPair p1={'z'} p2={'z'} current={state.currentInput!}>
				{getPathFormZItem()}
			</PathPair>
		}
	}

	function SingleCoord({command, name}: { command: Command, name: string }) {
		if(command.type.toLowerCase() === 'a') {
			const x = Object.keys(command[name]!)[0]
			return <PathSingle p1={x} current={state.currentInput!}>
				{getPathFormItem(x, '', command[name] as Coord)}
			</PathSingle>
		}
		return null
	}

	function ACommand({command}: { command: Command }) {
		return command.type.toLowerCase() === 'a' ?
			<>
				<CommandPair command={'to'}>
					<Coord command={command} name={'to'}/>
				</CommandPair>
				<CommandPair command={'r'}>
					<Coord command={command} name={'r'}/>
				</CommandPair>
				<CommandPair command={'angle'}>
					<SingleCoord command={command} name={'angle'}/>
				</CommandPair>
				{/*<Single p1={'angle'} current={state.currentInput!}>*/}
				{/*	{getFloatFormItem('angle', 'angle', -360, 360, 1)}*/}
				{/*</Single>*/}
				<CommandPair command={'af'}>
					<Coord command={command} name={'arcFlags'}/>
				</CommandPair>
			</>
			: null
	}

	function MCommand({command}: { command: Command }) {
		return command.type.toLowerCase() === 'm' ?
			<CommandPair command={'to'}>
				<Coord command={command} name={'to'}/>
			</CommandPair>
			: null
	}

	function CCommand({command}: { command: Command }) {
		return command.type.toLowerCase() === 'c' ?
			<>
				<CommandPair command={'to'}>
					<Coord command={command} name={'to'}/>
				</CommandPair>
				<CommandPair command={'cs'}>
					<Coord command={command} name={'cs'}/>
				</CommandPair>
				<CommandPair command={'ce'}>
					<Coord command={command} name={'ce'}/>
				</CommandPair>
			</>
			: null
	}

	function LCommand({command}: { command: Command }) {
		return command.type.toLowerCase() === 'l' ?
			<CommandPair command={'to'}>
				<Coord command={command} name={'to'}/>
			</CommandPair>
			: null
	}

	function ZCommand({command}: { command: Command }) {
		return command.type.toLowerCase() === 'z' ?
			<CommandPair command={'to'}>
				<Coord command={command} name={'to'}/>
			</CommandPair>
			: null
	}

	function getPaths() {
		if (contains(['path'])) {
			return state.currentItem!.element.path!.map((command, key) => (
				<Command command={command} key={key}>
					<MCommand command={command}/>
					<ACommand command={command}/>
					<CCommand command={command}/>
					<LCommand command={command}/>
					<ZCommand command={command}/>
				</Command>
			))
		}
	}

	function getIndividuals() {
		return <>
			{contains(['x', 'y']) ?
				<Pair p1={'x'} p2={'y'} current={state.currentInput!}>
					{getIntegerFormItem('x', 'x')}
					{getIntegerFormItem('y', 'y')}
				</Pair> : null}

			{contains(['x1', 'y1']) ?
				<Pair p1={'x1'} p2={'y1'} current={state.currentInput!}>
					{getIntegerFormItem('x1', 'x1')}
					{getIntegerFormItem('y1', 'y1')}
				</Pair> : null}

			{contains(['x2', 'y2']) ?
				<Pair p1={'x2'} p2={'y2'} current={state.currentInput!}>
					{getIntegerFormItem('x2', 'x2')}
					{getIntegerFormItem('y2', 'y2')}
				</Pair> : null}

			{contains(['cx', 'cy']) ?
				<Pair p1={'cx'} p2={'cy'} current={state.currentInput!}>
					{getIntegerFormItem('cx', 'cx')}
					{getIntegerFormItem('cy', 'cy')}
				</Pair> : null}

			{contains(['r']) ?
				<Single p1={'r'} current={state.currentInput!}>
					{getIntegerFormItem('r', 'r')}
				</Single> : null}

			{contains(['rx', 'ry']) ?
				<Pair p1={'rx'} p2={'ry'} current={state.currentInput!}>
					{getIntegerFormItem('rx', 'rx')}
					{getIntegerFormItem('ry', 'ry')}
				</Pair> : null}

			{contains(['h', 'w']) ?
				<Pair p1={'h'} p2={'w'} current={state.currentInput!}>
					{getIntegerFormItem('w', 'width')}
					{getIntegerFormItem('h', 'height')}
				</Pair> : null}

			{contains(['rotateX', 'rotateY']) ?
				<Pair p1={'rotateX'} p2={'rotateY'} current={state.currentInput!}>
					{getIntegerFormItem('rotateX', 'rotate cx')}
					{getIntegerFormItem('rotateY', 'rotate cy')}
				</Pair> : null}

			{contains(['rotateAngle']) ?
				<Single p1={'rotateAngle'} current={state.currentInput!}>
					{getFloatFormItem('rotateAngle', 'rotateAngle', -360, 360, 1)}
				</Single> : null}

			{contains(['scaleX', 'scaleY']) ?
				<Pair p1={'scaleX'} p2={'scaleY'} current={state.currentInput!}>
					{getFloatFormItem('scaleX', 'scaleX', -1000, 1000, .1)}
					{getFloatFormItem('scaleY', 'scaleY', -1000, 1000, .1)}
				</Pair> : null}

			{contains(['translateX', 'translateY']) ?
				<Pair p1={'translateX'} p2={'translateY'} current={state.currentInput!}>
					{getIntegerFormItem('translateX', 'translateX')}
					{getIntegerFormItem('translateY', 'translateY')}
				</Pair> : null}

		</>
	}

	function getGenerals() {
		return <>
			{contains(['stroke']) ?
				<Single p1={'stroke'} current={state.currentInput!}>
					{getColorFormItem('stroke', 'stroke')}
				</Single> : null}

			{contains(['strokeWidth']) ?
				<Single p1={'strokeWidth'} current={state.currentInput!}>
					{getIntegerFormItem('strokeWidth', 'stroke width')}
				</Single> : null}

			{contains(['fill']) ?
				<Single p1={'fill'} current={state.currentInput!}>
					{getColorFormItem('fill', 'fill')}
				</Single> : null}

			{contains(['fillOpacity']) ?
				<Single p1={'fillOpacity'} current={state.currentInput!}>
					{getFloatFormItem('fillOpacity', 'fill opacity', 0, 1, .1)}
				</Single> : null}
		</>
	}

	function contains(keys: string[]): boolean {
		return keys.some(key => key in state.currentItem!.element)
	}

	return (
		<div style={{
			background: colors.formBg,
			padding: '2px 2px 2px 2px',
			display: 'flex', flexDirection: 'column',
			rowGap: 2,
		}}>
			{contains(['id']) ?
				<>
					<Single p1={'id'} current={state.currentInput!}>
						{getStringFormItem('id', 'id')}
					</Single>
					{contains(['coords', 'path']) ?
						<>
							{getCoords()}
							{getPaths()}
						</>
						: <>
							{getIndividuals()}
						</>
					}
					{getGenerals()}
				</> : null
			}
		</div>
	)
}
