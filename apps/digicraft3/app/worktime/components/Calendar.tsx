import * as React from 'react'
import {useWorktimeContext} from './worktimeContext'
import {Fragment, KeyboardEvent, useEffect, useRef, useState} from 'react'
import Day from './Day'
import {Day as DayType} from './worktimeContext'
import {getDecimalFromTime, getLongDay, getMonth, getShortDay, getTimeFromDecimal} from './lib'
import moment from 'moment'

export default function Calendar(props: {}) {

	const {calendarWidth, calendarHeight, dayWidth, dayHeight, calendar, setDay, elapsedDays, day} = useWorktimeContext()

	const [selectedDay, setSelectedDay] = useState<DayType | undefined>()
	const [modalVisible, setModalVisible] = useState(false)
	const [hoursInput, setHoursInput] = useState<string>('00:00')

	const timeInputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {

	}, [])

	useEffect(() => {
		modalVisible && timeInputRef && timeInputRef.current && timeInputRef.current.focus()
	}, [modalVisible])

	function approveDialog() {
		setDay({...selectedDay!, hoursWorked: getDecimalFromTime(hoursInput)})
		setModalVisible(false)
	}

	function showDialogFor(day: DayType) {
		setSelectedDay(day)
		setHoursInput(getTimeFromDecimal(day.hoursWorked))
		setModalVisible(true)
	}

	function handleEnter(event: KeyboardEvent<HTMLInputElement>) {
		if (event.key === "Enter") {
			approveDialog()
		}
	}

	function dayEquals(d1: DayType, d2: DayType) {
		return moment(d1.date).startOf('day').isSame(moment(d2.date).startOf('day'))
	}

	return (
		<>
			{calendar && <svg width={calendarWidth} height={calendarHeight}>
				{calendar.months?.map((month, monthIdx) => (
					<Fragment key={monthIdx}>
						{month.days.map((d, dayIdx) => (
							<Day x={dayIdx * dayWidth + dayIdx} y={monthIdx * dayHeight + monthIdx} day={d}
								  onClick={showDialogFor} key={dayIdx} future={d.date >new Date()} selected={dayEquals(d, day)} />
						))}
						<text x={4} y={monthIdx * dayHeight + monthIdx + dayHeight - 3} fontSize={18}
								style={{cursor: 'default', pointerEvents: 'none'}}
								fill={'#b6d1e7'}>{getMonth(month.days[0].date)}</text>
					</Fragment>
				))}
			</svg>}
			{/*<ModalDialog title={'Arbeitszeit eingeben'} buttonTitle={'Abbrechen'} approveTitle={'OK'}*/}
			{/*				 width={300} height={200} visible={modalVisible}*/}
			{/*				 close={() => setModalVisible(false)} approve={approveDialog}>*/}
			{/*	<div>{getLongDay(selectedDay?.date ?? new Date())}, {selectedDay?.date.toLocaleDateString()}</div>*/}
			{/*	<Spacer height={20} />*/}
			{/*	<input type={'time'} onChange={(e) => setHoursInput(e.target.value)} value={hoursInput} ref={timeInputRef}*/}
			{/*			 onKeyDown={(e) => handleEnter(e)} style={{fontSize: 16}}*/}
			{/*	/>*/}
			{/*	<Spacer height={10} />*/}
			{/*</ModalDialog>*/}
		</>
	)
}
