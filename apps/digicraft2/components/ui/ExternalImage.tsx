import * as React from 'react'
import {useLocalStorage} from '../../lib/localStorageContext'
import {globals} from '../../lib/globals'

type Props = {
	image: string
	alt: string
	width: number
	visible: boolean
};

export default function ExternalImage(props: Props) {

	const {brightness} = useLocalStorage()

	return (
		<>
			{props.visible ?
				<img src={props.image} alt={props.alt} width={props.width} style={{color: globals.brightness[brightness].color}}/>
				: <img src={''} alt={props.alt} width={props.width} style={{color: globals.brightness[brightness].color}}/>
			}
		</>
	)
}