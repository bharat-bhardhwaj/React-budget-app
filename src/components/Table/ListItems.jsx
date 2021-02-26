import React, { useState } from 'react'
import { Card, ButtonGroup, Button } from 'react-bootstrap'
import EditBills from '../Modal/EditBills'
import { useDispatch } from 'react-redux'

// get the remove bills action
import { RemoveBills } from '../../actions/RemoveBills'

const ListItems = ({ id, description, category, amount, date, index }) => {
  // create state
  const [modalShow, setModalShow] = useState(false)
  const dispatch = useDispatch()

  // create the remveHandler  for removing the bills
  const removeHandler = (e) => {
    e.preventDefault()
    dispatch(RemoveBills(id))
  }
  return (
    <Card
      as='div'
      className='shadow-lg d-flex flex-lg-row flex-sm-column flex-md-row justify-content-around align-items-center'
      style={{
        fontSize: '2rem',
        borderRadius: '1rem',
        minHeight: '7rem',
        marginBottom: '1rem',
      }}
    >
      <div>{index + 1}</div>

      <div>{description}</div>
      <div>{category}</div>

      <div>{amount}</div>
      <div>{date}</div>
      <ButtonGroup size='lg'>
        <Button variant='primary' onClick={() => setModalShow(true)}>
          Edit
        </Button>
        <Button variant='danger' onClick={removeHandler}>
          Remove
        </Button>
      </ButtonGroup>

      <EditBills
        show={modalShow}
        onHide={() => setModalShow(false)}
        amount={amount}
        category={category}
        description={description}
        id={id}
      />
    </Card>
  )
}

export default ListItems
