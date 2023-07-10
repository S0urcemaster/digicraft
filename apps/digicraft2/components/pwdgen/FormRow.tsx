import React from 'react'

export default function FormRow(props:{title: string, children:React.ReactNode}) {
	return (
		<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
			<div>{props.title}</div>
			<div>{props.children}</div>
		</div>
	)
}
