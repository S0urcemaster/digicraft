import * as React from 'react'
import Meta, {metas} from '../../components/content/Meta'
import {H1, H2, P} from '../../components/ui/Typography'
import {Box} from '../../components/ui/Box'
import Table, {TableContent} from '../../components/ui/Table'
import ContentLayout from '../../components/content/ContentLayout'
import {default as BlogMenu} from '../../components/content/menu/Blog'

const calcTable: TableContent = {
	head: ['Arbeitsstunden/Jahr', 'Davon Urlaub', ' Davon Gesetzliche Feiertage', 'Verbleibend'],
	rows: [
		[2040, 240, 10, 1790],
		['2040', '240'],
	],
}


export default function WorkingHoursModel(props: {}) {
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
				<Meta meta={metas.workingHoursModel}/>
				<H1>Neues Arbeitszeitmodell</H1>
				<Box>
					<H2 first>Vorüberlegungen</H2>
					<P>
						Man stelle sich vor, man lebt am Äquator. Tag und Nacht sind über das Jahr hinweg in etwa gleich lang.
						Es gibt auch keine Jahreszeiten. Man hat also kein Gefühl, in welchem Erdumlaufzyklus man sich
						befindet. Weiter könnte man sich vorstellen, dass niemand Wochentage erfunden und eingeführt hat.
						12 Monate pro Jahr, 7 Tage pro Woche - eine willkürliche Festlegung, genauso wie dem Montag als ersten
						Wochentag, dem der Sonntag erst im letzten Jahrhundert wich und die Amerikaner es noch beibehalten
						haben.
					</P>
					<P>
						Die Zahl und Namen der Wochentage gehen auf die Antike zurück, wo man die sieben Planeten,
						die man mit bloßem Auge sehen konnte, als Götter verehrt hat. (Chat GPT) Wenn man also weiß, dass
						es 8 (früher 9) Planeten gibt, sollte man dann nicht, dem Schema folgend, einen Wochentag
						hinzufügen? Genauso die Monate, von denen es z.B. im römischen Kalender nur zehn gab. Die Mayas
						hatten 18 Monate zu 20 Tagen sowie einen abschließenden Monat von 5 Tagen. (Chat GPT) Lebte man am
						Äquator, müsste man auch nicht den Umlauf der Erde um die Sonne berücksichtigen und die Zeit
						in Jahre mit 365,25 Tagen einteilen. In anderen Regionen sieht das natürlich anders aus und man kann
						auf die Jahreseinteilung nicht verzichten.
					</P>
					<P>
						Jetzt aber mal nur für Spaß angenommen, wan würde Wochentage abschaffen. Die 'schwersten'
						Konsequenzen wäre das Fehlen des Wochenendes mit dem Sonntag als Tag, reserviert für religiöse
						Zeremonien, in der Moderne neu ausgelegt als Arbeitsruhe- und Erholungstag. Erst mal möchte
						niemand darauf verzichten. Was aber, wenn man sich die Ruhetage selbst aussuchen könnte?
						Das Problem ist dabei, dass es keinen gemeinsamen Ruhetag gäbe, z.B. also Bau- oder Handwerskarbeiten,
						die dann ja an jedem Tag stattfinden könnten, die frei belegten Ruhetage anderer stören würden.
						Also ist die Abschaffung der 7-Tage-Woche eine Änderung, die nicht ohne weiteres für alle eingeführt
						werden kann. Für sich selbst könnte man das aber mal probieren.
					</P>
				</Box>
				<Box>
					<H2 first>Berechnung</H2>
					<P>
						Die einzige Richtschnur für die Arbeitszeitberechnung sind also 365,25 Tage im Jahr, die man sich frei
						einteilen kann. Für eine Abrechnung von Bezügen müsste man noch die Monatseinteilung berücksichtigen.
					</P>
					<P>
						Mal außen vorgelassen, dass sich der Sonntag wesentlich von anderen Wochentagen unterscheidet,
						man nicht einkaufen und keine Handwerkstätigkeiten ausüben kann, könnte man grob folgende Berechnung
						durchführen:
					</P>
					<P>
						Die gesetzlich vorgegebene Arbeitszeit sind 40 Stunden pro Woche, im Monat 170 Stunden, im Jahr 2040
						Stunden. Bekanntlich hat das Jahr 190 Arbeitstage (Urlaub abgezogen).
						Würde man die in einem Stück mit 8 Stunden pro Tag durcharbeiten, hätte man ab dem 9. Juli Urlaub.
					</P>
					<P>
						Das so zu machen geht natürlich nicht, abgesehen von technischen Schwierigkeiten, aus dem Grund,
						dass man nach dem langen Urlaub von einem halben Jahr nur schwer in die beschwerliche Zeit zurück
						will. (Derselbe Umstand wie mit dem Wochenende, das man ja sehr gerne hat und sich deshalb am Montag
						schwer tut.)
					</P>
					<P>
						Ein anderer Ansatz wäre, die Arbeitszeit auf alle Tage des Jahres zu verteilen. Von den 2040 Stunden
						den
						Urlaub abgezogen, also 1800 Stunden, käme man auf 4,93, 5 Stunden pro Tag. Bei der Rundung auf 5
						Stunden
						verbleibt man mit 25 Stunden oder 5 Tagen im Plus, die man zu den Urlaubstagen rechnen könnte. Mit den
						durchschnittlich 10 Feiertagen, von denen, sagen wir, 5 auf Arbeitstage fallen, haben wir schon 2
						Wochen Urlaub. Sagen wir, 5 Stunden pro Tag sind nicht sehr Teamfähig und erhöhen auf 6, dann kommen
						365 Stunden oder 73 freie Tage, zusammen 83 dazu. Aufs Jahr gerechnet wären das dann 282 Arbeitstage à
						6 Stunden. 83 freie Tage, verteilt auf die Monate, sind knapp 7 Tage pro Monat.
					</P>
					<P>
						Jetzt kann man nicht alles sofort über den Haufen werfen. Aber sagen wir mal, wir lockern für
						Lebensmittelgeschäfte die Öffnungszeiten am Sonntag, dann wäre das neue Modell bereits auf deren
						Angestellte anwendbar. Z.B. nach 4 Tagen zu 6 Stunden, also 24 Stunden Arbeit einen Tag frei.
					</P>
					<P>
						Jetzt haben wir aber noch keinen Urlaub. 30 Tage gibt es idealerweise pro Jahr oder 240 Stunden.
						Da könnte man sich freie Tage durch Mehrstunden 'erspielen'. Wenn man also freiwillig etwas länger
						bleibt, bekommt man zusätzliche freie Tage. Für 240 Stunden müsste man jeden Tag 50 Minuten länger
						arbeiten. Man könnte hier die Mehrarbeit aufzeichnen, ein Limit von 240 Stunden setzten und alles,
						was darüber geht, auszahlen.
					</P>
				</Box>
				<Box>
					<H2 first>Konklusion</H2>
					<P>
						Ich mache jetzt seit ein paar Wochen verpflichtende 6 Stunden pro Werktag mit der Option, das
						Wochenende
						durch 'Überstunden' freizuschaufeln. Es ist ein kleiner, psychologischer Trick, um die Arbeit mehr
						zu mögen, die man doch immer für andere macht und mit der man sich nicht immer identifiziert.
						Das hinsetzen und zu sagen, "jetzt mache ich nochmal 2 Stündchen", fällt viel leichter. Wenn es an
						einem Tag zäh ist, kann man nach 6 Stunden Schluss machen, sich erholen und am nächsten Tag sieht
						es schon wieder anderes aus.
					</P>
					<P>
						Es motiviert auch mehr, an 6 Stunden freiwillig noch was dranzuhängen, als 8 lange Stunden vor
						Augen zu haben, damit das Wochenende zwangsweise frei ist. Außerdem, falls man auch am Wochenende
						oder nur an einem Tag arbeitet, ist keine so lange Pause dazwischen, in der man dann doch mal
						den Kontext oder die Motivation verliert. An schönen Tagen hat man 2 Stunden mehr, die man dann bei
						Regen nachholen kann.
					</P>
					<P>
						Eigentlich ist das 5/2 Wochenendmodell überholt. Der Samstag, vollgestopft mit quer durcheinander
						laufenden Leuten und am Sonntag ist tote Hose. Wenn man einen beliebigen Tag Zeit für seine Einkäufe
						und Besorgungen hat, entweder 2 Stunden zusätzlich an einem Arbeitstag oder einen freien Tag am
						Werktag,
						verteilt sich der Stress mehr auf die einzelnen Tage. Der Sonntag könnte weiterhin ein Ruhetag sein,
						während dem lautstarke Tätigkeiten ausbleiben müssen. Aber wie es so schön heißt: "Der Sonntag ist
						für den Menschen da und nicht der Mensch für den Sonntag." Oder, einen Schachmeister umformulierend:
						'Wenn der Sonntag, so wie er ist, gut ist, was wäre ein besserer?' Warum ist es quasi ein Denkverbot,
						am Sonntag zu arbeiten? Wenn man es sich selbst erlaubt und kein religiöses oder sonstiges
						Problem damit hat, wer sollte das Recht haben, es einem zu verbieten?
					</P>
					<P>
						Ich finde, der Sonntag ist wie ein toter Tag. Wenn es regnet, sitzt man fest und es bleibt nur die
						Glotze. Da könnte ich doch schon für die nächste Woche vorarbeiten, um mir dann an einem sonnigen
						Tag frei zu nehemen.
					</P>
				</Box>
				{/*<Box>*/}
				{/*	<Table content={calcTable} />*/}
				{/*</Box>*/}
			</article>
		</ContentLayout>
	)
}