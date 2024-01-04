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
	dev?: boolean
}

export function BigMenu({items, clicked}:{items: MenuItem[], clicked: (menuItem: MenuItem) => void}) {

	function Item({item, idx, dev}: {item:MenuItem, idx: number, dev?: boolean}) {
		return (
			<Card interactive={true} elevation={Elevation.TWO} key={idx} onClick={() => clicked(item)}
					style={{borderRadius: 2, border: dev ? '1px solid orange' : '1px solid black'}}>
				<div style={{position: 'absolute', top: 0, right: -10}}>
					{item.svg}
				</div>
				<div style={{display: 'flex', justifyContent: 'space-between', position: 'relative'}}>
					<h3 className={'bp5-heading'} style={{marginTop: -5}}>{item.heading}</h3>
					<div style={{color: 'gray', whiteSpace: 'nowrap'}}>
						{
							// @ts-ignore (icon={i})
							item.mediaIcons.map((i, idx) => <Icon key={idx} icon={i} size={16}/>)
						}
					</div>
				</div>
				<div style={{position: 'relative', fontWeight: 600}}>
					{item.body}
				</div>
			</Card>
		)
	}

	function ItemPinned({item, idx, dev}: {item:MenuItem, idx: number, dev?:boolean}) {
		return (
			<Card interactive={true} elevation={Elevation.TWO} key={idx} onClick={() => clicked(item)}
					style={{borderRadius: 30, border: dev ? '1px solid orange' : '1px solid black'}}>
				<div style={{position: 'absolute', top: 0, right: -10}}>
					{item.svg}
				</div>
				<div style={{display: 'flex'}}>
					<div>
						{item.icon}
					</div>
					<div style={{width: '100%'}}>
						<div style={{display: 'flex', justifyContent: 'space-between', position: 'relative'}}>
							<h3 className={'bp5-heading'} style={{marginTop: -5}}>{item.heading}</h3>
							<div style={{color: 'gray', whiteSpace: 'nowrap'}}>
								{
									// @ts-ignore (icon={i})
									item.mediaIcons.map((i, idx) => <Icon key={idx} icon={i} size={16}/>)
								}
							</div>
						</div>
						<div style={{position: 'relative'}}>
							{item.body}
						</div>
					</div>
				</div>

			</Card>
		)
	}

	return (
		<div className={'main-menu-container'}>
			{mainMenuContent.map((item, idx) => {
					return (
						<>
						{ !item.dev ?
							idx < 6 ?
								<ItemPinned item={item} idx={idx}/>
								:
								<Item item={item} idx={idx}/>
							: process.env.NODE_ENV === 'development' ?
								idx < 6 ?
									<ItemPinned item={item} idx={idx} dev />
									:
									<Item item={item} idx={idx} dev />
								: null
						}
						</>
					)
				}
			)}
		</div>
	)
}