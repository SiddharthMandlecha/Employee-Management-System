import React from 'react'

function Header({ setisAdding }) {
  return (
    <header>
      <h1> Employee Management System </h1>
      <div style ={{ marginTop : '20px' , marginBottom : '20px' }}> 
        <button onClick={() => setisAdding ( true )} 
        className='round-button'> Add button </button>
      </div>
    </header>
  )
}

export default Header;
