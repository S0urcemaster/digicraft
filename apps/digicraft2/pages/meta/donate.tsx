import * as React from 'react'
import {Box} from '../../components/ui/Box'
import {H1, P} from '../../components/ui/Typography'
import ExternalLink from '../../components/ui/ExternalLink'
import ContentLayout from '../../components/content/ContentLayout'
import {default as MetaMenu} from '../../components/content/menu/Meta'

export default function Donate() {
	return (
		<>
			<ContentLayout left={
				<>
					<MetaMenu />
				</>
			} right={
				<>
				</>
			}
			>
				<H1>Spenden</H1>
				<Box>
					<P first>
						Oft möchte ich privaten Homepagebetreibern Dank sagen, ohne dass es eine Möglichkeit dazu gibt.
						Wer auf meiner Webseite etwas Hilfreiches findet und sich erkenntlich zeigen möchte, kann
						dies über meine Paypal Adresse, <ExternalLink
						href={'https://paypal.me/snteister'}>paypal.me/snteister</ExternalLink>, tun.
					</P>
					<P>
						Eine Spende (mit Verweis auf den Inhalt) wird mich dazu anregen, mehr in diese Richtung zu
						investieren.
						Vielen Dank :)
					</P>
				</Box>
			</ContentLayout>
		</>
	)
}