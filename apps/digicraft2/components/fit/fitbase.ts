

export type Body = {
	height: string
	weight: string
	gender: string
}

export type Member = {
	id: string
	name: string
	email: string
	body: Body
}


export type Goal = {
	sets?: number
	repetitions?: number
	holdTime?: number
	timeBetweenSets?: number
}


export type Exercise = {
	name: string
	goal: Goal
	twoSided: boolean
	breakTime: number
	positioningTime: number
	lastExecutionDateTime: number
	stopTimer: number|undefined
}


export type Training = {
	name: string
	introTime?: number
	exercises: Exercise[]
	extroTime?: number
}

export const tags = {
	calisthenics: 'Calisthenics',
	stretching: 'Dehnen',
}


export const trainings: Training[] = [
	{name: 'How to Fix Your Sacroiliac Joint Pain | STEP-BY-STEP Guide', exercises: [
			// {name: 'Muscle Warm Up', goal: {repetitions: 5, holdTime: 5}, twoSided: true, breakTime: 5, positioningTime: 5}
		]}
]