import React from 'react'
import {ScrollContainer} from './styled'

export default ({items, RowComponent}) => (
  <ScrollContainer>
    {console.log('items', items)}
    {
      items.map((item, IDX) => <RowComponent key={`${item.id}${IDX}`} {...item} />)
    }
  </ScrollContainer>
)
