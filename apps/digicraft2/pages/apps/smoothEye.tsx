import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import { H1, H3, P } from '../../components/ui/Typography'
import ExternalLink from '../../components/ui/ExternalLink'
import BouncingCircle from '../../components/smoothEye/BouncingCircle'
import Meta, { metas } from '../../components/content/Meta'
import ContentLayout from '../../components/content/ContentLayout'
import { default as AppMenu } from '../../components/content/menu/App'

export default function SmoothEye() {

	const ref = useRef<HTMLDivElement>(null)
	const [size, setSize] = useState({width: 0, height: 0})

	useEffect(() => {
		if (ref.current) {
			setSize({width: ref.current.clientWidth, height: ref.current.clientHeight})
		}
	}, [ref.current])

	async function fullscreen() {
		await ref.current!.requestFullscreen()
		setSize({width: ref.current!.clientWidth, height: ref.current!.clientHeight})
	}

	return (
		<>
			<Meta meta={metas.smoothEye}/>
			<ContentLayout left={
				<>
					<AppMenu/>
				</>
			} right={
				<>
					<H3 first>Idee</H3>
					<P>
						<ExternalLink href={'https://www.youtube.com/watch?v=ObtW353d5i0'}>The Science of Vision, Eye Health &
							Seeing Better | Huberman Lab Podcast #24 (Youtube)
						</ExternalLink>
					</P>
					<P>
						Da man mit den Augen zumeist punktuiert arbeitet, soll die gleichmäßige Bewegung die Augen entspannen.
					</P>
					<P>
						Anleitung: Den Punkt fokussieren und ihm folgen. Dabei versuchen, dem Punkt
						möglichst kontinuierlich zu folgen und nicht immer wieder "abzusetzen".
					</P>
				</>
			}
			>
				<H1>Smooth Eye Movement (Weiche Augenbewegung) Entspannungsübung</H1>
				{/*<Button onClick={fullscreen} value={'Im Vollbildmodus starten (Beenden mit ESC)'} />*/}
				<div ref={ref} style={{width: '100%', height: 500}}>
					{ref.current ?
						<BouncingCircle radius={20} speed={200} width={size.width} height={size.height}/>
						: ''
					}
				</div>
			</ContentLayout>
		</>
	)
}