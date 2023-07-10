import * as React from 'react'
import {CSSProperties, ReactNode} from 'react'
import pattern from '../../public/pattern-light.svg'
import TourBox from '../ui/TourBox'
import QuotesBox from '../ui/QuotesBox'
import BrightnessBox from '../ui/BrightnessBox'
import TopButton from '../ui/TopButton'
import {globals} from '../../lib/globals'
import {useLocalStorage} from '../../lib/localStorageContext'

export default function ContentLayout(
	props: {
		left?: ReactNode, children: ReactNode,
		right?: ReactNode, rightWidth?: number, style?: CSSProperties, leftWide?: boolean
	},
) {

	const {brightness} = useLocalStorage()

	function getBackgroundImage() {
		switch (brightness) {
			case 'light':
				return ''
		}
	}

	return (
		<div className={`background${brightness[0].toUpperCase() + brightness.slice(1)}`} style={{
			display: 'grid',
			gridTemplateColumns: props.leftWide ? '2fr 5fr 1fr' : props.right ? '1fr 4fr 1fr' : '1fr 5fr',
		}}>
			{props.left ? <div style={{
					display: 'flex', flexFlow: 'column', padding: '25px 30px 0 30px',
					background: globals.brightness[brightness].sides, color: globals.brightness[brightness].color,
				}}>
					{props.left}
				</div>
				: null}
			<div style={{
				padding: '30px 30px 40px 30px', ...props.style,
				color: globals.brightness[brightness].color,
			}}>
				{props.children}
			</div>
			{props.right ?
				<div style={{
					display: 'flex', flexFlow: 'column', padding: '25px 30px 0 30px',
					background: globals.brightness[brightness].sides, color: globals.brightness[brightness].color,
				}}>
					{props.right}
				</div>
				: null}
			<TopButton left/>
			<TopButton right/>
		</div>
	)
}