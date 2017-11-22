import React from 'react';
import config from "../../config/config";
import Header from "./shared/Header";
import styled from 'styled-components'
import Spinner from "./shared/Spinner";

const Table = styled.div`
	display: flex;
	flex-direction: column;
	width: calc(100%-30px);
	padding: 0 15px;
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
const BoxContainer = styled.div`
	width: 45%;
	max-width: 600px;
	margin: 20px;
	padding: 10px;
	background-color: #fff
`
const Root = styled.article`
	height: 100%;
`
const BoxHeader = styled.h3`
	padding: 5px;
	border-bottom: 2px solid #000
	
`

class App extends React.PureComponent {
	componentDidMount() {
		const {fetchStuff} = this.props

		if (fetchStuff && fetchStuff instanceof Function) fetchStuff(config.agatisUrl)
	}

	renderTableHeader = () => {
		return (
			<TableRow>
				<TableCell bold>#</TableCell>
				<TableCell bold>ID</TableCell>
				<TableCell bold>Service</TableCell>
				<TableCell bold>UpstreamUrl</TableCell>
			</TableRow>
		)
	}

	renderServices = () => {
		const {services} = this.props
		if (Object.keys(services).length === 0)
			return null

		return Object.keys(services.service).map((ser, IDX) => {
			return (
				<TableRow key={services.service[ser].id}>
					<TableCell>{IDX + 1}</TableCell>
					<TableCell>{services.service[ser].id}</TableCell>
					<TableCell>{services.service[ser].attributes.serviceCode}</TableCell>
					<TableCell>{services.service[ser].attributes.upstreamUrl}</TableCell>
				</TableRow>
			)
		})
	}

	renderStatusBox = () => {
		if (Object.keys(this.props.services).length === 0)
			return <Spinner />

		return (
			<BoxContainer>
				<BoxHeader>
					ActiveServices
				</BoxHeader>
				<Table>
					{this.renderTableHeader()}
					{this.renderServices()}
				</Table>
			</BoxContainer>
		)
	}

	render() {
		return (
			<Root>
				<Header />
				{this.renderStatusBox()}
			</Root>
		)
	}
}

export default App;
