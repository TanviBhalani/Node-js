import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'


export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={Register}></Route>
        <Route path='/login' Component={Login}></Route>
        <Route path='/profile' Component={Profile}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}