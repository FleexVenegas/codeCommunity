import { useEffect, useState } from 'react'
import { getAxiosApi } from '../../services/api/Api'
import { ProfileApi } from '../../interface/interface'
import { useStateContext } from '../../context/ContextProvider'

import BackgroundImage from '../../components/atoms/BackgroundImage/BackgroundImage'
import WritingEffect from '../../components/atoms/WritingEffect/WritingEffect'
import MinCard from '../../components/atoms/MinCard/MinCard'
import ReturnBtn from '../../components/atoms/ReturnBtn/ReturnBtn'
import Counter from '../../components/atoms/Counter/Counter'


import "./Profile.scss"
import { Successfully } from '../../utilities/SweetAlertModal'

interface apiCount{
    answer_total: number
    question_total: number
}

interface apiLogout{
    message: string
}

const Profile = () => {

    const WELC_USER = "Welcome to"
    const DESCRIP = "Here you can see everything related to your profile"

    const {
      user,
      setUser,
      reqUser,
      setReqUser,
      questionTotal,
      setQuestionTotal,
      totalResponse,
      setTotalResponse,
    } = useStateContext();


    useEffect(() => {
        const decrypt = async () => {
            try {
                if(!reqUser){
                    const [decrypt_user, total_records] = await Promise.all([
                        getAxiosApi('/api/auth/decrypt-user'),
                        getAxiosApi('/api/community/get-count')
                    ])
                    const _response = decrypt_user as ProfileApi
                    const _total_records = total_records as apiCount

                    setUser(_response)
                    setQuestionTotal(_total_records.question_total)
                    setTotalResponse(_total_records.answer_total)


                    setReqUser(true)
                }

            } catch (error) {
                console.log(error)
            }
        }

        decrypt()
    }, [])



    const handleLogOut = async () => {
        try {
            const response: apiLogout = await getAxiosApi('/api/auth/logout')
            Successfully(response.message)
            setTimeout(() => {
                window.location.href = "/"
            }, 2000)

        } catch (error) {
            console.log(error)
        }
    }

  return (
    <BackgroundImage className='Profile_'>
        <ReturnBtn url='/'/>
        <WritingEffect text={WELC_USER + " " + user} description={DESCRIP} speed={100} />
        <div className="p-cntCard">
            <MinCard ><button onClick={handleLogOut}>Log Out</button></MinCard>
            <MinCard className='p-MyCard'>
                {questionTotal > 0 &&
                    <Counter number={questionTotal}/>
                }
                <p className='p-myquestion'>My questions</p>
            </MinCard>
            <MinCard className='p-MyCard'>
                <Counter number={totalResponse}/>
                <p className='p-myquestion'>My answers</p>
            </MinCard>
        </div>
    </BackgroundImage>
  )
}

export default Profile