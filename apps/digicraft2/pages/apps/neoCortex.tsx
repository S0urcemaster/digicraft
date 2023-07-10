import * as React from 'react'
import {H1, H2, H3, P} from '../../components/ui/Typography'
import {cortexNeurons} from '../../db/cortexNeurons'
import {Box} from '../../components/ui/Box'
import CortexItem from '../../components/content/CortexItem'
import ExternalLink from '../../components/ui/ExternalLink'
import {HR, Spacer} from '../../components/ui/Layout'
import {useLocalStorage} from '../../lib/localStorageContext'
import {useEffect, useState} from 'react'
import {Button} from '../../components/ui/Form'
import Link from '../../components/ui/Link'
import {routes} from '../../lib/routes'
import Meta, {metas} from '../../components/content/Meta'
import ContentLayout from '../../components/content/ContentLayout'
import {default as AppMenu} from '../../components/content/menu/App'

export default function NeoCortex() {
	const {showExternalImages} = useLocalStorage()
	const [imagesVisible, setImagesVisible] = useState(false)

	useEffect(() => {
		if (!imagesVisible) setImagesVisible(showExternalImages)
	}, [showExternalImages])

	function showImages() {
		setImagesVisible(true)
	}

	return (
		<>
			<Meta meta={metas.neoCortex}/>
			<ContentLayout left={
				<>
					<AppMenu/>
				</>
			} right={
				<>
					<H3 first>Idee</H3>
				</>
			}
			>
				<H1>Neo Cortex</H1>
				<Box>
					<P first>'Der Neocortex ... verbindet alle Sinne zu einem Ganzen und stellt daraus sinnvolle
						Verhaltensmuster her.'
						(<ExternalLink href={'https://de.wikipedia.org/wiki/Gro%C3%9Fhirnrinde'}>Wikipedia</ExternalLink>)</P>
					<P style={{fontSize: 'smaller'}}>
						(Arte Videos und andere des öffentlich-rechtlichen Rundfunks sind zeitlich begrenzt verfügbar.
						Bei ungültigem Link, findet man das Video evtl. als Reupload von Arte direkt oder auf einem anderen
						Kanal.)
					</P>
					{showExternalImages || imagesVisible ? '' :
						<>
							<Button value={'Externe Bilder anzeigen'} onClick={showImages} altColor/> &nbsp;
							<Link href={routes.meta.privacy}>Externe Bilder dauerhaft anzeigen</Link>
							<Spacer height={10}/>
						</>
					}
				</Box>
				<HR/>
				{cortexNeurons.map((neuron, idx) => (
						<div key={idx}>
							<CortexItem title={neuron.title} subtitle={neuron.subtitle} hrefs={neuron.hrefs}
											description={neuron.description}
											image={neuron.image} imageVisible={imagesVisible}
							/>
							<HR/>
						</div>
					),
				)}
			</ContentLayout>
		</>
	)
}