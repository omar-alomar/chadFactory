import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import FetchTierPrice from '../components/FetchTierPrice'

const NewUser = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [address, setAddress] = useState()
    const [phone, setPhone] = useState()
    const [fname, setFname] = useState()
    const [lname, setLname] = useState()
    const [accType, setAccType] = useState()
    const [ssn, setSsn] = useState()
    const [tier, setTier] = useState()
    const [salary, setSalary] = useState()
    const [trainerId, setTrainerId] = useState()
    const [nutritionistId, setNutritionstId] = useState()
    const [nutritionists, setNutritionists] = useState([])

    useEffect(() => {
        const nutritionists = getNutritionists()
      }, [])

    const navigate = useNavigate()

    let getNutritionists = async () => {
        let response = await fetch('/api/nutritionists/')
        let res = await response.json()
        setNutritionists(res)
    }

    let createUser = async () => {
        if (accType === 'T' || accType === 'N') {
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
                    accType: accType,
                    ssn: ssn,
                    salary: salary
                })
            })
        }
        if (accType === 'M') {
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
                    accType: accType,
                    tier: tier
                    // trainerId: trainerId,
                    // nutritionistId: nutritionistId,
                })
            })
        }}


    const handleSubmit = e => {
        e.preventDefault()
        createUser()
        navigate('/admin')

    }

  if (accType === 'T' || accType === 'N') {
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
            <div><label className='float'>SSN:</label>
                <input className='m-2 border broder-black bg-gray-100' onChange={e => setSsn(e.target.value)}></input></div>
            <div><label className='float'>Salary:</label>
                <input className='m-2 border broder-black bg-gray-100' onChange={e => setSalary(e.target.value)}></input></div>
            <div className="w-full flow-root"><button className='mr-4 mt-2 p-2 bg-green-500 float-right border-2 border-gray-500' onClick={handleSubmit} >Create user</button></div>
        </form>
    </>
    )
  }

  if (accType === 'M' && tier === 3) {
    console.log(nutritionistId)
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
            <div><label>Membership tier:</label>
                <select className='m-2 border broder-black bg-gray-100' onChange={e => setTier(parseInt(e.target.value))}>
                    <option> </option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select></div>
                <FetchTierPrice tier={tier} />
                <div><label>Select nutritionist</label>
                <select className='m-2 border broder-black bg-gray-100' onChange={e => setNutritionstId(e.target.value)}>
                    <option> </option>
                    {nutritionists.map((nutritionist, index) => (
                            <option key={index} value={nutritionist.id}>{nutritionist.fname}</option>
                    ))}

                </select></div>
            <div className="w-full flow-root"><button className='mr-4 mt-2 p-2 bg-green-500 float-right border-2 border-gray-500' onClick={handleSubmit} >Create user</button></div>
        </form>
    </>
    )
  } 

  if (accType === 'M') {
    console.log(tier)
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
            <div><label>Membership tier:</label>
                <select className='m-2 border broder-black bg-gray-100' onChange={e => {setTier(parseInt(e.target.value));}}>
                    <option> </option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select></div>
                <FetchTierPrice tier={tier} />
            <div className="w-full flow-root"><button className='mr-4 mt-2 p-2 bg-green-500 float-right border-2 border-gray-500' onClick={handleSubmit} >Create user</button></div>
            cock
        
        </form>

    </>
    )
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