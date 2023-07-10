import * as React from 'react'
import Meta, {metas} from '../../components/content/Meta'
import ContentLayout from '../../components/content/ContentLayout'
import {H1, H3, P} from '../../components/ui/Typography'
import {default as AppMenu} from '../../components/content/menu/App'
import WorktimeContextProvider from '../../components/worktime/worktimeContext'
import {default as WorktimeComponent} from '../../components/worktime/Worktime'
import Link from 'next/link'
import {routes} from '../../lib/routes'
import {globals} from '../../lib/globals'
import {useLocalStorage} from '../../lib/localStorageContext'

export default function Worktime() {
	const {brightness} = useLocalStorage()
	return (
		<>
			<Meta meta={metas.worktime}/>
			<ContentLayout left={
				<>
					<AppMenu/>
				</>
			} right={
				<>
					<H3 first>Idee</H3>
					<P>
						Die Jahresarbeitszeit von ~220 Stunden, aufgeteilt auf jeden Tag des Jahres, ergibt 4,8 Stunden pro Tag.
						Bei einer täglichen Arbeitszeit von 5 Stunden verbleiben 14 Tage Freizeit.
					</P>
					<P>
						Durch Mehrstunden am Tag können arbeitsfreie Zeiten und Tage geschaffen werden. So können z.B. Regentage
						besser genutzt und Sonnentage mehr ausgenutzt werden.
					</P>
					<P>
						Warum nicht am Sonntag arbeiten, wenn nix los ist und dafür einen Werktag entspannt mit Shoppen
						verbringen? Genauso der Samstag, wenn man im Stress versinkt, wenn alle gleichzeitig die Läden
						stürmen.
					</P>
				</>
			}
			>
				<H1>Arbeitszeiterfassung nach neuem Arbeitszeitmodell</H1>
				<WorktimeContextProvider>
					<WorktimeComponent/>
				</WorktimeContextProvider>
			</ContentLayout>
		</>
	)
}