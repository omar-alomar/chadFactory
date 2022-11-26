import React from 'react'
import { useState } from 'react'

const LoginBox = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    
  }
  return (
    <>
        <div className='h-50 bg-black p-5 rounded'>
            <p className='text-gray-300'>Welcome to The Chad Factory©</p>
            <form>
                <div><label className='text-white'>Username:</label>
                <input className='m-3 outline-neonBlue' value={username} onChange={e => setUsername(e.target.value.trim())}/></div>
                <div><label className='text-white'>Password: </label>
                <input className='m-3 outline-neonBlue' type='password' value={password} onChange={e => setPassword(e.target.value.trim())}/></div>
                <div className="w-full flow-root"><button className='mr-4 mt-2 p-2 bg-chadGrey float-right' onClick={handleSubmit}>Log in</button></div>
            </form>
        </div>
    </>

  )
}

export default LoginBox