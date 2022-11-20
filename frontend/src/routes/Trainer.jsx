import React from 'react'
import { Route } from 'react-router-dom'
import TDashboard from '../pages/trainer/TDashboard'
import Classes from '../pages/trainer/Classes'
import Plans from '../pages/trainer/Plans'
import TClients from '../pages/trainer/TClients'

const Trainer = () => {
  return (
    <>
      <Route path='/trainer/dashboard' component={<TDashboard />} />
      <Route path='/trainer/classes' component={<Classes />} />
      <Route path='/trainer/plans' component={<Plans />} />
      <Route path='/trainer/clients' component={<TClients />} />
    </>
  )
}

export default Trainer