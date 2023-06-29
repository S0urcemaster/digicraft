import { Model } from './Context'

export enum DigiActionTypes {
	initialized = 'initialized',
}

export type DigiAction = {
	type: DigiActionTypes
	payload?: any
}

export function reducer(state: Model, action: DigiAction): Model {
	const {type, payload} = action
	switch (type) {
		case DigiActionTypes.initialized:
			return {
				...state, contentTitle: payload.contentTitle, environment: payload.environment
			}
	}
	return state

}