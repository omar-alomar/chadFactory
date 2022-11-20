import React from 'react'
import { Route } from 'react-router-dom'
import Diets from '../pages/nutritionist/Diets'
import NClients from '../pages/nutritionist/NClients'
import NDashboard from '../pages/nutritionist/NDashboard'

const Nutritionist = () => {
  return (
    <>
      <Route path='/nutritionist/dashboard' component={<NDashboard />} />
      <Route path='/nutritionist/diets' component={<Diets />} />
      <Route path='/nutritionist/clients' component={<NClients />} />
    </>
  )
}

export default Nutritionist