import React, { ReactNode } from 'react'

import "./MinCard.scss"

interface MinCardsProps{
    children?: ReactNode
    className?: string
}


const MinCard = ({children, className}: MinCardsProps) => {
  return (
    <div className={`MinCard ${className}`}>
        {children}
    </div>
  )
}

export default MinCard