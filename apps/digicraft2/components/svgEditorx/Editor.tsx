import * as React from 'react'
import {EditorItem, useEditorContext} from './editorContext'
import {useEffect, useRef} from 'react'
import {Form} from './editor/Form'
import {focuses} from './constants'
import {EditorState} from './editorState'

function TreeNode(props: { parent: EditorItem, current: EditorItem, state: EditorState }) {

	const hasChildren = props.parent.children && props.parent.children.length > 0

	useEffect(() => {
	}, [props.current])

	function Div({item}: { item: EditorItem }) {

		useEffect(() => {
		}, [item])

		return (
			<div
				style={{border: props.state.focus === focuses.tree && item.element.id === props.current.element.id ? '1px solid black' : ''}}>{`<${item.element.type} id="${item.element.id}">`}</div>
		)
	}

	return (
		<div>
			<Div item={props.parent} />
			{hasChildren && (
				<div style={{marginLeft: 20}}>
					{props.parent.children!.map((child, idx) => (
						<TreeNode parent={child} current={props.current} state={props.state} key={idx}/>
					))}
				</div>
			)}
		</div>
	)
}

export default function Editor() {

	const {state} = useEditorContext()

	const editorRef = useRef(null)

	return (
		<div style={{fontSize: 12}}>
			<div style={{
				margin: 5,
				padding: 2,
				background: 'white',
				display: 'grid',
				gridTemplateColumns: '55% 45%',
				overflowY: 'scroll',
				height: 630,
			}} ref={editorRef}>
				<div>
					{state.root && state.currentItem &&
						<TreeNode parent={state.root} current={state.currentItem} state={state} />}
				</div>
				<div style={{padding: 5}}>
					<Form item={state.currentItem!} />
				</div>
			</div>
		</div>
	)
}