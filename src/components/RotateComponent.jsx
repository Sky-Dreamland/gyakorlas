import React, { useState } from 'react'

const RotateComponent = () => {
    const [rotateDeg, setRotateDeg] = useState(-70)

    function forgatJobb(){
        setRotateDeg(rotateDeg + 10)
    }

  return (
    <div>
        <button onClick={forgatJobb}>
            RIGHT
        </button>

        <button onClick={()=>{setRotateDeg(rotateDeg - 10)}}>
            LEFT
        </button>

        <div style={{rotate: rotateDeg + "deg" }}>
            ======
        </div>
        
    </div>
  )
}

export default RotateComponent