import * as React from 'react'
import Meta, {metas} from '../../components/content/Meta'
import {H1, H3, P} from '../../components/ui/Typography'
import {default as DeciderCompontent} from '../../components/decider/Decider'
import DeciderContextProvider from '../../components/decider/deciderContext'
import ContentLayout from '../../components/content/ContentLayout'
import {default as AppMenu} from '../../components/content/menu/App'

export default function Decider(props: {}) {
	return (
		<>
			<Meta meta={metas.decider}/>
			<ContentLayout left={
				<>
					<AppMenu/>
				</>
			} right={
				<>
					<H3 first>Idee</H3>
					<P>
						Der Entscheider soll einem Entscheidungen abnehmen.
					</P>
					<P>
						Man kann direkt aus einer Liste das erste Zufallsergebnis nehmen oder die gewählten nach und
						nach ausschließen, bis nur noch 1 übrigbleibt.
					</P>
				</>
			}
			>
				<H1>Der Entscheider</H1>
				<DeciderContextProvider>
					<DeciderCompontent/>
				</DeciderContextProvider>
			</ContentLayout>
		</>
	)
}