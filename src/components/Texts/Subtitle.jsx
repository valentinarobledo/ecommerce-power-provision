import React from 'react'

const Subtitle = ({title, color}) => {
  return (
    <h3 className={color}>{title}</h3>
  )
}

export default Subtitle