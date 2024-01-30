import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Profile from '../../../pages/Profile/Profile'

const ProfileRoutes = () => {
  return (
    <Routes>
        <Route
            path='/profile/:id'
            element={
                <Suspense fallback={<></>}>
                    <Profile />
                </Suspense>
            }
        />
    </Routes>
  )
}

export default ProfileRoutes