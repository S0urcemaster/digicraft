import * as React from 'react'
import { H1, H3 } from '@blueprintjs/core'
import { jobs } from '../../../cms/jobs/jobs'

export type Category = {
	name: string
}

export type Job = {
	title: string
	category: string
	description: string
}

export function Jobs() {
	return (
		<div style={{padding: 5}}>
			{jobs.map(job => {
				return <div>
					<H3>{job.title}</H3>
					<p>
						{job.description}
					</p>
				</div>
			})}
		</div>
	)
}