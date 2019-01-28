// @flow
import React from 'react'
import styles from './styles.scss'

type Props = {
  clear: Function,
  queryValue: string | null,
  search: Function,
  setQueryValue: Function,
}

const Header = (props: Props) => {
  const {
    clear,
    queryValue,
    search,
    setQueryValue,
  } = props
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
        {
          queryValue ? (
            <button className={styles.buttonSearch} onClick={clear}>
              <i className='fa fa-times' aria-hidden='true'></i>
            </button>
          ) : null
        }
      </div>
    </div>
  )
}

export default Header
