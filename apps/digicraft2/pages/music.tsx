import * as React from 'react'
import {H1, H2, H3, P} from '../components/ui/Typography'
import melancholyDiscoSales from '/public/melancholyDiscoSales.png'
import ExternalLink from '../components/ui/ExternalLink'
import {Box, ExpandButtonBox} from '../components/ui/Box'
import PropImage from '../components/ui/PropImage'
import {ReactNode} from 'react'
import Head from 'next/head'
import Meta, {metas} from '../components/content/Meta'
import ContentLayout from '../components/content/ContentLayout'

type Track = {
	title: string
	src: string
	description?: string
}

type AlbumProps = {
	title: string
	tracks: Array<Track>
	date: string
	description: string
}

type Props = {}

const scanningTheUniverse: Array<Track> = [
	{
		title: 'Scanning the Universe',
		src: 'Scanning the Universe',
		description: 'Etwas lang geworden. Der Titel passt - wie immer ;)'
	},
	{title: 'Futile pt.2', src: 'Futile pt.2', description: 'Schöner, warmer Mix.'},
	{title: 'December Eleventh', src: 'December Eleventh', description: 'Langgezogenes Thema im Winterkontext.'},
	{
		title: 'Rollercoaster Sun',
		src: 'Rollercoaster Sun',
		description: 'Naja, etwa so, wie wenn man gechillt Achterbahn fährt und einem ' +
			'am \'Hochpunkt\' die Sonne ins Gesicht fällt.'
	},
	{
		title: 'Serious Touch',
		src: 'Serious Touch',
		description: 'Ich hab\'s hier nicht geschafft, genügend Abwechslung ' +
			'zu erzeugen, so dass der Track recht langweilig geworden ist.',
	},
	{title: 'Threesexty', src: '36', description: 'Könnte auf dem Dancefloor sogar funktionieren.'},
]

const electronicTestDrive: Array<Track> = [
	{
		title: '01 - Explosive', src: '01 - Explosive', description: 'Das provokante "Explosive", schlampig live ' +
			'arrangiert und eingespielt. Soll das Album ein wenig "verstecken".',
	},
	{
		title: '02 - City Noon',
		src: '02 - City Noon',
		description: 'Naja, mittags in der hektischen Stadt. Mit Gehörschutz.',
	},
	{title: '03 - Thrown', src: '03 - Thrown', description: 'Ein etwas ernsteres, philosophisches Thema.'},
	{
		title: '04 - Nightdrive',
		src: '04 - Nightdrive',
		description: 'Nachts allein mit dem Auto auf der Straße unterwegs.'
	},
	{
		title: '05 - Pool Time',
		src: '05 - Pool Time',
		description: 'Ja, das Sample hat zu viel Plattenknistern. Egal. ' +
			'Eine "Pool Time" kann man sich trotzdem irgendwie vorstellen.',
	},
	{title: '06 - Sunset', src: '06 - Sunset', description: 'Sonnenuntergang, oder?'},
	{
		title: '07 - Rave', src: '07 - Rave', description: '...wenn man am Eingang steht und der Bass einem ' +
			'entgegenrollt. Fehlt etwas Tempo.',
	},
	{title: '08 - Break', src: '08 - Break', description: 'Päuschen.'},
	{title: '09 - Splash', src: '09 - Splash', description: 'Freches Wasserthema aus jungen Jahren.'},
	{title: '10 - Melancholy Disco', src: '10 - Melancholy Disco', description: 'Hätte es fast nicht geschafft.'},
	{title: '11 - Lagoon', src: '11 - Lagoon', description: 'Der Titel hat sich hier auch recht schnell gefunden.'},
	{
		title: '12 - Fucked Up',
		src: '12 - Fucked Up',
		description: 'Funkioniert auf dem Dancefloor möglicherweis auch. ' +
			'Die Spannungskurve ist allerding so nicht ganz korrekt und es fehlt Tempo.',
	},
	{
		title: '13 - Sexy', src: '13 - Sexy', description: 'Es ist so schwer Vocals zu finden. Das Vorliegende ' +
			'wird schnell langweilig. Die Musik passt nicht so ganz zum Thema.'
	},
	{title: '14 - White', src: '14 - White', description: '"Barry" hat es auch irgendwie geschafft.'},
	{
		title: '15 - Jackinthebox',
		src: '15 - Jackinthebox',
		description: 'Es fehlt Textur. Wurde mir erst bei späteren Produktionen klar.'
	},
]

const theNighttrain: Array<Track> = [
	{
		title: 'The Nighttrain (technoscout Remix)',
		src: 'The Nighttrain (technoscout Remix)',
		description: 'Da hab\' ich mich ziemlich angestrengt. ' +
			'Fehlt etwas Tempo.'
	},
]

const technoscout: Array<Track> = [
	{
		title: 'Technoscout',
		src: 'Technoscout',
		description: 'Ich denke, "Technoscout" drückt eine gewisse Zuversicht aus.',
	},
	{
		title: 'Incredible Acceleration',
		src: 'Incredible Acceleration',
		description: 'Genremix mit magelnder Objektivität beim Produzieren. ' +
			'Playstats-Faking hat da auch nicht geholfen ^^.'
	},
	{
		title: 'Oldschool',
		src: 'Oldschool',
		description: 'Wie viel man mit Promotion erreichen kann, zeigt "Oldschool". ' +
			'Eigentlich nichts Besonderes. Immerhin eine Anpassungsleistung an den Publikumsgeschack.',
	},
	{
		title: 'Unstoppable', src: 'Unstoppable', description: 'Ein schlecher Mix hört sich auf einer miesen Anlage ' +
			'noch schlechter an. Dabei hat der Track durchaus Tempo. Das hilft aber alles nichts, wenn der Mix scheiße ist.',
	},
	{
		title: 'Desert Like', src: 'Desert Like', description: 'Ein Wüstenthema.',
	},
]

const productionSnapshots: Array<Track> = [
	{title: '43', src: '43', description: 'Älteres Intro Revival, was nicht schlecht ist.'},
	{
		title: '63', src: '63', description: 'Melodie ist in der elektronischen Musik ja nicht sehr gefragt. ' +
			'Deswegen funktioniert dieser Track, trotz überaschender Melodien, nicht gut auf dem Dancefloor.',
	},
	{
		title: '65', src: '65 21-01-26', description: 'Was mich bei meinen neueren Produktionen so überzeugt, ist ' +
			'das Soundspektrum.',
	},
	{title: 'm09', src: 'm09 21-02-22', description: 'Für den Dancefloor wieder weniger geeignet.'},
	{
		title: 'm10',
		src: 'm10 21-04-27',
		description: 'Schöne, originelle Melodien. Leider für den Dancefloor nicht geeignet.',
	},
	{title: 'm13', src: 'm13 21-02-19', description: 'Hat einfach Druck der Sound.'},
	{title: 'm20', src: 'm20 21-01-18 22-00', description: 'JO! Ab auf den Dancefloor!'},
	{title: '02c1', src: '02c1', description: 'Was Nachdenkliches.'},
	{
		title: '02d1',
		src: '02d1',
		description: 'Positiv, inspirierend und fröhlich - so muss die Party sein.',
	},
	{title: '04', src: '04', description: 'Wieder was Nachdenkliches.'},
	{title: '05', src: '05', description: 'Ja, das ist überall dieselbe Kick in den neuen Snapshots.'},
	{
		title: '05a',
		src: '05a',
		description: 'Afterhour Sound.',
	},
	{
		title: '07',
		src: '07',
		description: 'Die Richtung stimmt.',
	},
	{
		title: '08', src: '08', description: 'Etwas pessimistisch.',
	},
]

function Table(props: { children: ReactNode }) {

}

function Album(props: AlbumProps) {
	return (
		<>
			<Head>
				<title>Digi Craft Music</title>
				<meta name={'description'} content={'Musik Sebastian Teister'} key={'description'}/>
				<meta name={'keywords'} content={
					'Musik, Sebastian Teister, Digitale Arbeiten, Union of Musicians, Musikeinnahmen, Musikbeschreibung'
				} key={'keywords'}/>
			</Head>
			<H2 style={{marginBottom: 0}}>{props.title + ' (' + props.date + ')'}</H2>
			<P>{props.description}</P>
			<table style={{width: '100%'}}>
				<colgroup>
					<col style={{width: '25%'}}/>
					<col style={{width: '30%'}}/>
					<col style={{width: '45%'}}/>
				</colgroup>
				<tbody>
				{props.tracks.map((track, id) => {
					return (
						<tr key={id}>
							<td style={{paddingTop: '13px'}}>{track.title}</td>
							<td>
								<audio controls controlsList="nodownload">
									<source src={'mp3/' + track.src + '.mp3'} type="audio/mp3"/>
								</audio>
							</td>
							{track.description ?
								<td>{track.description}</td>
								: ''
							}
						</tr>
					)
				})}
				</tbody>
			</table>
		</>
	)
}

export default function Music() {
	return (
		<>
			<Meta meta={metas.music} />
			<ContentLayout left={
				<>
				</>
			} right={
				<>
				</>
			}
			>
			<H1>Electronic Music Production</H1>
			<ExpandButtonBox buttonTitle={'Channels'}>
				<ExternalLink href={'https://open.spotify.com/artist/0N7kAIkJwDXkZ1MyoJCRS3'}>Spotify</ExternalLink>
				<ExternalLink href={'https://soundcloud.com/technoscout_recordings'}>Soundcloud</ExternalLink>
				<ExternalLink href={'https://www.mixcloud.com/sebastian-teister/'}>Mixcloud</ExternalLink>
			</ExpandButtonBox>
			<Box>
				<P first>
					867.000 Plays von Melancholy Disco. Einnahmen: 28 Euro. Pro Play 0,0032 Cent. Pro Stunde weniger als 1
					Euro. <ExternalLink href={'https://www.unionofmusicians.org/'}><span style={{whiteSpace: 'nowrap'}}>Union of Musicians</span></ExternalLink>
				</P>
				<PropImage src={melancholyDiscoSales} alt={'unjust Spotify income'}
							  style={{width: '100%', objectFit: 'scale-down'}}/>
				<table style={{tableLayout: 'fixed', width: '100%'}}>
					<colgroup>
						<col style={{width: '25%'}}/>
						<col style={{width: '30%'}}/>
						<col style={{width: '45%'}}/>
					</colgroup>
					<tbody>
					<tr>
						<td style={{paddingTop: '13px'}}>10 - Melancholy Disco</td>
						<td>
							<audio controls controlsList="nodownload">
								<source src={'mp3/' + '10 - Melancholy Disco' + '.mp3'} type="audio/mp3"/>
							</audio>
						</td>
						<td></td>
					</tr>
					</tbody>
				</table>
				<ExpandButtonBox buttonTitle={'Kritik "Melancholy Disco'}>
					<H2 first>Eigene Kritik "Melancholy Disco"</H2>
					<P>
						"Melancholy Disco" war nach Fertigstellung von "Electronic Test Drive" auch mein
						Top-Favorit. Dafür kann man natürlich auch Ursachen festmachen.
						Ob ein Musikstück
						erfolgreich ist oder sein kann, wird in erster Linie dadurch bestimmt, wie gut es in eine
						der definierten Stilrichtungen passt, also den Vorstellungen der Hörer dieser Stilrichtung
						entspricht. Danach kommen technische Aspekte der Produktion wie Arrangement, Mix/Master
						und Originalität. Schließlich kommt noch die vermittelte Stimmung
						als ausschlaggebender Wert für die Verträglichkeit mit dem Publikum.
					</P>
					<P>
						Komposition ist ja, zumindest für Laien, ein recht 'unscharfes' Geschäft - man hat beim Produzieren
						eigentlich immer den Eindruck, dass der neue Track ein "Hit" werden könnte. Somit will ich nicht für
						mich
						beanspruchen, ein guter Produzent zu sein oder meinen Job besonders gut gemacht zu haben
						sondern die folgende, positive Kritik von "möglichst weit draußen" fassen.
					</P>
					<H3>Kurzfassung</H3>
					<P>
						Ein für die eingesetzte Zeit recht gut gelungnener Track. Gutes Arangement und guter Rhytmus mit einem
						Mix aus originellen und bekannten Sounds. Das Genre wurde gut getroffen. Abzüge gibt es bei
						Mix/Master,
						der Post-Production der verwendeten Sounds und in Arrangement-Subkomponenten. Insgesamt aber
						"knallts".
					</P>
					<H3>Positiv</H3>
					<P>
						Ich denke, "Melancholy Disco" kann in einigen der genannten Disziplinen punkten.<br/>
						Zunächst einmal wird das das Genre/ die angepeilte Stilrichtung recht gut getroffen: Es soll sich um
						"Disco" Musik handeln und das ist auch der Fall. Im Titel wird auch noch die Stimmung "melancholisch"
						angegeben, was auch hörbar ist.
					</P>
					<P>
						Für mich als doch schon etwas erfahrenen Komponisten fällt auf, dass auch nicht gespart wurde und das
						Arrangement von Anfang an überzeugen kann. Das heißt, es wird zügig "auf's Feuer aufgelegt", neue
						"Thesen" werden hinzugefügt, so dass es nicht langatmig ist. Insgesamt ein schlüssiges Arrangement.
					</P>
					<P>
						Die Sounds sind recht originell. Für mich ist es grundsätzlich wichtig, neu und originell zu sein,
						deswegen sage ich mal: ok.
					</P>
					<P>
						Die Rhythmuselemente sind auch gut geworden. Eine Disziplin, von der ich meine, dass ich sie recht gut
						kann.
					</P>
					<P>
						Der Mix/Master ist soweit gut geworden. "Es knallt", wie es auch sein soll.
					</P>
					<H3>Negativ</H3>
					<P>
						Wie ich mitbekommen habe, ist der Mix recht 'scharf' geworden, technisch heißt das, dass es zu
						"Resonanzen" kommen kann, also der Verstärkung überlagerter Frequenzen zweier oder mehrerer
						Sounds. Zum Zeitpunkt der Entstehung war das noch kein Thema bei meiner Arbeit, deswegen kann das
						schon
						sein. Da man sich selbst in die Produktion "einlebt", ist das für den Originator oft schwer zu hören
						und Resonanzen nur mittels Analyse aufspürbar, die mir bis dahin noch nicht bekannt war.
					</P>
					<P>
						Die verwendeten Sounds passen zum Teil nicht ganz zusammen und der Einsatz wirkt aufgesetzt.
					</P>
					<P>
						Trotzdem das Arrangement insgesamt gut ist, wurde doch noch zu viel geschlampt, Sequenzen schlicht
						über die gesamte Dauer wiederholt,
						ohne sie an das Arrangementschema anzupassen. Wenn man als Produzent ja eigentlich nicht
						weiß, ob ein Track "zündet", ist es immer schwer zu beurteilen, wieviel man reinstecken soll.
						Wüsste man vorher, ob ein Track "funktioniert", hätte man sicher noch mehr Arbeit investiert.
						Es war aber in dem Sinn auch bewusst ein Electronic <em>Test Drive</em>, um zu sehen, wie meine Musik
						ankommt
						und deswegen eine 80% Lösung angepeilt.
					</P>
					<H2>Bei welchem meiner Titel solltest Du sonst noch genauer reinhören?</H2>
					<table>
						<thead>
						<tr>
							<td>Titel</td>
							<td>Bemerkungen</td>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td>Jackinthebox</td>
							<td>
								Erzählt die Geschichte von Jack in the Box. Hätte man noch mehr ausschmücken können.
								Aber mein Lieblingstrack! <ExpandButtonBox buttonTitle={'Warum?'}>
								Wer die Musik der 60er kennt, z.B. The Doors, vor allem die Live Performances,
								merkt, dass oft ein 'Trance'-Effekt angestrebt wird, bei dem die Musik sich immer und
								immer wiederholt und sich nur ein Aspekt, meistens die Stimme, ändert.
								Obwohl dabei die Wiederholung für sich genommen schnell langweilig würde, trägt die
								Stimme einen über die Länge hinweg, was einen "Trance"-Effekt erzeugt.
								Im übrigen, wenn man sich auch moderne Produktionen, vor allem beim Rap oder Hip Hop
								anschaut, ist die Instrumentierung recht eintönig, nur der Text "trägt" das Stück.
								Genau das ist mir hier recht gut gelungen. Zudem trägt die 32-taktige Änderung des "Tempos",
								der gefühlten Spannung also, dazu bei, die Füße zu bewegen und die Arme zu heben.
							</ExpandButtonBox>
							</td>
						</tr>
						<tr>
							<td>The Nighttrain</td>
							<td>
								Mein erster und bisher einziger Remix. Rein aus dem Recycling der gegebenen Sounds produziert.
								Fröhlich und inspirierend. Der Mix ist noch etwas schwach. Die Sounds haben aber
								auch zum Teil nicht mehr hergegeben.
							</td>
						</tr>
						<tr>
							<td>07</td>
							<td>
								Wohl mein potentester Kandidat meiner neuen Mache und in etwa die Stilrichtung, in die ich will:
								positiv inspirierend trancy.
							</td>
						</tr>
						</tbody>
					</table>
				</ExpandButtonBox>
			</Box>
			<Album title={'1993'} tracks={scanningTheUniverse} date={'12.07.2021'}
					 description={'Ein neuer Track "Scanning the Universe" und ein paar ältere, nur auf MyOwnMusic veröffentlichte.'}/>
			<Album title={'Electronic Test Drive'} tracks={electronicTestDrive} date={'26.09.2019'}
					 description={'Recht zügig mit Maschine entstandene Tracks.'}/>
			<Album title={'The Nighttrain'} tracks={theNighttrain} date={'2019'} description={'Eine DJ Anfrage'}/>
			<Album title={'Technoscout'} tracks={technoscout} date={'30.11.2018'} description={'Meine ersten ' +
				'Produktionen nach langjähriger Pause. Das Ziel meines Schaffens war, "solide" zu produzieren, ' +
				'was mir, glaube ich auch ganz gut gelungen ist.'}/>
			<Album title={'Production Snapshots'} tracks={productionSnapshots} date={'2021 - 2022'}
					 description={'Das "Snaphot"-Verfahren soll helfen, unerwünschte Entwicklung abzufangen und ' +
						 'leichter Zugang zum in der Entwicklung befindlichen Stand zu geben.'}/>
			</ContentLayout>
		</>
	)
}