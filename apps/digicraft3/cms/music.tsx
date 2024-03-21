
import scanningtheuniverse from '/public/technoscout/scanning the universe.jpg'
import futile from '/public/technoscout/futile.jpg'
import decembereleventh from '/public/technoscout/december eleventh.jpg'
import rollercoastersun from '/public/technoscout/rollercoaster sun.jpg'
import seriousTouch from '/public/technoscout/serious touch.jpg'
import threesexty from '/public/technoscout/threesexty.jpg'
import explosive from '/public/technoscout/explosive.jpg'
import citynoon from '/public/technoscout/city noon.jpg'
import thrown from '/public/technoscout/thrown.jpg'
import nightdrive from '/public/technoscout/nightdrive.jpg'
import pooltime from '/public/technoscout/pool time.jpg'
import sunset from '/public/technoscout/sunset.jpg'
import rave from '/public/technoscout/rave.jpg'
import braek from '/public/technoscout/break.jpg'
import splash from '/public/technoscout/splash.jpg'
import melancholy from '/public/technoscout/melancholy.jpg'
import lagoon from '/public/technoscout/lagoon.jpg'
import fuckedup from '/public/technoscout/fucked up.jpg'
import sexy from '/public/technoscout/sexy.jpg'
import white from '/public/technoscout/white.jpg'
import jackinthebox from '/public/technoscout/jackinthebox.jpg'
import nighttrain from '/public/technoscout/nighttrain.jpg'
import unstoppable from '/public/technoscout/unstoppable.jpg'
import technoscouttrack from '/public/technoscout/technoscout track.jpg'
import acceleration from '/public/technoscout/acceleration.jpg'
import oldschool from '/public/technoscout/oldschool.jpg'
import desertlike from '/public/technoscout/desert like.jpg'
import technoscoutep from '/public/technoscout/technoscout ep.jpg'
import testdrivealbum from '/public/technoscout/testdrive.jpg'
import nineteenalbum from '/public/technoscout/nineteen.jpg'
import recipeofdust from '/public/technoscout/recipe of dust.jpg'
import { StaticImageData } from 'next/image'

type Track = {
	title: string
	src: string
	description?: string
	image?: StaticImageData
}

type AlbumProps = {
	title: string
	tracks: Array<Track>
	date: string
	description: string
	image?: StaticImageData
}

const recipeOfDust: Array<Track> = [
	{
		title: 'Pale Blue Dot',
		src: '68 Pale Blue Dot',
		description: 'Rock',
		image: recipeofdust,
	},
	{title: 'Starlight', src: '69 Starlight', description: 'Energie',
		image: recipeofdust
	},
	{title: 'Organic Matter', src: '70 Organic Matter', description: 'Life',
		image: recipeofdust
	},
	{
		title: 'Electroataraxia',
		src: '71 Electroataraxia',
		description: 'Patience',
		image: recipeofdust
	},
	{
		title: 'Water',
		src: '72 Water',
		description: 'Water makes it soft',
		image: recipeofdust
	},
]

const scanningTheUniverse: Array<Track> = [
	{
		title: 'Scanning the Universe',
		src: 'Scanning the Universe',
		description: 'Etwas lang geworden. Der Titel passt - wie immer ;)',
		image: scanningtheuniverse,
	},
	{title: 'Futile pt.2', src: 'Futile pt.2', description: 'Schöner, warmer Mix. Fehlt etwas Content.',
		image: futile
	},
	{title: 'December Eleventh', src: 'December Eleventh', description: 'Langgezogenes Thema im Winterkontext.',
		image: decembereleventh
	},
	{
		title: 'Rollercoaster Sun',
		src: 'Rollercoaster Sun',
		description: 'Naja, etwa so, wie wenn man Achterbahn fährt und einem ' +
			'am \'Hochpunkt\' die Sonne, die schon über dem Horizont steht, ins Gesicht fällt.',
		image: rollercoastersun
	},
	{
		title: 'Serious Touch',
		src: 'Serious Touch',
		description: 'Objektivität, junger Padawan. Objektivität!',
		image: seriousTouch
	},
	{title: 'Threesexty', src: '36', description: 'Könnte auf dem Dancefloor sogar funktionieren.',
		image: threesexty
	},
]

const electronicTestDrive: Array<Track> = [
	{
		title: '01 - Explosive', src: '01 - Explosive', description: 'Das provokante "Explosive", schlampig live ' +
			'arrangiert und eingespielt. Soll das Album ein wenig "verstecken".', image: explosive
	},
	{
		title: '02 - City Noon',
		src: '02 - City Noon',
		description: 'Naja, mittags in der hektischen, glimmend heißen Stadt. Leider mit Harmoniefehler.' +
			' Das war aber schwer zu hören.' +
			' Könnte von weiterem Hören abhalten. Leider.',
		image: citynoon
	},
	{title: '03 - Thrown', src: '03 - Thrown',
		description: 'Ein etwas ernsteres, philosophisches Thema.',
		image: thrown
	},
	{
		title: '04 - Nightdrive',
		src: '04 - Nightdrive',
		description: 'Nachts allein mit dem Auto auf der Straße unterwegs. Ein langer Weg.',
		image: nightdrive
	},
	{
		title: '05 - Pool Time',
		src: '05 - Pool Time',
		description: 'Ja, das Sample hat zu viel Plattenknistern. Egal. ' +
			'Eine "Pool Time" kann man sich trotzdem irgendwie vorstellen.',
		image: pooltime
	},
	{title: '06 - Sunset', src: '06 - Sunset', description: 'Sonnenuntergang, oder?',
		image: sunset
	},
	{
		title: '07 - Rave', src: '07 - Rave', description: '...wenn man am Eingang steht und der Bass einem ' +
			'entgegenrollt. Fehlt etwas Tempo.', image: rave
	},
	{title: '08 - Break', src: '08 - Break', description: 'Päuschen.', image: braek},
	{title: '09 - Splash', src: '09 - Splash', description: 'Freches Wasserthema aus jungen Jahren.', image: splash},
	{title: '10 - Melancholy Disco', src: '10 - Melancholy Disco', description: 'Hätte es fast nicht geschafft.',
		image: melancholy
	},
	{title: '11 - Lagoon', src: '11 - Lagoon', description: 'Noch mehr Wasser, Strand und Natur.',
		image: lagoon
	},
	{
		title: '12 - Fucked Up',
		src: '12 - Fucked Up',
		description: 'Funkioniert auf dem Dancefloor möglicherweise auch.',
		image: fuckedup
	},
	{
		title: '13 - Sexy', src: '13 - Sexy', description: 'Es ist so schwer Vocals zu finden. Das Vorliegende ' +
			'wird schnell langweilig. Bisschen weit weg vom Thema eigentlich.', image: sexy
	},
	{title: '14 - White', src: '14 - White', description: '"Barry" hat es auch irgendwie geschafft.',
		image: white
	},
	{
		title: '15 - Jackinthebox',
		src: '15 - Jackinthebox',
		description: 'Es fehlt Textur. Wurde mir erst bei späteren Produktionen klar.',
		image: jackinthebox
	},
]

const theNighttrain: Array<Track> = [
	{
		title: 'The Nighttrain (technoscout Remix)',
		src: 'The Nighttrain (technoscout Remix)',
		description: 'Da hab\' ich mich ziemlich angestrengt. ' +
			'Fehlt etwas Tempo.', image: nighttrain
	},
]

const technoscout: Array<Track> = [
	{
		title: 'Technoscout',
		src: 'Technoscout',
		description: 'Ein "Technoscout" ist einer, der Musik findet.',
		image: technoscouttrack
	},
	{
		title: 'Incredible Acceleration',
		src: 'Incredible Acceleration',
		description: 'Eindeutig ein Exot, der Schwierigkeiten hat, anzukommen.',
		image: acceleration
	},
	{
		title: 'Unstoppable', src: 'Unstoppable', description: 'Ein eigenwilliger Mix... -> "Musik muss die Leute eben abholen, ' +
			'durch und durch feucht, wie eine richtig geile Hure!" Die Stimmungsgeometrie ist etwas verrutscht ^^',
		image: unstoppable
	},
	{
		title: 'Oldschool',
		src: 'Oldschool',
		description: 'Oldschool ist eigentlich etwas, was ich nicht mag. Ich bin nicht sicher, woher der Titel kam,' +
			' aber nun ist es so.', image: oldschool
	},
	{
		title: 'Desert Like', src: 'Desert Like', description: 'Ein Wüstenthema. Das Ende. Heiß und Trocken. Ein Ziel ist auch ein Ende.',
		image: desertlike
	},
]
