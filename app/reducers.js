import { fromJS } from 'immutable'
import constants from './constants'

export function getInitialState() {
	return fromJS({})
}

function coreReducer(state = getInitialState(), action) {
	let newState

	switch (action.type) {
		case constants.TEXT_ACTION:
			newState = state.setIn(["data", "test"], action.payload)
			break
		case constants.API_FETCH_SUCCESS:
			newState = state.setIn(["data", "api"], action.payload)
			break
		default:
			newState = state
	}

	return newState
}

export default coreReducer
