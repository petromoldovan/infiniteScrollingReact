import React from 'react';

class App extends React.PureComponent {
	componentDidMount() {
		const {testFlight, fetchStuff} = this.props

		if (testFlight && testFlight instanceof Function) testFlight()
		if (fetchStuff && fetchStuff instanceof Function) fetchStuff()
	}

	render() {
		return (
      <div>
          Works!
      </div>
		);
	}
}

export default App;
