// @flow
import React from 'react'
import ContentLoader from 'react-content-loader'
import styles from './styles.scss'

type Props = {}

const ItemLoader = (props: Props) => {
  return (
    <div className={styles.container}>
      <ContentLoader width={320} height={320}>
        <rect x='0' y='0' rx='4' ry='4' width='320' height='250' />
        <rect x='0' y='260' rx='4' ry='4' width='200' height='15' />
        <rect x='0' y='285' rx='4' ry='4' width='300' height='15' />
      </ContentLoader>
    </div>
  )
}

export default ItemLoader
