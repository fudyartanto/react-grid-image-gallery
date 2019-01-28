// @flow
import React from 'react'
import styles from './styles.scss'

type Props = {
  isLoading: boolean,
  images: Array<{url: string}>
}

const ReactGridImageGallery = (props: Props) => {
  const { isLoading, images } = props
  return (
    <div className={styles.container}>
      {
        isLoading ? 'loading...' : (
          images.map((item, index) => {
            return (
              <a key={index} className={styles.item} style={{ backgroundImage: `url(${item.url})` }}>
                <img className={styles.image} src={item.url} />
              </a>
            )
          })
        )
      }
    </div>
  )
}

export default ReactGridImageGallery
