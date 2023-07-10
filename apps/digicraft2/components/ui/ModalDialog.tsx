import * as React from 'react'
import {Box} from './Box'
import {Button} from './Form'
import {MouseEventHandler, useEffect, useState} from 'react'
import {Spacer} from './Layout'
import {globals} from '../../lib/globals'
import {useLocalStorage} from '../../lib/localStorageContext'

type Props = {
	title: string
	buttonTitle: string
	approveTitle?: string
	width: number
	height: number
	visible: boolean
	close: MouseEventHandler<HTMLElement>
	approve?: MouseEventHandler<HTMLElement>
	children: React.ReactNode
};

export default function ModalDialog(props: Props) {
	const [width, setWidth] = useState(0)
	const [height, setHeight] = useState(0)

	const {brightness} = useLocalStorage()

	const updateDimensions = () => {
		setWidth(window.innerWidth)
		setHeight(window.innerHeight)
	}

	useEffect(() => {
		updateDimensions()
		window.addEventListener('resize', updateDimensions)
		// return () => window.removeEventListener("resize", updateDimensions) // memory leak?
	}, [])

	const left = (width - props.width) / 2
	const top = (height - props.height) / 2

	return (
		<>
			<div style={{
				display: props.visible ? 'block' : 'none',
				background: 'rgba(0, 0, 0, 0.3)',
				position: 'fixed',
				top: 0,
				right: 0,
				bottom: 0,
				left: 0,
			}}
				  onClick={props.close}
			/>
			<div style={{
				display: props.visible ? 'block' : 'none',
				position: 'fixed',
				overflow: 'auto',
				width: props.width + 'px',
				// height: props.height + 'px',
				background: globals.brightness[brightness].background,
				padding: '10px 10px 10px 10px',
				borderRadius: '3px',
				top: top,
				left: left,
			}}>
				<div style={{display: 'flex', flexFlow: 'column', height: '100%'}}>
					<div style={{background: globals.brightness[brightness].color,
						color: globals.brightness[brightness].boxBackground, fontWeight: 'bold', padding: '5px'}}>{props.title}</div>
					<div style={{height: '100%', padding: '10px 0 0 0'}}>
						{props.children}
					</div>
					<Spacer height={5}/>
					<div style={{display: 'flex', justifyContent: 'right', columnGap: 10}}>
						<Button value={props.buttonTitle} onClick={props.close} style={{minWidth: 100}}/>
						{props.approve ? <Button value={props.approveTitle} onClick={props.approve} style={{minWidth: 100}}/> : null}
					</div>
				</div>
			</div>
		</>

	)
}