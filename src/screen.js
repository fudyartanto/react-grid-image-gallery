// @flow
import React from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import ItemsLoader from './components/ItemsLoader'
import styles from './styles.scss'

type Props = {
  images: Array<{url: string}>,
  isLoading: boolean,
  isLoadingMore: Function,
  loadMore: Function,
}

const ReactGridImageGallery = (props: Props) => {
  const {
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
        hasMore={true}
        loader={<div className={styles.loadMoreContainer}><ItemsLoader itemsCount={4} /></div>}>
        <div className={styles.container}>
          {
            isLoading && !isLoadingMore ? <ItemsLoader /> : (
              images.map((item, index) => {
                return (
                  <a key={index.toString()} className={styles.item} style={{ backgroundImage: `url(${item.url})` }} href={item.fullSizeUrl} target='_blank'>
                    <img className={styles.image} src={item.url} />
                    <div className={styles.caption}>
                      <div className={styles.title}>{ item.title }</div>
                      <div className={styles.description}>{ item.description }</div>
                    </div>
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
