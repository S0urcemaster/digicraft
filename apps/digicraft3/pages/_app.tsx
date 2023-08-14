import type { AppProps } from 'next/app'
// import '../node_modules/@blueprintjs/core/lib/css/blueprint.css' // not working
// whole file wrong dir?
export default function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}