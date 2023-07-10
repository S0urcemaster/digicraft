
type Task = {
	name: string
	optional?: string[]
}

const tasks:Task[] = [
	{name: 'Stehe morgen 1/2 Stunde früher auf!'},
	{name: 'Erinnere Dich an ein gutes Buch, das du gelesen hast und schreibe eine Zusammenfassung.'},
	{name: 'Gehe allein in ein Restaurant essen!', optional: ['Suche dir interessante Nachbarn und belausche sie!']},
	{name: 'Gehe durch die Stadt, ohne jemanden anzusehen!'},
	{name: ''},
	{name: ''},
	{name: ''},
	{name: ''},
	{name: ''},
	{name: ''},
]

export default tasks