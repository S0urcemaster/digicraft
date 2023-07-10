import React from 'react'
import {CortexNeuron} from '../../db/cortexNeurons'
import ExternalLink from '../ui/ExternalLink'
import ExternalImage from '../ui/ExternalImage'
import {Box} from '../ui/Box'
import {Spacer} from '../ui/Layout'

const styles = {
	padding: '2px 3px 2px 3px',
	outlineStyle: 'solid',
	outlineOffset: '2px',
	outlineColor: 'gray',
	outlineWidth: '1px',
	borderRadius: '0.25rem',
	margin: '1px',
	marginBottom: '26px',
}

export default function CortexItem(
	props: CortexNeuron & {imageVisible: boolean}
) {
	return (
		<Box>
			<div style={{display: 'grid', gridTemplateColumns: '3fr 1fr', paddingBottom: '3px'}}>
				<div style={{whiteSpace: 'nowrap', overflowX: 'hidden', textOverflow: 'ellipsis'}}>
					<div style={{fontWeight: 'bold'}}>{props.title}</div>
					{props.subtitle ?
						<div style={{fontStyle: 'italic'}}>{props.subtitle}</div> : ''
					}
					{props.hrefs.map((href, id) => (
						<div key={id}>
							<ExternalLink href={href}>{href}</ExternalLink>
						</div>
					))}
				</div>
				<div>
					{props.image &&
						<a href={props.hrefs[0]} target={'_blank'}>
							<ExternalImage image={props.image} alt={'Externes Bild'} width={200} visible={props.imageVisible} />
						</a>
					}
				</div>
			</div>
			{props.description}
			<Spacer height={8} />
		</Box>
	)
}