'use client'
import * as React from 'react'
import { Page } from '../../components/page/Page'
import { TextBud } from './components/TextBud'
import { TextBudContextProvider } from './components/TextBudContext'

export default function() {

	return (
		<Page center>
			<TextBudContextProvider>
				<TextBud />
			</TextBudContextProvider>
		</Page>
	)
}