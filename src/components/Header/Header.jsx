import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/header.scss';

//COMPONENTS
import DropdownMenu from './DropdownMenu';

const Header = ({ headerMenu, optionsMenu}) => {
  
  return (
    <>
      <div className='header'>
        <div className='optionsMenu'>
          <li className='item-menu'>
            <Link to={'/'} className='color-black'>{headerMenu[0].home}</Link>
          </li>
          <li className='item-menu'>
            <Link to={'/shop'} className='color-black'>{headerMenu[0].shop}</Link>
            {/* <DropdownMenu options={optionsMenu} name={headerMenu[0].shop} /> */}
          </li>
          <li className='item-menu'>
            <Link to={'/shop'} className='color-black'>{headerMenu[0].offers}</Link>
          </li>
          <li className='item-menu'>
            <Link className='color-black'>{headerMenu[0].contact}</Link>
          </li>
        </div>

        <ul className='actionsMenu'>
          <li className='item-menu'>
            <Link className='color-black'>
              <FontAwesomeIcon icon='fa-solid fa-user' />
            </Link>
          </li>
          <li className='item-menu'>
            <Link className='color-black'>
              <FontAwesomeIcon icon='fa-solid fa-magnifying-glass' />
            </Link>
          </li>
          <li className='item-menu'>
            <Link className='color-black'>
              <FontAwesomeIcon icon='fa-solid fa-heart' />
            </Link>
          </li>
          <li className='item-menu'>
            <Link className='color-black'>
              <FontAwesomeIcon icon='fa-solid fa-cart-shopping' />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
