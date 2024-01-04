import * as React from 'react'
import { mainMenuContent } from '../cms/MainMenuContent'
import { MediaIcon } from '../core/model'
import { Card, Elevation, Icon } from '@blueprintjs/core'
import { ReactNode } from 'react'

export type MenuItem = {
	heading: string
	icon?: ReactNode
	body: ReactNode
	mediaIcons: MediaIcon[]
	route: [string, string]
	svg: ReactNode
}

export function BigMenu({clicked}:{clicked: (menuItem: MenuItem) => void}) {
	return (
		<div className={'main-menu-container'}>
			{mainMenuContent.map((m, idx) => {
					return idx < 6 ?
						<Card interactive={true} elevation={Elevation.TWO} key={idx} onClick={() => clicked(m)}
								style={{borderRadius: 30, border: '1px solid black'}}>
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
						<Card interactive={true} elevation={Elevation.TWO} key={idx} onClick={() => clicked(m)}
								style={{borderRadius: 2, border: '1px solid black'}}>
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
		</div>
	)
}