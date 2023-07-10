import Head from 'next/head'
import Content from './Content'
import * as React from 'react'
import Link from '../ui/Link'
import {CSSProperties, ReactNode, useEffect, useState} from 'react'
import Header from './Header'
import {useLocalStorage} from '../../lib/localStorageContext'
import {globals} from '../../lib/globals'
import Radio from '../radio/Radio'
import {useRouter} from 'next/router'
import {routes} from '../../lib/routes'
import SVGEditor from '../svgEditor/SVGEditor'
import {EditorContextProvider} from '../svgEditorx/editorContext'

export default function VerticalLayout({children, style}: { children: ReactNode, style?: CSSProperties }) {

	const [date, setDate] = useState('')
	const {brightness, radioPinned} = useLocalStorage()
	const router = useRouter()

	useEffect(() => {
		setDate(new Date().toLocaleDateString())
	}, [])

	return (
		<>
			<Head>
				<title>Digi Craft</title>
			</Head>

			{router.route === routes.apps.svgEditor ?

				<EditorContextProvider>
					<SVGEditor />
				</EditorContextProvider> :
				<>
					<Header/>

					<Content>
						{children}
					</Content>

					<footer className="footer" style={{
						background: globals.brightness[brightness].background,
						color: globals.brightness[brightness].color,
						borderTop: '1px solid ' + globals.brightness[brightness].line,
					}}>
						<div style={{display: 'flex', columnGap: '40px'}}>
							{date}
							<Link href={'mailto:sourcemaster@digi-craft.de'} style={{
								background: globals.brightness[brightness].background,
								color: globals.brightness[brightness].color,
							}}>Kontakt</Link>
							<Link href={'/meta/privacy'}>Impressum / Datenschutz</Link>
						</div>
					</footer>
					<div style={{
						position: 'fixed',
						top: -5,
						right: -2,
						height: 128,
						overflow: 'hidden',
						visibility: radioPinned ? 'visible' : 'hidden',
					}}>
						<Radio/>
					</div>
				</>
			}
		</>
	)
}