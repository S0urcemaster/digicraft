import {H1, P} from '../../components/ui/Typography'
import {Box} from '../../components/ui/Box'
import * as React from 'react'
import ContentLayout from '../../components/content/ContentLayout'
import {default as BlogMenu} from '../../components/content/menu/Blog'

export default function WebDeveloper() {
	return (
		<ContentLayout leftWide left={
			<>
				<BlogMenu/>
			</>
		} right={
			<>
			</>
		}
		>
			<article>
				<H1>Schwerpunkt Webentwicklung</H1>
				<Box>
					<P first>Das Thema Internet und World Wide Web ist in den letzten Jahren stark gewachsen. Vieles, vom
						Einkaufen
						und Fernsehen für Privatpersonen bis hin zur Digitalisierung in allen Wirtschaftsbereichen, wird oft
						nur noch über den Browser gemacht. Der Vorteil dabei ist, dass das Programm bzw. die App, die eine
						bestimmte
						Aufgabe erledigt, nicht vom Endbenutzer verwaltet (heruntergeladen, aktualisiert) werden muss, sondern
						bereits auf jedem Computer installiert ist.</P>
					<P>Die Möglichkeiten, die man mit dem Browser hat, um komplexe Software zu schreiben, haben sich immer
						mehr
						erweitert. Z.B. werden Textverarbeitung und Tabellenkalkulation inzwischen von verschiedenen Anbietern
						komplett als Webanwendung angeboten. Die Beliebtheit von Webanwendungen rührt nicht nur von deren
						einfacher
						Handhabung her, sondern sie sind zudem noch sehr sicher, was die Gesundheit des eigenen Rechners
						betrifft:
						Kein Download von Programmen oder Dateien heißt eben auch, dass keine Schadsoftware installiert werden
						kann.
						Und Sicherheitseinrichtungen wie TLS, verwendet in HTTPS oder 2-Faktor-Authentifizierung, wo bei der
						Anmeldung zusätzlich noch ein Code auf das Smartphone gesendet wird, erschweren es erheblich,
						den Vorgang zu hacken und nehmen dem Anwender einige Verantwortlichkeiten ab.</P>
					<P>Das bedeutet aber natürlich einen immer größeren Aufwand und immer größere Anforderungen an die an der
						Entwicklung von Webseiten beteiligten Personen und Teams. Die zur Verfügung stehenden Technologien
						sind
						schier unüberschaubar geworden. Webentwicklung beschäftigt sich dabei mehr mit den Funktionen einer
						Webseite als mit dem Design.
						Während der Webdesigner also das Aussehen der Webseite bestimmt, ist der Webentwickler für die
						Prozesse rund um das reibungslose Funktionieren verantwortlich. Dabei wird der Webentwickler nochmal
						in Frontend- und Backendentwickler eingeteilt. Der Frontendentwickler beschäftigt sich dabei mit den
						Prozessen, die Anzeige und Funktion im Browser betreffen, der Backendentwickler mit der
						datentechnischen
						Komponente, die sich meistens auf dem Server abspielt und Datenbanken liest und schreibt.</P>
				</Box>
				{/*<table>*/}
				{/*	<thead>*/}
				{/*	<tr>*/}
				{/*		<td>Sprache/Tech</td>*/}
				{/*		<td>Beschreibung</td>*/}
				{/*		<td>Verfügbarkeit</td>*/}
				{/*	</tr>*/}
				{/*	</thead>*/}
				{/*	<tbody>*/}
				{/*	<tr>*/}
				{/*		<td>Go</td>*/}
				{/*		<td>Schon ganz gut drin.</td>*/}
				{/*		<td>Ready to 'go'</td>*/}
				{/*	</tr>*/}
				{/*	<tr>*/}
				{/*		<td>Vue.js</td>*/}
				{/*		<td>Bewegt sich Richtung React</td>*/}
				{/*		<td>ready to go</td>*/}
				{/*	</tr>*/}
				{/*	<tr>*/}
				{/*		<td>Contao</td>*/}
				{/*		<td>Ein Content Management System</td>*/}
				{/*		<td>Ready to go</td>*/}
				{/*	</tr>*/}
				{/*	<tr>*/}
				{/*		<td>HTML/CSS</td>*/}
				{/*		<td>Schon ein paar Seiten gebaut.</td>*/}
				{/*		<td>Ready to go</td>*/}
				{/*	</tr>*/}
				{/*	<tr>*/}
				{/*		<td>JavaScript</td>*/}
				{/*		<td>Einsteigersprache</td>*/}
				{/*		<td>Ready to go</td>*/}
				{/*	</tr>*/}
				{/*	<tr>*/}
				{/*		<td>C++</td>*/}
				{/*		<td>Die Königsdisziplin. Holprig, aber wird schon.</td>*/}
				{/*		<td>Ready to go (slowly)</td>*/}
				{/*	</tr>*/}
				{/*	<tr>*/}
				{/*		<td>Python (Machine Learning)</td>*/}
				{/*		<td>Relativ leicht zu lernen</td>*/}
				{/*		<td>Ready to go (aber lieber nicht)</td>*/}
				{/*	</tr>*/}
				{/*	<tr>*/}
				{/*		<td>Qt</td>*/}
				{/*		<td>Ganz guter Überblick</td>*/}
				{/*		<td>Ready to go (depends)</td>*/}
				{/*	</tr>*/}
				{/*	<tr>*/}
				{/*		<td>Git</td>*/}
				{/*		<td>Was man so braucht</td>*/}
				{/*		<td>Ready to go</td>*/}
				{/*	</tr>*/}
				{/*	<tr>*/}
				{/*		<td>React</td>*/}
				{/*		<td>Was alle woll'n</td>*/}
				{/*		<td>Nach recap: ready to go</td>*/}
				{/*	</tr>*/}
				{/*	<tr>*/}
				{/*		<td>PHP Laravel</td>*/}
				{/*		<td>Macht PHP modern</td>*/}
				{/*		<td>Nach recap: ready to go</td>*/}
				{/*	</tr>*/}
				{/*	<tr>*/}
				{/*		<td>PHP</td>*/}
				{/*		<td>Gibt es auch noch</td>*/}
				{/*		<td>Von Anfang an produktiv</td>*/}
				{/*	</tr>*/}
				{/*	<tr>*/}
				{/*		<td>TypeScript</td>*/}
				{/*		<td>So viel ist ja nicht anders als bei JavaScript. Halt mehr zu tippen.</td>*/}
				{/*		<td>Nach recap: ready to go (slowly)</td>*/}
				{/*	</tr>*/}
				{/*	<tr>*/}
				{/*		<td>Java</td>*/}
				{/*		<td>Allgemein am meisten programmiert.</td>*/}
				{/*		<td>Nach Eingewöhnung: ready to go</td>*/}
				{/*	</tr>*/}
				{/*	<tr>*/}
				{/*		<td>SQL</td>*/}
				{/*		<td>Ist am schnellsten</td>*/}
				{/*		<td>Ready to go</td>*/}
				{/*	</tr>*/}
				{/*	<tr>*/}
				{/*		<td>Lua</td>*/}
				{/*		<td>Minecraft Computercraft</td>*/}
				{/*		<td>Nach recap: ready to go</td>*/}
				{/*	</tr>*/}
				{/*	<tr>*/}
				{/*		<td>Node.js</td>*/}
				{/*		<td></td>*/}
				{/*		<td></td>*/}
				{/*	</tr>*/}
				{/*	<tr>*/}
				{/*		<td>Electron</td>*/}
				{/*		<td></td>*/}
				{/*		<td></td>*/}
				{/*	</tr>*/}
				{/*	<tr>*/}
				{/*		<td></td>*/}
				{/*		<td></td>*/}
				{/*		<td></td>*/}
				{/*	</tr>*/}
				{/*	</tbody>*/}
				{/*</table>*/}
			</article>
		</ContentLayout>
	)
}