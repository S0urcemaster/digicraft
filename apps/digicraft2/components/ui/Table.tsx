import * as React from 'react'
import {CSSProperties, ReactNode} from 'react'

export type TableContent = {
	head: string[]
	rows: string[][]|ReactNode[][]
}

export default function Table(props: {content: TableContent, style?: CSSProperties}) {
	return (
		<table style={{margin: 0, ...props.style}}>
			<thead>
			<tr>
			{props.content.head.map((h, idx) => (
				<td key={idx}>{h}</td>
			)
			)}
			</tr>
			</thead>
			<tbody>
			{props.content.rows.map((row, idx) => (
				<tr key={idx}>
					{row.map((col, idx) => (
						<td key={idx}>{col}</td>
					))}
				</tr>
			))}
			</tbody>
		</table>
	)
}