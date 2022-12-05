import React from 'react'
import { useState, useEffect } from 'react'


const NewUser = () => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [address, setAddress] = useState()
    const [phone, setPhone] = useState()
    const [fname, setFname] = useState()
    const [lname, setLname] = useState()
    const [accType, setAccType] = useState()

    let createUser = async () => {
        fetch(`/api/users/new/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({        
                username: username,
                password: password,
                email: email,
                address: address,
                phone: phone,
                fname: fname,
                lname: lname,
                accType: accType
            })
        })
      }
    const handleSubmit = e => {
        e.preventDefault()
        createUser()
    }
  return (
    <>
        <h1 className="p-2 text-3xl">Add a user:</h1>
        <form className='p-2'>
            <div><label>Username:</label>
                <input className='m-2 border broder-black bg-gray-100' onChange={e => setUsername(e.target.value)}></input></div>
            <div><label>Password:</label>
                <input className='m-2 border broder-black bg-gray-100' onChange={e => setPassword(e.target.value)}></input></div>
            <div><label>First name:</label>
                <input className='m-2 border broder-black bg-gray-100' onChange={e => setFname(e.target.value)}></input></div>
            <div><label>Last name:</label>
                <input className='m-2 border broder-black bg-gray-100' onChange={e => setLname(e.target.value)}></input></div>
            <div><label>Email:     </label>
                <input className='m-2 border broder-black bg-gray-100' onChange={e => setEmail(e.target.value)}></input></div>
            <div><label>Phone:</label>
                <input className='m-2 border broder-black bg-gray-100' onChange={e => setPhone(e.target.value)}></input></div>
            <div><label className='float'>Address:</label>
                <textarea className='m-2 border broder-black bg-gray-100' onChange={e => setAddress(e.target.value)}></textarea></div>
            <div><label>Account type:</label>
                <select className='m-2 border broder-black bg-gray-100' onChange={e => setAccType(e.target.value.charAt(0))}>
                    <option> </option>
                    <option>Admin</option>
                    <option>Member</option>
                    <option>Trainer</option>
                    <option>Nutritionist</option>
                </select></div>
            <div className="w-full flow-root"><button className='mr-4 mt-2 p-2 bg-green-500 float-right border-2 border-gray-500' onClick={handleSubmit} >Create user</button></div>
        </form>
    </>
  )
}

export default NewUser