'use client'

import * as React from 'react'
import { Card, Elevation, Tooltip } from '@blueprintjs/core'
import { DateCircle } from '../../../components/svg/DateCircle'
import { radiostreams } from '../../../cms/radiostreams'
import { RadioStream } from '../../../components/WebAudioHook'

const style = {
	margin: '10px 10px 10px 10px',
	border: '1px solid black',
}

function Stream({title, url}: {title: string, url: string}) {

	return (
		<Card interactive={true} elevation={Elevation.TWO}>
			<div style={{display: 'flex', justifyContent: 'space-between', position: 'relative'}}>
				<div>
					<h4 className={'bp5-heading'} style={{marginTop: -5}}>{title}</h4>
					<div style={{fontWeight: 500}}>
						{url}
					</div>
				</div>
			</div>
		</Card>
	)
}

function Title({title, url}: {title: string, url: string}) {

	return (
		<Card interactive={false} elevation={Elevation.TWO}>
			<div style={{display: 'flex', justifyContent: 'space-between', position: 'relative'}}>
				<div>
					<h4 className={'bp5-heading'} style={{marginTop: -5}}>Test</h4>
					<div style={{fontWeight: 500}}>
						Shortdesc
					</div>
				</div>
			</div>
		</Card>
	)
}


export function DigiMusic() {

	return (
		<div style={style}>
			{radiostreams.map((stream: RadioStream, idx) => {
				return <Stream key={idx} title={stream.host} url={stream.hostUrl} />
			})}
		</div>
	)
}
