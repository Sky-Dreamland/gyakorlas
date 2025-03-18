import React, { useState } from 'react'

const InputComponent = () => {
  const [text, setText] = useState("")

  return (
    <div>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        <p>The text is {text.length} character long.</p>
    </div>
  )
}

export default InputComponent