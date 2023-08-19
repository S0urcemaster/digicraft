'use client'

import * as React from 'react'
import DigiText from '../../components/svg/logo/DigiText'

const devStyle = {
	margin: '10px 10px 10px 10px',
	border: '1px solid black',
}

export function Dev() {

	return (
		<div style={devStyle}>
			<DigiText text={'DIGITEXT'} color={'black'} height={100} />
		</div>
	)
}
