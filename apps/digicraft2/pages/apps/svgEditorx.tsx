import * as React from 'react'
import Meta, {metas} from '../../components/content/Meta'
import {H1, H3, P} from '../../components/ui/Typography'
import ExternalLink from '../../components/ui/ExternalLink'
import SVGEditor from '../../components/svgEditorx/SVGEditor'
import {EditorContextProvider} from '../../components/svgEditorx/editorContext'

const idee = <>
	<H3 first>Idee</H3>
	<P>
		SVG Editoren gibt es genug, auch sehr umfangreiche und gute,
		wie <ExternalLink href={'https://inkscape.org/de/'}>Inkscape</ExternalLink>.
		Die Idee hinter "SVG Editor for Coders" ist, quellcodenah SVGs zu erstellen und zu bearbeiten und
		Werte einzeln mit der Tastatur einzugeben.
	</P>
	<P>
		Oft möchte man SVGs, die man in Web-Komponenten, oder sogar als Webkomponente (z.B. React) verwendet,
		beim Programmieren nachbearbeiten, ohne erneut den Editor zu bedienen. Man möchte auch, dass die
		SVGs schlank, auf das Nötigste beschränkt sind und kein Overhead erzeugt und unnötige Parameter durch die
		Editoren gesetzt werden.
	</P>
	<P>
		Wenn man also später SVGs von Hand nachbearbeitet, warum dann nicht gleich von Anfang an?
		Die Eingabe über die Tastatur muss nicht langsamer sein und ist für Erfahrene sogar bequemer.
	</P>
</>

export default function SvgEditor() {
	return (
		<>
			<Meta meta={metas.svgEditor}/>
			<EditorContextProvider>
				<SVGEditor />
			</EditorContextProvider>
		</>
	)
}