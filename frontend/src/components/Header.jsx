import React from 'react'
import gigaChad from '../assets/gigaChad.jpeg'

const Header = () => {
  return (
    <>
      <div className='w-full h-20 bg-spaceBlack flex flex-row'>
        <img src={gigaChad} className='h-full' />
        <h1 className='text-white m-5 text-3xl'>Sigmillionairre Grindset</h1>
      </div>
    </>
  )
}

export default Header