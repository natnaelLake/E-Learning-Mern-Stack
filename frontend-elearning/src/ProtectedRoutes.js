import React from 'react'
import { useAuthContext } from './hooks/useAuthContext'
import { Outlet } from 'react-router';
import Login from './AuthPage/Login';


function ProtectedRoutes() {
    const {user} = useAuthContext();
  return (
    user? <Outlet/> : <Login/>
  )
}

export default ProtectedRoutes