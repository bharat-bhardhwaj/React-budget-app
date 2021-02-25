import React, { Fragment } from 'react';
import {useSelector} from 'react-redux';
import ListItems from './ListItems';
import Search from '../Search/Search';

const ListOfBills = () => {
  const listData =useSelector((state) => state.listDataReducer.bills)
  console.log(listData)
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

    {
      listData?.map(({id,...otherProps}) => {
        return (
          <ListItems key={id} {...otherProps} id={id} />
        )
      })
    }

 
    </Fragment>
  )
}

export default ListOfBills
