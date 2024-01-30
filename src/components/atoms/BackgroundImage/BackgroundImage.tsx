import React, { ReactNode } from 'react'

import "./BackgroundImage.scss"

interface BackgroundImageProps{
    children: ReactNode
    className?: string
}

const BackgroundImage = ({children, className}: BackgroundImageProps) => {
  return (
    <div className='BackgroundImage'>
        <div className={`bg-deg ${className}`}>
            {children}
        </div>
    </div>
  )
}

export default BackgroundImage