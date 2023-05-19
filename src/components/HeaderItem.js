import React from 'react'
import logo from '../assets/images/logo.png'

function HeaderItem() {
  return (
    <header className='Header'>
      
      <h2>Hey! this is the Header</h2>
     <img src={logo} alt='logo'/>
  </header>
  )
}

export default HeaderItem
