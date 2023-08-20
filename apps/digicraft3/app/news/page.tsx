import * as React from 'react'
import { Page } from '../../components/Page'
import { News } from './components/News'

export default function() {
	return (
		<Page center width={1080}>
			<News />
		</Page>
	)
}