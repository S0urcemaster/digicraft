import {H1, H2, H3, P} from '../components/ui/Typography'
import ExternalLink from '../components/ui/ExternalLink'
import Link from '../components/ui/Link'
import {routes} from '../lib/routes'
import PropImage from '../components/ui/PropImage'
import {Box, DevBox} from '../components/ui/Box'
import {BR, HR, Spacer} from '../components/ui/Layout'
import longPassGen from '/public/works/longPassGen.png'
import numbGuess from '/public/works/numbGuess.png'
import pasteback from '/public/works/pasteback.jpg'
import mixmatch from '/public/works/djtool.jpg'
import achievements from '/public/works/mindset.png'
import smoothEye from '/public/works/smoothEye.png'
import notationTrainer from '/public/works/notationTrainer.png'
import decider from '/public/works/decider.png'
import worktime from '/public/works/worktime.png'
import radio from '/public/works/radio.png'
import source from '/public/works/source.png'
import svg from '/public/works/svgEditor prototype1.png'
import svgrxjs from '/public/works/svgEditor rxjs.png'
import BrightnessSelector from '../components/content/BrightnessSelector'
import UpdateMessage from '../components/content/UpdateMessage'
import Meta, {metas} from '../components/content/Meta'
import * as React from 'react'
import ContentLayout from '../components/content/ContentLayout'
import QuotesBox from '../components/ui/QuotesBox'
import BrightnessBox from '../components/ui/BrightnessBox'

const imageWidth = 600

export default function DigiCraft() {

	return (
		<>
			<Meta meta={metas.digiCraft}/>
			<ContentLayout left={
				<>
					{/*<TourBox />*/}
					<QuotesBox/>
					<BrightnessBox/>
				</>
			} right={
				<>
				</>
			}
			>
				<H1>Digi Craft</H1>
				<DevBox>
					<H2 first>Funktionsorientierte Webseiten und Webanwendungen</H2>
					<P>
						Hallo!
					</P>
					<P>
						Ich bin Sebastian, Webentwickler und spezialisiert auf Webanwendungen/ funktionale Webseiten
						mit React.
					</P>
					<P>
						Ich suche Projekte, Aufträge oder eine Festanstellung im Bereich React.js, Next.js, Node.js,
						Electron, Express.js und React Native.
					</P>
					<P>
						Die vorliegende Webseite und die Anwendungen sind vollständig mit React realisiert -
						Frontend und Backend. Die verwendete Programmiersprache ist durchgehend TypeScript.
					</P>
					<P>
						Für Portierungen nach React kenne ich mich auch mit Java und PHP und Vue.js aus.
					</P>
					<P>
						Ihre komplexen, funktionenreichen Online-Anwendungen setze ich mit Next.js um, was zusätzlich
						zur hochreaktiven Benutzererfahrung ein gutes SEO-Rating ermöglicht.
					</P>
					<P>
						Bestehende REST API Sever können unverändert in den Anwendungsbetrieb übernommen,
						neu mit Express.js entwickelt oder bestehende Backend-Lösungen mit Java oder PHP in ein REST API
						Modell
						umgewandelt werden.
					</P>
				</DevBox>
				<Box>
					<P first>
						Home of Programming, Writing and Music.
					</P>
					<P>
						Diese Webseite und die vorgestellten Tools sind im Zuge der Einarbeitung und Weiterbildung in React
						und TypeScript entstanden.
					</P>
				</Box>

				<H2 first nohr>
					Update News:
				</H2>

				<UpdateMessage title={'Reload	-> Digi Craft 3'} date={'28.06.2023'}>
					<PropImage src={svg} alt={'Dig'} width={300 + 'px'}/>
					<P>
						Nach einigen Tagen zäher Auseinandersetzung mit Paket- und Buildmanagern, steht nun ein
						Monorepo-Projekt, das man zwar noch manuell builden muss, sich aber auf die grundlegenden
						Bausteine (pnpm/workspaces, tsconfig, noch ohne webpack config) beschränkt.
					</P>
					<P>
						Bei der vorherigen Version von Digi Craft ging es darum, möglichst schnell, möglichst viel
						Content, vorzugsweise Apps zu erzeugen. Bei der bisherigen Neuumsetzung zeichnet sich bereits ab,
						dass mehr an der Basis gearbeitet werden muss, um späteren Build- und Deployment-Problemen
						nicht nackt gegenüberzustehen. Genauso soll die neue Architektur sehr sorgfältig ausgearbeitet
						werden, um das geplante Spektrum an Apps und Tools einheitlich tragen zu können.
					</P>
					<P>
						Diesmal soll es auch mehr fürs Auge geben. Dafür soll ein SVG Modul sorgen, das sowohl als
						Übungsplatz für SVG, als auch als Basis für die SVG-Editor-App dienen soll. Der für meine Verhältnisse
						riesige SVG Editor hat schon eine Menge Ideen und wird meine Fähigkeit, größere Projekte umzusetzen
						und mit TypeScript/React umzugehen, weiter verbessern.
					</P>
				</UpdateMessage>

				<UpdateMessage title={'SVG Editor: Prototype 1	'} date={'05.04.2023'}>
					<PropImage src={svg} alt={'SVG Editor Prototype'} width={300 + 'px'}/>
					<P>
						Nur ein Bild bleibt vom bisherigen Entwicklungsstand. Die Komplexität fällt aus dem Rahmen und
						erfordert ein Redesign an mehreren Stellen. Deshalb wird neu mit verbesserter Architektur begonnen.
						Die bereits fertigen Teile werden angepasst und nach und nach umgezogen.
					</P>
				</UpdateMessage>

				<UpdateMessage title={'Alpha Version SVG Editor'} date={'31.03.2023'}>
					<P>
						<Link href={'/apps/svgEditor'}>Coder's SVG Editor</Link> mit funktionierendem Tutorial.
					</P>
				</UpdateMessage>

				<DevBox>
					<UpdateMessage title={'Coder\'s SVG Editor'} date={'14.03.2023'}>
						<P>
							Mit dem <Link href={routes.home.source}>Coder's SVG Editor</Link> möchte ich mich näher mit SVG
							befassen und es Programmierern (wie mich) erleichtern, sourcecodenah SVG-Code zu erzeugen.
						</P>
						<Spacer height={10}/>
						<PropImage src={source} alt={'Source Code View Screenshot'} width={imageWidth + 'px'}/>
						<P>
							Programmiert in 70 Stunden - 1750 Codezeilen - 25 Zeilen/Stunde. Es ging hier tiefer in React
							hinein
							und es waren teils knifflige Problemstellungen zu lösen. Es hätte möglicherweise geholfen, sich
							vorab
							besser mit SVG auszukennen. Die Diversität der verschiedenen SVG Elemente hätte man eventuell
							besser
							abstrahieren können, um sich so komplizierte Strukturen zu sparen. Den naiven Ansatz gehe ich aber
							gerne mal, weil man auch viel daraus lernt.
						</P>
						<P>
							Features:
						</P>
						<ul>
							<li>Darstellung des SVG Dokuments als Tree.</li>
							<li>Hinzufügen und Löschen von Elementen.</li>
							<li>Cut/Copy/Paste von Elementen und Gruppen.</li>
							<li>Undo.</li>
							<li>Darstellung und Bearbeitung der SVG Elemente im Formular Editor.</li>
							<li>Transformation (Translation) von Koordinatenpaaren.</li>
							<li>Transformation (Scale, Rotate, Translate) von Gruppen.</li>
							<li>Hinzufügen und Löschen von Koordinatenpaaren in Polyline, Polygon und Path.</li>
							<li>Sichtbarkeit von Elementen Ein- und Ausschalten.</li>
							<li>Grafische Anzeige des SVG.</li>
							<li>Hervorhebung ausgewählter Elemente, Punkten und Path-Handles.</li>
							<li>Import/Export.</li>
							<li>Library mit vorgefertigten und benutzerdefinierten SVGs.</li>
							<li>Einfügen von Library-SVGs ins aktuelle Dokument.</li>
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</UpdateMessage>

					<UpdateMessage title={'10.000 Zeilen überschritten in TypeScript/TSX'} date={'29.03.2023'}>
						<P>
							Die Digicraft Webseite überschreitet 10.000 Zeilen Source Code.
							Aktuell gemessen wurden 14.574 Zeilen ausschließlich in TypeScript/TSX.
						</P>
					</UpdateMessage>
				</DevBox>

				<UpdateMessage title={'Ein Moment zum Festhalten...'} date={'28.03.2023'}>
					<P>
						Ganz selten klatscht man einen Algo hin, der dann auf Anhieb funktioniert.
						Hier wird im path: Command[] -Array eine Koordinate über ihren x/y key gesucht, um
						ihren x/y Wert zu ändern. (Arbeitscode, keine optimierte Form.)
					</P>
					<pre>
						{`
case types.path: {
   let command: Command
   let commandKey: string
   e.path!.some(com => {
      const keys = Object.keys(com)
      let found = false
      keys.some(key => {
         if (key !== 'type' && formItem[0] in <Coord>com[key]) {
            found = true
            command = com
            commandKey = key
            return
         }
      })
      if (found) return com
   })
   const idx = e.path?.indexOf(command!)
   const part = command![commandKey!]! as Coord
   const keys = Object.keys(part)
   part[keys[0]] = part[keys[0]] + (x ?? 0)
   part[keys[1]] = part[keys[1]] + (y ?? 0)
   command![commandKey!]! = part
   e.path!.splice(idx!, 1, command!)
}
						`}
					</pre>
				</UpdateMessage>

				<UpdateMessage title={'Source Code Insights'} date={'14.03.2023'}>
					<P>
						<Link href={routes.home.source}>Source Code Ansicht</Link> hinzugefügt. Kommentare folgen.
					</P>
					<Spacer height={10}/>
					<PropImage src={source} alt={'Source Code View Screenshot'} width={imageWidth + 'px'}/>
				</UpdateMessage>

				<UpdateMessage title={'Digi Radio'} date={'12.03.2023'}>
					<P>
						Eine <Link href={routes.apps.radio}>Radio App</Link> für mich.
					</P>
					<PropImage src={radio} alt={'Radio App Screenshot'} width={200 + 'px'}/>
				</UpdateMessage>

				<UpdateMessage title={'Arbeitszeiterfassung'} date={'09.03.2023'}>
					<P>
						Erfasse deine <Link href={routes.apps.worktime}>Arbeitszeit</Link> nach
						dem <Link href={routes.blog.workingHoursModel}>neuen Arbeitszeitmodell</Link>.
					</P>
					<P>
						Programmiert in 10 Stunden - 489 Codezeilen - 49 Zeilen/Stunde.
					</P>
					<P>
						Features:
					</P>
					<ul>
						<li>Anzeige eines Jahreskalenders.</li>
						<li>Eingeben der Arbeitszeit für jeden Tag.</li>
						<li>Berechnung der Freizeit aus der geleisteten Mehrzeit.</li>
					</ul>
					<PropImage src={worktime} alt={'Der Entscheider App Screenshot'} width={imageWidth + 'px'}/>
				</UpdateMessage>

				<UpdateMessage title={'Der Entscheider'} date={'06.03.2023'}>
					<P>
						Erstelle Listen mit <Link href={routes.apps.decider}>Der Entscheider</Link> und
						lass dir die Entscheidung abnehmen.
					</P>
					<P>
						Programmiert in 9 Stunden - 384 Codezeilen - 42 Zeilen/Stunde.
					</P>
					<P>
						Features:
					</P>
					<ul>
						<li>Entscheidungslisten erstellen</li>
						<li>Zufallsgenerator, um ein Listenelement auszuwählen</li>
					</ul>
					<PropImage src={decider} alt={'Der Entscheider App Screenshot'} width={imageWidth + 'px'}/>
				</UpdateMessage>

				<UpdateMessage title={'Chess Notation Trainer'} date={'23.02.2023'}>
					<P>
						Der <Link href={routes.apps.notationTrainer}>Chess Notation Trainer</Link> soll Schachanfängern
						den Einstieg in die Eröffnungstheorie erleichtern.
					</P>
					<P>
						Programmiert in 42 Stunden - 1670 Codezeilen - 40 Zeilen/Stunde.
					</P>
					<P>
						Features:
					</P>
					<ul>
						<li>Figuren mit Maus und Texteingabe bewegen.</li>
						<li>Exakter Zehntelsekunden Zeitgeber, um Rekorde festzuhalten.</li>
						<li>Verschiedene Eröffnungen und bekannte Partien zum üben.</li>
					</ul>
					<PropImage src={notationTrainer} alt={'Notation Trainer App Screenshot'} width={imageWidth + 'px'}/>
				</UpdateMessage>

				<UpdateMessage title={'Weiche Augenbewegung'} date={'13.02.2023'}>
					<P>
						Eine <Link href={routes.apps.smoothEye}>Tool-Idee</Link> aus Andrew Huberman's Forschung,
						das ein Defizit der alltäglichen "Augenarbeit" beheben soll.
					</P>
					<PropImage src={smoothEye} alt={'Smooth Eye App Screenshot'} width={imageWidth + 'px'}/>
				</UpdateMessage>

				<UpdateMessage title={'Neues von Chat GPT'} date={'13.02.2023'}>
					<P>
						Aufgabe: "ich brauche eine javascript funktion, die aus eine wert von 1 bis 10 zwei werte erzeugt, die
						sich diametral von 0.1 bis 1 bewegen."
					</P>
					<P>Verstanden? Chat GPT jedenfalls hat und haut das einfach so raus:</P>
					<code style={{whiteSpace: 'pre-wrap'}}>
						{`
function generateValues(input) {
	const x = input / 10;
	const y = 1 - x;
	const value1 = (x * 0.9) + 0.1;
	const value2 = (y * 0.9) + 0.1;
	return [value1, value2];
}
				`}
					</code>
				</UpdateMessage>

				<UpdateMessage title={'Helligkeit der Seite'} date={'04.02.2023'}>
					<P>
						Es gibt 4 Einstellung für die Helligkeit der Seite:
					</P>
					<BrightnessSelector/>
					<Spacer height={10}/>
					<P>
						Der dunkle Modus spart Energie; helle Schrift auf dunklem Hintergrund soll besser für die Augen sein.
						In einer hellen Umgebung ist das aber eher anstrengend für die Augen.
					</P>
				</UpdateMessage>

				<UpdateMessage title={'"Erfolge" Self-Coaching App'} date={'31.01.2023'}>
					<P>
						Jetzt musste ich doch noch schnell ein Tool für mich schreiben.
						In <Link href={routes.apps.achievements}>Erfolge</Link> kann man seine Erfolge
						festhalten. (Programmiert an 1 Tag)
					</P>
					<PropImage src={achievements} alt={'Achievements App Screenshot'} width={imageWidth + 'px'}/>
				</UpdateMessage>

				<UpdateMessage title={'So viele Ideen'} date={'27.01.2023'}>
					<P>
						Das soll fürs erste alles sein. Der Rubel muss wieder rollen. Die gesteckten Ziele, Homepage nach
						React/Next, Redesign des Passwortgenerators/Long Pass Maker, allgemein die Weiterbildung in TypeScript
						und React wurden erreicht. Seit Dezember 2022 120 Stunden, also 3 Wochen für das vorliegende Werk
						inklusive
						Einarbeitung in die Bibliotheken, Frameworks und in TypeScript, ohne die Wörterdatenbank.
						In der nächsten Zeit wird ein
						"Web Application Security" Kurs bearbeitet. Vielleicht gibt's noch Zeit für zwei vielversprechende
						Tools.
					</P>
					<P>In diesem Update:</P>
					<ul>
						<li>Änderungen am Layout, andere Schrift. Das UI-Framework wurde erweitert.</li>
						<li>
							Das "Digi Craft" Logo als React Komponente. Der Schriftzug wird programmatisch erzeugt. Animation
							und ein vollständiges Alphabet war gewünscht, fällt aber aus dem Zeitrahmen.
						</li>
						<li>Die Musiktitel wurden kommentiert.</li>
					</ul>
				</UpdateMessage>

				<UpdateMessage title={'Long Pass Maker'} date={'21.01.2023'}>
					<P>
						Der Passwortgenerator erreicht den 'Usable' State und heißt
						jetzt <Link href={routes.apps.passwordMaker}>Long Pass Maker</Link>.
					</P>
					<PropImage src={longPassGen} alt={'Long Pass Maker'} width={imageWidth + 'px'}/>
				</UpdateMessage>

				<UpdateMessage title={'Neue React Skills: Context, Reducer und Custom Hooks'} date={'14.01.2023'}>
					<ul>
						<li>
							Bei der Erweiterung des Zahlen(reihen)ratespiels kam zum ersten mal ein Reducer zum Einsatz,
							der das State-Handling vereinfacht. <Link href={routes.apps.numberGuessing}>Link</Link>
						</li>
						<li>
							Für das Handling des LocalStorage im Zuge der Programmierung einer Option zur dauerhaften Anzeige
							von extern eingebundenen Bildern wurde eine Custom Hook
							gebaut. <Link href={routes.meta.privacy}>Link</Link>
						</li>
						<li>
							Für die Formularzeilen des Passwortgenerators wurde mittels Context und State Custom Hook
							ein lokaler Store gebaut, der Funktionalität für Zeilenbearbeitung und API Aufrufe
							aus den Komponenten auslagert und so die Beherrschbarkeit des Source Codes verbessert.
						</li>
					</ul>
					<P>
						Man kann schon sagen, dass das Thema Hooks nicht ganz einfach ist am Anfang.
					</P>
				</UpdateMessage>

				<UpdateMessage title={'Zahlenraten Reloaded'} date={'08.01.2023'}>
					<p>
						Das kleinste Spiel der (Programmier-) Welt mit Leveln!&nbsp;
						<Link href={routes.apps.numberGuessing}>Link</Link>
					</p>
					<PropImage src={numbGuess} alt={'Number Guessing Game'} width={'400px'}/>
				</UpdateMessage>

				<UpdateMessage title={'Neo Cortex'} date={'03.01.2023'}>
					<p>
						Die vormals auf Facebook gefplegte <Link href={routes.apps.neoCortex}>Linkliste</Link> wurde teilweise
						auf
						digi-craft übertragen.
					</p>
				</UpdateMessage>

				<UpdateMessage title={'Blog zu Passwortsicherheit überarbeitet'} date={'23.12.2022'}>
					<p>
						Der seit der ersten Webseitenversion existierende Beitrag zu <Link
						href={routes.blog.passwordSecurity}>moderneren Passwörtern</Link>, der als
						Begründung für den Passwortgenerator steht, wurde überarbeitet und erweitert.
					</p>
				</UpdateMessage>

				<UpdateMessage title={'Neuer Backend mit Express.js'} date={'20.12.2022'}>
					<p>
						Im Zuge des Redesigns des Passwortgenerators wurde der Laravel-Backend durch Express.js
						ersetzt. <ExternalLink href={'https://expressjs.com/de/'}>Express.js</ExternalLink> ist
						ein Web Application Framework, mit dem man vorzugsweise REST APIs umsetzt.
					</p>
				</UpdateMessage>

				<UpdateMessage title={'Digi Craft 3.0 mit Next.js (Work in Progress)'} date={'05.12.2022'}>
					<p>
						Die Digi Craft Homepage wurde auf Next.js umgesetzt.
						Mit <ExternalLink href={'https://nextjs.org/'}>Next.js</ExternalLink> werden mit React geschriebene
						Webseiten statisch vorgeneriert und sind somit zugänglicher für Suchmaschinenindizierung.
					</p>
				</UpdateMessage>

				<UpdateMessage title={'Pasteback'} date={'30.10.2021'}>
					<PropImage src={pasteback} alt={'Program screenshot'} width={imageWidth + 'px'}/>
					<p>
						Das kleine DevOps-Tool <ExternalLink
						href={'https://github.com/S0urcemaster/pasteback'}>"Pasteback"</ExternalLink> zeigt
						sich als recht nützlich. Nicht nur als Verzeichnis- und Befehlsspeicher,
						auch als Mini-Wiki oder Bookmark-Speicher - jede Art von One-Liner und auch mehrzeilig kann mit
						wenigen,
						kurzen Eingaben das Clipboard mit dem häufig genutzten Text befüllt werden. Programmiert in Go für
						WSL.
					</p>
				</UpdateMessage>

				<UpdateMessage title={'Vorläufiger Projektabschluss "mixmatch"'} date={'03.07.2021'}>
					<PropImage src={mixmatch} alt={'Mixmatch App Snapshot'} width={imageWidth + 'px'}/>
					<p>
						Nach sieben Tagen Bearbeitung erreicht das
						DJ-Tool <ExternalLink href={'https://github.com/S0urcemaster/mixmatch'}>"mixmatch"</ExternalLink> den
						"usable" Status und wartet auf frische Daten zur Bestimmung der notwendigsten Features.
						Programmiert in JavaScript/React/Electron.
					</p>
				</UpdateMessage>

				<UpdateMessage title={'Neue Homepagie online'} date={'05.06.2021'}>
					<p>
						Wieder ein bisschen schlauer bei HTML/CSS/JavaScript/Responsive geht die neue, rein statische
						Homepage online.
					</p>
					<p>
						Ein kleines JavaScript Build-Tool sorgt dafür, dass die gemeinsamen HTML Seitenteile aus einem
						Template
						in die einzelnen Unterseiten kopiert werden. So kann auf JavaScript oder einen Backend verzichtet
						werden.
					</p>
					<p>
						Die vormalige React Single Page Homepage wird aus Gründen der Erreichbarkeit und Kompatibilität
						auf exotischen Systemen nicht fortgesetzt, ist aber weiterhin über den Album-Bereich zugreifbar
						(soon).
					</p>
				</UpdateMessage>
			</ContentLayout>
		</>
	)
}
