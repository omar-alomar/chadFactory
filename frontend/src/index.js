import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Admin from './routes/Admin'
import Member from './routes/Member'
import Nutritionist from './routes/Nutritionist'
import Trainer from './routes/Trainer'

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="admin" element={<Admin />} />
      <Route path="member" element={<Member />} />
      <Route path="nutritionist" element={<Nutritionist />} />
      <Route path="trainer" element={<Trainer />} />
    </Route>
  )
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);
