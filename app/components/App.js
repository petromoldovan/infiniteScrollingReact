import React from 'react';

class App extends React.PureComponent {
	componentDidMount() {
		const {fetchStuff} = this.props

		if (fetchStuff && fetchStuff instanceof Function) fetchStuff('http://localhost:8027/ping')
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
