import * as React from 'react'
import {H1, H3, P} from '../components/ui/Typography'
import {Box} from '../components/ui/Box'
import {HR, Tooltip} from '../components/ui/Layout'
import Meta, {metas} from '../components/content/Meta'
import ContentLayout from '../components/content/ContentLayout'

const items = [
	['Autophagie',
		<P>
			Autophagie oder Autophagozytose <Tooltip title={'Wikipedia'}>"bezeichnet den Prozess in Zellen, mit dem sie
			eigene Bestandteile
			abbauen und verwerten. Dies reicht von fehlgefalteten Proteinen bis zu ganzen Zellorganellen."</Tooltip>
		</P>,
	],
	['Intervallfasten',
		<P>
			Intervallfasten ist eine Ernährungsweise, bei der die Zahl der Mahlzeiten reduziert wird
			und im Tagesrhytmus eine lange Pause zwischen den Mahlzeiten eingehalten wird.
			Dies soll die Autophagie, also die Zellregeneration fördern. Intervallfasten ist gut
			mit ketogener Ernährung umzusetzen, da fettreiche Ernährung länger satt macht.
		</P>,
	],
	['Ketogene Ernährung',
		<P>
			Ketogene Ernährung oder ketogene Diät bezeichnet eine Ernährungsweise, bei der weitgehend auf
			Energiegewinnung aus Kohlenhydraten verzichtet und stattdessen Fett als Energielieferant
			herangezogen wird. Ketogene Ernährung ist unter Umständen nicht für jeden geeignet.
			Vorteile werden in einem niedrigen Insulinspiegel gesehen, der Diabetes vorbeugt.
		</P>,
	],
]

export default function Glossary() {
	return (
		<>
			<Meta meta={metas.glossary}/>
			<ContentLayout left={
				<>
				</>
			} right={
				<>
				</>
			}
			>
				<H1>Glossar</H1>
				{items.sort((a: any, b: any) => {
					return a[0].localeCompare(b[0])
				}).map((i: any, idx: number) => (
					<div key={idx}>
						<H3>{i[0]}</H3>
						{i[1]}
					</div>
				))}
			</ContentLayout>
		</>
	)
}