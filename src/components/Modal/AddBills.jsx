import React, { Fragment } from 'react';
import {Modal,Form,Button} from 'react-bootstrap'

const AddBills = (props) => {
    return (
        <Fragment>
              <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Add Bills</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Description</Form.Label>
            <Form.Control type='text' placeholder='Enter Description' />
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Category</Form.Label>
            <Form.Control type='text' placeholder='Category' />
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Amount</Form.Label>
            <Form.Control type='text' placeholder='Amount' />
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
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        </Fragment>
    )
}

export default AddBills
