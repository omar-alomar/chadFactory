import React from 'react'

const UserRow = (user) => {
  console.log(user)
  return (
    <>
      <tr>  
        <th className="border-2 border-gray-900 p-1">{user.user.id}</th>
        <th className="border-2 border-gray-900 p-1">{user.user.username}</th>
        <th className="border-2 border-gray-900 p-1">{user.user.password}</th>
        <th className="border-2 border-gray-900 p-1">{user.user.email}</th>
        <th className="border-2 border-gray-900 p-1">{user.user.address}</th>
        <th className="border-2 border-gray-900 p-1">{user.user.phone}</th>
        <th className="border-2 border-gray-900 p-1">{user.user.fname}</th>
        <th className="border-2 border-gray-900 p-1">{user.user.lname}</th>
        <th className="border-2 border-gray-900 p-1">{user.user.created}</th>
        <th className="border-2 border-gray-900 p-1">{user.user.accType}</th>
      </tr>
    </>
  )
}

export default UserRow