import React from 'react'

const Title = ({title, color}) => {
  return (
    <h2 className={color}>{title}</h2>
  )
}

export default Title