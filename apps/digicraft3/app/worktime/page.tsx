import * as React from 'react'
import { Page } from '../../components/page/Page'
import Worktime from './components/Worktime'
import WorktimeContextProvider from './components/worktimeContext'

export default function () {
	return (
		<Page>
			<WorktimeContextProvider>
				<Worktime/>
			</WorktimeContextProvider>
		</Page>
	)
}