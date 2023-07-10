import * as React from 'react'
import {Box} from '../../components/ui/Box'
import {H1, P} from '../../components/ui/Typography'
import ContentLayout from '../../components/content/ContentLayout'
import {default as MetaMenu} from '../../components/content/menu/Meta'

export default function Warranty() {
	return (
		<>
			<ContentLayout left={
				<>
					<MetaMenu />
				</>
			} right={
				<>
				</>
			}
			>
				<H1>Eingeschränkte Gewährleistung</H1>
				<Box>
					<P first>
						Wer weiß, dass er nichts weiß, weiß auch, dass man manchmal schrecklich dumm sein kann.
						Das sollte man stets auch vom klügsten Menschen annehmen, den man kennt.
						Man kann nicht genug den eigenen Kopf anstrengen und nie genug dazu aufrufen und man sollte sich an
						das an die Erkenntnis der eigenen Dummheit anschließende Schamgefühl gewöhnen und dazu verwenden,
						eines der gestapelten Rösser, auf denen man sitzt, zum Ausruhen in den Stall zu stellen und ihm
						dort einen Witz erzählen.
					</P>
				</Box>
			</ContentLayout>
		</>
	)
}