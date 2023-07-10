import * as React from 'react'
import Editor from './Editor'
import View from './View'
import Library from './Library'
import Hints from './Hints'


export default function SVGEditor() {
	return (
		<div>
			<div style={{
				display: 'grid', gridTemplateColumns: '500px auto 500px',
				background: '#d9d9d9', height: 650,
			}}>
				<Editor />
				<View />
				<Library />
			</div>
			<Hints />
		</div>
	)
}