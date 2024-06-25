import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Button = ({title, color, bgColor, icon}) => {
  return (
    <button className={`btn ${color} ${bgColor}`}>
			{ icon ? <div className='icon'><FontAwesomeIcon className='icon' icon={icon} /></div> : null }
      {title}
    </button>
  )
}

export default Button