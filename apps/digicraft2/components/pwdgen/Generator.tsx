import * as React from 'react'
import {useState} from 'react'
import {Outer as OuterCasing, Separator} from '../ui/Casing'
import Panel from './Panel'
import {RowsProvider} from './pwdgenContext'
import Display from './Display'

type Props = {}

export default function Generator(props: Props) {

	const [displayHeight] = useState(200)
	const [panelHeight] = useState(550)

	return (
		<OuterCasing height={displayHeight +panelHeight +40} lightColor={'#dddddd'} darkColor={'#999999'} borderWidth={3}>
			<RowsProvider>
				<Display height={displayHeight} />
				<Separator/>
				<Panel panelHeight={panelHeight} />
			</RowsProvider>
		</OuterCasing>
	)
}