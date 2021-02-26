import React, { Fragment, useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
// get useDispatch to dispatch action;
import { useDispatch } from 'react-redux';
import { AddListData } from '../../actions/AddListData'
// add bills  component
const AddBills = ({ show, onHide, id }) => {
  //create the states
  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [date, setDate] = useState('')

  // create the dispatch
  const dispatch = useDispatch()

  // on click method for add the data to redux
  const onClick = (e) => {
    e.preventDefault()
    dispatch(AddListData(id, description, category, amount, date))
    onHide()
  }

  return (
    <Fragment>
      <Modal
        show={show}
        onHide={onHide}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            Add Bills
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId='formBasicText'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Description'
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId='formBasicText'>
              <Form.Label>Category</Form.Label>
              <Form.Control
                type='text'
                placeholder='Category'
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId='formBasicText'>
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type='text'
                placeholder='Amount'
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
    </Fragment>
  )
}

export default AddBills
