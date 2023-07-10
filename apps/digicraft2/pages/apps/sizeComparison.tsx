import * as React from 'react'
import {H1, H3, P} from '../../components/ui/Typography'
import ContentLayout from '../../components/content/ContentLayout'
import {default as AppMenu} from '../../components/content/menu/App'

type Props = {}

export default function SizeComparison(props: Props) {
	return (
		<>
			<ContentLayout left={
				<>
					<AppMenu/>
				</>
			} right={
				<>
					<H3 first>Idee</H3>
				</>
			}
			>
				<H1>Größenvergleich</H1>
				<P>
					Veranschaulichung von Größen, z.B. Deutschland - China, CO2 Ausstoß Deutschland USA.
				</P>
			</ContentLayout>
		</>
	)
}