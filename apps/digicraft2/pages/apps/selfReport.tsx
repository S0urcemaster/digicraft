import * as React from 'react'
import {H1, H3, P} from '../../components/ui/Typography'
import {default as SelfReportComponent} from '../../components/selfReport/selfReport'
import ContentLayout from '../../components/content/ContentLayout'
import {default as AppMenu} from '../../components/content/menu/App'

type Props = {};

export default function SelfReport(props: Props) {
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
				<H1>Selbsteinschätzung (Idee)</H1>
				<P>
					Schätze dich selbst ein und vergleiche mit früheren Bewertungen.
				</P>
				<SelfReportComponent/>
			</ContentLayout>
		</>
	)
}