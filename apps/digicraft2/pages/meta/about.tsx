import * as React from 'react'
import {Box} from '../../components/ui/Box'
import {H1, H2, H3, P} from '../../components/ui/Typography'
import {HR, Spacer} from '../../components/ui/Layout'
import Table from '../../components/ui/Table'
import ExternalLink from '../../components/ui/ExternalLink'
import Meta, {metas} from '../../components/content/Meta'
import ContentLayout from '../../components/content/ContentLayout'
import {default as MetaMenu} from '../../components/content/menu/Meta'

const effortTable = {
	head: ['Scope', 'Dateien', 'Codezeilen', 'Größe'],
	rows: [
		[
			'Gesamtes Projekt mit Libraries',
			'600?',
			'300.000',
			'150MB',
		],
		[
			'',
			'',
			'',
			'',
		],
		[
			'Eigener Source Code',
			'114',
			'6600',
			'277kB',
		],
		[
			'',
			'',
			'',
			'',
		],
		[
			'Davon TypeScript (ts)',
			'23',
			'1160',
			'38kB',
		],
		[
			'React Komponenten (tsx)',
			'85',
			'5460',
			'233kB',
		],
		[
			'',
			'',
			'',
			'',
		],
		[
			'Funktionale Dateien (ts und tsx)',
			'58',
			'2800',
			'86kB',
		],
		[
			'',
			'',
			'',
			'',
		],
		[
			'Contentseiten',
			'26',
			'',
			'',
		],
		[
			'',
			'',
			'',
			'',
		],
		[
			'Bilder',
			'30',
			'',
			'',
		],
		[
			'',
			'',
			'',
			'',
		],
		[
			'Musik',
			'27',
			'',
			'',
		],
	],
}

export default function About() {
	return (
		<>
			<Meta meta={metas.about}/>
			<ContentLayout left={
				<>
					<MetaMenu />
				</>
			} right={
				<>
				</>
			}
			>
				<H1>Über Digi Craft</H1>
				<Box>
					<P first>
						Digi Craft ist ein privates Homepage- Hobbyprojekt zum Zweck der Weiterbildung, Interessensverfolgung
						und zum Zeitvertreib.
					</P>
				</Box>

				<Box>
					<H2 first>Technik</H2>
					<P>
						Was steckt drin in Digi Craft?
					</P>
					<ul>
						<li>HTML/CSS Programmierung</li>
						<li>Programmieren in JavaScript/TypeScript</li>
						<li>Programmieren mit React.js</li>
						<li>Programmieren mit Next.js</li>
						<li>Programmieren mit Express.js</li>
						<li>Single Page Application (SPA) &lt;-&gt; REST API Modell</li>
						<li>User Interface/ User Experience (UI/UX) Design</li>
						<li>Linx Server Administration</li>
						<li>SSL Zertifikate</li>
						<li>Search Engine Optimization (SEO)</li>
						<li>Server- und Web Applicaiton Security</li>
						<li>Datenschutzkenntnisse</li>
						<li>Deutsch- und Englischkenntnisse</li>
						<li>Philosophie- und Psychologiekenntnisse</li>
						<li>Passwortsicherheit</li>
						<li>Digitale Musikproduktion</li>
						<li>Zehn-Finger-Schreiben mit NEO-Layout</li>
						<li>Internetrecherchekenntnisse</li>
					</ul>
				</Box>

				<Box>
					<H2 first>Aufwand (3.2.2023)</H2>
					<H3 nohr>Source Code</H3>
					<P>
						<ExternalLink href={'https://plugins.jetbrains.com/plugin/4509-statistic'}>
							Statistik Plugin für Jetbrains IDE
						</ExternalLink>
					</P>
					<Table content={effortTable} style={{width: '100%'}}/>
					<Spacer height={20}/>
					<P>
						Zeilen pro Stunde (Funktionale Dateien): 2800/80 = 35 <br/><br/>
						(Zeit all inclusive, effektiv also eher mehr.)
					</P>
					<Spacer height={20}/>
					<H3 nohr>Musik</H3>
					<P>
						Musik geschätzt vielleicht 5 Tage pro Track/ 40 Stunden. (Kann mich aber auch täuschen.) <br/><br/>
						190 Minuten / 1000 Stunden = 11 Sekunden Musik pro Stunde.
					</P>
				</Box>
			</ContentLayout>
		</>
	)
}