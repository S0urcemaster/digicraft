import * as React from 'react'
import {cloneElement, Fragment, ReactElement, ReactNode} from 'react'

export type Layout = [string, ReactElement][]

export default function FormLayout(props: { layout: Layout }) {

	return (
		<div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', width: '70%', rowGap: 10}}>
			{props.layout.map(([title, comp], idx) => (
				<Fragment key={idx}>
					<label htmlFor={title} style={{margin: '0 25px 0px 0', whiteSpace: 'nowrap'}}>{title}:</label>
					{/*{cloneElement(comp, {prop: ''})}*/}
					{comp}
				</Fragment>
			))}
		</div>
	)
}