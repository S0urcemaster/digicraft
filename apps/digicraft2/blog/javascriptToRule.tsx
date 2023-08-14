import * as React from 'react'
import {H1, P} from '../components/ui/Typography'
import {Box} from '../components/ui/Box'
import ContentLayout from '../components/content/ContentLayout'
import {default as BlogMenu} from '../components/content/menu/Blog'

type Props = {};

export default function JavascriptToRule(props: Props) {
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
				<H1>JavaScript - One to Rule Them All</H1>
				<Box>
					<P first>
						Java und PHP waren lange Zeit die erste Wahl, wenn es um dynamische Webseiten ging und man hatte sonst
						wenig
						Auswahlmöglichkeiten. Seit dem Siegeszug von Browseranwendungen und der damit notwendigen Verwendung
						von JavaScript dachte sich wohl einer: warum soll ich zwei Programmiersprachen lernen, je für Client
						und Server und entwickelte eine Laufzeitumgebung, mit der man JavaScript auch außerhalb des Browsers
						verwenden konnte. Mit Node.js war es dann also möglich einen Webserver mit JavaScript zu schreiben.
					</P>
					<P>
						Es ist wohl keine Übertreibung, JavaScript und das später
						entwickelte, typsicherere Superset TypeScript als eine der modernsten Programmiersprachen zu
						bezeichnen.
						Der Wald an Bibliotheken, die beliebig zu bekannten Frameworks wie Express oder React zusammengesetzt
						werden,
						ermöglichen ein breites Spektrum an webbasierten und auch desktopbasierten Anwendungen. Und wie bei
						Java
						und anderen (teilweise) interpretierten Programmiersprachen, ist es auch hier die Leistungsfähigkeit
						der Computer, die es erlaubt, immer abstraktere Programmiersprachen zu verwenden.
					</P>
					<P>
						Somit sollte sich JavaScript weiterhin behaupten, allein schon aus dem Grund, weil es auf dem Browser
						keine
						Alternative gibt. Die nächste Frage ist dann: warum soll ich dann auf dem Server eine andere
						Programmiersprache
						nehmen, wenn ich mit JavaScript weitestgehend dasselbe erreichen kann?
					</P>
					<P>
						Sicher ist es als interpretierte Sprache langsamer als z.B. Java. Doch wie wiegt das im Vergleich zu
						der Tatsache, dass ein Frontend- und Backendentwickler nicht mehr getrennte Wege gehen, sondern der
						eine
						im Prinzip die Arbeit des anderen machen kann oder man als Fullstack-Entwickler nicht mehr zwischen
						den
						Sprachen wechseln muss?
					</P>
					<P>
						Wer ein neues Webprojekt angeht, sollte sich bei der Technologiewahl mal die serverseitigen
						JavaScript-Frameworks anschauen.
					</P>
				</Box>
			</article>
		</ContentLayout>
	)
}