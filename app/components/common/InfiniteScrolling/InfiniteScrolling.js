import React from 'react'
import {ScrollContainer} from './styled'

export default ({renderedItems = [], RowComponent, onScroll, listHeight}) => (
  <ScrollContainer onScroll={onScroll} listHeight={listHeight}>
    {
      renderedItems.map((item, IDX) => <RowComponent key={`${item.id}${IDX}`} {...item} />)
    }
  </ScrollContainer>
)
