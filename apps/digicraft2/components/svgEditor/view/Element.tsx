import {EditorItem} from '../../svgEditorx/editorContext'
import {types} from '../../svgEditorx/model'
import {findCommandCoord} from '../../svgEditorx/lib'
import * as React from 'react'
import {Circle, CircleHighlight} from './Circle'
import {Rect, RectHighlight} from './Rect'

export function Element(props: { item: EditorItem, highlight?: boolean }) {
	switch (props.item.element.type) {
		case types.rect:
			return (
				<>
					<Rect item={props.item}/>
					{props.highlight ? <RectHighlight item={props.item}/> : null}
				</>
			)
		case types.circle:
			return (
				<>
					<Circle item={props.item}/>
					{props.highlight ? <CircleHighlight item={props.item}/> : null}
				</>
			)
		// case types.line:
		// 	return (
		// 		<>
		// 			<Line item={props.item}/>
		// 			{props.highlight ? <LineHighlight item={props.item}/> : null}
		// 		</>
		// 	)
		// case types.ellipse:
		// 	return (
		// 		<>
		// 			<Ellipse item={props.item}/>
		// 			{props.highlight ? <EllipseHighlight item={props.item}/> : null}
		// 		</>
		// 	)
		// case types.polyline:
		// 	return (
		// 		<>
		// 			<Polyline item={props.item}/>
		// 			{/*{props.highlight ? <EllipseHighlight item={props.item}/> : null}*/}
		// 		</>
		// 	)
		// case types.polygon:
		// 	return (
		// 		<>
		// 			<Polygon item={props.item}/>
		// 			{/*{props.highlight ? <EllipseHighlight item={props.item}/> : null}*/}
		// 		</>
		// 	)
		// case types.path:
		// 	const [command, coord] = findCommandCoord(props.item.element.path!, state.currentInput!)
		//
		// 	return (
		// 		<>
		// 			<Path item={props.item}/>
		// 			{props.highlight && command ?
		// 				<PathHighlight item={props.item} command={command} currentCoord={coord}/> : null}
		// 		</>
		// 	)
	}
	return null
}