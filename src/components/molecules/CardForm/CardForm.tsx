import { useEffect, useState } from 'react'

import "./CardForm.scss"
import EditorCom from '../EditorCom/EditorCom'
import Button from '../../atoms/Button/Button'
import { postAxiosApi } from '../../../services/api/Api'
import { ApiError, ApiSucces } from '../../../interface/interface'
import { Successfully, Warning } from '../../../utilities/SweetAlertModal'

interface CardFormProps{
	className?: string
	setValue?: (value: boolean) => void
    id_question: string
    titleQuestion?: string
}

const CardForm = ({className, setValue, id_question, titleQuestion}: CardFormProps) => {

    const [text, setText] = useState<string | null>('');
    const [btnEnabled, setBtnEnabled] = useState(false)

    const handleSubmit = async () => {
        try {
            if(text && text?.length > 20){
                const self = localStorage.getItem('self')
                const formData = new FormData()

                const responseData = {
                    response: text,
                    id_user: self,
                    id_question: id_question
                }

                formData.append("response", JSON.stringify(responseData))
                const response: unknown = await postAxiosApi('/api/response/add-answer', formData)
                const _response = response as ApiSucces
                console.log(_response)
                if(_response.status === 200){
                    Successfully(_response.data.message)
                    setValue && setValue(false)
                    setTimeout(() => {
                       window.location.href = `/question/${id_question}/${titleQuestion}`
                    },2600)
                } else {
                    const _error = response as ApiError
                    Warning(_error.response.data.message)
                }

            }
        } catch (error) {
            console.log(error)
        }
    
    }

    useEffect(() => {
        if(text && text?.length > 20){
            setBtnEnabled(true)
        }
        else{
            setBtnEnabled(false)
        }
    }, [text?.length])
    

  return (
    <div className={`CardForm ${className}`}>
        <EditorCom placeholder='Ingrese su respuesta' valueText={text} setValueText={setText} />

        <div className='cnt-btns'>
            <Button text='Cancelar' cancel onClick={() => setValue && setValue(false)}/>
            <Button text='Enviar' submit className={`disabledBtn ${btnEnabled && "enabledBtn"}`} onClick={handleSubmit}/>
        </div>
    </div>
  )
}

export default CardForm