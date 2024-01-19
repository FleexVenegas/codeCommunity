import { ChangeEventHandler, useState } from 'react'

import "./InputPassword.scss"

//Assets
import Eye from './iconPassword/eye.png'

interface InputPasswordProps{
    className?: string
    name?: string
    text?: string
    id?: string
    placeholder?: string
    onChange?: ChangeEventHandler<HTMLInputElement>
}

const InputPassword = ({className, text, placeholder, onChange, name, id}: InputPasswordProps) => {


    const [showText, setShowText] = useState<boolean>(false)

  return (
    <div className={`InputPassword ${className}`}>
         {text && <label className='i-txt'>{text}</label>}
         <div className='cnt-input'>
            <input type={showText ? "text" : "password"} id={id} name={name} className={`inputPassword`} placeholder={placeholder} onChange={onChange} />
            <img src={Eye} alt="" className='show-image' onClick={() => setShowText(!showText)} />
         </div>
    </div>
  )
}

export default InputPassword