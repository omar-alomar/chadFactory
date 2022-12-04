import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginBox = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await getUser()
    if (data.username !== username || data.password !== password) {
      alert('Invalid account type or login info. Please try again.')
    }
    if (data.accType === 'A' || data.accType === 'a') {
      console.log('admin user')
      navigate('/admin')
    }
    if (data.accType === 'M' || data.accType === 'm') {
      console.log('member user')
    }
    if (data.accType === 'T' || data.accType === 't') {
      console.log('trainer user')
    }
    if (data.accType === 'N' || data.accType === 'n') {
      console.log('nutritionist user')
    }
  }

  let getUser = async () => {
    let response = await fetch('/api/users/' + username)
    let data = await response.json()
    return data    
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