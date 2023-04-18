import React from 'react'

const Button = (props) => {
    const {btnName,onClick}=props

  return (
    <div>
        <button type='submit' onClick={onClick}>{btnName}</button>
    </div>
  )
}

export default Button