import * as React from 'react'
import Meta, {metas} from '../../components/content/Meta'
import {H1, H3, P} from '../../components/ui/Typography'
import {ExpandButtonBox} from '../../components/ui/Box'
import {default as ResumeGeneratorComponent} from '../../components/resumeGenerator/ResumeGenerator'
import {Spacer} from '../../components/ui/Layout'
import ContentLayout from '../../components/content/ContentLayout'
import {default as AppMenu} from '../../components/content/menu/App'

export default function ResumeGenerator(props: {}) {
	return (
		<>
			<Meta meta={metas.resumeGenerator}/>
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
				<H1>Lebenslaufgenerator</H1>
				<ExpandButtonBox buttonTitle={'Warum diese App?'}>
					<P first>
						test
					</P>
				</ExpandButtonBox>
				<Spacer height={20}/>
				<ResumeGeneratorComponent/>
			</ContentLayout>
		</>
	)
}