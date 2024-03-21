import * as React from 'react'
import { MediaIcon } from '../core/model'
import { Card, Elevation, Icon } from '@blueprintjs/core'
import { Fragment, ReactNode } from 'react'
import { Route } from '../app/routes'

export type MenuItem = {
	heading: string
	icon?: ReactNode
	body: ReactNode
	mediaIcons: MediaIcon[]
	route: Route
	svg: ReactNode
	dev?: boolean
}

export function BigMenu(
	{
		items,
		colors = {
			text: 'black',
			title: 'black',
			titleBorder: 'black',
			menuItemBorder: 'black'
		},
		clicked,
		dev = false,
	}: {
		items: MenuItem[],
		colors?: {
			text: string,
			title: string,
			titleBorder: string
			menuItemBorder: string
		}
		clicked: (menuItem: MenuItem) => void
		dev: boolean
	}) {

	function Item({item, idx, dev}: { item: MenuItem, idx: number, dev?: boolean }) {
		return (
			<Card interactive={true} elevation={Elevation.TWO} key={idx} onClick={() => clicked(item)}
					style={{
						borderRadius: 2,
						border: dev ? `3px solid ${'#ece30f'}` : `1px solid ${colors.title}`
					}}>
				<div style={{position: 'absolute', top: 0, right: -10}}>
					{item.svg}
				</div>
				<div style={{display: 'flex', justifyContent: 'space-between', position: 'relative'}}>
					{/*<h3 className={'bp5-heading'} style={{marginTop: -5}}>{item.heading}</h3>*/}
					<svg width={50} height={40} style={{overflow: 'visible'}}>
						<text fontWeight={'bold'} fontSize={'20'} fill={colors.title}
								stroke={colors.titleBorder} strokeWidth={0.7}
								x={0} y={20}>{item.heading}</text>
					</svg>
					<div style={{color: 'gray', whiteSpace: 'nowrap'}}>
						{
							item.mediaIcons.map((i, idx) =>
								<Icon key={idx} icon={i} size={16} color={'#6cd9d9'}
										svgProps={{style: {stroke: 'blue', strokeWidth: 0.5}}}/>)
						}
					</div>
				</div>
				<div style={{position: 'relative', fontWeight: 600}}>
					{item.body}
				</div>
			</Card>
		)
	}

	function ItemPinned({item, idx, dev}: { item: MenuItem, idx: number, dev?: boolean }) {
		return (
			<Card interactive={true} elevation={Elevation.TWO} key={idx} onClick={() => clicked(item)}
					style={{
						borderRadius: 10,
						border: dev ? `3px solid ${'#ece30f'}` : `1px solid ${colors.menuItemBorder}`
					}}>
				<div style={{position: 'absolute', top: 0, right: -10}}>
					{item.svg}
				</div>
				<div style={{display: 'flex'}}>
					<div>
						{item.icon}
					</div>
					<div style={{width: '100%'}}>
						<div style={{display: 'flex', justifyContent: 'space-between', position: 'relative'}}>
							{/*<h3 className={'bp5-heading'} style={{marginTop: -5}}>{item.heading}</h3>*/}
							<svg width={50} height={40} style={{overflow: 'visible'}}>
								<text fontWeight={'bold'} fontSize={'30'} fill={colors.title}
										stroke={colors.titleBorder} strokeWidth={0.9}
										x={0} y={25}>{item.heading}</text>
							</svg>
							<div style={{color: 'gray', whiteSpace: 'nowrap'}}>
								{
									item.mediaIcons.map((i, idx) =>
										<Icon key={idx} icon={i} size={16} color={'#6cd9d9'}
												svgProps={{style: {stroke: 'blue', strokeWidth: 0.5}}}/>)
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
			{items.map((item, idx) => {
					return (
						<Fragment key={idx}>
							{!item.dev ?
								idx < 10 ?
									<ItemPinned item={item} idx={idx}/>
									:
									<Item item={item} idx={idx}/>
								: dev ?
									idx < 10 ?
										<ItemPinned item={item} idx={idx} dev/>
										:
										<Item item={item} idx={idx} dev/>
									: null
							}
						</Fragment>
					)
				}
			)}
		</div>
	)
}