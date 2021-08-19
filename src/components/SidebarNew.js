import InfiniteLoader from 'react-window-infinite-loader'
import { FixedSizeList as List } from 'react-window';
import Dimension from '../Dimension';

const SidebarNew = ({ 
  items,
  layout,
  pageHeight,
  loadNextPage,
  isNextPageLoading=false,
}) => {

  const numberOfItems = layout && layout.qListObject.qSize.qcy
  const hasNextPage = items.length < numberOfItems ? true : false
  const itemCount = hasNextPage ? pageHeight + 1 : pageHeight;

  // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
  const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;

  // Every row is loaded except for our loading indicator row.
  const isItemLoaded = index => !hasNextPage || index < pageHeight;

   // Render an item or a loading indicator.
   const Item = ({ index, style }) => {
    
    let content;
    let select;
    let state;

    if (!isItemLoaded(index) || items.length == 0 || items[index] == undefined) {

      content = "Loading...";
      select = "";
      state = ""
    } else {
      content = items[index].name;
      select = items[index];
      state = items[index].state
    }

    return (
      <div 
        key={index} 
        element={content}
        style={style}
      >
        {content}
      </div>
    )
  
  }
  
  return (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={itemCount}
      loadMoreItems={loadMoreItems}
    > 
      {({ onItemsRendered, ref }) => (
        items.length > 0 ?
        (
          <List
            className="list"
            itemCount={itemCount}
            onItemsRendered={onItemsRendered}
            ref={ref}
            height={250}
            width={"100%"}
            itemSize={24}
          >
            {Item}
          </List>
        ) : (
         <div>No results found.</div>
        )
      )}
    </InfiniteLoader>
  )
}

export default SidebarNew