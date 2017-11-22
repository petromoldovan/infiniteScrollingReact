import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom'

import coreReducer from './reducers';
import App from './containers/App';
import {getInitialState} from './reducers'

const loggerMiddleware = createLogger({
	stateTransformer: state => state.toJS()
});

const store = createStore(coreReducer, getInitialState(), applyMiddleware(thunk, loggerMiddleware))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />
    </Router>
  </Provider>,
	document.getElementById('root'));
