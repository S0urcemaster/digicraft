'use client'
import * as React from 'react'
import { H1 } from '@blueprintjs/core'
import { Page } from '../../components/page/Page'

export default function() {
	return (
		<Page center>
			<H1>Digi Craft: Pure Innovation</H1>
			<div className={'news-columns'} style={{marginBottom: 30}}>
				<p>
					<span style={{fontSize: 20}}>Gerade</span> ist Diablo 4 rausgekommen. Wer's nicht kennt: eine den westlichen Horizont überspanndende
					Computerspielserie mit vielen Fans seit dem ersten Teil. Seit dem Erfolg der ersten beiden Teile
					sind Wettbewerber und Nachahmer im Genre der Action RPGs (Role Playing Games) hinzugekommen
					und ich muss leider sagen, dass der vierte Teil nicht mehr denselben Sog entwickelt wie noch
					die ersten beiden Teile. Bereits das Spielen des dritten Teils war mehr mit Wünschen verbunden, als
					das Spielerlebnis hergegeben hat. Was war passiert?
				</p>
				<p>
					Nun, die Innovationen im dritten Teil wurden von einer breiten Mehrheit der Fans abgelehnt. Gerade
					die ersten beiden Teile werden deshalb gleichermaßen bejubelt, wie sie praktisch identisch sind.
					Mit dem zweiten Teil gab es lediglich etwas bessere Grafik und ein paar Komfortfunktionen.
				</p>
				<p>
					Im dritten Teil wurde die Grafik nochmals verbessert und versucht, ein noch breiteres Publikum
					zu begeistern. In mancherlei Hinsicht ist das auch gelungen, aber die Fans der ersten beiden Teile
					wandten sich angewidert ab. Steigende Kommerzialisierung hat zur Folge, dass sich Spitzen
					abschwächen. Wenn man viele Anforderungen erfüllen muss, schleift man eben so lange ab,
					bis alle unzufrieden sind.
				</p>
				<p>
					<span style={{fontSize: 20}}>Und</span> so ist die Spielerfahrung dann eben auch im vierten Teil:
					Es ist Diablo, aber nicht facettenreich wie ein Diamant, sondern glattpoliert wie eine Murmel.
					Es fehlt ganz einfach Innovation! Für alle, die mit dem vierten Teil zum ersten mal mit so einem
					Spiel Erfahrungen machen, ist das eher weniger gewichtig, aber für alle Fans muss eben etwas
					Neues dazu kommen, das Alte möglichst übertroffen werden. Warum ist das nicht gelungen?
				</p>
			</div>
			<div className={'news-columns'}>
			</div>
		</Page>
	)
}