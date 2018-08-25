import {compose, withPropsOnChange, withState, withHandlers} from 'recompose'
import InfiniteScrolling from './InfiniteScrolling'

const defaultMaxItems = 30

const makeWithState = [
  withState('currentItemsIDX', 'setCurrentItemsIDX', {first: 0, last: defaultMaxItems})
]

const makeWithPropsOnChange = withPropsOnChange(
  ['items', 'currentItemsIDX'],
  ({items = [], rowComponent, currentItemsIDX = {}, ...props}) => {
    console.log("==================UPDATES")
    console.log('new currentItemsIDX', currentItemsIDX)
    let renderedItems = []
    for (let i = currentItemsIDX.first; i < currentItemsIDX.last || items.length < i; i++) {
      if (items[i]) {
        renderedItems.push(items[i])
      }
    }

    console.log('renderedItems LENGTH', renderedItems.length)

    return {
      currentItemsIDX,
      RowComponent: rowComponent,
      renderedItems,
      ...props
    }
  }
)

const makeWithHandlers = withHandlers({
  onScroll: ({currentItemsIDX, setCurrentItemsIDX, listHeight, itemHeight}) => e => {
    console.log("+++++++++++++++++++")
    let scrollPercentage = Math.floor(e.target.scrollTop / listHeight * 100)
    let itemsPerView = Math.floor(itemHeight / listHeight)

    console.log('e.target.scrollTop', e.target.scrollTop)
    console.log('scrollPercentage', scrollPercentage)

    // scroll in the beginning
    if (scrollPercentage >= 33 && scrollPercentage < 66 && currentItemsIDX.first === 0) {
      console.log('case1')
      console.log('itemsPerView', itemsPerView)
      console.log('NEW FIRST', currentItemsIDX.first + itemsPerView)
      setCurrentItemsIDX({first: currentItemsIDX.first + itemsPerView, last: currentItemsIDX.last + itemsPerView})
    } else if (scrollPercentage < 33 && currentItemsIDX.first !== 0) {
      console.log('case2')
      setCurrentItemsIDX({first: 0, last: currentItemsIDX.last - itemsPerView})
    } else if (scrollPercentage >= 66) {
      console.log('case3')
      console.log('end scrollPercentage')
      setCurrentItemsIDX({first: currentItemsIDX.first + itemsPerView, last: currentItemsIDX.last + itemsPerView})
    }
  },
})

export default compose(
  ...makeWithState,
  makeWithPropsOnChange,
  makeWithHandlers
)(InfiniteScrolling)
