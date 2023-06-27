'use client'

// import { SVGEditor } from 'svg-editor'
// import Frame from '@/components/Frame'
// import { AppContext } from 'digi-context'
// import { Svg, SvgProps, Viewbox } from 'digi-svg'
// import { AppContextProvider } from 'digi-context'

import { useDigiContext } from '@digicraft/context'
import { Model } from '@digicraft/model'

export default function Home() {
	// console.log("logsntr", "Empty", Empty)
	// const appContext: AppContext = {
	// 	environment: {
	// 		screenResolution: {width: 1800, height: 900}
	// 	}
	// }

	const context = useDigiContext()
	const x:Model = {environment: {width: 100, height: 100}}

	return (
		<>
			{/*<Frame>*/}
				<main>
					{/*<Test />*/}
					{/*<AppContextProvider>*/}
					{/*	<SVGEditor />*/}
						<svg>
							<g style={{transformOrigin: '80px 20px', rotate: '-15deg'}}>
								<rect x={0} y={0} width={100} height={100} />
							</g>
						</svg>
						{/*{appContext.environment.screenResolution.width}*/}
						{/*<Svg props={{viewBox: Viewbox, width: 100}}>*/}
						{/*	<rect x={0} y={0} width={100} height={100} />*/}
						{/*</Svg>*/}
					{/*</AppContextProvider>*/}
				</main>
			{/*</Frame>*/}
		</>

	)
}
