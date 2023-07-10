import * as React from 'react'
import Meta, {metas} from '../../components/content/Meta'
import {H1, P} from '../../components/ui/Typography'
import {Box} from '../../components/ui/Box'
import {HR} from '../../components/ui/Layout'
import ExternalLink from '../../components/ui/ExternalLink'
import ContentLayout from '../../components/content/ContentLayout'
import {default as BlogMenu} from '../../components/content/menu/Blog'

export default function Serenity(props: {}) {
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
				<Meta meta={metas.serenity}/>
				<H1>Methoden für mehr Gelassenheit</H1>
				<Box>
					<P first>
						Meine Antwort auf die Frage
						bei <ExternalLink
						href={'https://de.quora.com/unanswered/Wie-k%C3%B6nnen-Menschen-lernen-ihre-Emotionen-zu-regulieren-und-zu-kontrollieren-um-ihre-Reaktionen-auf-Stress-oder-Konflikte-zu-verbessern'}>Quora</ExternalLink>,
						wie
						man Emotionen regulieren und kontrollieren kann.
					</P>
				</Box>
				<HR/>
				<Box>
					<P first>
						Naja, Emotionen zu unterdrücken ist fast unmöglich und macht eher krank.
					</P>
					<P>
						Man muss körperlich für Ausgleich sorgen, versuchen den Kortisolspiegel zu senken und geistig den
						Geist trainieren, um Abstand von seinen Gedanken zu bekommen.
					</P>
					<P>
						Beim körperlichen Teil ist die Methode Ernährung und Sport. Zu hoher Kohlenhydratekonsum erhöht mit
						das körperliche Stresslevel. Man kann es hier mit ketogener Ernährung und Intervallfasten versuchen,
						was auch allgemein der Gesundheit zuträglich ist. Beim Sport muss man nicht übertreiben. Man kann
						auch durch Spazierengehen/ Wandern auf ein notwendiges Level kommen. Wenn man eher wenig Sport macht,
						wäre das ein erster Schritt, um Freude daran zu finden und vielleicht mehr zu wollen. Man kann sich
						auch Morgen- und für Abends Dehnübungen raussuchen. Am wichtigsten ist, dass man sich am Anfang wenig,
						vielleicht nur eine Übung vornimmt, so dass man es täglich, möglichst ohne Ausnahme und auch für den
						Rest seines Lebens machen kann. Wenn eine Übung läuft, kann man noch weitere dazunehmen.
					</P>
					<P>
						Für den geistigen Teil gibt es viele Ratgeber, z.B. Meditation. Der Hauptpunkt ist der, sich von der
						Identifikation mit den eigenen Gedanken zu lösen. Sprich: nicht mit allem, was mir so einfällt, muss
						ich einverstanden sein und muss ich auch nicht hinnehmen. Sondern meine Identifikation ist die
						Auswahl,
						die ich aus den Vorschlägen meines Gehirns treffe. Die völlige Identifikation mit den eigenen Gedanken
						hat schon viele in die Depression getrieben. Wie Kurt Krömer daher sein letztens erschienenes Buch
						betitelt: "Du darfst nicht alles glauben, was du denkst." Gedanken sind die Ursache und Auslöser von
						Emotionen. Sich bewusst für den einen oder anderen Gedanken zu entscheiden, erschließt einem auch
						einen höhere Qualität der eigenen Gefühlswelt.
					</P>
					<P>
						Also, man muss eben die Vorraussetzungen dafür schaffen, um gelassener auf alles reagieren zu können.
						Das schließt auch ein gewisses Mindset mit ein, den anderen, der einen auf die Palme gebracht hat,
						versuchen zu verstehen. Das ist aber eigentlich schon zu spät, denn wenn man bereits ein
						ausgeglichenerer Mensch gewesene wäre, wäre man gar nicht erst auf die Palme gestiegen.
					</P>
				</Box>
			</article>
		</ContentLayout>
	)
}