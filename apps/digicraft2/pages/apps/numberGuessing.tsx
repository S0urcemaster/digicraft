import * as React from 'react'
import {H1, H3, P} from '../../components/ui/Typography'
import NumberGuess from '../../components/numberguess/NumberGuess'
import {Box} from '../../components/ui/Box'
import Meta, {metas} from '../../components/content/Meta'
import ContentLayout from '../../components/content/ContentLayout'
import {default as AppMenu} from '../../components/content/menu/App'
import {Spacer} from '../../components/ui/Layout'

export default function NumberGuessing() {
	return (
		<>
			<Meta meta={metas.numberGuessing}/>
			<ContentLayout left={
				<>
					<AppMenu/>
				</>
			} right={
				<>
					<H3 first>Idee</H3>
					<P>
						Zahlenraten ist eine von den ersten Programmierübungen, die man lernen kann.
					</P>
					<P>
						In der vorliegenden Version muss man einen zufällig erstellten Code erraten. Falsche Eingaben
						erscheinen als "Rot", richtige Eingaben als "Grün". Nach richtig "geratenem" Code folgt das nächste
						Level mit einer Stelle mehr.
					</P>
					<P>
						Die Übung besteht darin, sich mit steigendem Level zu merken, welche Zahlen man bereits gedrückt hat.
					</P>
				</>
			}
			>
				<H1>Zahlenraten Reloaded</H1>
				<P>
					Errate die Reihenfolge der Zahlen! (Erst Münzen einwerfen ;) )
				</P>
				<Spacer height={20}/>
				<NumberGuess/>
			</ContentLayout>
		</>
	)
}