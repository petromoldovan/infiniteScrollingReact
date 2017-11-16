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
import Contact from './containers/Contact';
import {getInitialState} from './reducers'

const loggerMiddleware = createLogger({
	stateTransformer: state => state.toJS()
});

const store = createStore(coreReducer, getInitialState(), applyMiddleware(thunk, loggerMiddleware))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </Router>
  </Provider>,
	document.getElementById('root'));
