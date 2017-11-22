import axios from 'axios'
import constants from '../constants'


export const fetchStuff = (url) => dispatch => {
	axios.get(url)
		.then(res => {
			dispatch({
				type: constants.API_FETCH_SUCCESS,
				datapoint: res.datapoint,
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
