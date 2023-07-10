import * as React from 'react'
import {H2, H3} from '../../ui/Typography'
import withAuth from '../../hoc/withAuth'
import {Box} from '../../ui/Box'
import {useEffect, useState} from 'react'
import {getIps, getRoutes, getScreens, getTraffic} from '../../api/dashboard'
import Table, {TableContent} from '../../ui/Table'
import {HR} from '../../ui/Layout'

function Dashboard() {

	const [ipsTable, setIpsTable] = useState<TableContent|undefined>()
	const [routesTable, setRoutesTable] = useState<TableContent|undefined>()
	const [trafficTable, setTrafficTable] = useState<TableContent|undefined>()
	const [screensTable, setScreensTable] = useState<TableContent|undefined>()

	useEffect(() => {
		getIpsTable()
		getRoutesTable()
		getTrafficTable()
		getScreensTable()
	}, [])

	async function getTrafficTable() {
		const ips = await getTraffic()
		if(ips) {
			const header = ['Date', 'Count']
			const body = ips.map((row: any) => {
				return [new Date(Date.parse(row.date)).toLocaleDateString(), row.count]
			})
			setTrafficTable({head: header, rows: body})
		}
	}

	async function getScreensTable() {
		const ips = await getScreens()
		const header = ['Width', 'Height', 'Count']
		const body = ips.map((row: any) => {
			const screen = JSON.parse(row.screen)
			return [screen.width, screen.height, row.count]
		})
		setScreensTable({head: header, rows: body})
	}

	async function getRoutesTable() {
		const ips = await getRoutes()
		const header = ['Route', 'Count']
		const body = ips.map((row: any) => {
			return [row.route, row.count]
		})
		setRoutesTable({head: header, rows: body})
	}

	async function getIpsTable() {
		const ips = await getIps()
		const header = ['IP', 'Count', 'Country', 'Region', 'City']
		const body = ips.map((row: any) => {
			return [row.ip, row.count, row.country, row.region, row.city]
		})
		setIpsTable({head: header, rows: body})
	}

	return (
		<>
			<Box>
				<H2 first>Dashboard</H2>
			</Box>
			<Box>
				<H3 first>Traffic</H3>
				{trafficTable ? <Table content={trafficTable} /> : null}
			</Box>
			<Box>
				<H3 first>Screens</H3>
				{screensTable ? <Table content={screensTable} /> : null}
			</Box>
			<Box>
				<H3 first>IPs</H3>
				{ipsTable ? <Table content={ipsTable} /> : null}
			</Box>
			<Box>
				<H3 first>Routes</H3>
				{routesTable ? <Table content={routesTable} /> : null}
			</Box>
		</>
	)
}

export default withAuth(Dashboard, ['admin'])