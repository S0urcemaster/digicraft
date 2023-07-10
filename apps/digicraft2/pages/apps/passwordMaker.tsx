import {Spacer} from '../../components/ui/Layout'
import {B, H1, H2, H3, P} from '../../components/ui/Typography'
import {Box} from '../../components/ui/Box'
import Generator from '../../components/pwdgen/Generator'
import Link from '../../components/ui/Link'
import {routes} from '../../lib/routes'
import _01 from '/public/docs/longPass/01.png'
import _02 from '/public/docs/longPass/02.png'
import _03 from '/public/docs/longPass/03.png'
import _04 from '/public/docs/longPass/04.png'
import _05 from '/public/docs/longPass/05.png'
import PropImage from '../../components/ui/PropImage'
import {ExpandButtonBox} from '../../components/ui/Box'
import Meta, {metas} from '../../components/content/Meta'
import * as React from 'react'
import ContentLayout from '../../components/content/ContentLayout'
import {default as AppMenu} from '../../components/content/menu/App'

export default function PasswordMaker() {

	return (
		<>
			<Meta meta={metas.passMaker}/>
			<ContentLayout left={
				<>
					<AppMenu/>
				</>
			} right={
				<>
					<H3 first>Idee</H3>
					<P>
						Der Pass Maker soll mithelfen, überholte Passwortregeln zu erneuern und lesbare, gut zu merkende
						Passwörter zu erzeugen.
					</P>
				</>
			}
			>
				<H1>Pass Maker</H1>

				<Generator/>

				<Spacer height={20}/>
				<H2>Sicherheitshinweise</H2>
				{/*<P>*/}
				{/*	Lies bitte die allgemeinen Hinweise zur <Link*/}
				{/*	href={routes.blog.passwordSecurity}>Passwortsicherheit</Link>.*/}
				{/*</P>*/}
				<P>
					Eine Webseite kann feststellen - zumindest näherunsweise - welches Passwort Sie aussuchen und
					kopieren.
					Zusätzlich zu den Informationen, die ihr Browser preis gibt, könnte der Betreiber eines
					Passwortgenerators
					Daten sammeln, die bei Hacks auf bestimmte Ziele verwendet werden könnten.
					Zudem könnte der Anbieter eines Generators nur bestimmte Kombinationen ausgeben, um einen
					verkleinerten Passwortpool
					für einen etwaigen Angriff zu haben.
				</P>
				<P>
					Auf dieser Webseite werden keine Nutzungsdaten gespeichert.
					Es gibt einen Pool aus 160.000 Wörtern mit mehr oder weniger zahlreichen Kombinationen,
					je nach Einstellung des Generators.
					Verwenden Sie trotzdem
					die generierten Passwörter nur in zumindest leicht abegänderter Form. Markieren und kopieren Sie
					das Passwort nicht, sondern tippen Sie es ab.
				</P>
				<P>
					Für besonders sicherheitsrelevante Bereiche ist ein Online-Generator möglicherweise nicht geeignet.
					Bei privaten Accounts,
					bei denen Sie sich ein Passwort lieber merken als aufschreiben oder im Browser speichern möchten,
					kann jedoch niemand wissen, woher Sie ein Passwort haben, noch für welchen Account Sie es nutzen.
				</P>
				<P>
					Deshalb gibt es hier auch Comfortfunktionen, etwa, um bestimmte Passwörter zu kopieren.
					In den Developer-Tools des Browsers
					(<kbd>F12</kbd> -&gt; Netzwerkanalyse) können Sie beobachten, dass weder beim Klick auf Kopieren
					noch an anderer Stelle
					Daten an den Server gesendet werden (PUT, POST), sondern immer nur vom Server geholt werden (GET).
					Auch bei GET werden keine Daten in Form von Request Parametern gesendet.
				</P>
				{/*<P>*/}
				{/*	Zum Testen oder zur lokalen Verwendung gibt es eine Funktion, um eine große Datei mit sehr vielen*/}
				{/*	Passwortvorschlägen in Textform downzuloaden.*/}
				{/*</P>*/}
				<P>
					<B>Wenn Sie sich ein Passwort nur merken und es nirgends aufschreiben, sollten sie es gelegentlich
						verwenden,
						um es nicht zu vergessen.</B>
				</P>
				<P>
					<B>Die hier generierten Passwörter werden nicht gespeichert. Wenn Sie die Seite schließen oder neu
						laden
						können erstellte Passwörter nicht wieder abgerufen werden.</B>
				</P>
				<Spacer height={20} />
				<H2>Anleitung</H2>
				<P>
					Long Pass Maker ist kein herkömmlicher Passwortgenerator, der ein Passwort aus zufälligen
					Zeichen erzeugt, sondern es soll ein möglichst gut zu merkendes Passwort, eine 'Passphrase', aus
					Wörtern gebildet werden.
				</P>
				<P>
					Die Wörter entstammen einer Wörterdatenbank mit knapp 160.000 Wörtern, sortiert nach Wortart:
				</P>
				<table style={{fontSize: 'smaller'}}>
					<thead>
					<tr>
						<td>Wortart</td>
						<td>Anzahl</td>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td>Adjektive</td>
						<td>17.000</td>
					</tr>
					<tr>
						<td>Adverben</td>
						<td>1.600</td>
					</tr>
					<tr>
						<td>Konjunktionen</td>
						<td>60</td>
					</tr>
					<tr>
						<td>Eigennamen</td>
						<td>3.200</td>
					</tr>
					<tr>
						<td>Nomen</td>
						<td>120.000</td>
					</tr>
					<tr>
						<td>Partikel</td>
						<td>60</td>
					</tr>
					<tr>
						<td>Präpositionen</td>
						<td>120</td>
					</tr>
					<tr>
						<td>Pronomen</td>
						<td>60</td>
					</tr>
					<tr>
						<td>Verben</td>
						<td>14.000</td>
					</tr>
					</tbody>
				</table>
				<P>
					Die grammatikalischen Fähigkeiten der vorliegenden Version sind eingeschränkt, deshalb
					können die erzeugten Phrasen nur Vorschläge machen und Ideen geben. Die Wörter
					sind Teil des deutschen Wortschatzes und sind nicht gefiltert.
				</P>
				<H3 nohr>Zwischenspeicher</H3>
				<P>
					Bei jeder Änderung wird das erzeugte Passwort der Liste oben hinzugefügt und kann mit dem
					Button rechts kopiert werden.
				</P>
				<H3 nohr>Entwurfsfeld</H3>
				<P>
					Zur Verfeinerung kann das gerade bearbeitete Passwort im Entwurfsfeld bearbeitet
					werden, so dass man nicht für jedes Zeichen eine Formularzeile erzeugen muss.
					Änderungen im unteren Generierungsbereich überschreiben jedoch das Entwurfsfeld.
				</P>
				<H3 nohr>Presets</H3>
				<P>
					Um die Arbeit zu erleichetrn, gibt es einige vergefertigte Presets, die über das Auswahlfeld
					abgerufen werden können.
				</P>
				<H3 nohr>Generierungsbereich</H3>
				<P>
					Im Generierungsbereich werden einzelne Wörter zufällig aus der jeweiligen Wortarttabelle geladen.
				</P>
				<P>
					Im ersten Auswahlfeld einer Zeile kann die Wortart ausgewählt werden.
					Das zweite Feld bietet eine Auswahl an Deklinationen, wenn vorhanden.
					Über den Reload-Schalter kann man ein anderes, zufälliges Wort abrufen.
					Danach gibt es ein Bearbeitungsfeld, wo man das einzelne Wort anpassen kann.
					Rechts gibt es Schalter zum Hinzufügen, Löschen und Verschieben eines Wortes innerhalb der Liste.
				</P>

				<H2>Anwendungsbeispiel</H2>
				<P>
					Ich wähle ein Preset aus der Liste aus: Nomen 3.
				</P>
				<PropImage src={_01} alt={'longPass doc image 01'}/>
				<P>
					Das erste Wort gefällt mir nicht und ich klicke so oft auf den Reload Button, bis es passt.
				</P>
				<PropImage src={_02} alt={'longPass doc image 02'} width={'100%'}/>
				<P>
					Dann setze ich einen Artikel vor den Lux, wähle für die zweite Zeile die Wortart Verb und würfle
					so oft neu, bis es mir gefällt.
				</P>
				<PropImage src={_03} alt={'longPass doc image 03'} width={'100%'}/>
				<P>
					Für die Plastiktüte gibt es einen Genetiv Singular. In der vierten Zeile soll eine Präposition
					stehen.
				</P>
				<PropImage src={_04} alt={'longPass doc image 04'} width={'100%'}/>
				<P>
					So weit so gut! Im Entwurfsfeld lösche ich dann noch die Leerzeichen, passe Groß-/ Kleinschreibung an
					und fertig. DerLuxEntstürzenderPlastiktüteAbzüglichKonkursmasse. Entropie: 125 Bit mit Wörterbuch.
					Aufwand: 3 Minuten, und nach wenigen Tagen Verwendung kann man den Zettel mit dem Passwort
					zuverlässig wegwerfen.
				</P>
				<PropImage src={_05} alt={'longPass doc image 05'} width={'100%'}/>
			</ContentLayout>
		</>
	)

}