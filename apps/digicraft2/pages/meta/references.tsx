import * as React from 'react'
import {Box} from '../../components/ui/Box'
import {H1, H3, P} from '../../components/ui/Typography'
import ContentLayout from '../../components/content/ContentLayout'
import {default as MetaMenu} from '../../components/content/menu/Meta'

export default function References() {
	return (
		<>
			<ContentLayout left={
				<>
					<MetaMenu />
				</>
			} right={
				<>
				</>
			}
			>
				<H1>Quellenangaben</H1>
				<Box>
					<H3 first>Texte</H3>
					<P>
						Es gibt kein neues Wissen ohne die Verwertung von vorherigem. Das Internet erlaubt die Verwertung
						vielfältiger Quellen und so ist es schwierig, alle Texte, Videos und Wikipedia Artikel anzuführen.
						Im Prinzip musste man jede Quelle seit der ersten Information, die man erhalten hat, angeben,
						da jedes Wissen, das man wiedergibt, nicht nur dem behandelten Kontext und der damit verbundenen
						Quellen entspringt, sondern dort auch jede andere erlangte Information mitschwingt.
						Um das ausufernde Thema abzukürzen sei gesagt, dass meine Schreibarbeiten nicht den Anspruch haben
						sollen
						wissenschaftlich korrekt und relevant zu sein. Je mehr neues Wissen sich ansammelt, umso mehr
						wird altes widerlegt oder muss einer näheren Prüfung auf Vollständigkeit nachgeben.
						Somit kann das Fehlen von Quellenangaben und das damit einherziehende Misstrauen dazu anregen, die
						dargestellten Sachverhalte einer eigenen, logischen Prüfung zu unterziehen. Für einen modernen
						Schreibstil kann das bedeuten, dass lediglich die Logik das Maß für Richtigkeit ist und
						nicht die Ehrwürdigkeit erlangter Würden.
					</P>
					<H3>Sprüche</H3>
					<P>
						Einige der Sprüche und Zitate, wie z.B. "Eine wahre Aussage wird nicht wahrer, wenn ein hohes Tier sie
						spricht.", sind von mir
						und ich verwende Zitate und Sprüche generell ohne Quellenangabe. In den sozialen Medien werden oft
						Zitate
						angeführt und dahinter "Albert Einstein" geschrieben, um der Aussage Nachdruck zu verleihen.
						Wer also die <i>echte</i> Quelle für ein Zitat wissen und nicht dem Zitierer vertrauen möchte,
						kann die Quelle leicht in einer Suchmaschine recherchieren. Die Häufigkeit übereinstimmender
						Suchergebnisse kann dann ein zuverlässiger Nachweis auf den Urheber sein.
						Wer ein noch lebender Urheber eines Zitates ist und sich in seinem Urheberrecht verletzt fühlt,
						kann berechtigterweise die Entfernung des Zitats aus meiner Liste fordern.
						Ansonsten soll jeder selbst angeregt sein, die Aussage eines Spruchs zu reflektieren.
					</P>
				</Box>
			</ContentLayout>
		</>
	)
}