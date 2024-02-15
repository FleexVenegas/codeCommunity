import { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

import InputH from "../../atoms/InputH/InputH"
import { getCookie } from '../../../services/cookies/Cookies'
import { getAxiosApi, getAxiosApiWithToken } from '../../../services/api/Api'
import { Warning } from '../../../utilities/SweetAlertModal'

//Assets
import Mishi from '../../../assets/images/Michi.jpg'

//Styles
import "./Header.scss"
import Profile from '../../molecules/Profile/Profile'
interface validatedUser{
    message: string
}

const Header = () => {

    const [acc, setAcc] = useState<boolean>(false)
    const navigate = useNavigate()
    const use_location = useLocation()
    const userStart: boolean = use_location.pathname.startsWith("/user/")

    useEffect(() => {

        const verifySession = async () => {
            try {
                const response: unknown = await getAxiosApi("/api/auth/validate-akn")
                const _response = response as validatedUser
                if (_response.message === "Authorized access"){
                    setAcc(true)
                }
                else{
                    // navigate("/user/login")
                }
            } catch (error) {
                Warning("Error validating user")
            }
        }

        verifySession()

    }, [])

  return (
    <header className='Header_ Header'>
        <div className='h-left'>
            -commu
        </div>
        <div className='h-right'>
            <InputH placeholder='Search' />
            {acc ? (
                <Profile />
            ): (
                !userStart &&
                    <div className='cnt_btnLogins'>
                        <NavLink to={"/user/login"} className={"btnNav btn-login"}>
                            Log in
                        </NavLink>
                        <NavLink to={"/user/signup"} className={"btnNav btn-sign"}>
                            Sign up
                        </NavLink>
                    </div>
            )}
        </div>
    </header>
  )
}

export default Header