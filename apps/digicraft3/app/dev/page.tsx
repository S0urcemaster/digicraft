
import * as React from 'react'
import { Dev } from './components/Dev'
import { Page } from '../../components/page/Page'
import * as wasm from "game-of-life"

export default function() {
	return (
		<Page>
			<Dev />
		</Page>
	)
}
