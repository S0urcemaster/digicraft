import { clog } from '@digicraft/lib'
import { Model } from '../core/model'

export enum DigiActionTypes {
	environment = 'environment',
	contentTitle = 'contentTitle',
	cssVars = 'cssVars',
	contextLoaded = 'contextLoaded',
}

export type DigiAction = {
	type: DigiActionTypes
	payload?: any
}

export function digiCraftReducer(state: Model, action: DigiAction): Model {
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
		case DigiActionTypes.contextLoaded:
			return {
				...state, contextLoaded: payload.contextLoaded
			}
	}
	return state

}