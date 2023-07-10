import * as React from 'react'
import Meta, {metas} from '../../components/content/Meta'
import {B, H1, H2, H3, P} from '../../components/ui/Typography'
import {Box, ExpandButtonBox} from '../../components/ui/Box'
import {default as NotationTrainerComponent} from '../../components/notationTrainer/NotationTrainer'
import {Spacer} from '../../components/ui/Layout'
import ContentLayout from '../../components/content/ContentLayout'
import {default as AppMenu} from '../../components/content/menu/App'

export default function NotationTrainer(props: {}) {
	return (
		<>
			<Meta meta={metas.notationTrainer}/>
			<ContentLayout left={
				<>
					<AppMenu/>
				</>
			} right={
				<>
					<H3 first>Idee</H3>
					<P first>
						Als Anfänger, der im Schach weiterkommen will, muss man zum einen Taktiken kennen, sehen und anwenden,
						zum anderen braucht man Eröffnungswissen, um Zeit zu sparen.
						Taktikwissen kann man sich in Spielanalysen und Taktikaufgaben aneignen. Eröffnungen muss man
						studieren und einüben, sozusagen, auswendiglernen.
					</P>
					<P>
						Wenn man Eröffnungen studieren möchte, muss man Transkripte lesen können. In den größeren,
						ausgefeilten Schachportalen wird einem das größtenteils abgenommen, was den Lerneffekt
						aber nicht unbedingt verstärkt.
					</P>
					<P>
						Im Zuge der Programmierung dieser App, durch das Debugging, habe ich jetzt mal die Italienische
						Eröffung auswendig gelernt, und zwar auch deren Notation:<br/>
						<B>1. e2-e4 e7-e5<br/>
							2. Sg1-f3 Sb8-c6<br/>
							3. Lf1-c4 Lf8-c5<br/></B>
					</P>
					<P>
						Das hätte ich jetzt schneller nachgespielt, als ich es aufgeschrieben habe. Nichtsdestotrotz
						stützen sich die beiden unterschiedlichen Anschauungen im Gedächtnis. Ich wusste, der schwarze
						Läufer muss nach c5 und damit musste es der schwarze Königsläufer auf f8 sein.
					</P>
					<P>
						Die Aufgabe, die der Chess Notation Trainer also erfüllen soll, ist, zum einen Transkripte
						mühelos, bzw. sogar im Kopf nachspielen zu können, zum anderen auch die Rechenarbeit bei der
						Auswertung möglicher Züge zu erleichtern, wenn viele Züge Berücksichtigung finden müssen.
						Man kann sich nur schwierig ein Schachfeld in vielen Variationen bildlich vorstellen. Wenn man aber
						dazu
						die jeweiligen Transkripte im Kopf hat, kann das die Merkfähigkeit sehr verbessern.
						Dazu muss man Transkripte nicht nur lesen, sondern auch 'schreiben' können.
					</P>
				</>
			}
			>
				<H1>Chess Notation Trainer</H1>
				<NotationTrainerComponent/>
				<Spacer height={30}/>
				<H2 nohr>Anleitung</H2>
				<P>
					Der Chess Notation Trainer soll ein Training bieten, um die jeweiligen Schachfelder auswendig zu
					können und nebenbei grundlegende, häufige Eröffnungen zu lernen und ein Gefühl dafür zu bekommen.
				</P>
				<P>
					Es gibt 2 Modi:
				</P>
				<H3 nohr>Mausmodus - Transkript lesen</H3>
				<P>
					Beim Kennenlernen werden die jeweiligen Eröffnungen mit sichtbarer Notation
					mit der Maus nachgesielt. Je häufiger man eine Eröffnung nachspielt, umso seltener wird
					man auf die Notation schauen müssen und je besser wird die Zeit.
				</P>
				<H3 nohr>Textmodus - Zugeingabe über Tastatur</H3>
				<P>
					Der Textmodus ist schwieriger.
					Beim Nachspielen werden die gewählte Zugfolge mit nicht sichtbarer Notation
					durch Eingabe des Zuges in das Textfeld nachgespielt. Durch die manuellen Eingaben des
					Zuges lernt man die entsprechenden Felder kennen.
					Wenn man das Transkript noch nicht auswendig kann, kann man sich die Züge visuell anzeigen lassen.
					Man muss dann das Start- und Endfeld eintippen, z.B. e2-e4. Die Figur, wie bei
					Sg1-f3, muss man nicht mit angeben. die Rochade ist mit dem Königszug anzugeben, also z.B. e1-g1 und
					nicht mit der Rochadenotation 0-0.
				</P>
				<P>
					In beiden Modi gibt es eine Zeitkontrolle, wodurch man motiviert wird, sich zu verbessern.
					Die Zeit beginnt mit dem ersten Zug und endet mit dem letzten.
				</P>
				<P>
					In den Listenfeldern kann man die gewünschte Eröffnung auswählen und anzeigen.
				</P>
				<P>
					Auf der Einstellungsseite kann man das Brett einmalig oder nach jedem Zug automatisch drehen,
					was einem die jeweils weiße oder schwarze Sicht einer Eröffnung gibt.
				</P>
				<P>
					Der Fortschritt in den jeweiligen Transkripten und die Einstellungen werden im Browser Storage
					gespeichert.
					Da sich die App im Ausbau befindet, kann z.Zt. nicht sichergestellt werden, dass Fortschritte über
					ein Update hinaus erhalten bleiben.
				</P>
			</ContentLayout>
		</>
	)
}