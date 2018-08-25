import styled from 'styled-components'

export default styled.div`
  height: ${({listHeight}) => listHeight}px;
  overflow-x: hidden;
  overflow-y: scroll;
  border: 3px solid red;
`
