import React from 'react'
import {Routes,Route} from 'react-router-dom'


function AuthRoutes() {
  return (
    <Routes>
        <Route path = '/login' element = {<Login/>}/>
        {/* <Route path = '/login' element = {<SignUp/>}/> */}
    </Routes>
  )
}

export default AuthRoutes