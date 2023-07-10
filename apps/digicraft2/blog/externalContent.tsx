import * as React from 'react'
import {H1, P} from '../../components/ui/Typography'
import {Box, ExpandButtonBox} from '../../components/ui/Box'
import Table, {TableContent} from '../../components/ui/Table'
import ExternalLink from '../../components/ui/ExternalLink'

const externalContentTable: TableContent = {
	head: ['Account', 'Bemerkungen'],
	rows: [
		[
			<ExternalLink href={'https://de.quora.com/profile/Sebastian-Teister'}>Quora</ExternalLink>,
			<>112 Antworten, 104 Fragen u.a. zu den Themen Philosophie/ Psychologie, Musikproduktion und
				Softwareentwicklung.</>,
		],
		[
			<ExternalLink href={'https://www.youtube.com/@sebastianteister4744'}>Youtube Sebastian Teister</ExternalLink>,
			<>Ein paar Videos aus verschidene Themenbereichen. 780 Kommentare.</>,
		],
		[
			<ExternalLink href={'https://www.youtube.com/@technoscout'}>Youtube Technoscout</ExternalLink>,
			<>Ursprünglich als Drop für meine Musik, wo ich aber auch anonymisiert kommentiere. ("Mehr als 1000"
				Kommentare)</>,
		],
		[
			<ExternalLink href={'https://www.youtube.com/@Loehtmann'}>Youtube Atari75</ExternalLink>,
			<>
				Älterer Kanal mit 140 Videos zu Gaming, hauptsächlich Minecraft, mit 560 Kommentaren und belegter Stimme.
				<ExpandButtonBox buttonTitle={'Zusatzinfo'} altButtonColor>
					<P>
						Achja Minecraft! Ein Fieber, fast wie mit dem ersten Spielkonsolenknüppel in der Hand.
						Falls jemand denkt: "Das ist ja dumm!": Minecraft wurde "reverse programmiert", d.h.
						der "obfuscated", also der unlesbar gemachte Java Quellcode wurde von Enthusiasten lesbar
						gemacht, wodurch es möglich war, "Mods" zu erstellen, die das Spiel über die ursprüngliche
						Spielfunktion hinaus erweitern. Auf diese Weise sind unüberschaubar zahlreiche Erweiterungen
						des Basisspiels entstanden, mit denen man komplexe "Fabriken" bauen
						und anderes Zeug anstellen kann.
					</P>
					<P>
						Unter anderem gibt es
						eine Mod <ExternalLink href={'https://www.computercraft.info/'}>ComputerCraft</ExternalLink>,
						mit der man mittels Lua Programmiersprache kleine Roboter ("Turtles") anweisen kann,
						automatisiert Ressourcen abzubauen oder Konstruktionen hochzuziehen. So habe ich dort
						Programme geschrieben, mit denen die Turtles Decken einziehen (mühsames Geschäft), Treppen,
						eine Kugel bauen, oder als per wireless-LAN-Blöcken (echt wahr) synchronisiertes Rudel Landschaften
						einebnen und Ressourcen im großen Stil abbauen konnten.
					</P>
					<P>
						Wie weit das gehen kann, zeigt ein <ExternalLink href={'https://www.youtube.com/watch?v=-BP7DhHTU-I'}>
						Video</ExternalLink>, in dem eine Gruppe mit den in Minecraft vorhandenen, elektrischen
						Bauelementen einen Computer gebaut hat, der ein Minecraft Spiel in Minecraft simuliert.
					</P>
				</ExpandButtonBox>
			</>,
		],
	],
}

export default function ExternalContent() {
	return (
		<>
			<H1>Gendern</H1>
			<Box>
				<P first>
					Zum Schreiben bin ich wohl gekommen durch die Auseinandersetzung mit den sozialen Medien.
					Dadurch ist ein verstreuter Content entstanden, der kaum wiederzufinden ist.
					Einsicht in die accountbezogene Kommentarliste bei Youtube, die mit "mehr als 1000" beziffert ist,
					ist von außen nicht zugänglich, von Beiträgen in Foren, die viele Jahre zurückliegen,
					habe ich längst jede Kenntnis verloren. Meine Accounts seien an der Stelle aber versteckt angeführt,
					um durch Preisgabe meiner Identität einer Auffindung dieser Webseite in Suchmaschinen nachzuhelfen.
				</P>
				<Table content={externalContentTable}/>
			</Box>
		</>
	)
}