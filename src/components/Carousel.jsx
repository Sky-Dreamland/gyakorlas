import React, { useState } from 'react'
import motor1 from "../assets/bike1.jpg"
import motor2 from "../assets/bike2.jpg"
import motor3 from "../assets/bike3.jpg"

const Carousel = () => {
  const li = [motor1,motor2,motor3]
  const [index, setIndex] = useState(0)

  const increase = () => {
    // let next = index + 1
    // if(next >= li.length){
    //     next = 0
    // }
    // setIndex(next)

    setIndex((index + 1) % li.length)
  }

  const decrease = () => {
    // let next = index - 1
    // if(next < 0)
    //     next = li.length + next
    // setIndex(next)

    setIndex(((index-1) < 0) ? li.length + (index-1) : index -1)
  }

  return (
    <div>
        <button onClick={decrease}>⬅</button>
        <img src={li[index]}/>
        <button onClick={increase}>➡</button>
    </div>
  )
}

export default Carousel