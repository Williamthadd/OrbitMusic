import React from 'react'
import Logo from '../Assets/Logo.jpg'

const header = () => {
  return (
    <div className='header'>
      <img src={Logo} className='Logo-Header' alt='logo...'></img>
      <p className='Text-Logo'>Orbit</p>
      <div className='Navigation'>
        <p className='Navigation-Home'>Home</p>
        <p className='Navigation-Payment'>Payment</p>
        <p className='Navigation-Merch'>Merch</p>
        <p className='Navigation-Songs'>Songs</p>
        <p className='Navigation-Services'>Services</p>
      </div>
    </div>
  )
}

export default header
