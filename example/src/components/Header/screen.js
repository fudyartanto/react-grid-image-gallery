// @flow
import React from 'react'
import styles from './styles.scss'

type Props = {
  queryValue: string | null,
  setQueryValue: Function,
  search: Function,
}

const Header = (props: Props) => {
  const { queryValue, setQueryValue, search } = props
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <input
          type='text'
          placeholder='Search'
          value={queryValue}
          onChange={(event) => setQueryValue(event.target.value)}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              search()
            }
          }}/>
      </div>
    </div>
  )
}

export default Header
