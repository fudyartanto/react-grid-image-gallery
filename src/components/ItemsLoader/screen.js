// @flow
import React from 'react'
import ItemLoader from '../ItemLoader'

type Props = {
  itemsCount: number
}

const ItemsLoader = (props: Props) => {
  const { itemsCount } = props

  let loaders = []
  for (let i = 1; i <= itemsCount; i++) {
    loaders.push(<ItemLoader key={i} />)
  }

  return loaders
}

ItemsLoader.defaultProps = {
  itemsCount: 12
}

export default ItemsLoader
