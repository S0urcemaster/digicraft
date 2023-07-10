
export const SortOrder: Record<string, string> = {
	praise: 'Größtes Lob',
	date: 'Neueste',
}

export const AchievementTypes: Record<string, string> = {
	completed: 'Ziel erreicht',
	ongoing: 'durchgehalten',
}

export const PraiseTypes: Record<string, [string, number]> = {
	small: ['klein', 0],
	moderate: ['mittel', 1],
	high: ['groß', 2],
	veryHigh: ['sehr groß', 3],
}

export type Achievement = {
	title: string
	details: string
	praise: string
	tipe: string
	dateFrom: string
	dateUntil: string
}

export const emptyAchievement = () => ({
	title: '',
	details: '',
	praise: PraiseTypes.small[0],
	tipe: AchievementTypes.completed,
	dateFrom: new Date().toISOString().split('T')[0],
	dateUntil: new Date().toISOString().split('T')[0]
})

