'use client'

import { Elevation, Section, SectionCard } from '@blueprintjs/core'
import React from 'react'

export function News() {
	return (
		<Section
			collapsible={true}
			compact={false}
			elevation={Elevation.TWO}
			subtitle={"Ocimum basilicum"}
			title="Basil"
		>
			<SectionCard padded={true}>{'card test'}</SectionCard>
		</Section>
	)
}