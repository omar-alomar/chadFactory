import React from 'react'
import { Route } from 'react-router-dom'
import MDashboard from '../pages/member/MDashboard'
import Nutrition from '../pages/member/Nutrition'
import Training from '../pages/member/Training'

export const Member = () => {
  return (
    <>
      <Route path='/member/dashboard' component={<MDashboard />} />
      <Route path='/member/nutrition' component={<Nutrition />} />
      <Route path='/member/training' component={<Training />} />
    </>
  )
}

export default Member