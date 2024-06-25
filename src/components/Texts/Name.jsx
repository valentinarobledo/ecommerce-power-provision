import React from 'react'

const Name = ({name, color}) => {
  return (
    <p className={`${color} principal-name`}>{name}</p>
  )
}

export default Name