// @flow
import React from 'react';
import GridImageGallery from 'react-grid-image-gallery'

type Props = {
  images: Array<{ id: string}>,
  isLoading: boolean,
  isLoadingMore: boolean,
  loadMore: Function,
}

const Home = (props: Props) => {
  const {
    images,
    isLoading,
    isLoadingMore,
    loadMore,
  }  = props
  return (
    <div>
      <GridImageGallery
        images={images}
        isLoading={isLoading}
        isLoadingMore={isLoadingMore}
        loadMore={loadMore}
        hasMore={isLoading === false} />
    </div>
  )
}

export default Home;
