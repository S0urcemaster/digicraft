'use client'
import * as React from 'react'
import { ReactNode } from 'react'
import { Button } from '@blueprintjs/core'

export default function({children}: { children: ReactNode }) {

	return (
		<>
			{children}
			<Button text="test" />

		</>
	)
}