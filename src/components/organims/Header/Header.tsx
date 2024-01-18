import React from 'react'

import "./Header.scss"
import { NavLink, useLocation } from 'react-router-dom'
import Input from '../../atoms/Input/Input'

const Header = () => {

    const use_location = useLocation()
    const userStart: boolean = use_location.pathname.startsWith("/user")
    

  return (
    <header className='Header_ Header'>
        <div className='h-left'>
            -commu
        </div>
        <div className='h-right'>

            <Input placeholder='Search' />

            <div className='cnt_btnLogins'>
                <NavLink to={"/user/login"} className={"btnNav btn-login"}>
                    Log in
                </NavLink>
                <NavLink to={"#"} className={"btnNav btn-sign"}>
                    Sign up
                </NavLink>
            </div>

        </div>
    </header>
  )
}

export default Header