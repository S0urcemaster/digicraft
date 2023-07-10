import * as React from 'react'
import ContentLayout from '../../components/content/ContentLayout'
import {default as SourceMenu} from '../../components/content/menu/Source'
import Source from '../../components/source/Source'

export default function Decider() {
	return (
		<>
			<ContentLayout left={
				<>
					<SourceMenu/>
				</>
			}
			>
				<Source project={'decider'} />
			</ContentLayout>
		</>
	)
}