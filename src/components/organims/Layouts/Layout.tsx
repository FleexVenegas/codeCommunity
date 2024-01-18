import { ReactNode } from 'react'

import "./Layout.scss"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

interface LayoutProps{
    children: ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div className='Layout_'>
        <Header />
            {children}
        <Footer />
    </div>
  )
}

export default Layout