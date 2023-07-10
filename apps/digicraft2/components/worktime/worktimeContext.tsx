import * as React from 'react'
import {createContext, ReactNode, useContext, useEffect, useRef, useState} from 'react'
import {useLocalStorage} from '../../lib/localStorageContext'
import {getCalendar, getElapsedDays, valuesToCalendar} from './lib'

export type Day = {
	date: Date
	hoursWorked: number
}

export type Month = {
	month: number
	days: Day[]
}

export type Year = {
	year: number
	months: Month[]
}

export type Worktime = {
	[key:number]: Year
}

export type WorktimeContext = {
	calendarWidth: number
	setCalendarWidth: (width: number) => void
	calendarHeight: number
	dayWidth: number
	setDayWidth: (width: number) => void
	dayHeight: number
	setDayHeight: (width: number) => void

	calendar: Year | undefined
	setCalendar: (calendar: Year) => void

	hoursWorked: number
	setHoursWorked: (hours: number) => void
	elapsedDays: number
	setElapsedDays: (days: number) => void
	day: Day|undefined
	setDay: (day: Day) => void
	year: number
	setYear: (year: number) => void
}

const initialDayWidth = 30
const initialDayHeight = 60
const initialDayGap = 2

const WorktimeContext = createContext<WorktimeContext>({} as WorktimeContext)

export default function WorktimeContextProvider(props: { children: ReactNode }) {

	const {worktime, setWorktime} = useLocalStorage()

	const [calendarWidth, setCalendarWidth] = useState(0)
	const [calendarHeight, setCalendarHeight] = useState(0)
	const [dayWidth, setDayWidth] = useState(initialDayWidth)
	const [dayHeight, setDayHeight] = useState(initialDayHeight)

	const [calendar, setCalendar] = useState<Year | undefined>(undefined)

	const [hoursWorked, setHoursWorked] = useState(0)
	const [elapsedDays, setElapsedDays] = useState(0)

	const [day, setDay] = useState<Day|undefined>()
	const [year, setYear] = useState<number>(2023)

	useEffect(() => {
		// setCalendar(getCalendar(2023))
	}, [])

	useEffect(() => {
		worktime[year] && setCalendar(valuesToCalendar(getCalendar(year), worktime[year]))
	}, [year])

	useEffect(() => {
		if(calendar && day) {
			calendar.months[day.date.getMonth()].days[day.date.getDate() -1].hoursWorked = day.hoursWorked
			setCalendar({...calendar})
			setWorktime({...worktime, [year]: {...calendar}})
		}
	}, [day])

	useEffect(() => {
		worktime[year] && setCalendar(valuesToCalendar(getCalendar(year), worktime[year]))

	}, [worktime])

	useEffect(() => {
		let hours = 0
		calendar && calendar.months.forEach(month => {
			month.days.forEach(day => hours += day.hoursWorked)
		})
		setElapsedDays(getElapsedDays())
		setHoursWorked(hours)
	}, [calendar])

	useEffect(() => {
		setCalendarWidth(dayWidth * 31 + initialDayGap * 12 + 9)
		setCalendarHeight(dayHeight * 12 + initialDayGap * 12)
	}, [calendarWidth])

	return (
		<WorktimeContext.Provider value={{
			calendarWidth, setCalendarWidth, dayWidth, setDayWidth, dayHeight, setDayHeight,
			calendarHeight, calendar, setCalendar, hoursWorked, setHoursWorked, elapsedDays, setElapsedDays,
			day, setDay, year, setYear
		}}>
			{props.children}
		</WorktimeContext.Provider>
	)
}

export function useWorktimeContext() {
	return useContext(WorktimeContext)
}