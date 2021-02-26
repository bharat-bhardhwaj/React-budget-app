import React from 'react'
import { MDBCol } from 'mdbreact'
//search page
const SearchPage = ({ setSearch, value }) => {
  return (
    <MDBCol md='6'>
      <input
        className='form-control'
        type='text'
        placeholder='Search By category like FoodNdining'
        aria-label='Search'
        value={value}
        onChange={(e) => setSearch(e.target.value)}
      />
    </MDBCol>
  )
}

export default SearchPage
