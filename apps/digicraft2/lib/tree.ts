import {EditorItem} from '../components/svgEditorx/editorContext'

export function removeParents(root: EditorItem) {
	root.parent = undefined
	if(root.children) {
		for(const child of root.children) {
			removeParents(child)
		}
	}
}

export function restoreParents(root: EditorItem) {
	console.log('restore')
	if(root.children) {
		for(const child of root.children) {
			child.parent = root
			restoreParents(child)
		}
	}
}