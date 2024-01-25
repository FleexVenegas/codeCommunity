import React, { useEffect, useState } from 'react'

import "./CardForm.scss"
import EditorCom from '../EditorCom/EditorCom'
import Button from '../../atoms/Button/Button'

interface CardFormProps{
	className?: string
	setValue?: (value: boolean) => void
}

const CardForm = ({className, setValue}: CardFormProps) => {

    const [text, setText] = useState<string | null>('');
    const [btnEnabled, setBtnEnabled] = useState(false)

    // Desde aquí mandaremos la info al backend
    const handleSubmit = () => {
      console.log(text)
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
        <EditorCom placeholder='Ingrese su respuesta' setValueText={setText} />

        <div className='cnt-btns'>
            <Button text='Cancelar' cancel onClick={() => setValue && setValue(false)}/>
            <Button text='Enviar' submit className={`disabledBtn ${btnEnabled && "enabledBtn"}`} onClick={handleSubmit}/>
        </div>
    </div>
  )
}

export default CardForm