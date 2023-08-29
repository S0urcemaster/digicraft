'use client'
import * as React from 'react'
import { H1, H3 } from '@blueprintjs/core'
import { Page } from '../../components/page/Page'

export default function() {
	return (
		<Page center>
			<H1>Digi Craft Jobs</H1>
			<div>
				<H3>news-columns</H3>
				<p>
					Ausrichtung der Block-Starthöhe bei news-columns, so dass größer geschriebene Startwörter
					über die Oberkante ragen und sich alle anderen Zeilen nicht gegeneinander verschieben.
					Möglichst mit CSS.
				</p>
			</div>
			<div>
				<H3>GameOfLifeCanvas</H3>
				<p>
					Trennen der GameOfLife und Noise Grafik in 2 Komponenten.
				</p>
			</div>
		</Page>
	)
}