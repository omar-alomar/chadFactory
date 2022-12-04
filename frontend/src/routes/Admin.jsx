import React from 'react'
import { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import UserRow from '../components/UserRow'
import ADashboard from '../pages/admin/ADashboard'
import ManageClients from '../pages/admin/ManageClients'
import ManageNutritionists from '../pages/admin/ManageNutritionists'
import ManageTrainers from '../pages/admin/ManageTrainers'
import ManageClasses from '../pages/admin/ManageClasses'

// old routes
{/* <Route path='/admin/dashboard' component={<ADashboard />} />
<Route path='/admin/clients' component={<ManageClients />} />
<Route path='/admin/nutritionists' component={<ManageNutritionists />} />
<Route path='/admin/trainers' component={<ManageTrainers />} />
<Route path='/admin/classes' component={<ManageClasses />} /> */}

export const Admin = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const data = getUsers()
    console.log(users)
  }, [])

  let getUsers = async () => {
    let response = await fetch('/api/users/')
    let data = await response.json()
    setUsers(data)
  }

  return (
    <>  
      <table>
        <tr>  
          <th className="border-2 border-gray-900 p-1">ID</th>
          <th className="border-2 border-gray-900 p-1">Username</th>
          <th className="border-2 border-gray-900 p-1"> Password</th>
          <th className="border-2 border-gray-900 p-1">Email</th>
          <th className="border-2 border-gray-900 p-1">Address</th>
          <th className="border-2 border-gray-900 p-1">Phone</th>
          <th className="border-2 border-gray-900 p-1">First name</th>
          <th className="border-2 border-gray-900 p-1">Last name</th>
          <th className="border-2 border-gray-900 p-1">Date created</th>
          <th className="border-2 border-gray-900 p-1">Account type</th>
        </tr>
        {users.map((user, index) => (
          <UserRow key={index} user={user} />
        ))}
        {console.log(users)}
      </table>
    </>
  )
}
export default Admin