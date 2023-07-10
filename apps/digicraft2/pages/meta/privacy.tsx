import * as React from 'react'
import {Box} from '../../components/ui/Box'
import {B, H1, H2, H3, P} from '../../components/ui/Typography'
import ExternalLink from '../../components/ui/ExternalLink'
import Table from '../../components/ui/Table'
import {useShowExternalImages, useStorageBackup} from '../../lib/metaHooks'
import Meta, {metas} from '../../components/content/Meta'
import ContentLayout from '../../components/content/ContentLayout'
import {default as MetaMenu} from '../../components/content/menu/Meta'

const serverDataTable = {
	head: ['Name', 'Zweck', 'Typ', 'Auswirkung'],
	rows: [
		[
			'ip',
			'Statistik',
			'IP-Adresse',
			'Man bekommt heraus, welche größere Stadt in der Nähe des Nutzers liegt.'],
		[
			'screen',
			'Statistik',
			'Bildschirmgröße des verwendeten Geräts',
			'Die Bildschirmgröße gibt Auskunft darüber, ob es notwendig wird, die Webseite responsiv zu machen.'],
	],
}
const localStorageTable = {
	head: ['Name', 'Zweck', 'Typ', 'Voreinstellung', 'Auswirkung'],
	rows: [
		[
			'showExternalImages',
			'Erteilte Erlaubnis zum Anzeigen externer Bilder merken',
			'Wahrheitswert',
			'falsch',
			'Keine'],
		[
			'NumberGuessingGame',
			'Spieleinstellung merken',
			'Zahl',
			'100',
			'Keine'],
		[
			'Erfolge',
			'Eingetragene Erfolge merken',
			'Json Objekt',
			'leer',
			'Keine'],
		[
			'Helligkeit',
			'Einstellung für Helligkeit merken',
			'Json Objekt',
			'leer',
			'Keine'],
	],
}

export default function Privacy() {

	const [showCheckbox] = useShowExternalImages()

	const [downloadButton, uploadButton] = useStorageBackup()

	return (
		<>
			<Meta meta={metas.privacy}/>
			<ContentLayout left={
				<>
					<MetaMenu />
				</>
			} right={
				<>
				</>
			}
			>
				<H1>Datenschutz</H1>
				<Box>
					<H2 first>Cookies</H2>
					<P>
						Keine Cookies hier.
					</P>
				</Box>

				<Box>
					<H2 first>Externe Links</H2>
					<P>
						Durch das Verlinken externer Inhalte kann nicht verhindert werden, dass deren Betreiber über Cookies
						möglicherweise Daten sammeln. Externe Links sind
						entsprechend <ExternalLink href={'/'}>gekennzeichnet</ExternalLink> und werden stets in einem neuen
						Browsertab geöffnet, so dass klar ist, dass der Kontext dieser Webseite verlassen wurde.
					</P>
				</Box>

				<Box style={{paddingBottom: 20}}>
					<H2 first>Serverseitige Datenspeicherung</H2>
					<P>
						Die IP-Adresse eines in Ihrer Nähe liegenden Serverknotens ihres ISPs (Internet Service Providers)
						ist öffentlich bekannt, wodurch Ihr ungefährer Standort ermittelt werden kann. Dadurch erhalten
						Webseitenbetreiber nützliche Informationen über die Sprachpräferenz von Nutzern und den Effekt
						von Werbeaktionen. Personenbezogene Daten werden dadurch nicht bekannt.
					</P>
					<Table content={serverDataTable}/>
				</Box>

				<Box style={{paddingBottom: 20}}>
					<H2 first>Datenspeicherung im Browser/LocalStorage</H2>
					<Table content={localStorageTable}/>
					<H3 nohr>Browserspeicher/LocalStorage Backup</H3>
					<P>Sie können die gespeicherten Daten, z.B. vor einer Neuinstallation downloaden und wieder uploaden.</P>
					{uploadButton()}&nbsp;{downloadButton()}
				</Box>

				<Box>
					<H2 first>Bilder</H2>
					<P>
						Im Zuge der <ExternalLink
						href={'https://www.heise.de/news/Google-aeussert-sich-zur-Abmahnwelle-wegen-Google-Fonts-7350292.html'}
					>Abmahnwelle wegen Google Fonts</ExternalLink> werden auch extern verlinkte Bilder nur nach Aufforderung
						angezeigt. Über folgenden Schalter kann das Anzeigen extern verlinkter Bilder dauerhaft aktiviert und
						wieder deaktiviert werden. <B>Durch die Aktivierung stimmen Sie einem
						möglichen <ExternalLink href={'https://www.trace-ip.org/'}>IP-Tracking</ExternalLink>
						(Ihre IP Adresse und Ihr ungefährer Standort werden dem Betreiber der besuchten Seite,
						also auch der Seite, von der das Bild geladen wird, bekannt) durch den
						Betreiber der externen Seite zu.</B>
					</P>
					<P>
						{showCheckbox()}
					</P>
				</Box>

				<Box>
					<H2 first>Google Fonts</H2>
					<P>
						Mit Genehmigung von Google, wurde der verwendete Font downgeloaded und wird server-lokal geladen.
					</P>
				</Box>
			</ContentLayout>
		</>
	)
}