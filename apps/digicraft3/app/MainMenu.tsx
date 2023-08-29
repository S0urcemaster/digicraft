import * as React from 'react'
import { Card, Elevation, Icon } from '@blueprintjs/core'
import { useRouter } from 'next/navigation'
import { Page } from '../components/page/Page'

import { mainMenuContent } from '../cms/MainMenuContent'
import { MenuItem } from '../core/mainMenu'

type Props = {
	loaded: boolean
}

export default function MainMenu() {

	const router = useRouter()

	function onClick(menuItem: MenuItem) {
		const [route] = menuItem.route
		router.push(route)
	}

	function href(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		// event.preventDefault()
		// event.stopPropagation()
	}

	return (
		<Page center>
			<div className={'main-menu-container'}>
				<>
					{mainMenuContent.map((m, idx) => {
							return idx < 3 ?
								<Card interactive={true} elevation={Elevation.TWO} key={idx} onClick={() => onClick(m)}
										style={{borderRadius: 30}}>
									<div style={{position: 'absolute', top: 0, right: -10}}>
										{m.svg}
									</div>
									<div style={{display: 'flex'}}>
										<div>
											{m.icon}
										</div>
										<div style={{width: '100%'}}>
											<div style={{display: 'flex', justifyContent: 'space-between', position: 'relative'}}>
												<h3 className={'bp5-heading'} style={{marginTop: -5}}>{m.heading}</h3>
												<div style={{color: 'gray', whiteSpace: 'nowrap'}}>
													{
														// @ts-ignore (icon={i})
														m.mediaIcons.map((i, idx) => <Icon key={idx} icon={i} size={16}/>)
													}
												</div>
											</div>
											<div style={{position: 'relative'}}>
												{m.body}
											</div>
										</div>
									</div>

								</Card>
								:
								<Card interactive={true} elevation={Elevation.TWO} key={idx} onClick={() => onClick(m)}
										style={{borderRadius: 2}}>
									<div style={{position: 'absolute', top: 0, right: -10}}>
										{m.svg}
									</div>
									<div style={{display: 'flex', justifyContent: 'space-between', position: 'relative'}}>
										<h3 className={'bp5-heading'} style={{marginTop: -5}}>{m.heading}</h3>
										<div style={{color: 'gray', whiteSpace: 'nowrap'}}>
											{
												// @ts-ignore (icon={i})
												m.mediaIcons.map((i, idx) => <Icon key={idx} icon={i} size={16}/>)
											}
										</div>
									</div>
									<div style={{position: 'relative', fontWeight: 600}}>
										{m.body}
									</div>
								</Card>
						}
					)}
				</>
			</div>
		</Page>
	)
}