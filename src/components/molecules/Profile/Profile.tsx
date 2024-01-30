import { useEffect } from 'react'
import { getCookie } from '../../../services/cookies/Cookies'

import Mishi from '../../../assets/images/Michi.jpg'

//Styles
import "./Profile.scss"
import { NavLink } from 'react-router-dom'

const Profile = () => {
  const get_c105 = getCookie("105100")

  return (
    <NavLink to={`/profile/${get_c105}`} className='Profile-e'>
        <img src={Mishi} alt="" className='p-image' />
    </NavLink>
  )
}

export default Profile