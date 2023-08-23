'use client'
import * as React from 'react'
import {useWorktimeContext} from './worktimeContext'
import Calendar from './Calendar'
import {useEffect, useRef, useState} from 'react'
import {daysHoursString, getFreeTime} from './lib'
import {toLocale} from '../../../lib/math'
import {workingDaysEffective, workingHours} from './year2023'
import {useLocalStorage} from '../../LocalStorageContext'
import { Button, HTMLSelect, Icon } from '@blueprintjs/core'
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

function PrevButton() {

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
		<div style={{display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: 10}}>
			<div style={{maxWidth: calendarWidth, overflowX: 'scroll'}}>
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
				<div style={{minWidth: 400}}>
					<Button text={getDate()} style={{padding: '10px 20px 10px 20px', fontSize: 30, width: '100%'}} />
					<div style={{display: 'grid', gridTemplateColumns: 'auto auto'}}>
						<Button text={moment(day.date).subtract(1, 'days').format('DD.MM.YYYY')} icon={'arrow-left'} alignText={'left'} />
						<Button text={moment(day.date).add(1, 'days').format('DD.MM.YYYY')} rightIcon={'arrow-right'} alignText={'right'} />
						<Button text={'Juli'} icon={'arrow-left'} alignText={'left'} />
						<Button text={'September'} rightIcon={'arrow-right'} alignText={'right'} />
						<Button text={year -1} icon={'arrow-left'} alignText={'left'} />
						<Button text={year +1} rightIcon={'arrow-right'} alignText={'right'} />
					</div>
					<div style={{display: 'grid', gridTemplateColumns: 'auto auto auto'}}>
						<Button icon={'play'} />
						<Button icon={'pause'} />
						<Button icon={'stop'} />
					</div>
					<div style={{display: 'grid', gridTemplateColumns: '30px auto auto 28px auto auto 55px'}}>
						<Button icon={'delete'} />
						<HTMLSelect>
							<option value="00">00</option>
							<option value="01">01</option>
							<option value="02">02</option>
							<option value="03">03</option>
							<option value="04">04</option>
							<option value="01">01</option>
							<option value="02">02</option>
							<option value="03">03</option>
							<option value="04">04</option>
							<option value="01">01</option>
							<option value="02">02</option>
							<option value="03">03</option>
							<option value="04">04</option>
							<option value="01">01</option>
							<option value="02">02</option>
							<option value="03">03</option>
							<option value="04">04</option>
							<option value="01">01</option>
							<option value="02">02</option>
							<option value="03">03</option>
							<option value="04">04</option>
							<option value="01">01</option>
							<option value="02">02</option>
							<option value="03">03</option>
						</HTMLSelect>
						<HTMLSelect>
							<option value="00">00</option>
							<option value="15">15</option>
							<option value="30">30</option>
							<option value="45">45</option>
						</HTMLSelect>
						<Button icon={'small-minus'} />
						<HTMLSelect>
							<option value="00">00</option>
							<option value="01">01</option>
							<option value="02">02</option>
							<option value="03">03</option>
							<option value="04">04</option>
							<option value="01">01</option>
							<option value="02">02</option>
							<option value="03">03</option>
							<option value="04">04</option>
							<option value="01">01</option>
							<option value="02">02</option>
							<option value="03">03</option>
							<option value="04">04</option>
							<option value="01">01</option>
							<option value="02">02</option>
							<option value="03">03</option>
							<option value="04">04</option>
							<option value="01">01</option>
							<option value="02">02</option>
							<option value="03">03</option>
							<option value="04">04</option>
							<option value="01">01</option>
							<option value="02">02</option>
							<option value="03">03</option>
						</HTMLSelect>
						<HTMLSelect>
							<option value="00">00</option>
							<option value="15">15</option>
							<option value="30">30</option>
							<option value="45">45</option>
						</HTMLSelect>
						<Button text={'12:59'} />
					</div>
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