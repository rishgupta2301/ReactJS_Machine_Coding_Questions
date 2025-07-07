import React from 'react'

const Child = ({handleDataFromChild}) => {
  return (
    <div>
        <input type="text" name="" id="" 
        onChange={(e) => handleDataFromChild(e.target.value)}
        />
    </div>
  )
}

export default Child