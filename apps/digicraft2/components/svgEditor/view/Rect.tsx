import {EditorItem} from '../../svgEditorx/editorContext'
import * as React from 'react'

export function Rect({item}: { item: EditorItem }) {
	const e = item.element
	return (
		<rect x={e.x} y={e.y} width={e.w} height={e.h} stroke={'#' + e.stroke} fill={'#' + e.fill}
				fillOpacity={e.fillOpacity} strokeWidth={e.strokeWidth}/>
	)
}

export function RectHighlight({item}: { item: EditorItem }) {
	const e = item.element
	return <rect x={e.x! - 1} y={e.y! - 1} width={e.w! + 2} height={e.h! + 2} stroke={'#666'} strokeLinejoin="round"
					 fill={'none'}
					 className={'svgSelection'}/>
}