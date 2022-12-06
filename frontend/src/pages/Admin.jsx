import React from 'react'
import { useState, useEffect } from 'react'
import UserRow from '../components/UserRow'
import AddButton from '../components/AddButton'
import MemberRow from '../components/MemberRow'

export const Admin = () => {
  const [users, setUsers] = useState([])
  const [members, setMembers] = useState([])

  useEffect(() => {
    const users = getUsers()
    const members = getMembers()
  }, [])

  let getUsers = async () => {
    let response = await fetch('/api/users/')
    let users = await response.json()
    setUsers(users)
  }

  let getMembers = async () => {
    let response = await fetch(`/api/members/`)
    let members = await response.json()
    setMembers(members)
  }

  return (
    <> 
      <div className="h-screen">

        <h1 className="p-2 h-16 text-5xl">Welcome, admin.</h1>
        <h2 className="p-3 text-2xl">View all users:</h2>

        <table className="ml-4 mr-4 mb-6">
          <tr>  
            <th className="border-2 border-gray-900 p-1 w-8">ID</th>
            <th className="border-2 border-gray-900 p-1">Username</th>
            <th className="border-2 border-gray-900 p-1 w-40">Email</th>
            <th className="border-2 border-gray-900 p-1 w-44">Address</th>
            <th className="border-2 border-gray-900 p-1 w-32">Phone</th>
            <th className="border-2 border-gray-900 p-1 w-24">First name</th>
            <th className="border-2 border-gray-900 p-1 w-24">Last name</th>
            <th className="border-2 border-gray-900 p-1 w-48">Date created</th>
            <th className="border-2 border-gray-900 p-1 w-8">Type</th>
            <th className="border-2 border-gray-900 p-1">Edit</th>
            <th className="border-2 border-gray-900 p-1">Delete</th>
          </tr>
          {users.map((user, index) => (
            <UserRow key={index} user={user} />
          ))}
        </table>
        <AddButton/>
          
        <h2 className="p-3 text-2xl">Member details:</h2>
        <table className="ml-4 mr-4 mb-6">
          <tr>  
            <th className="border-2 border-gray-900 p-1 w-8">ID</th>
            <th className="border-2 border-gray-900 p-1 w-24">First name</th>
            <th className="border-2 border-gray-900 p-1 w-24">Last name</th>
            <th className="border-2 border-gray-900 p-1 w-16">Trainer</th>
            <th className="border-2 border-gray-900 p-1 w-16">Nutritionst</th>
            <th className="border-2 border-gray-900 p-1 w-16">Tier</th>
            <th className="border-2 border-gray-900 p-1 w-40">Email</th>
            <th className="border-2 border-gray-900 p-1 w-44">Address</th>
            <th className="border-2 border-gray-900 p-1 w-32">Phone</th>
            <th className="border-2 border-gray-900 p-1">Edit</th>
            <th className="border-2 border-gray-900 p-1">Delete</th>
          </tr>
          {members.map((member, index) => (
            <MemberRow key={index} member={member} />
          ))}
        </table>

      </div>

    </>
  )
}
export default Admin