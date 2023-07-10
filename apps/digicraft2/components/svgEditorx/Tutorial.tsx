import * as React from 'react'
import {copyPasteHints, fileHints, formHints, Hint, hints, navigationHints} from './Hints'
import {CSSProperties} from 'react'

function Key({hint}: { hint: Hint }) {
	return (
		<kbd style={{marginRight: 0, background: hint.color}}>{hint.key}</kbd>
	)
}

export default function Tutorial({style}: {style: CSSProperties}) {
	return (
		<div style={{
			margin: 5,
			padding: 2,
			height: '100%',
			background: 'white', overflowY: 'scroll', ...style
		}}>
			<div style={{padding: '0px 4px 0 4px', fontSize: '13px'}}>
				<h2 style={{marginBottom: 1}}>Tutorial</h2>
				<p>(Watch the hints view in the bottom left changing depending on the selected object or function.)</p>
				<p>
					Press <Key hint={hints.tree.group[3]}/> and <Key hint={hints.tree.add[0]}/> to add a circle as a
					reference.
				</p>
				<p>
					Press <Key hint={navigationHints[0]}/> to switch to the form view. Hit <Key
					hint={navigationHints[2]}/> until
					you get to the "r" property. Hit <Key hint={formHints[0]}/> to edit the property. Change the value to
					100 and hit <Key hint={formHints[0]}/> again.
				</p>
				<p>
					Move <Key hint={navigationHints[1]}/> to "cx" or "cy". Hit <Key hint={hints.form.coord[0]}/> to
					translate the circle's center. Use the arrow keys to move the circle to (100/100) and
					hit <Key hint={formHints[0]}/> to end the translation.
				</p>
				<p>
					Go back to the tree view <Key hint={formHints[1]}/>, up to the root element <Key
					hint={navigationHints[1]}/>,
					press <Key hint={hints.tree.group[3]}/> and add a path <Key hint={hints.tree.add[5]}/>.
				</p>
				<p>
					Navigate to the "M"-command (move to) and set x1/y1 to (100/0). Set the "cs" parameter (curve start)
					of the "C"-command (Bezier Curve) to (33/0) and "ce" to (33/100).
				</p>
				<p>
					With the cursor inside the "C"-command press capital <Key hint={hints.form.path[1]}/> to add
					another "C" command after the current. (The lower "c" command will not work for this tutorial.)
				</p>
				<p>
					Set "to" to (100/200), "cs" to (166/100) and "ce" to (166/200).
				</p>
				<p>
					Add another "C" command and set its parameters to to(100/0), cs(233/200), ce(233/0).
				</p>
				<p>
					Set "fill opacity" to 1. With the cursor on the last "C" command, press <Key
					hint={hints.form.path[4]}/> to
					close the path.
				</p>
				<p>
					Navigate to the tree view. With the cursor on path001, press <Key hint={copyPasteHints[1]}/> to copy
					the element and <Key hint={copyPasteHints[2]}/> to paste it after the current Bezier.
				</p>
				<p>
					Change the props of the last C-command the new element to cs(-33/200) and ce(-33/0) and set fill to
					FFF.
				</p>
				<p>
					Insert a circle and set its props to cx(100), cy(50), r(10), fill(fff) and fill opacity(1).
				</p>
				<p>
					Copy and paste the circle and set its props to cy(150) and fill(0). Navigate to the first circle
					and press
				</p>
				<p>
					Navigate to root, press <Key hint={hints.tree.svg[hints.tree.svg.length - 1]}/> and <Key
					hint={fileHints[1]}/> to
					save the SVG to your disk.
				</p>
			</div>
		</div>
	)
}