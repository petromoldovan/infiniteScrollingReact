import React from 'react';
import styled from 'styled-components'
import Header from '../common/Header'
import Spinner from '../common/Spinner'
import InfiniteScrolling from '../common/InfiniteScrolling'

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
	background-color: #fff;
	height: 300px;
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

const RowComponent = (props) => (
  <TableRow key={props.id}>
    <TableCell>{props.id}</TableCell>
    <TableCell>{props.title}</TableCell>
  </TableRow>
)

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

	renderStatusBox = () => {
		if (this.props.services.length === 0)
			return <Spinner />

		return (
			<BoxContainer>
				<BoxHeader>
					Services
				</BoxHeader>
				<InfiniteScrolling
					items={this.props.services}
					RowComponent={RowComponent}
					listHeight={310}
					itemHeight={30}
				/>
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
