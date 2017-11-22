import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'

import {fetchStuff} from '../actions/api';
import App from '../components/App';


function mapStateToProps(state) {
	const apiData = state.getIn(['data', 'api'], {})

	return {
		apiData
	};
}

function mapDispatchToProps(dispatch) {
	return {
		fetchStuff: (url) => {dispatch(fetchStuff(url))}
	};
}

const AppCont = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);


export default withRouter(AppCont);
