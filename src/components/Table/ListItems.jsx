import React from 'react';
import { Card, ButtonGroup, Button } from 'react-bootstrap'

const ListItems = () => {
  return (
    <Card
      as='div'
      className='shadow-lg d-flex flex-lg-row flex-sm-column flex-md-row justify-content-around align-items-center'
      style={{
        fontSize: '2rem',
        borderRadius: '1rem',
        minHeight: '7rem',
      }}
    >
      <div>1</div>

      <div>Dominoes</div>
      <div>FoodDining</div>

      <div>567</div>
      <div>01-02-2020</div>
      <ButtonGroup size='lg'>
        <Button variant='primary'>Edit</Button>
        <Button variant='success'>Add</Button>
        <Button variant='danger'>Remove</Button>
      </ButtonGroup>
    </Card>
  )
}

export default ListItems;
