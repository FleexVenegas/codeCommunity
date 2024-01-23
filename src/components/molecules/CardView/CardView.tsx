import { ReactNode } from 'react'

import "./CardView.scss"

interface CardViewProps{
    children: ReactNode
    className?: string
    classCard?: string
    heightVh?: boolean
}

function CardView({children, className, classCard, heightVh = false}: CardViewProps) {
  return (
    <div className={`CardView ${className} ${heightVh && "card-rize"}`}>
      <div className={`WhiteCard ${classCard}`}>
        {children}
      </div>
    </div>
  )
}

export default CardView