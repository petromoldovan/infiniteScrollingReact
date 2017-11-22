import { fromJS } from 'immutable'
import constants from './constants'

export function getInitialState() {
	return fromJS({})
}

function coreReducer(state = getInitialState(), action) {
	let newState

	switch (action.type) {
		case constants.API_FETCH_SUCCESS:
			newState = state.setIn(['data', 'services'], action.payload)
			break
		default:
			newState = state
	}

	return newState
}

export default coreReducer
