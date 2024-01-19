import { ReactNode } from 'react'

import "./CardView.scss"

interface CardViewProps{
    children: ReactNode
    className?: string
    classCard?: string
}

function CardView({children, className, classCard}: CardViewProps) {
  return (
    <div className={`CardView ${className}`}>
      <div className={`WhiteCard ${classCard}`}>
        {children}
      </div>
    </div>
  )
}

export default CardView