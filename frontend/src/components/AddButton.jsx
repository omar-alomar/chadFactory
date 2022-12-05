import React from 'react'
import { Link } from 'react-router-dom'

const AddButton = () => {
  return (
    <>
        <Link className='right-0 ml-[89vw]  p-2 text-center bg-green-500 border-2 border-black hover:bg-green-400' to="/admin/newUser">Create user</Link>
    </>
  )
}

export default AddButton