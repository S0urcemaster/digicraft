import { Model } from './Context'
import { clog } from '@digicraft/lib'
import { CssVars } from './CssVars'

export enum DigiActionTypes {
	environment = 'environment',
	contentTitle = 'contentTitle',
	cssVars = 'cssVars',
}

export type DigiAction = {
	type: DigiActionTypes
	payload?: any
}

export function reducer(state: Model, action: DigiAction): Model {
	clog("reducer/" +action.type, action, state)
	const {type, payload} = action
	switch (type) {
		case DigiActionTypes.environment:
			return {
				...state, environment: payload.environment
			}
		case DigiActionTypes.contentTitle:
			return {
				...state, contentTitle: payload.contentTitle
			}
	}
	return state

}