import * as React from 'react'
import {H2, P} from '../ui/Typography'
import {Box} from '../ui/Box'
import {Project} from '../../db/projects'
import {ReactNode} from 'react'

type Props = {
	title: string
	date: string
	children: ReactNode
}

export default function UpdateMessage({title, date, children}:Props) {
	return (
		<>
			<article style={{}}>
				<Box style={{marginBottom: 30}}>
					<div style={{display: 'flex'}}>
						<H2 first date={date}>{title}</H2>
					</div>
					{children}
				</Box>
			</article>
		</>
	)
}