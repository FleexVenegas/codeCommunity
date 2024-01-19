import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainView from '../../../pages/MainView/MainView'
import SeeQuestion from '../../../pages/MainView/SeeQuestion/SeeQuestion'

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
        <Route
            path='/question/:id/:titleQuestion'
            element={
                <Suspense fallback={<></>}>
                    <SeeQuestion />
                </Suspense>
            }
        />
    </Routes>
  )
}

export default MainViewRoute