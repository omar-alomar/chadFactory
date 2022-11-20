import React from 'react'
import { Route } from 'react-router-dom'
import ADashboard from '../pages/admin/ADashboard'
import ManageClients from '../pages/admin/ManageClients'
import ManageNutritionists from '../pages/admin/ManageNutritionists'
import ManageTrainers from '../pages/admin/ManageTrainers'
import ManageClasses from '../pages/admin/ManageClasses'

export const Admin = () => {
  return (
    <>
      <Route path='/admin/dashboard' component={<ADashboard />} />
      <Route path='/admin/clients' component={<ManageClients />} />
      <Route path='/admin/nutritionists' component={<ManageNutritionists />} />
      <Route path='/admin/trainers' component={<ManageTrainers />} />
      <Route path='/admin/classes' component={<ManageClasses />} />
    </>
  )
}
export default Admin