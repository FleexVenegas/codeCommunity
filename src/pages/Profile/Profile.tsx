import { useLocation } from 'react-router-dom'
import ReturnBtn from '../../components/atoms/ReturnBtn/ReturnBtn'

import "./Profile.scss"
import BackgroundImage from '../../components/atoms/BackgroundImage/BackgroundImage'
import WritingEffect from '../../components/atoms/WritingEffect/WritingEffect'
import MinCard from '../../components/atoms/MinCard/MinCard'
import { useEffect, useRef, useState } from 'react'
import { getCookie } from '../../services/cookies/Cookies'
import { postAxiosApi } from '../../services/api/Api'
import Counter from '../../components/atoms/Counter/Counter'


interface ProfileApi{
    status: number
    data: string
}


const Profile = () => {

    const WELC_USER = "Welcome to"
    const DESCRIP = "Here you can see everything related to your profile"
    const [user, setUser] = useState<string>("")
    const hasFetchedData = useRef(false);

    useEffect(() => {
        const decrypt = async () => {
            try {
                if(!hasFetchedData.current){
                    const formData = new FormData()
                    const _get = getCookie("117114")
    
                    const username = { username: _get }
                    formData.append("user", JSON.stringify(username))
    
                    const response: unknown = await postAxiosApi('/api/auth/decrypt-user', formData)
                    const _response = response as ProfileApi
                    setUser(_response.data)

                    hasFetchedData.current = true
                }

            } catch (error) {
                console.log(error)
            }
        }

        decrypt()

    }, [])

    
    


  return (
    <BackgroundImage className='Profile_'>
        <ReturnBtn url='/'/>
        <WritingEffect text={WELC_USER + " " + user} description={DESCRIP} speed={100} />
        <div className="p-cntCard">
            <MinCard />
            <MinCard className='p-MyCard'>
                <Counter number={50}/>
                <p className='p-myquestion'>My questions asked</p>
            </MinCard>
            <MinCard />
        </div>
    </BackgroundImage>
  )
}

export default Profile