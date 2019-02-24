import React, { useState, useMemo, useCallback } from 'react'
import pick from 'lodash/pick'
import {ScrollContainer} from './styled'
import Root from "./styled/Root"

const InfiniteDataList = React.memo(({items = [], RowComponent, itemHeight}) => {
  const listHeight = items.length * itemHeight
  const parentHeight = 300
  const itemsPerView = Math.floor(parentHeight / itemHeight)
  const itemsRenderedAtOnce = itemsPerView * 3 // render items at once

  const [currentItems, setCurrentItems] = useState({first: 0, last: itemsRenderedAtOnce})
  const [offsetTop, setOffsetTop] = useState(0)

  let renderedItems = useMemo(() => {
    let res = []
    for (let i = currentItems.first; i < currentItems.last; i++) {
      res.push(items[i])
    }
    return res
  }, [currentItems, items]) || []

  const onScroll = (e) => {
    const values = pick(e.target, ['scrollTop', 'clientHeight', 'scrollHeight'])
    computePosition(values)
  }

  const computePosition = useCallback(({scrollTop, clientHeight, scrollHeight}) => {
    const itemsNotShownTop = Math.floor(scrollTop / itemHeight)
    const frameSize = clientHeight
    const itemsPerView = Math.floor(frameSize / itemHeight)
    const currentPaddingTop = currentItems.first * itemHeight
    const framesAbove = Math.floor((scrollTop - currentPaddingTop) / frameSize)
    const diff = currentItems.first - itemsNotShownTop
    if (scrollTop > 0 && (diff === 0)) {
      return
    }

    if (diff < 0) {
      if (Math.abs(diff) < itemsPerView) {
        return
      }

      // indicates end of list
      const isEnd = scrollHeight === (scrollTop + clientHeight)
      if (isEnd || (currentItems.last + itemsPerView > items.length)) {
        setCurrentItems({first: items.length - itemsRenderedAtOnce, last: items.length})
        setOffsetTop((items.length - itemsRenderedAtOnce) * itemHeight)
      }
      else if (framesAbove > 1) {
        setCurrentItems({first: currentItems.first + itemsPerView, last: currentItems.last + itemsPerView})
        setOffsetTop((currentItems.first + itemsPerView) * itemHeight)
      }
    } else {
      // indicates start of list
      if (scrollTop === 0 || (currentItems.first - itemsPerView < 0)) {
        setCurrentItems({first: 0, last: itemsRenderedAtOnce})
        setOffsetTop(0)
      } else if (framesAbove <= 0) {
        setCurrentItems({first: currentItems.first - itemsPerView, last: currentItems.last - itemsPerView})
        setOffsetTop((currentItems.first - itemsPerView) * itemHeight)
      }
    }
  }, [currentItems, itemHeight])

  return (
      <Root onScroll={onScroll}>
        <ScrollContainer minHeight={listHeight} paddingTop={offsetTop}>
          {
            renderedItems.map((item, IDX) => <RowComponent key={`${item.id}${IDX}`} IDX={IDX} {...item} />)
          }
        </ScrollContainer>
      </Root>
  )
}, (prev, next) => prev.items === next.items)

export default InfiniteDataList
