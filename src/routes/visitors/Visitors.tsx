import Layout from '../../components/organims/Layouts/Layout'
import MainViewRoute from './MainViewRoute/MainViewRoute'
// import Error404 from './404/Error404'
import SignupRoutes from './SignupRoutes/SignupRoutes'
import LoginRoutes from './LoginRoutes/LoginRoutes'

const Visitors = () => {
  return (
    <Layout>
        <MainViewRoute />
        <LoginRoutes />
        <SignupRoutes />
        {/* <Error404 /> */}
    </Layout>
  )
}

export default Visitors