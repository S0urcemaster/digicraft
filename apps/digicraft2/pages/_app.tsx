import '../styles/globals.css'
// import '../styles/default.css'
// import '../styles/idea.css'
// import '../styles/androidstudio.css'
import type {AppProps} from 'next/app'
import VerticalLayout from '../components/content/VerticalLayout'
import '@fontsource/jetbrains-mono'
// import '@fontsource/share-tech-mono'
// import '@fontsource/vt323'
// import '@fontsource/cairo'
import React from 'react'
import {DevContextProvider} from '../lib/devContext'
import {LocalStorageProvider} from '../lib/localStorageContext'
import {UserContextProvider} from '../components/content/user/userContext'

export default function App({Component, pageProps}: AppProps) {

	return (
		<>
			<DevContextProvider>
				<LocalStorageProvider>
					<UserContextProvider>
						<VerticalLayout>
							<Component {...pageProps} />
						</VerticalLayout>
					</UserContextProvider>
				</LocalStorageProvider>
			</DevContextProvider>
		</>
	)
}
