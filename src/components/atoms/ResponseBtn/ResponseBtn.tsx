import { MouseEvent } from "react"

import "./ResponseBtn.scss"

import Respon from '../../../assets/images/responder.png'


interface ResponProps{
    className?: string
    onClick?: () => void

}

const ResponseBtn = ({className, onClick}: ResponProps) => {
  return (
    <div className={`ResponseBtn ${className}`} onClick={onClick}>
        <img src={Respon} alt="" className="r-image"/>
        <div className="respon-box">Responder pregunta</div>
    </div>
  )
}

export default ResponseBtn