import React from 'react'
import { Card } from 'react-bootstrap'

// Total budget card
const Budget = () => {
  return (
    <Card
      style={{ height: '40rem', borderRadius: '1rem' }}
      className='shadow-lg mb-2'
    >
      <Card.Header style={{ fontSize: '5rem' }}>Details</Card.Header>
      <Card.Body>
        <Card.Title style={{ fontSize: '4rem' }}> Total Budget </Card.Title>
        <Card.Text>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '6rem',
              padding: '6rem',
            }}
          >
            50000
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Budget
