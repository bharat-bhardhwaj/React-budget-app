import React from 'react'
import { Navbar } from 'react-bootstrap';
// create the Nabar
const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' style={{ height: '7rem' }}>
      <Navbar.Brand style={{ fontSize: '2rem' }}>Monthly budget</Navbar.Brand>
    </Navbar>
  )
}

export default Header
