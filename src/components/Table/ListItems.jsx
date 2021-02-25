import React,{useState} from 'react';
import { Card, ButtonGroup, Button } from 'react-bootstrap'
import  EditBills  from '../Modal/EditBills';

const ListItems = ({id,description,category,amount,date}) => {

  const [ modalShow,setModalShow] = useState(false)
  return (
    <Card
      as='div'
      className='shadow-lg d-flex flex-lg-row flex-sm-column flex-md-row justify-content-around align-items-center'
      style={{
        fontSize: '2rem',
        borderRadius: '1rem',
        minHeight: '7rem',
        marginBottom:'1rem'
      }}
    >
      <div>{id}</div>

      <div>{description}</div>
      <div>{category}</div>

      <div>{amount}</div>
      <div>{date}</div>
      <ButtonGroup size='lg'>
        <Button variant='primary'
        onClick={()=> setModalShow(true)}
        >Edit</Button>
        <Button variant='danger'>Remove</Button>
      </ButtonGroup>

      <EditBills show={modalShow} onHide={() => setModalShow(false)}/>
    </Card>

  
  )
}

export default ListItems;
