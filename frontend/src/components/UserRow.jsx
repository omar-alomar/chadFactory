import React from 'react'
import { useState, useEffect } from 'react'

const UserRow = (user) => {
  const [enableEdit, setEnableEdit] = useState(false)
  const [deleted, setDeleted] = useState(false)
  
  const [username, setUsername] = useState(user.user.username)
  const [password, setPassword] = useState(user.user.password)
  const [email, setEmail] = useState(user.user.email)
  const [address, setAddress] = useState(user.user.address)
  const [phone, setPhone] = useState(user.user.phone)
  const [fname, setFname] = useState(user.user.fname)
  const [lname, setLname] = useState(user.user.lname)
  const [accType, setAccType] = useState(user.user.accType)

  const updateUser = async () => {
    fetch(`/api/users/${user.user.id}/update/`, {
      method: "PUT",
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
  })}

  const deleteUser = async () => {
    fetch(`/api/users/${user.user.id}/delete/`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    setDeleted(true)
  }

  const submitEdit = () => {
    updateUser()
    setEnableEdit(false)
  }

  if (deleted) {
    return (
      <>
      </>
    )
  }

  if (!enableEdit) {
    return (
      <>
        <tr>  
          <th className="border-2 border-gray-900 p-1"><textarea readOnly="true" className="resize-none w-full h-full">{user.user.id}</textarea></th>
          <th className="border-2 border-gray-900 p-1"><textarea readOnly="true" className="resize-none w-full h-full">{user.user.username}</textarea></th>
          <th className="border-2 border-gray-900 p-1"><textarea readOnly="true" className="resize-none w-full h-full">{user.user.password}</textarea></th>
          <th className="border-2 border-gray-900 p-1"><textarea readOnly="true" className="resize-none w-full h-full">{user.user.email}</textarea></th>
          <th className="border-2 border-gray-900 p-1"><textarea readOnly="true" className="resize-none w-full h-full">{user.user.address}</textarea></th>
          <th className="border-2 border-gray-900 p-1"><textarea readOnly="true" className="resize-none w-full h-full">{user.user.phone}</textarea></th>
          <th className="border-2 border-gray-900 p-1"><textarea readOnly="true" className="resize-none w-full h-full">{user.user.fname}</textarea></th>
          <th className="border-2 border-gray-900 p-1"><textarea readOnly="true" className="resize-none w-full h-full">{user.user.lname}</textarea></th>
          <th className="border-2 border-gray-900 p-1"><textarea readOnly="true" className="resize-none w-full h-full">{user.user.created}</textarea></th>
          <th className="border-2 border-gray-900 p-1"><textarea readOnly="true" className="resize-none w-full h-full">{user.user.accType}</textarea></th>
          <th className="border-2 bg-yellow-500 border-gray-900 p-1"><div className="cursor-pointer" onClick={() => setEnableEdit(true)}><textarea className="cursor-pointer resize-none w-full h-full bg-yellow-500">Edit</textarea></div></th>
          <th className="border-2 bg-red-500 border-gray-900 p-1"><div className="cursor-pointer" onClick={deleteUser}><textarea className="cursor-pointer resize-none w-full h-full bg-red-500">Delete</textarea></div></th>
        </tr>
      </>
    )}
  if (enableEdit) {
    return (
      <>
        <tr>  
          <th className="border-2 bg-yellow-500 border-gray-900 p-1"><textarea className="resize-none w-full h-full bg-yellow-500">{user.user.id}</textarea></th>
          <th className="border-2 bg-yellow-500 border-gray-900 p-1"><textarea onChange={(e) => {setUsername(e.target.value)}} className="resize-none bg-yellow-500 w-full h-full">{user.user.username}</textarea></th>
          <th className="border-2 bg-yellow-500 border-gray-900 p-1"><textarea onChange={(e) => {setPassword(e.target.value)}} className="resize-none bg-yellow-500 w-full h-full">{user.user.password}</textarea></th>
          <th className="border-2 bg-yellow-500 border-gray-900 p-1"><textarea onChange={(e) => {setEmail(e.target.value)}} className="resize-none bg-yellow-500 w-full h-full">{user.user.email}</textarea></th>
          <th className="border-2 bg-yellow-500 border-gray-900 p-1"><textarea onChange={(e) => {setAddress(e.target.value)}} className="resize-none bg-yellow-500 w-full h-full">{user.user.address}</textarea></th>
          <th className="border-2 bg-yellow-500 border-gray-900 p-1"><textarea onChange={(e) => {setPhone(e.target.value)}} className="resize-none bg-yellow-500 w-full h-full">{user.user.phone}</textarea></th>
          <th className="border-2 bg-yellow-500 border-gray-900 p-1"><textarea onChange={(e) => {setFname(e.target.value)}} className="resize-none bg-yellow-500 w-full h-full">{user.user.fname}</textarea></th>
          <th className="border-2 bg-yellow-500 border-gray-900 p-1"><textarea onChange={(e) => {setLname(e.target.value)}} className="resize-none bg-yellow-500 w-full h-full">{user.user.lname}</textarea></th>
          <th className="border-2 bg-yellow-500 border-gray-900 p-1"><textarea readOnly="true" className="resize-none bg-yellow-500 w-full h-full">{user.user.accType}</textarea></th>
          <th className="border-2 bg-yellow-500 border-gray-900 p-1"><textarea className="resize-none bg-yellow-500 w-full h-full">{user.user.created}</textarea></th>
          <th className="border-2 bg-green-500 border-gray-900 p-1"><div className="cursor-pointer" onClick={submitEdit}>Submit</div></th>
          <th className="border-2 bg-red-500 border-gray-900 p-1"><div className="cursor-pointer">Delete</div></th>
        </tr>
      </>
    )
  }
}

export default UserRow