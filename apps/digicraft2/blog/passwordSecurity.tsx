import {H1, H2, H3, P} from '../../components/ui/Typography'
import ExternalLink from '../../components/ui/ExternalLink'
import Head from 'next/head'
import {Box} from '../../components/ui/Box'
import Meta, {metas} from '../../components/content/Meta'
import * as React from 'react'
import ContentLayout from '../../components/content/ContentLayout'
import {default as BlogMenu} from '../../components/content/menu/Blog'

export default function PasswordSecurity() {
	return (
		<ContentLayout leftWide left={
			<>
				<BlogMenu/>
			</>
		} right={
			<>
			</>
		}
		>
			<article>
				<Meta meta={metas.passwordSecurity}/>
				<H1>Passwortsicherheit früher und heute</H1>
				<Box>
					<ExternalLink href={'https://xkcd.com/936'}>
						<img src={'https://imgs.xkcd.com/comics/password_strength.png'} alt={'password comic'}/>
					</ExternalLink>
					<hr/>
					<P>
						Die bislang geltenden Regeln für sichere Passwörter gelten als überholt:
					</P>
					<ExternalLink
						href="https://www.deutschlandfunknova.de/beitrag/bill-burr-unsere-passwort-regeln-taugen-nichts">
						deutschlandfunknova.de
					</ExternalLink>
					<br/>
					<ExternalLink href="https://it-service.network/blog/2017/10/23/sichere-passwoerter-passwortsicherheit/">
						it-service.network
					</ExternalLink>
					<br/>
					<ExternalLink
						href="https://www.spiegel.de/netzwelt/cyber-sicherheit-it-experten-fordern-umdenken-bei-passwort-regeln-a-c0f8bdee-99de-41e3-b994-a1dea6be0c38">
						spiegel.de
					</ExternalLink>
					<P>
						Ein Passwort mit 8 Zeichen, Klein-/Großbuchstaben, Zahlen, Sonderzeichen hat etwa 70^8 = 576 Billionen
						Kobinationen.
					</P>
					<P>
						Ein Passwort mit 5 ungeordneten Wörtern aus einem minimalen Wortpool von 1000 Wörtern (Deutsch hat
						75.000
						Wörter) hat bereits 1000^5 = 1 Billiarde Kombinationen,
						also fast doppelt so viele, wie das schwer zu merkende und schreibende Passwort mit 8 Zeichen.
					</P>
					<P>
						(Mit hypothetischen 75.000 Wörtern sind das 2,3 Quadrillionen Kombinationen, 4 Milliarden mal mehr als
						ein kryptisches 8-Zeichen Passwort.)
					</P>
					<P>
						Ein Passwort mit 5 <i>willkürlichen</i> Wörtern ist auch schwer zu merken, es ist aber besser zu lesen
						und zu schreiben.
						Die Browser machen es einem leicht, indem sie verwendete Passwörter zwischenspeichern. Ein verlorenes
						Passwort kann man leicht über den
						Email Account wiederherstellen. In höher gesicherten Umgebungen wie Server oder Online Banking
						Zugängen
						ist das jedoch nicht empfehlenswert.
					</P>
					<P>
						Bringt man Wörter in eine sinnvolle, besser zu merkende Abfolge, z.B. über Satzbau,
						verringert das die Zahl der möglichen Kombinationen (sofern man
						weiß, welche Abfolge verwendet wurde). Man bedenke jedoch,
						dass besser gesicherte Zugänge die Zahl der Fehlversuche begrenzen. Meistens ist nach 3 Fehleingaben
						Schluss und der Zugang wird blockiert.
						Deshalb ist ein 4-stelliges Passwort bestehend nur aus Zahlen für den Banking-Zugang völlig
						ausreichend,
						während die Bitcoin-Wallet Passphrase
						bestehend aus 39 Zeichen, die man endlos durchprobieren könnte, mit einem heutigen Computer nicht in
						Milliarden Jahren geknackt werden kann.
					</P>
					<H2>Beispiele zum Vergleich</H2>
					<ExternalLink href="https://random-ize.com/how-long-to-hack-pass/">
						https://random-ize.com/how-long-to-hack-pass/
					</ExternalLink>
					<br/>
					<ExternalLink href="https://password.kaspersky.com/de/">
						https://password.kaspersky.com/de/
					</ExternalLink>
					<br/>
					<ExternalLink href="https://www.passwortcheck.ch/">
						https://www.passwortcheck.ch/
					</ExternalLink>
					<table style={{fontSize: '0.8rem'}}>
						<thead>
						<tr>
							<td>Zeichen</td>
							<td>Passwort</td>
							<td>Dauer random-ize.com</td>
							<td>Dauer kaspersky.com</td>
							<td>Dauer passwortcheck.ch</td>
							<td>Entropie (passwortcheck.ch mit Wörterbüchern)</td>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td>8</td>
							<td>5z§X!Pk$</td>
							<td>24 days</td>
							<td>Zu kurz/ k.a.</td>
							<td>1 Tage</td>
							<td>53 Bit</td>
						</tr>
						<tr>
							<td>16</td>
							<td>FLq.xJ$:Xv8#3%a_</td>
							<td>4.208e+14 years</td>
							<td>10000+ Jahrhunderte</td>
							<td>Mehrere Millionen Jahre</td>
							<td>107 Bit</td>
						</tr>
						<tr>
							<td>13</td>
							<td>HierAUFwolke4</td>
							<td>2.265e+6 years</td>
							<td>33 Jahrhunderte</td>
							<td>12 Sekunden</td>
							<td>40 Bit</td>
						</tr>
						<tr>
							<td>17</td>
							<td>DasRehspringthoch</td>
							<td>1.683e+12 years</td>
							<td>Zu schwach/k.a.</td>
							<td>330 Jahre ("Stark")</td>
							<td>71 Bit</td>
						</tr>
						<tr>
							<td>18</td>
							<td>Mein.Name,ist-Hase</td>
							<td>4.909e+17 years</td>
							<td>10000+ Jahrhunderte</td>
							<td>Mehrere Millionen Jahre</td>
							<td>90 Bit</td>
						</tr>
						<tr>
							<td>28</td>
							<td>correct horse battery staple</td>
							<td>2.691e+32 years</td>
							<td>10000+ Jahrhunderte</td>
							<td>Mehrere Millionen Jahre</td>
							<td>82 Bit</td>
						</tr>
						<tr>
							<td>32</td>
							<td>DasEisenpeiltandenFelszubelieben</td>
							<td>9.250e+37 years</td>
							<td>10000+ Jahrhunderte</td>
							<td>Mehrere Millionen Jahre</td>
							<td>121 Bit</td>
						</tr>
						</tbody>
					</table>
					<P>

					</P>
					<P>
						Die Länge eines Passworts ist also entscheidend für die Sicherheit. Zwar kann man bei Hacks auch
						Wörterbücher
						heranziehen, wie jedoch passwortcheck.ch sehr schön zeigt, ist selbst bei verringertem Zeichenpool
						aber
						langem Passwort die Entropie dennoch deutlich höher als bei kürzeren, kryptischen Passwörtern.
					</P>
					<P>
						Sicher verwenden Geheimdienste ganze Computer-Cluster, um begehrte Informationen freizuschalten. Der
						Aufwand
						dafür ist jedoch enorm. Gewöhnliche Hacker haben meist nicht mehr als einen einzelnen Computer.
						Einfacher ist es für diese, über Phishing an Passwörter zu gelangen.
					</P>
					<P>
						Wenn jemand versucht, sich über Brute Force,
						also das Durchprobieren aller möglichen Kombinationen, Zugang zu verschaffen, sollte das den bekannten
						Webseitenbetreibern eigentlich recht schnell auffallen. Wirklich effektiv ist das nur dann, wenn man
						direkt
						an dem betreffenden Rechner sitzt und eine verschlüsselte Datei oder einen Datenträger direkt
						bearbeiten
						kann.
					</P>
					<P>
						Selbst wenn man für seinen Account ein sehr kurzes Passwort verwendet, z.B. aAx1, benötigt man bis zu
						15
						Millionen
						Versuche. Und ein Linux Server, besonders in einem sensiblen Bereich, schlägt beim 3. Fehlversuch
						Alarm.
					</P>
					<P>
						Am wichtigsten ist, kein Passwort zu verwenden, das andere möglicherweise auch verwenden könnten.
					</P>
				</Box>
			</article>
		</ContentLayout>
	)
}