import * as React from 'react'
import {H1, P} from '../../components/ui/Typography'
import {Box} from '../../components/ui/Box'

export default function Notes() {
	return (
		<>
			<H1>Hinweise</H1>
			<Box>
				<P first>
					Die vorliegenden Texte spiegeln nur bedingt die Meinung des Autors wider. Vielmehr dienen sie der
					eigenen Reflektion und der des Lesers, der angeregt sei, die aufgestellten Standpunkte zu widerlegen.
				</P>
				<P>
					Gerade, was die eigene Meinung angeht, kann das etwas sein, mit dem man sich leicht und schnell mal die
					Finger verbrennen kann. Das soll, kann und darf aber nicht der Grund sein, auf eine Meinung zu
					verzichten. Vielmehr muss der Umgang damit, seitens Senders und Empfängers auf dem Wissen um
					eine gewisse Fehlertoleranz beruhen.
				</P>
				<P>
					Der Sprachgebrauch selbst gibt vor, in welcher Weise mit der Meinung umzugehen ist, in der Art nämlich,
					dass man sich eine Meinung bildet, diese also etwas ist, das durch eigene Anstrengung entsteht
					und ständig im Werden begriffen ist.
					Wie jedes andere
					Werk, dass nicht an einem Tag ensteht, sollte auch die eigene Meinung etwas Veränderliches und
					Bewegliches sein und das Unvermögen, auch im zeitlichen Sinne, sich mit seinen und anderen
					Ansichten auseinanderzusetzen, nicht der Grund, darauf zu bestehen.
				</P>
				<P>
					Es sei auch darauf hingewiesen, dass längst nicht jede Information neu ist, aber zumindest der
					Anspruch gelten soll, neuartig präsentiert zu sein. Wissen ist begrenzt auf ein einzelnes
					Individuum, für den einen bekannt oder sogar überholt, für den anderen lesenswert.
				</P>
			</Box>
		</>
	)
}