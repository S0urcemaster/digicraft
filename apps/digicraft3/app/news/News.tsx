'use client'

import { Card, Collapse, Elevation } from '@blueprintjs/core'
import React, { ReactNode, useState } from 'react'
import svgEditorPrototype from '../../public/pictures/svgEditor-prototype.png'
import digicraft3layout from '../../public/pictures/digicraft3layout.png'
import Image from 'next/image'

function NewsContent({children}: { children: ReactNode }) {
	return (
		<div style={{margin: '0 20 0 20'}}>
			{children}
		</div>
	)
}

function NewsCard({
							title,
							date,
							shortDesc,
							first,
							children
						}: { title: string, date: string, shortDesc: string, first?: boolean, children: ReactNode }) {

	const [contentVisible, setContentVisible] = useState(false)

	return (
		<>
			<Card interactive={true} elevation={Elevation.TWO} onClick={() => setContentVisible(!contentVisible)}
					style={{margin: first ? '0 0 0 0' : '20px 0 0 0'}}>
				<div style={{display: 'flex', justifyContent: 'space-between'}}>
					<h4 className={'bp5-heading'} style={{marginTop: -5}}>{title}</h4>
					<h5 className={'bp5-heading'}>{date}</h5>
				</div>
				<div style={{position: 'relative', fontWeight: 500}}>
					{shortDesc}
				</div>
			</Card>
			<Collapse isOpen={contentVisible}>
				<div style={{margin: '0 20px 0 20px', padding: '20px 0 10px 0'}}>
					{children}
				</div>
			</Collapse>
		</>
	)
}

export function News() {
	return (
		<>
			<NewsCard first title={'Neues Layout'} date={'17.08.2023'}
						 shortDesc={'Ein simples, responsives Layout mit großen Menü-Buttons.'}>
				<p>
					Ein simples, responsives Layout mit großen Menü-Buttons, die auf einen Blick zeigen, was es hier alles gibt.
					Keine Content hinter versteckten, kleinen Menüs, sondern Schaltflächen, bei denen man keine Angst hat,
					ob man sie auf Anhieb trifft und deshalb gerne darauf zeigt und die Hervorhebung bewundert (Blueprint JS).
					Die Icons rechts oben zeigen an, ob der Content hinter der Schaltfläche für Mobile verfügbar
					(responsiv) ist oder es sich um eine Anwendung für den Desktop handelt, für den es noch keine Mobilversion gibt.
					Die Grafiken im Hintergrund bezeichnen den Typ des Contents, der sich hinter der Schaltfläche verbirgt,
					also Text, App, Spiel oder Einstellungen.
				</p>
				<p>
					<Image src={digicraft3layout} alt={'SVG Editor'} style={{width: '100%', height: 'auto'}} />
				</p>
			</NewsCard>
			<NewsCard title={'Digi Craft Redesign'} date={'13.08.2023'}
						 shortDesc={'Nach dem Ausflug zu Rust, kehre ich nun zu meinem ursprünglichen Plan, dem Redesign ' +
							 'meiner Homepage und dem SVG Editor zurück.'}>
				<p>
					Nach dem Ausflug zu Rust, einer wirklich guten Programmiersprache, die jedoch noch kaum eingesetzt wird
					und Web Assembly (WASM), was es erst seit 2019 gibt und wo das entsprechende Rust Framework Yew erst bei
					Version 0.20 ist, kehre ich nun zu meinem vorherigen Plan, dem Redesign meiner Homepage und dem SVG Editor zurück.
				</p>
				<p>
					Die Umgestaltung des Repos zu einem Monorepo habe ich bereits gemacht. Im neuen Repo sind jetzt die neue
					Webseite, der alte Server und Palyoad CMS beheimatet (was ich wohl erst mal nicht brauche) sowie gemeinsam
					verwendbare Packages für context, lib und svg. Außerdem habe ich diesmal Blueprint JS als Design System gewählt, da
					es sehr technisch und platzsparend rüberkommt, im Gegensatz zu anderen bekannten, die eher voluminös veranlagt
					sind.
				</p>
				<p>
					Grundsätzlich soll die auf Masse getrimmte, alte Webseite entschlackt und vereinfacht werden: alle
					wesentlichen Teile sollen auf der Startseite zugänglich sein, ohne einen Zwischenschritt oder weitere
					Gruppierung. Man soll auch
					auf einen Blick sehen, wieviel es hier zu sehen gibt. Responsive soll es auch noch sein. Nicht, dass
					jemand denkt, so was Einfaches könnte ich nicht. Zur Vereinfachung wähle ich auch ein Medium Helles
					Design und lasse die anderen Farben weg.
				</p>
			</NewsCard>
			<NewsCard title={'Swinging over to Rust'} date={'24.07.2023'}
						 shortDesc={'Auf der Suche nach einer Cross-Platform Desktop-Technologie bin ich zu Rust und Web Assembly gekommen.'}>
				<p>
					Auf der Suche nach einer Cross-Platform Desktop-Technologie habe ich schließlich Java Swing und
					C# MAUI aussortiert und bin wieder zurück zu den Webtechnologien, die für den Desktop geeignet sind.
					Java Swing ist zwar ausgereift, aber doch sehr uninteressant geworden. Die Visual Studio IDE kann
					Jetbrains
					nicht das Wasser reichen und Jetbrains Rider ist mir momentan zu teuer.
				</p>
				<p>
					Folglich bliebe Electron, mit dem ich schon Erfahrung habe. Auf der Suche nach Alternativen bin ich
					aber auf Rust mit Tauri gestoßen, was als performantere und sicherere Alternative zu Electron
					gehandelt wird. Mittels WebAssembly kann man auch Webseiten nur in Rust schreiben. WebAsemmbly
					gilt zwar noch nicht als ernsthafter Konkurrent zu JavaScript, das könnte sich aber in der Zukunft
					ändern. Der Vorteil ist hier, dass man eine Programmiersprache der Wahl verwenden kann und
					einige Programmiersprachen, darunter C++, C#, Java, Python, Go, Rust und TypeScript, bereits nach
					WebAssembly kompilieren.
				</p>
				<p>
					Das heißt, mein neuer Ansatz lautet nicht TypeScript für Client und Server, sondern WebAssembly und
					Rust. Um mich in Rust einzulernen wird es zunächst ein kleines Konsolenprojekt geben, an dem ich
					bereits arbeite und danach entweder eine Desktop-App mit Tauri oder WebAssemblys für meine Webseite.
				</p>
			</NewsCard>
			<NewsCard title={'Reload -> Digi Craft 3'} date={'28.06.2023'}
						 shortDesc={'Die nächste Version meiner Homepage soll wieder einige Neuerungen bringen. Darunter natürlich auch ein neues Design.'}>
				<p>
					Nach einigen Tagen zäher Auseinandersetzung mit Paket- und Buildmanagern, steht nun ein Monorepo-Projekt,
					das man zwar noch manuell builden muss, sich aber auf die grundlegenden Bausteine (pnpm/workspaces,
					tsconfig, noch ohne webpack config) beschränkt.
				</p>
				<p>
					Bei der vorherigen Version von Digi Craft ging es darum, möglichst schnell, möglichst viel Content,
					vorzugsweise Apps zu erzeugen. Bei der bisherigen Neuumsetzung zeichnet sich bereits ab, dass mehr an der
					Basis gearbeitet werden muss, um späteren Build- und Deployment-Problemen nicht nackt gegenüberzustehen.
					Genauso soll die neue Architektur sehr sorgfältig ausgearbeitet werden, um das geplante Spektrum an Apps
					und Tools einheitlich tragen zu können.
				</p>
				<p>
					Diesmal soll es auch mehr fürs Auge geben. Dafür soll ein SVG Modul sorgen, das sowohl als Übungsplatz
					für SVG, als auch als Basis für die SVG-Editor-App dienen soll. Der für meine Verhältnisse riesige SVG
					Editor hat schon eine Menge Ideen und wird meine Fähigkeit, größere Projekte umzusetzen und mit
					TypeScript/React umzugehen, weiter verbessern.
				</p>
			</NewsCard>
			<NewsCard title={'SVG Editor: Prototype 1'} date={'05.04.2023'}
						 shortDesc={'Nur ein Bild bleibt vom bisherigen Entwicklungsstand des SVG Editors.'}>
				<p>
					Nur ein Bild bleibt vom bisherigen Entwicklungsstand. Die Komplexität fällt aus dem Rahmen und erfordert
					ein Redesign an mehreren Stellen. Deshalb wird neu mit verbesserter Architektur begonnen. Die bereits
					fertigen Teile werden angepasst und nach und nach umgezogen.
				</p>
				<p>
					<Image src={svgEditorPrototype} alt={'SVG Editor'} style={{width: '100%', height: 'auto'}} />
				</p>
			</NewsCard>
			<NewsCard title={'Ein Moment zum Festhalten'} date={'28.03.2023'}
						 shortDesc={'Ganz selten klatscht man einen Algo hin, der dann auf Anhieb funktioniert.'}>
				<p>
					Ganz selten klatscht man einen Algo hin, der dann auf Anhieb funktioniert. Hier wird im path: Command[]
					-Array eine Koordinate über ihren x/y key gesucht, um ihren x/y Wert zu ändern. (Arbeitscode, keine
					optimierte Form.)
				</p>
				<pre>
					{`case types.path: {
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
}`
					}
					</pre>
			</NewsCard>
		</>
	)
}