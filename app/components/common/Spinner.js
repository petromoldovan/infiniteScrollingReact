import React from 'react';
import styled from 'styled-components'

const SpinnerContainer = styled.div`
	  position: fixed;
    width: 100%;
    height: 100%;
    z-index: 9999;
    top: 0;
    left: 0;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 80px;
      height: 80px;
      margin-top: -50px;
      margin-left: -50px;
    }
`

const Spinner = () => {
	return (
    <SpinnerContainer>
      <img src="/ico-loading.gif" />
    </SpinnerContainer>
	)
}

export default Spinner
