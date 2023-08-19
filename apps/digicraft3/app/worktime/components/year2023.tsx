import {toLocale} from '../../../lib/math'

export const days2023 = 365
export const weekendDays = 105
export const feastDays = 11
export const vacationDays = 30

export const workingDaysEffective = days2023 - weekendDays - feastDays - vacationDays
export const workingHours = workingDaysEffective * 8
export const workingHours365 = workingHours / days2023
export const freeHours = (Math.ceil(workingHours365) - workingHours365) * days2023
export const freeDaysDays = Math.floor(freeHours / 5)
export const freeDaysHours = freeHours - freeDaysDays * 5

// export const calcTable: TableContent = {
// 	head: ['', ''],
// 	rows: [
// 		[<B>Grundlage</B>],
// 		['Tage', days2023],
// 		['Wochenenden', weekendDays],
// 		['Feiertage an Werktagen', feastDays],
// 		['Urlaubstage', vacationDays],
// 		[<B>Arbeitstage</B>, ''],
// 		['Effektiv', workingDaysEffective],
// 		['Stunden', workingHours],
// 		[<B>5-Stunden-Tag</B>, ''],
// 		['Stunden pro Tag', toLocale(workingHours365, 3)],
// 		['Gerundet', Math.ceil(workingHours365)],
// 		['Verbleibend als Freistunden', toLocale(freeHours, 3)],
// 		['In Tagen à 5 Stunden', `${freeDaysDays}:${toLocale(freeDaysHours, 3)}`],
// 		[''],
// 	],
// }