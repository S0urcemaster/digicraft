import * as React from 'react'
import {useWorktimeContext} from './worktimeContext'
import {Fragment, KeyboardEvent, useEffect, useRef, useState} from 'react'
import Day from './Day'
import {Day as DayType} from './worktimeContext'
import ModalDialog from '../ui/ModalDialog'
import {getDecimalFromTime, getLongDay, getMonth, getShortDay, getTimeFromDecimal} from './lib'
import {NumberInput} from '../ui/Form'
import {Spacer} from '../ui/Layout'

export default function Calendar(props: {}) {

	const {calendarWidth, calendarHeight, dayWidth, dayHeight, calendar, setDay, elapsedDays} = useWorktimeContext()

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

	return (
		<>
			{calendar && <svg width={calendarWidth} height={calendarHeight}>
				{calendar.months?.map((month, monthIdx) => (
					<Fragment key={monthIdx}>
						{month.days.map((day, dayIdx) => (
							<Day x={dayIdx * dayWidth + dayIdx} y={monthIdx * dayHeight + monthIdx} day={day}
								  onClick={showDialogFor} key={dayIdx} future={day.date >new Date()}/>
						))}
						<text x={4} y={monthIdx * dayHeight + monthIdx + dayHeight - 3} fontSize={18}
								style={{cursor: 'default', pointerEvents: 'none'}}
								fill={'#b6d1e7'}>{getMonth(month.days[0].date)}</text>
					</Fragment>
				))}
			</svg>}
			<ModalDialog title={'Arbeitszeit eingeben'} buttonTitle={'Abbrechen'} approveTitle={'OK'}
							 width={300} height={200} visible={modalVisible}
							 close={() => setModalVisible(false)} approve={approveDialog}>
				<div>{getLongDay(selectedDay?.date ?? new Date())}, {selectedDay?.date.toLocaleDateString()}</div>
				<Spacer height={20} />
				<input type={'time'} onChange={(e) => setHoursInput(e.target.value)} value={hoursInput} ref={timeInputRef}
						 onKeyDown={(e) => handleEnter(e)} style={{fontSize: 16}}
				/>
				<Spacer height={10} />
			</ModalDialog>
		</>
	)
}
