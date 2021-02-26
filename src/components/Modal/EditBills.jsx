import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { EditListData } from '../../actions/EditListData'

const EditBills = ({ show, onHide, amount, category, description, id }) => {
  // create the state
  const [amount2, setAmount] = useState(amount)
  const [category2, setCategory] = useState(category)
  const [description2, setDescription] = useState(description)
  const [date, setDate] = useState('')
  const dispatch = useDispatch()

  // add click button to edit data to redux
  const onClick = (e) => {
    e.preventDefault();
    dispatch(EditListData(id, description2, category2, amount2, date))
    onHide()
  }
  return (
    <Modal
      show={show}
      onHide={onHide}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Edit Bills</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Description'
              value={description2}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Category</Form.Label>
            <Form.Control
              type='text'
              placeholder='Category'
              value={category2}
              onChange={(e) => setCategory(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type='text'
              placeholder='Amount'
              value={amount2}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId='dob'>
            <Form.Label>Select Date</Form.Label>
            <Form.Control
              type='date'
              name='dob'
              placeholder='Date'
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>

          <Button variant='primary' type='submit' onClick={onClick}>
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default EditBills
