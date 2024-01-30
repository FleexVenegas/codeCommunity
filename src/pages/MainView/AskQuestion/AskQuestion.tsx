import { ChangeEvent, useEffect, useState } from 'react'
import CardView from '../../../components/molecules/CardView/CardView'
import ReturnBtn from '../../../components/atoms/ReturnBtn/ReturnBtn'

import "./AskQuestion.scss"
import Input from '../../../components/atoms/Input/Input'
import EditorCom from '../../../components/molecules/EditorCom/EditorCom'
import Button from '../../../components/atoms/Button/Button'
import { ApiError, detailsInput, fieldNameProps } from '../../../interface/interface'
import { Validations } from '../../../utilities/Validations'
import { getCookie } from '../../../services/cookies/Cookies'
import { postAxiosApiWithToken } from '../../../services/api/Api'
import { Successfully, Warning } from '../../../utilities/SweetAlertModal'


interface respoApi{
    data: { message: string },
    status: number,
}


const AskQuestion = () => {

    const get_cookies105 = getCookie("105100")
    const get_cookies116 = getCookie("116110")
    const [emptyField, setEmptyField] = useState<fieldNameProps>({})
    const [textEditor, setTextEditor] = useState<string>("")
    const [detailsInput, setDetailsInput] = useState<detailsInput>({
        title: "",
        description: "",
        tags: "", 
        id_user: ""
    })


    const handleChage = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget
        setDetailsInput(prevDetails => ({
            ...prevDetails,
            [name]: value
        }))

        setEmptyField({})
    }

    useEffect(() => {
        setDetailsInput((prevetDetail) => ({
            ...prevetDetail,
            description: textEditor,
            id_user: get_cookies105
          }));
    }, [textEditor])
    

    const handleSubmit = async () => {
        const validationsInputs = Validations(detailsInput)

        if(validationsInputs.isValid){
            const formData = new FormData()
            formData.append("question", JSON.stringify(detailsInput))

            const response: unknown = await postAxiosApiWithToken('/api/community/add-question', formData, get_cookies116)
            
            if(typeof response !== "object" || response === null) { throw new Error("Unexpected response format") }

			if('name' in response && (response as ApiError).name === "AxiosError"){
				const resAxios = response as ApiError
				return Warning(resAxios.response.data.message)

			} else{

                const _response = response as respoApi
                if(_response.status === 200){
                    Successfully(_response.data.message)
                    setTimeout(() => {
                        window.location.href = "/"
                    }, 2600)
                }

            }
        } else{
            Object.keys(validationsInputs.emptyFields).forEach((field) => {
                setEmptyField((preveField) => ({ ...preveField, [field]: false}))
            })
        }
      };

  return (
    <CardView classCard='AskCard' className='AskQuestion'>
        <ReturnBtn url='/'/>
        <div className='cnt-formDatas'>
            <div className='as-cntInputs'>
                <p className='as-titlesInputs'>Title</p>
                <p className='as-description'>Make sure you ask clear questions to get accurate answers.</p>
                <Input className={`input-title ${emptyField.title === false && "emptyField"}`} name='title' placeholder='How to create a project in vite JS' onChange={handleChage}/>
            </div>
            <div className='as-cntInputs'>
                <p className='as-titlesInputs'>What are the details of your problem?</p>
                <p className='as-description'>
                    Describe your problem in detail and provide clear examples to
                    get the best possible help. A precise explanation makes it easier to find effective 
                    solutions.
                </p>
                <EditorCom height='30vh' className={`as-editor ${emptyField.description === false && "emptyField"}`} name='description' setValueText={setTextEditor} />
            </div>
            <div className='as-cntInputs'>
                <p className='as-titlesInputs'>keywords</p>
                <p className='as-description'>
                    Refine your questions by incorporating relevant technology tags; This will make 
                    it easier to provide you with more specific and useful answers. Separate labels with 
                    commas.
                </p>
                <Input className={`input-title ${emptyField.tags === false && "emptyField"}`} name='tags' placeholder='Example: Python, Next JS' onChange={handleChage} />
            </div>
            <div className="ask-cntBtn">
                <Button text='Generate Question' className='btnQuestion' submit onClick={handleSubmit} />
            </div>
        </div>
    </CardView>
  )
}

export default AskQuestion