import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

const EditBills = ({ show, onHide, amount, category, description}) => {
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
            <Form.Control type='text' placeholder='Enter Description' value={description} />
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Category</Form.Label>
            <Form.Control type='text' placeholder='Category' value={category} />
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Amount</Form.Label>
            <Form.Control type='text' placeholder='Amount' value={amount}/>
          </Form.Group>
          <Form.Group controlId='dob'>
            <Form.Label>Select Date</Form.Label>
            <Form.Control type='date' name='dob' placeholder='Date'/>
          </Form.Group>

          <Button variant='primary' type='submit'>
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
