import React, { Fragment,useState } from 'react';
import {useSelector} from 'react-redux';
import ListItems from './ListItems';
import Search from '../Search/Search';
import {Button} from 'react-bootstrap';
import AddBills from '../Modal/AddBills';

const ListOfBills = () => {
  const [ modalShow,setModalShow] = useState(false)
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
        <Button onClick={()=> setModalShow(true)}>Add Bills</Button>
        <AddBills show={modalShow} onHide={()=> setModalShow(false)}/>
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
