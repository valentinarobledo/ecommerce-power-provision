// Dropdown.js
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/dropdown.scss';

const Dropdown = ({ options, name }) => {
  const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

	useEffect(()=>{
		if(dropdownRef.current){
			const scrollHeight = dropdownRef.current.scrollHeight;
			dropdownRef.current.style.setProperty('--dropdown-menu-height', isOpen ? `${scrollHeight}px` : '0px');
		}
	},[isOpen])

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <div onClick={toggleDropdown} className='dropdown-toggle'>
        {name}
				<FontAwesomeIcon className='icon' icon={`fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
      </div>
      {isOpen && (
        <ul ref={dropdownRef} className='dropdown-menu'>
          {options.map((option, index) => (
            <li key={index}>
              <a href={option.link}>{option.text}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
