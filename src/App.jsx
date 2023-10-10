import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

// React Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/Root'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'


function App() {
  
 const router = createBrowserRouter([
  {
    path: '/',
    element:  <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      }
    ]
  }
 ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
