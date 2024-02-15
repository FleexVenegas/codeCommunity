import { useEffect } from 'react'
import { getCookie } from '../../../services/cookies/Cookies'

import Mishi from '../../../assets/images/Michi.jpg'

//Styles
import "./Profile.scss"
import { NavLink } from 'react-router-dom'

const Profile = () => {
  const id: string | null = localStorage.getItem("self")

  return (
    <NavLink to={`/profile/${id}`} className='Profile-e'>
        <img src={Mishi} alt="" className='p-image' />
    </NavLink>
  )
}

export default Profile