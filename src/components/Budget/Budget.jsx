import React from 'react';
import {Card,} from 'react-bootstrap';

const Budget = () => {
    return (
        <Card
    
        style={{ height: '60rem', borderRadius:'1rem' }}
        className="shadow-lg mb-2"
      >
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>bharat Card Title </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default Budget;
