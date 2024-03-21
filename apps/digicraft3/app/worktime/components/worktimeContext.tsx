'use client'

import * as React from 'react'
import {createContext, ReactNode, useContext, useEffect, useRef, useState} from 'react'
import {getCalendar, getElapsedDays, valuesToCalendar} from './lib'
import { useDigiCraftContext } from '../../DigiCraftContext'
import moment from 'moment'

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
	calendarHeight: number
	dayWidth: number
	dayHeight: number

	calendar: Year | undefined
	setCalendar: (calendar: Year) => void

	hoursWorked: number
	setHoursWorked: (hours: number) => void
	elapsedDays: number
	setElapsedDays: (days: number) => void
	day: Day
	setDay: (day: Day) => void
	year: number
	setYear: (year: number) => void

	getMonth: () => string
	getDate: () => string
}

const initialDayGap = 2

const WorktimeContext = createContext<WorktimeContext>({} as WorktimeContext)

export default function WorktimeContextProvider(props: { children: ReactNode }) {

	const dayWidth = 30
	const dayHeight = 60

	const {worktime, setWorktime} = useDigiCraftContext()

	const [calendarWidth, setCalendarWidth] = useState(0)
	const [calendarHeight, setCalendarHeight] = useState(0)

	const [calendar, setCalendar] = useState<Year | undefined>(undefined)

	const [hoursWorked, setHoursWorked] = useState(0)
	const [elapsedDays, setElapsedDays] = useState(0)

	const [day, setDay] = useState<Day>({date: new Date(), hoursWorked: 0})
	const [year, setYear] = useState<number>(moment().year())

	useEffect(() => {
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

	function getMonth() {
		return moment().month(day.date.getMonth()).format('MMMM')
	}

	function getDate() {
		return moment().date(day.date.getDate()).format('DD.MM.YYYY')
	}

	return (
		<WorktimeContext.Provider value={{
			calendarWidth, dayWidth, dayHeight,
			calendarHeight, calendar, setCalendar, hoursWorked, setHoursWorked, elapsedDays, setElapsedDays,
			day, setDay, year, setYear,
			getMonth, getDate
		}}>
			{props.children}
		</WorktimeContext.Provider>
	)
}

export function useWorktimeContext() {
	return useContext(WorktimeContext)
}