import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../../../pages/Login/Login'

const LoginRoutes = () => {
  return (
    <Routes>
        <Route 
            path='/user/login'
            element={
                <Suspense fallback={<></>}>
                    <Login />
                </Suspense>
            }
        />
    </Routes>
  )
}

export default LoginRoutes