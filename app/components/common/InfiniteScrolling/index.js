import InfiniteScrolling from './InfiniteScrolling'

export default InfiniteScrolling

/*const defaultMaxItems = 30

const makeWithState = [
  withState('currentItemsIDX', 'setCurrentItemsIDX', {first: 0, last: defaultMaxItems})
]

const makeWithPropsOnChange = withPropsOnChange(
  ['items', 'currentItemsIDX'],
  ({items = [], currentItemsIDX = {}}) => {
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
      items,
      currentItemsIDX,
      renderedItems,
    }
  }
)

const makeWithHandlers = withHandlers({
  onScroll: ({currentItemsIDX, items, setCurrentItemsIDX, listHeight, itemHeight}) => throttle(e => {
    console.log("+++++++++++++++++++")
    // TODO: how to update currentItemsIDX only when needed?
    //let totalListHeight = itemHeight * defaultMaxItems
    //let scrollPercentage = Math.floor(e.target.scrollTop / (totalListHeight - listHeight) * 100)
    //let itemsPerView = Math.floor(listHeight / itemHeight)

    // scroll in the beginning
    if (scrollPercentage >= 33 && scrollPercentage < 66) {
      console.log('case1')
      setCurrentItemsIDX({first: currentItemsIDX.first + itemsPerView, last: currentItemsIDX.last + itemsPerView})
    } else if (scrollPercentage < 33 && currentItemsIDX.first !== 0) {
      console.log('case2')
      setCurrentItemsIDX({first: 0, last: currentItemsIDX.last - itemsPerView})
    } else if (scrollPercentage >= 66) {
      console.log('case3')
      setCurrentItemsIDX({first: currentItemsIDX.first + itemsPerView, last: currentItemsIDX.last + itemsPerView})
    }

    let itemsLeftOnTopOfVieport = e.target.scrollTop / itemHeight
    if (itemsLeftOnTopOfVieport >= 10) {

    }
  }, 500),
})

export default compose(
  ...makeWithState,
  makeWithPropsOnChange,
  makeWithHandlers
)(InfiniteScrolling)
*/