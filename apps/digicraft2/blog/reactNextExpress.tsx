import * as React from 'react'
import {H1, H2, P} from '../../components/ui/Typography'
import {Box, DevBox} from '../../components/ui/Box'

export default function ReactNextExpress() {
	return (
		<>

			<H1 backButton>Webprogrammierung mit React, Next und Express</H1>
			<DevBox>
				<P>
					Ja, ich weiß: Du hast mit PHP oder Java angefangen und es gibt keinen Grund, auf etwas anderes
					umzusteigen, wenn man damit <em>auch</em> alles erschlagen kann, schon gar nicht auf das 'verruchte'
					JavaScript.
				</P>
				<P>
					Für JavaScript gibt es auf dem Browser aber keine Alternative. Wenn man erst mal damit angefangen hat,
					clientseitig dynamischen Content zu erstellen, gehen die Nutzererwartungen auch mehr und mehr dort hin.
					Seiten, die mehrere Sekunden brauchen, um zu laden, werden ignoriert - es gibt ja noch viele andere
					Seiten, die dieselbe Information anbieten. Da kann man SEO-optimiert noch so hoch in den
					Suchergebnissen stehen: wenn die Seite nicht in 1er Sekunde geladen ist, fühlt man sich genötigt,
					den Back-Button zu drücken, das nächste Suchergebnis zu versuchen und die langsame Seite
					in Zukunft zu meiden.
				</P>
				<P>
					Es gibt so viele Webseiten von bekannten, großen Institutionen und Firmen, die einfach eine
					niedrige Reaktionszeit haben. Das gilt für das erste Laden, aber auch für weitere Seitenaufrufe
					innerhalb der Webseite. Dafür kann es viele Grunde geben. Einer ist, dass jede Einzelseite
					einer Webpage immer severseitig gerendert wird, bei jedem Aufruf, obwohl ein Re-Render eigentlich
					gar nicht nötig ist. Bei PHP und Java/JSP ist das aber der Standard.
				</P>
				<P>
					Der Ansatz frontend-zentrierter Webseitenprogrammierung unterscheidet sich nur insofern vom
					server-generierten, dass der Server 'headless' ist, lediglich ein REST API Server, der nur die
					reinen Daten bei Bedarf schickt. Der Frontend wird bei der ersten Anfrage vollständig zum Browser
					gesendet. Das ist erst mal sehr langsam. Bei großen Webseiten würde es sehr lange dauern, den
					kompletten Content zum Browser zu schicken. Danach allerdings gibt es fast keine Ladezeiten mehr.
					Der dynamische Inhalt wird bei Bedarf nachgeladen.
				</P>
				<P>
					Ein weiterer Vorteil von SPAs - Single Page Applications ist, dass Frontend und Backend vollständig
					getrennt sind. Es gibt keine Vermischung von serverseitiger Contentgenerierung und JavaScript.
					Die dynamischen, in dem Sinne auch wertvolleren Daten, sind auf dem Server gekapselt. Der
					Zugriff erfolgt über eine Schnittstelle, die fokussiert betrachtet und kontrolliert werden kann.
					Das ist mit dem MVC (Model-View-Controller) Paradigma bei PHP und Java auch umgesetzt, in zwei
					völlig getrennten Projekten jedoch nicht möglich.
				</P>
				<P>
					Das mag jetzt alles noch in Ordnung und verschmerzbar sein, jedoch ist man gezwungen,
					früher oder später, JavaScript einzusetzen. Also warum nicht gleich ganz auf PHP und Java verzichten
					und alles mit JavaScript programmieren? Seit der Einführung von Node.js, einer Runtime Environment
					für JavaScript, ist das möglich. Viele Libraries und Frameworks sind seitdem entstanden.
					Die bekannteste ist wohl React.js, die von Facebook/Meta entwickelt wurde und unter einem offenen
					Lizenzmodell verwendet werden kann.
				</P>
				<P>
					Bei React und anderen Frameworks wie Vue.js und einigen weiteren, wird der gesamte Webcontent
					mittels JavaScript erzeugt. Das heißt es gibt eine einzelne Einstigs-Node, also ein einzelnes
					&lt;div&gt; Evement, an das dann die gesamte App programmatisch angehängt wird. Auf diese Weise
					erhält man die vollständige Kontrolle über den Seiteninhalt und kann diesen bei Bedarf dynamisch
					verändern, Elemente hinzufügen oder entfernen und Daten ändern. Genau das also, was man bem
					servergenerierten Ansatz auch macht, nur eben auf dem Client.
				</P>
				<P>
					Ein weiterer Unterschied zur "herkömmlichen" Programmierung ist der komponentenzentrierte
					Programmieransatz/ Component Oriented Programming. Wie bei der Objektorientierung werden einzelne
					Komponenten einer Webseite in wiederverwendbare Einheiten gekapselt, die über Properties
					parametrisierbar sind. Man erhält so isolierte Ansichten einzelner Teile der Webseite und
					ist nicht gezwungen, große Quellcodedateien zu durchforsten. Mittels Templating, wie zum Beispiel
					beim PHP Framework Laravel, kann das auch erreicht werden, eine Trennung von JavaScript hat man so
					aber trotzdem nicht.
				</P>
				<P>
					Zudem ist ein komponentenzentrierter Ansatz bei der Programmierung mit PHP/Java nicht unbedingt von
					vornherein vorgesehen. Bei PHP gibt es auch ein 'Templating', aber nur mit Frameworks wie z.B.
					Laravel. In den Frontend Libraries und -Frameworks werden Webseiten von vornherein komplett in
					wiederverwendbare, parametrisierbare Einzelteile zerlegt. Man entwirft Bausteine, aus denen
					man dann, wie bei Lego, die Webseite zusammensetzt. Die Komponentenorientierung erlaubt also,
					wie bei der Objektorientierung, die isolierte Betrachtung einzelner Bauelemente.
				</P>
				<P>
					Auch Facebook/Meta, der Erfinder von React, hat ein paar Macken abgekriegt und so schaut man dann
					vielleicht lieber in Richtung Vue.js. Vue ist einfacher zu mastern. Man muss nicht so tief in
					JavaScript/TypeScript drin sein, um das volle Potenzial auszuschöpfen.
				</P>
				<P>
					Der grundsätzliche Unterschied zwischen Vue und React ist, dass man in Vue HTML injected und dafür
					Funktionen schreibt und in React der HTML Code Teil von JavaScript ist, ein Objekt, wie jedes andere
					auch. Man kann also in React HTML Code in eine Variable stecken oder aus einer Funktion zurückgeben
					und so beliebig einsetzen. Der andere Vorteil, den ich sehe, sind die nicht ganz leicht zu verstehenden
					Hooks, die einige Probleme im Zusammenhang mit verschachtelten Komponenten lösen und stärker
					funktionale Kapselung ermöglichen.
				</P>
			</DevBox>
		</>
	)
}