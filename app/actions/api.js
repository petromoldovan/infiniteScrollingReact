import axios from 'axios'
import normalize from 'json-api-normalizer'

import constants from '../constants'


export const fetchStuff = url => dispatch => {



	axios.get(url)
		.then(res => {
			console.log("normalize(res.data, url)", normalize(res.data, url))

			dispatch({
				type: constants.API_FETCH_SUCCESS,
				payload: normalize(res.data, url)
			})
		})
		.catch(err => {
			dispatch({
				type: constants.API_FETCH_FAIL,
				payload: err
			})
		})
}
