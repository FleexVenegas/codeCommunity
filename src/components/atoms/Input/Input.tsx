import React from 'react'


import "./Input.scss"

//Assets
import Lupa from './imagesInput/lupa.png'


interface InputProps{
  title?: string
  placeholder?: string
  className?: string
}


const Input = ({title, placeholder, className}: InputProps) => {
  return (
    <div className={`cntInput ${className}`}>
        {title && <p>{title}</p>}
        <input type="text" className={`Input`} placeholder={placeholder} />

        <img src={Lupa} alt="" />
    </div>
  )
}

export default Input