// @flow
import React from 'react';
import GridImageGallery from 'react-grid-image-gallery'

type Props = {
  isLoading: boolean,
  images: Array<{ id: string}>,
}

const Home = (props: Props) => {
  const { isLoading, images }  = props
  return (
    <div>
      {isLoading ? 'loading...' : images.length }
      <GridImageGallery text='Test'/>
    </div>
  )
}

export default Home;
