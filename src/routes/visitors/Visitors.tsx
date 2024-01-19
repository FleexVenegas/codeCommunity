import React from 'react'
import Layout from '../../components/organims/Layouts/Layout'
import MainViewRoute from './MainViewRoute/MainViewRoute'
import LoginRoutes from './LoginRoutes/LoginRoutes'
import Error404 from './404/Error404'

const Visitors = () => {
  return (
    <Layout>
        <MainViewRoute />
        <LoginRoutes />
        <Error404 />
    </Layout>
  )
}

export default Visitors