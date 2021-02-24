import React, { Fragment } from 'react'
import ListItems from './ListItems';
import Search from '../Search/Search'
const ListOfBills = () => {
  return (
    <Fragment>
      <h1
        style={{
          textAlign: 'center',
          textTransform: 'uppercase',
          color: 'var(--color-primary)',
          fontWeight: 'bolder',
          marginBottom: '2rem',
        }}
      >
        list of bills
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '2rem',
        }}
      >
        <Search />
    </div>

    <ListItems/>
    </Fragment>
  )
}

export default ListOfBills
