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
import moment from 'moment'

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

	const {calendarWidth, hoursWorked, year, setYear, getMonth, getDate, day} = useWorktimeContext()

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
		<div style={{display: 'flex', columnGap: 10}}>
			<div style={{width: calendarWidth}}>
				<Calendar />
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
			<div>
				<div style={{display: 'grid', gridTemplateColumns: '3fr 1fr 1fr 1fr', gap: 10}}>
					<div>
						<Button text={getDate()} style={{padding: '10px 20px 10px 20px', fontSize: 30, width: '100%'}} />
						<div style={{display: 'flex'}}>
							<Button text={moment(day.date).subtract(1, 'days').format('DD.MM.YYYY')} icon={'arrow-left'} />
							<Button text={moment(day.date).add(1, 'days').format('DD.MM.YYYY')} rightIcon={'arrow-right'} />
						</div>

					</div>
					<h4 className={'bp5-heading'}>Soll</h4>
					<h4 className={'bp5-heading'}>Ist</h4>
					<h4 className={'bp5-heading'}>Diff</h4>
					<h4 className={'bp5-heading'}>Woche</h4>
					<div></div>
					<div></div>
					<div></div>
					<h4 className={'bp5-heading'}>Monat {getMonth()}</h4>
					<div></div>
					<div></div>
					<div></div>
					<h4 className={'bp5-heading'}>Jahr {year}</h4>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div style={{display: 'flex', columnGap: 10}}>
					<Button text={year -1} icon={'arrow-left'} />
					{/*<Button text={year} />*/}
					<Button text={year +1} rightIcon={'arrow-right'} />
				</div>
				<OverviewItem heading={'Jahresarbeitszeit'} rows={[['Tage:', workingDaysEffective], ['Stunden:', workingHours]]} />
				<OverviewItem heading={'Geleistet'} rows={[['Tage:', daysHoursString(hoursWorked, 1)], ['Stunden:', toLocale(hoursWorked, 1)]]} />
				<OverviewItem heading={'Freizeit'} rows={[['Tage:', daysHoursString(getFreeTime(hoursWorked), 1)], ['Stunden:', toLocale(getFreeTime(hoursWorked), 1)]]} />
				<div style={{display: 'flex'}}>
					<Button text={'Export'} onClick={() => downloadWorktime(Number(selectValue))} style={{width: 70, height: 20, padding: 0, fontWeight: 'normal'}}/>
					<Button text={'Import'} onClick={() => fileInputRef.current!.click()} style={{width: 70, height: 20, padding: 0, fontWeight: 'normal'}}/>
					<input type={'file'} style={{display: 'none'}}
							 onChange={event => uploadWorktime(event.target.files && event.target.files[0], Number(selectValue))} ref={fileInputRef}/>
					<Button text={'?'} onClick={() => setModalVisible(true)} style={{width: 70, height: 20, padding: 0, fontWeight: 'normal'}}/>
				</div>
			</div>
		</div>
	)
}