import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainView from '../../../pages/MainView/MainView'

const MainViewRoute = () => {
  return (
    <Routes>
        <Route 
            path='/'
            element={
                <Suspense fallback={<></>}>
                    <MainView />
                </Suspense>
            }
        />
    </Routes>
  )
}

export default MainViewRoute