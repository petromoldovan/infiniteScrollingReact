import styled from 'styled-components'

export default styled.div`
  min-height: ${({minHeight}) => minHeight}px;
  height: ${({minHeight}) => minHeight}px;
  padding-top: ${({paddingTop}) => paddingTop}px;
  height: 100%;
  box-sizing: border-box;
`
