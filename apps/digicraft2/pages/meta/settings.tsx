import * as React from 'react'
import {Box} from '../../components/ui/Box'
import {H1, H2, P} from '../../components/ui/Typography'
import {useShowExternalImages, useStorageBackup} from '../../lib/metaHooks'
import {HR, Spacer} from '../../components/ui/Layout'
import BrightnessSelector from '../../components/content/BrightnessSelector'
import ContentLayout from '../../components/content/ContentLayout'
import {default as MetaMenu} from '../../components/content/menu/Meta'

export default function Settings() {

	const [downloadButton, uploadButton] = useStorageBackup()
	const [showCheckbox] = useShowExternalImages()

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
				<H1>Einstellungen</H1>
				<Box style={{paddingBottom: 10}}>
					<H2 first>Helligkeit</H2>
					<BrightnessSelector/>

				</Box>

				<Box>
					<H2 first>Browserspeicher/LocalStorage Backup</H2>
					<P>Sie können die gespeicherten Daten, z.B. vor einer Neuinstallation downloaden und wieder uploaden.</P>
					{uploadButton()}&nbsp;{downloadButton()}
					<Spacer height={10}/>
				</Box>

				<Box>
					<H2 first>Extern verlinkte Bilder</H2>
					<P>
						{showCheckbox()}
					</P>
				</Box>
			</ContentLayout>
		</>
	)
}