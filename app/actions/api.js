import axios from 'axios'
import constants from '../constants'


export const fetchStuff = () => dispatch => {
	axios.get('/some/random/url')
		.then(res => {
			dispatch({
				type: constants.API_FETCH_SUCCESS,
				payload: res
			})
		})
		.catch(err => {
			dispatch({
				type: constants.API_FETCH_FAIL,
				payload: err
			})
		})


}
