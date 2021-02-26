import React, { Fragment, useState } from 'react'
import { useSelector } from 'react-redux'
import ListItems from './ListItems'
import Search from '../Search/Search'
import { Button } from 'react-bootstrap'
import AddBills from '../Modal/AddBills'

const ListOfBills = () => {
  // create state
  const [search, setSearch] = useState('')
  const [modalShow, setModalShow] = useState(false)
  // get state
  let listData = useSelector((state) => state.listDataReducer.bills)

  // Total Budget
  const TotalBudget = 50000
  // with help of this only can see the list which totalbudget < totalamount of list
  let ans = 0
  let listData2 = []
  let sum = 0
  let prevSum = 0
  for (let ele of listData) {
    prevSum = sum
    sum = sum + Number(ele.amount)
    if (TotalBudget < sum) {
      sum = sum - prevSum
      ans = Number(ele.amount)
    } else {
      listData2.push(ele)
    }
  }

  listData = listData2
  ans = ans + sum
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
        <Search setSearch={setSearch} value={search} />
        <Button
          onClick={() => setModalShow(true)}
          disabled={ans > TotalBudget ? true : false}
        >
          Add Bills
        </Button>
        <AddBills
          show={modalShow}
          onHide={() => setModalShow(false)}
          id={listData.length}
        />
      </div>

      {listData
        ?.filter((ele) => ele.category.includes(search))
        .map(({ id, ...otherProps }, index) => {
          return <ListItems key={id} {...otherProps} id={id} index={index} />
        })}
    </Fragment>
  )
}

export default ListOfBills
