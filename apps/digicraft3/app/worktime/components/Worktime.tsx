'use client'
import * as React from 'react'
import {useWorktimeContext} from './worktimeContext'
import Calendar from './Calendar'
import {useEffect, useRef, useState} from 'react'
import {daysHoursString, getFreeTime} from './lib'
import {toLocale} from '../../../lib/math'
import {workingDaysEffective, workingHours} from './year2023'
import {useLocalStorage} from '../../LocalStorageContext'
import { Button } from '@blueprintjs/core'

function OverviewItem(props: {heading: string, rows: [string, number|string][]}) {
	return (
		<div style={{display: 'flex', flexDirection: 'column', width: 200}}>
			<div><b>{props.heading}</b></div>
			<div style={{display: 'grid', gridTemplateColumns: '3fr 1fr'}}>
				<div>{props.rows[0][0]}</div>
				<div style={{textAlign: 'right'}}>{props.rows[0][1]}</div>
				<div>{props.rows[1][0]}</div>
				<div style={{textAlign: 'right'}}>{props.rows[1][1]}</div>
			</div>
		</div>
	)
}

export default function Worktime() {

	const {calendarWidth, hoursWorked, year, setYear} = useWorktimeContext()

	const [modalVisible, setModalVisible] = useState(false)
	const [selectValue, setSelectValue] = useState('2023')

	const {downloadWorktime, uploadWorktime} = useLocalStorage()
	const fileInputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
	}, [selectValue])

	function change(event: string) {
		setSelectValue(event)
		setYear(Number(event))
	}

	return (
		<div style={{background: '#b7d3b7', width: calendarWidth, padding: 10}}>
			<div style={{display: 'flex', justifyContent: 'space-between'}}>
				<div style={{display: 'flex', columnGap: 30, color: 'black'}}>
					<OverviewItem heading={'Jahresarbeitszeit'} rows={[['Tage:', workingDaysEffective], ['Stunden:', workingHours]]} />
					<OverviewItem heading={'Geleistet'} rows={[['Tage:', daysHoursString(hoursWorked, 1)], ['Stunden:', toLocale(hoursWorked, 1)]]} />
					<OverviewItem heading={'Freizeit'} rows={[['Tage:', daysHoursString(getFreeTime(hoursWorked), 1)], ['Stunden:', toLocale(getFreeTime(hoursWorked), 1)]]} />
				</div>
				<div style={{display: 'flex', columnGap: 20}}>
					{/*<Select value={selectValue} onChange={(value: string) => change(value)}*/}
					{/*		  options={[['2022', 'Demo (2022)'], ['2023', '2023']]} size={2} style={{width: 120}} />*/}
					<select id="selectInput" value={selectValue} onChange={(e) => change(e.target.value)} size={2} style={{width: 120}} >
						<option value='2023'>2023</option>
						<option value="2022">Demo (2022)</option>
					</select>
					<div style={{display: 'flex', flexDirection: 'column'}}>
						<Button value={'Export'} onClick={() => downloadWorktime(Number(selectValue))} style={{width: 70, height: 20, padding: 0, fontWeight: 'normal'}}/>
						<Button value={'Import'} onClick={() => fileInputRef.current!.click()} style={{width: 70, height: 20, padding: 0, fontWeight: 'normal'}}/>
						<input type={'file'} style={{display: 'none'}}
								 onChange={event => uploadWorktime(event.target.files && event.target.files[0], Number(selectValue))} ref={fileInputRef}/>
						<Button value={'?'} onClick={() => setModalVisible(true)} style={{width: 70, height: 20, padding: 0, fontWeight: 'normal'}}/>
					</div>
				</div>
			</div>
			<Calendar/>
			{/*<ModalDialog title={'Berechnung für 2023, Baden Württemberg'} buttonTitle={'OK'} width={400} height={500}*/}
			{/*				 visible={modalVisible}*/}
			{/*				 close={() => setModalVisible(false)}>*/}
			{/*	<Table content={calcTable}/>*/}
			{/*	<P>*/}
			{/*		Bei 5 Stunden pro Tag sind also bereits 14 Freitage enthalten. Alle anderen müssen durch*/}
			{/*		Mehrzeit erreicht werden.*/}
			{/*	</P>*/}
			{/*</ModalDialog>*/}
		</div>
	)
}