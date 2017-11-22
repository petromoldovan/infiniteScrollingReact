import React from 'react';
import config from "../../config/config";
import Header from "./Header";


class App extends React.PureComponent {
	componentDidMount() {
		const {fetchStuff} = this.props

		if (fetchStuff && fetchStuff instanceof Function) fetchStuff(config.apiUrl)
	}

	renderServices = () => {
		const {services} = this.props
		if (services.length === 0)
			return null

		return services.map(ser => {
			return <li key={`${ser.title}${ser.id}`}>
				{ser.title}
			</li>
		})
	}

	render() {
		return (
      <div >
	      <Header />
	      <div>
		      <h3>ActiveServices</h3>
		      <ul>
			      {this.renderServices()}
		      </ul>
	      </div>
      </div>
		);
	}
}

export default App;
