import Respon from '../../../assets/images/responder.png'

import "./ResponseBtn.scss"



interface ResponProps{
    className?: string
    onClick?: () => void

}

const ResponseBtn = ({className, onClick}: ResponProps) => {
  return (
    <div className={`ResponseBtn ${className}`} onClick={onClick}>
        <img src={Respon} alt="" className="r-image"/>
        <div className="respon-box">Answer question</div>
    </div>
  )
}

export default ResponseBtn