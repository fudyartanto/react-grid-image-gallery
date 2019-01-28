// @flow
import React from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import styles from './styles.scss'

type Props = {
  hasMore: boolean,
  images: Array<{url: string}>,
  isLoading: boolean,
  isLoadingMore: Function,
  loadMore: Function,
}

const ReactGridImageGallery = (props: Props) => {
  const {
    hasMore,
    images,
    isLoading,
    isLoadingMore,
    loadMore
  } = props
  return (
    <div>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={hasMore}
        loader={<div>Loading more...</div>}>
        <div className={styles.container}>
          {
            isLoading && !isLoadingMore ? 'loading...' : (
              images.map((item, index) => {
                return (
                  <a key={index.toString()} className={styles.item} style={{ backgroundImage: `url(${item.url})` }}>
                    <img className={styles.image} src={item.url} />
                  </a>
                )
              })
            )
          }
        </div>
      </InfiniteScroll>
    </div>
  )
}

export default ReactGridImageGallery
