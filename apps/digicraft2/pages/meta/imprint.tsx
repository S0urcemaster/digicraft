import * as React from 'react'
import {Box} from '../../components/ui/Box'
import {H1, P} from '../../components/ui/Typography'
import Meta, {metas} from '../../components/content/Meta'
import ContentLayout from '../../components/content/ContentLayout'
import {default as MetaMenu} from '../../components/content/menu/Meta'

export default function Imprint() {
	return (
		<>
			<Meta meta={metas.imprint}/>
			<ContentLayout left={
				<>
					<MetaMenu />
				</>
			} right={
				<>
				</>
			}
			>
				<H1>Impressum</H1>
				<Box>
					<P first>
						Dies ist eine private Homepage. Es werden keine Produkte oder Dienstleistungen zum Verkauf angeboten.
						Auf ein Impressum wird daher verzichtet.
					</P>
					<P>
						Sebastian Teister<br />
						Metzingen
					</P>
				</Box>
			</ContentLayout>
		</>
	)
}