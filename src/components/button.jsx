import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className='main-btn'>{props.text}</button>
    </div>
  )
}

export default Button
