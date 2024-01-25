import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../../../pages/Signup/Signup'


const SignupRoutes = () => {
  return (
    <Routes>
        <Route 
            path='/user/signup'
            element={
                <Suspense fallback={<></>}>
                    <Signup />
                </Suspense>
            }
        />
    </Routes>
  )
}

export default SignupRoutes