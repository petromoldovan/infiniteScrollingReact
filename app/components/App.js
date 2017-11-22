import React from 'react';
import config from "../../config/config";
import Header from "./shared/Header";
import styled from 'styled-components'
import Spinner from "./shared/Spinner";

const Container = styled.div`
	margin: 20px
`
const Table = styled.div`
	display: flex;
	flex-direction: column;
	width: 400px;
	border: 1px solid black;
`
const TableRow = styled.div`
	flex-direction: row;
	display: flex;
	border: 1px solid black;
`
const TableCell = styled.div`
	padding: 5px;
	font-weight: ${({bold}) => bold ? 'bold' : 'normal'};
	display: flex;
	flex: 1;
	justify-content: center;
`

class App extends React.PureComponent {
	componentDidMount() {
		const {fetchStuff} = this.props

		if (fetchStuff && fetchStuff instanceof Function) fetchStuff(config.apiUrl)
	}

	renderTableHeader = () => {
		return (
			<TableRow>
				<TableCell bold>ID</TableCell>
				<TableCell bold>Title</TableCell>
				<TableCell bold>Status</TableCell>
			</TableRow>
		)
	}

	renderServices = () => {
		const {services} = this.props
		if (services.length === 0)
			return null

		return services.map((ser, IDX) => {
			return (
				<TableRow key={`${ser.title}${ser.id}`}>
					<TableCell>{IDX + 1}</TableCell>
					<TableCell>{ser.title}</TableCell>
					<TableCell>{ser.status}</TableCell>
				</TableRow>
			)
		})
	}

	renderContent = () => {
		if (this.props.services.length === 0)
			return <Spinner />

		return (
			<Container>
				<h3>ActiveServices</h3>
				<Table>
					{this.renderTableHeader()}
					{this.renderServices()}
				</Table>
			</Container>
		)
	}

	render() {
		return (
      <div >
	      <Header />
	      {this.renderContent()}
      </div>
		);
	}
}

export default App;
