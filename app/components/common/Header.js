import React from 'react'
import styled from 'styled-components'

const NavContainer = styled.nav`
	margin: 0;
	padding: 20px;
	color: white;
	background-color: black;
	text-align: center;
`

const Header = () => {
	return (
		<NavContainer>
			<h2>Starter Kit</h2>
		</NavContainer>
	)
}

export default Header
