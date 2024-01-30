import { useEffect, useState } from 'react'

import "./Counter.scss"

interface CounterProps{
    number: number 
}

const Counter = ({number= 20}: CounterProps) => {

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCounter((prevCounter) => prevCounter + 1)
        }, 70);
    
        // Detener el intervalo cuando el contador alcanza 20
        if (counter === number) {
          clearInterval(intervalId);
        }
    
        // Limpiar el intervalo cuando el componente se desmonta o cuando el contador alcanza 20
        return () => {
          clearInterval(intervalId);
        };
      }, [counter]);
    
  return (
    <div className='Counter_'>{counter}</div>
  )
}

export default Counter