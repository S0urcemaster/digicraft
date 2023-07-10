import * as React from 'react'
import {colors, focuses} from './constants'
import {useEditorContext} from './editorContext'
import Tutorial from './Tutorial'
import Softdisk from './Softdisk'


export default function Library() {

	const {state} = useEditorContext()

	return (
		<div style={{height: 595}}>
			<div style={{background: colors.formBg, height: 30}}>
				<div style={{fontSize: 22, color: 'white', margin: '5px 0 0 0', textAlign: 'center'}}>Coder's SVG Editor
				</div>
			</div>
			<Tutorial style={{display: state.focus === focuses.library ? 'none' : 'block'}} />
			<Softdisk style={{display: state.focus === focuses.library ? 'block' : 'none'}} />
		</div>
	)
}