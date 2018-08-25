import React from 'react';
import styled from 'styled-components'
import Header from './common/Header'
import Spinner from './common/Spinner'

const Table = styled.div`
	display: flex;
	flex-direction: column;
`
const TableRow = styled.div`
	flex-direction: row;
	display: flex;
	border: 1px solid black;
	flex-wrap: wrap;
`
const TableCell = styled.div`
	padding: 5px;
	font-weight: ${({bold}) => bold ? 'bold' : 'normal'};
	width: 25%;
	box-sizing: border-box;
	text-align: center;
`
const BoxContainer = styled.div`
	width: 45%;
	max-width: 800px;
	margin: 20px;
	padding: 10px;
	background-color: #fff
`
const Root = styled.article`
	height: 100%;
`
const BoxHeader = styled.h3`
	padding: 5px;
	border-bottom: 2px solid #000;
	font-weight: 900;
  font-size: 20px;
`
const BoxSubheader = styled.h6`
	margin: 10px 0;
  font-size: 14px;
  font-weight: 700;
`
const BoxContent = styled.div`
	width: calc(100% - 30px);
	padding: 0 15px;
`

class App extends React.PureComponent {
	componentDidMount() {
		const {fetchStuff} = this.props

		if (fetchStuff && fetchStuff instanceof Function) fetchStuff("http://localhost:3000/services")
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

    if (!services) {
		  return null
    }

		if (services.length === 0)
			return null


		return services.map((ser, IDX) => {
			return (
				<TableRow key={ser.id + IDX + 1}>
					<TableCell>{IDX + 1}</TableCell>
					<TableCell>{ser.id}</TableCell>
					<TableCell>{ser.title}</TableCell>
					<TableCell>{ser.status}</TableCell>
				</TableRow>
			)
		})
	}

	renderStatusBox = () => {
		if (this.props.services.length === 0)
			return <Spinner />

		return (
			<BoxContainer>
				<BoxHeader>
					Services
				</BoxHeader>
				<BoxContent>
					<BoxSubheader>
						The table displays all services that are currently running
					</BoxSubheader>
					<Table>
						{this.renderTableHeader()}
						{this.renderServices()}
					</Table>
				</BoxContent>
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
