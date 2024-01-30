import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainView from '../../../pages/MainView/MainView'
import SeeQuestion from '../../../pages/MainView/SeeQuestion/SeeQuestion'
import AskQuestion from '../../../pages/MainView/AskQuestion/AskQuestion'

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
        <Route
            path='/question/ask-question'
            element={
                <Suspense fallback={<></>}>
                    <AskQuestion />
                </Suspense>
            }
        />
    </Routes>
  )
}

export default MainViewRoute