import * as React from 'react'
import {H1, P} from '../../components/ui/Typography'
import ExternalLink from '../../components/ui/ExternalLink'
import {Box} from '../../components/ui/Box'
import Meta, {metas} from '../../components/content/Meta'
import ContentLayout from '../../components/content/ContentLayout'
import {default as BlogMenu} from '../../components/content/menu/Blog'

type Props = {};

export default function Boellerverbot(props: Props) {
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
				<Meta meta={metas.boellerverbot}/>
				<H1>Anarchie statt Böllerverbot</H1>
				<Box>
					<P first>
						Meine Antwort zu einer Forderung eines Böllerverbots
						auf <ExternalLink href={'https://youtu.be/1VxaNxbDHDE'}>Youtube/SpaceFrogs</ExternalLink>: (Angeführt
						wurden die richtigen
						und verständlichen Gründe für ein Verbot.)
					</P>
					<P>"Ich glaube, du erkennst das Problem nicht. Es geht nicht so sehr um diesen speziellen Einzelfall,
						sondern um das generelle Verfahren. Denn wo hört das auf? Böllerverbot, Alkoholverbot und Rauchverbot
						da gesundheitsschädlich, Verbot von Zucker und Süßigkeiten, allgemein von schlechter Ernährung,
						Verbot von Geschlechtsverkehr ohne Kondom, da Ansteckungsgefahr, Zwang zur sportlichen Betätigung,
						da Bewegungsmangel ein Hauptrisiko von Herz-/ Kreislauferkrankungen ist und die Gesundheitskassen
						belastet,
						ständiges Gebot zum Tragen einer Maske in der Öffentlichkeit (die Leute lernen es nie, in die Armbeuge
						zu husten), Kontrolle, ob man sich nach dem WC-Gang die Hände gewaschen hat, der Zwang, immer zu
						lächeln,
						damit man beim anderen keine negativen Gefühle weckt...
					</P>
					<P>
						Es geht nicht darum, die Freiheit zu haben, das Falsche zu tun, sondern die Freiheit zu haben,
						das Richtige zu tun. Wenn sich Menschen entscheiden, nicht an Sylvester zu böllern, es immer mehr
						werden und schließlich in der Mehrheit sind, werden sich andere daran anpassen. Und das ist der Weg,
						den man nehmen muss. "The greatest teacher failure is." Wenn alles geregelt ist, einem jede
						Entscheidung
						abgenommen wird, verliert man die Fähigkeit zur Reflektion. Leid ist notwendig, um einen auf den
						richtigen Weg zu bringen.
					</P>
					<P>
						Wenn du von deiner Sache überzeugt bist, dann geh' mit gutem Beispiel voran. Geh' zu den Leuten und
						überzeuge sie vom richtigen Weg. Sei ein Prophet, kein Diktator.
					</P>
					<P>
						Genau aus dem Grund ist die Cannabislegalisierung auch so ein wichtiges Thema. Es macht süchtig und
						kann
						abhängig machen, psychische Probleme können auftreten (oder hervortreten), noch ein weiterer
						Suchtstoff
						neben Alkohol, Tabak, Süßigkeiten und was sonst noch. Alles richtig. Aber ein Verbot nimmt jede
						Chance,
						offen und reflektiert über einen Sachverhalt zu sprechen, Reflektion im Konsumenten zu fördern, das
						ein
						Verbot nicht aus der Welt schafft, sondern es nur unterdrückt.
					</P>
					<P>
						"Anarchie ..." (nicht zu verwecheln mit Anomie) "... beizeichnet einen Zustand der Abwesenheit von
						Herrschaft." Jedem soll es möglich sein zu tun, was er oder sie für richtig hält bei Achtung der
						Freiheit des anderen. Das sollte die einzige Regel sein. Aber dorthin muss die Gesellschaft erst mal
						kommen.
						Der Weg ist folglich und logisch, der successive Abbau von Vorschriften und Regeln, nachdem jeder in
						die
						Lage versetzt wurde, aufgeklärt und bewusst eine Entscheidung über den jeweiligen Sachverhalt zu
						treffen.
						Regeln und Vorschriften sind eine Endlosspirale, die zu einer symptomfreien Gesellschaft führen, die
						aber weiterhin krank ist.
					</P>
					<P>
						(Zu dem Thema empfehle ich "Schöne neue Welt" von Aldous Huxley.)"
					</P>
				</Box>
			</article>
		</ContentLayout>
	)
}