import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from '../../../pages/404/PageNotFound'

function Error404() {
  return (
    <Routes>
        <Route path='' Component={PageNotFound}/>
    </Routes>
  )
}

export default Error404