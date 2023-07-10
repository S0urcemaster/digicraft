import * as React from 'react'
import {EditorItem} from '../../svgEditorx/editorContext'

export function Circle({item}: { item: EditorItem }) {
	const e = item.element
	return (
		<circle cx={e.cx} cy={e.cy} r={e.r} stroke={'#' + e.stroke} strokeWidth={e.strokeWidth} fill={'#' + e.fill}
				  fillOpacity={e.fillOpacity}/>
	)
}

export function CircleHighlight({item}: { item: EditorItem }) {
	const e = item.element
	return <rect x={e.cx! - e.r! - 1} y={e.cy! - e.r! - 1} width={e.r! * 2 + 2} height={e.r! * 2 + 2} stroke={'#98d2ff'}
					 strokeLinejoin="round" fill={'none'}
					 className={'svgSelection'}/>
}