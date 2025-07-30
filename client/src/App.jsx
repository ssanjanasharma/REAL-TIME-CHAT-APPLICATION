import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import { Toaster } from "react-hot-toast"
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const App = () => {
  const { authUser } = useContext(AuthContext)
  return (
    <div className="bg-[url('/bgImage.svg')] 
    bg-contain">
      <Toaster />
      <Routes>
        <Route path='/' element={authUser ? <Homepage /> : <Navigate to="/login" />}/>
        <Route path='/login' element={!authUser ? <LoginPage /> : <Navigate to="/" />}/>
        <Route path='/Profile' element={authUser ? <ProfilePage /> : <Navigate to="/login" />}/>
      </Routes>
    </div>
  )
}

export default App