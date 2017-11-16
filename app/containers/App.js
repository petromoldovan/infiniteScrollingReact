import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'

import {fetchStuff} from '../actions/api';
import {testFlight} from '../actions/state';
import App from '../components/App';


function mapStateToProps(state) {
	const apiData = state.getIn(['data', 'api'], {})

	return {
		apiData
	};
}

function mapDispatchToProps(dispatch) {
	return {
		testFlight: () => {dispatch(testFlight())},
		fetchStuff: () => {dispatch(fetchStuff())}
	};
}

const AppCont = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);


export default withRouter(AppCont);
