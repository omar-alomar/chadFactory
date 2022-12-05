import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  createRoutesFromElements,
} from "react-router-dom";
import Admin from './routes/Admin'
import Member from './routes/Member'
import Nutritionist from './routes/Nutritionist'
import Trainer from './routes/Trainer'
import Login from './pages/Login'
import Header from './components/Header'
import NewUser from './routes/NewUser';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
        <Route path="/" element={<Login />}/>
        <Route path="admin" element={<Admin />} />
        <Route path="admin/newUser" element={<NewUser />} />
        <Route path="member" element={<Member />} />
        <Route path="nutritionist" element={<Nutritionist />} />
        <Route path="trainer" element={<Trainer />} />
    </>
  )
);

root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);
