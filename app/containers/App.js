import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'

import {testFlight} from '../actions/state';
import App from '../components/App';


function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        testFlight: () => {dispatch(testFlight())}
    };
}

const AppCont = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);


export default withRouter(AppCont);
