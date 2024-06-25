import React from 'react'

const Span = ({title, color}) => {
  return (
    <span className={`${color} small`}>{title}</span>
  )
}

export default Span