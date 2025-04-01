import React, { useEffect, useState } from 'react'

const PopUp = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {setIsOpen(!isOpen)}
    const [counter, setCounter] = useState(3)

    useEffect(()=>{
        if(isOpen){
            alert("Következzen egy kis reklám! 🤑")
            setCounter(3)

            const intervalId = setInterval(()=>{
                setCounter(prev =>{
                    if(prev - 1 == 0){
                        clearInterval(intervalId)
                        toggle()
                    }
                    return prev -1})
            }, 1000)
            return ()=> {clearInterval(intervalId)}
        }
    }, [isOpen])

  return (
    <>
       {isOpen &&
       <div className='popup'>
            <h1>Vegyél vízlágyítót!</h1>
            <h2>{counter}</h2>
       </div>
       }
       <button onClick={toggle}>KATTINTS!</button>
    </>
  )
}

export default PopUp