import React, {CSSProperties} from 'react'
import {globals} from '../../lib/globals'
import {H3} from '../ui/Typography'
import {useLocalStorage} from '../../lib/localStorageContext'

const styles: Record<string, CSSProperties> = {
	content: {
		padding: '10px 10px 5px 10px',
		// outlineStyle: 'solid',
		// outlineOffset: '2px',
		// outlineColor: 'gray',
		// outlineWidth: '1px',
		// borderRadius: '0.25rem',
		margin: '1px',
		marginBottom: '6px',
		background: globals.colors.whiteSmoke,
	},
}

export function ProjectTech(props: {tech: string, style?: CSSProperties}) {

	const {brightness} = useLocalStorage()

	return (
		<div style={{
			marginRight: '12px',
			padding: '0 3px 1px 4px',
			borderStyle: 'solid',
			borderWidth: '0.5pt',
			borderColor: 'gray',
			borderRadius: '0.25rem',
			lineHeight: '1.25rem',
			background: globals.brightness[brightness].background,
			color: globals.brightness[brightness].color, ...props.style
		}}>{props.tech}</div>
	)
}

export default function ProjectItem(props:{
	title: string,
	client: string,
	date: string,
	techStack: Array<string>,
	children:React.ReactNode

}) {

	const {brightness} = useLocalStorage()

	return (
		<div style={{...styles.content, background: globals.colors.transparent, marginBottom: 20}}>
			<div style={{display: 'flex', justifyContent: 'space-between'}}>
				<H3 first>{props.title}</H3>
				{/*<div style={{fontWeight:'bold'}}>{props.title}</div>*/}
				<div style={{textAlign:'right', whiteSpace: 'nowrap'}}>{props.date}</div>
			</div>
			<div style={{marginBottom: '8px'}}>Für: {props.client}</div>
			<div style={{display: 'flex', rowGap: '10px'}}>
				{props.techStack.map((tech, id) => {
					return <ProjectTech tech={tech} key={id} />
				})}
			</div>
			{props.children}
		</div>
	)
}