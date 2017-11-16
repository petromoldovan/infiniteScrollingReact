import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'

import Contact from '../components/Contact';


function mapStateToProps(state) {
	return {};
}

function mapDispatchToProps(dispatch) {
	return {};
}

const ContactCont = connect(
	mapStateToProps,
	mapDispatchToProps
)(Contact);


export default withRouter(ContactCont);
