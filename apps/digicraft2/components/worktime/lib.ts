import {Month, Year} from './worktimeContext'
import {toLocale} from '../../lib/math'
import {freeHours} from './year2023'

const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const monthNames = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
const dayShortNames = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']
const dayLongNames = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag']

export function getDecimalFromTime(time: string) {
	const split = time.split(':')
	return Number(split[0]) +Number(split[1])/60
}

export function padZero(num: number) {
	if(num === 0) {
		return '00'
	} else if(num <10) {
		return '0' +num
	} else {
		return '' +num
	}
}

export function getMinutesFromHours(dec: number) {
	return Math.floor((dec *60) %60)
}

export function getTimeFromDecimal(decimal: number) {
	const time = `${padZero(Math.floor(decimal))}:${padZero(getMinutesFromHours(decimal))}`
	return time
}

export function valuesToCalendar(calendar: Year, values: Year): Year {

	function getDay(monthIdx: number, dayIdx: number) {
		return values.months[monthIdx]?.days[dayIdx]?.hoursWorked
	}

	calendar.months.forEach((month, monthIdx) => {
		month.days.forEach((day, dayIdx) => {
			const vDay = getDay(monthIdx, dayIdx)
			day.hoursWorked = vDay ?? 0
		})
	})
	return {...calendar}
}

export function getFreeTime(hoursWorked: number) {
	return freeHours +hoursWorked -getElapsedDays() *5
}

export function getElapsedDays() {
	const today: Date = new Date(); // heutiges Datum
	const startOfYear: Date = new Date(today.getFullYear(), 0, 1); // Anfang des Jahres
	const diffTime: number = today.getTime() - startOfYear.getTime(); // Differenz in Millisekunden
	const diffDays: number = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Differenz in Tagen (aufgerundet)
	return diffDays
}

export function daysHoursString(hours: number, digits: number) {
	const days = Math.floor(hours /5)
	const h = hours -days *5
	return `${days}:${toLocale(h, digits)}`
}

export function getShortDay(date: Date) {
	return dayShortNames[date.getDay()]
}

export function getLongDay(date: Date) {
	return dayLongNames[date.getDay()]
}

export function getMonth(date: Date) {
	// console.log(monthNames[date.getMonth()])
	return monthNames[date.getMonth()]
}

function isLeapYear(year: number): boolean {
	return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

export function getCalendar(year: number) {
	const calendar: Year = {year: year, months: []}
	daysInMonth.forEach((dim, idx) => {
		const date = new Date(0)
		date.setFullYear(year, idx, 1)
		const month: Month = {month: idx, days: []}
		for(let i = 1; i <dim +1; i++) {
			const date = new Date(0)
			date.setFullYear(year, idx, i)
			month.days.push({date: date, hoursWorked: 0})
		}
		if(idx === 1) { // February
			if(isLeapYear(year)) {
				const date = new Date(0)
				date.setFullYear(year, 1, 29)
				month.days.push({date: date, hoursWorked: 0})
			}
		}
		calendar.months.push(month)
	})
	return calendar
}