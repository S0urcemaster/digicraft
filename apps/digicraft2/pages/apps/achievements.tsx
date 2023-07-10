import * as React from 'react'
import {H1, H3, P} from '../../components/ui/Typography'
import {default as AchievementsComponent} from '../../components/achievements/Achievements'
import {Spacer} from '../../components/ui/Layout'
import Meta, {metas} from '../../components/content/Meta'
import ContentLayout from '../../components/content/ContentLayout'
import {default as AppMenu} from '../../components/content/menu/App'

export default function Achievements() {
	return (
		<>
			<Meta meta={metas.achievements}/>
			<ContentLayout left={
				<>
					<AppMenu/>
				</>
			} right={
				<>
					<H3 first>Idee</H3>
					<P>
						Sammle Erfolge für Motivation. Sammle mehr Erfolge für mehr Motivation!
						Schau dir deine Erfolge an, wenn du unmotiviert bist.
						<br/>(Schreibe in das "Effekt"-Feld, was von nun an oder seitdem besser ist.)
					</P>
				</>
			}
			>
				<H1>Erfolge</H1>
				<AchievementsComponent/>
			</ContentLayout>
		</>
	)
}