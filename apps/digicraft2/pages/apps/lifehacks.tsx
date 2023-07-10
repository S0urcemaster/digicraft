import * as React from 'react'
import {H1, H3} from '../../components/ui/Typography'
import Meta, {metas} from '../../components/content/Meta'
import ContentLayout from '../../components/content/ContentLayout'
import {default as AppMenu} from '../../components/content/menu/App'

type Props = {};

export default function Lifehacks(props: Props) {
	return (
		<>
			<Meta meta={metas.lifeHacks}/>
			<ContentLayout left={
				<>
					<AppMenu/>
				</>
			} right={
				<>
					<H3 first>Idee</H3>
				</>
			}
			>
				<H1>Geklaute geklaute Life Hacks</H1>
				<ul>
					<li>Habe ein klares visuelles Bild von deinem Ziel.</li>
					<li>Jeden Morgen 30 Minuten ein Buch lesen.</li>
					<li>Am Morgen als erstes eine unangenehme Aufgabe erledigen.</li>
					<li>Noch eine kleine Einheit mehr machen als man vor hatte. (Erprobt!)</li>
					<li>Morgens früher aufstehen als man muss.</li>
					<li>Schreibe positive Ereignisse das Jahr über auf und fülle ein Glas damit.</li>
					<li>Warte ein paar Monate bevor du anderen von einem neuen Lifestyle erzählst.</li>
					<li>Lobe öffentlich. Kritisiere privat.</li>
					<li>Wenn du dich strecken willst, steh' auf und streck dich ganz.</li>
					<li>Hast du kalte Hände oder Füße? Geh' so lange spazieren, bis sie warm sind! (Erprobt!)</li>
				</ul>
			</ContentLayout>
		</>
	)
}