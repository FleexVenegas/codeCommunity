import React, { useEffect, useState } from 'react'
import useInterval from '../../../utilities/UseInterval/UseInterval'

//style
import "./WritingEffect.scss"

interface WritingEffectProps{
    text: string
    loop?: boolean
    speed?: number
    clasName?: string
    description?: string
}




const WritingEffect = ({text, loop = false, speed = 500, clasName, description}: WritingEffectProps) => {

    const [idx, setIdx] = useState<number>(0)
    const [goBack, setGoBack] = useState<boolean>(false)

    useEffect(() => {
      setIdx(0)
      setGoBack(false)
    }, [loop])

    useInterval(() => {
        if(idx < text.length && !goBack){
            setIdx(prev => prev + 1)
        }
        else if(loop){
            setGoBack(true)
            setIdx(prev => prev -1)

            if(idx === 1){
                setGoBack(false)
            }
        }
    }, speed)
    


  return (
    <>
        <div className={`WritingEffect ${clasName}`}>
            <h1 className='w-title'>
                {text.slice(0, idx)}
            </h1>
            <p className='w-description'>
                {description}
            </p>
        </div>
    </>
  )
}

export default WritingEffect