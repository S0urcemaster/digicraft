import * as React from 'react'
import {CSSProperties} from 'react'

type OuterProps = {
	height: number,
	borderWidth: number,
	lightColor: string,
	darkColor: string,
	children: React.ReactNode,
};

let propsBackup:OuterProps

const style: CSSProperties = {
	// boxShadow: '-11px -11px 11px 0px #333333, 11px 11px 11px 0px #753654',
	// padding: '15px',
}

export function Outer(props: OuterProps) {
	propsBackup = props
	const pos = props.borderWidth + 'px'
	const calc = 'calc(100% - ' + props.borderWidth + 'px)'
	return (
		<div style={{height: props.height, background: props.lightColor}}>
			<div style={{position: 'relative', left: pos, top: pos, height: calc, width: calc, background: props.darkColor}}>
				<div style={{position: 'relative', left: pos, top: pos, width: calc, height: calc}}>
					<div style={{position: 'relative', height: calc, width: calc, background: props.lightColor}}>
						<div style={{position: 'relative', height: calc, width: calc}}>
							{props.children}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export function Separator() {
	const width = propsBackup.borderWidth + 'px'
	return (
		<>
			<div style={{height:width, background: propsBackup.lightColor}}></div>
			<div style={{height:width, background: propsBackup.darkColor}}></div>
		</>
	)
}