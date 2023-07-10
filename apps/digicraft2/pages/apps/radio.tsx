import * as React from 'react'
import Meta, {metas} from '../../components/content/Meta'
import ContentLayout from '../../components/content/ContentLayout'
import {H1, H3, P} from '../../components/ui/Typography'
import {default as AppMenu} from '../../components/content/menu/App'
import {default as RadioComponent} from '../../components/radio/Radio'
import {Button} from '../../components/ui/Form'
import {useLocalStorage} from '../../lib/localStorageContext'
import {Spacer} from '../../components/ui/Layout'
import ExternalLink from '../../components/ui/ExternalLink'

export default function Radio(props: {}) {

	const {toggleRadioPinned} = useLocalStorage()

	return (
		<>
			<Meta meta={metas.radio}/>
			<ContentLayout left={
				<>
					<AppMenu/>
				</>
			} right={
				<>
					<H3 first>Idee</H3>
					<P>
						Das Umschalten von Streams mehrerer Webradioseiten ist müßig. Man kann aber auch die Streams
						direkt mit der Web Audio Api wiedergeben.
					</P>
					<Spacer height={20} />
					<H3 first>Rechtshinweis</H3>
					<P>
						Die Streams werden im Original wiedergegeben. Es wird keine zusätzliche Werbung geschaltet noch
						sonst Einnahmen daraus erzielt. Im Endeffekt ist das wie ein herkömmliches Radiogerät, das jeder
						Seitenbesucher kostenlos für sich privat zur Verfügung hat. Dort ist zum Empfang ebenso keine
						Genehmigung oder sonstige, zusätzliche Abgaben über die staatlichen Internetgebühren hinaus
						erforderlich. Die Streams der einzelnen Sender werden von denen ja auch in dieser Weise zur Verfügung
						gestellt, genauso wie Funkfrequenzen, die man gebündelt auf einem Radio empfangen kann.
						Einer technischen Unterscheidbarkeit im Sinne der Nutzungserweiterung wird hiermit widersprochen.
					</P>
				</>
			}
			>
				<div style={{display: 'flex', justifyContent: 'top'}}>
					<H1>Digi Radio Convenience Player</H1>
					<Button value={'Anpinnen'} onClick={toggleRadioPinned} style={{height: 30, marginLeft: 20}} />
				</div>
				<RadioComponent />
				<Spacer height={15} />
				<div style={{display: 'flex', flexDirection: 'column', rowGap: 5}}>
					<div>1. <ExternalLink href={'https://www.swr3.de/'}>https://www.swr3.de</ExternalLink></div>
					<div>2. <ExternalLink href={'https://www.dasding.de/'}>https://www.dasding.de/ (Montag ab 22 Uhr "Clubding")</ExternalLink></div>
					<div>3. <ExternalLink href={'https://www.deutschlandfunknova.de/'}>https://www.deutschlandfunknova.de/ (Samstag ab 19 Uhr "Club der Republik")</ExternalLink></div>
					<div>4. <ExternalLink href={'https://www.deutschlandfunk.de/'}>https://www.deutschlandfunk.de/</ExternalLink></div>
					<div>5. <ExternalLink href={'https://www.rm.fm/'}>https://www.rm.fm/</ExternalLink></div>
					<div>6. <ExternalLink href={'https://www.sunshine-live.de/'}>https://www.sunshine-live.de/</ExternalLink></div>
					<div>7. <ExternalLink href={'https://www.loungeplus.de/'}>https://www.loungeplus.de/</ExternalLink></div>
					<div>8. <ExternalLink href={'https://www.beatsradio.de/'}>https://www.beatsradio.de/</ExternalLink></div>
				</div>
			</ContentLayout>
		</>
	)
}