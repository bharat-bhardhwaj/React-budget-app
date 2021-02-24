import React, { Fragment } from 'react'
import {Card,ButtonGroup,Button} from 'react-bootstrap';
import Search from '../Search/Search';
const ListOfBills= () => {
    return (
      <Fragment>
        <h1
        style={{
          textAlign:'center',
          textTransform:'uppercase',
          color:'var(--color-primary)',
          fontWeight:'bolder',
          marginBottom:'2rem'
          
        }}
        >list of bills</h1>
        <div
        style={{
          display:'flex',
          justifyContent:'center',
          marginBottom:'2rem'
        }}>
        <Search/>
        </div>
        <Card
        as='div'
        className='shadow-lg d-flex flex-lg-row flex-sm-column flex-md-row justify-content-around align-items-center'
        
        style={{
          fontSize:'2rem',
          borderRadius:'1rem',
          minHeight:'7rem',
          
        }}
        >

            <div>
              1
            </div>
       
            <div>Dominoes</div>
            <div>FoodDining</div>
        
         
            <div>567</div>
            <div>01-02-2020</div>
            <ButtonGroup size="lg" >
    <Button variant="primary">Edit</Button>
    <Button variant="success">Add</Button>
    <Button variant='danger'>Remove</Button>
  </ButtonGroup>

        </Card>
      </Fragment>
      
    )
}

export default ListOfBills;
