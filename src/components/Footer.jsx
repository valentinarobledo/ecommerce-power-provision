import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';

import '../styles/footer.scss';


const Footer = ({ menu }) => {
  return (
    <div className='footer'>
      <div className="container">
      <div className="row">
        <div className="col-12 col-md-4">Logo</div>
        <div className="col-md-4">
          <ul>
            <li><Link className='color-black'>{menu[0].home}</Link></li>
            <li><Link className='color-black'>{menu[0].shop}</Link></li>
            <li><Link className='color-black'>{menu[0].offers}</Link></li>
            <li><Link className='color-black'>{menu[0].contact}</Link></li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul>
            <li>Opciones de pago</li>
            <li>Terminos y condicioness</li>
            <li>Política de privacidad</li>
          </ul>
        </div>
        <div className="col-md-4"></div>
      </div>
      <div className="row">
        <div className="col-12">
          <p>Dev by: Valentina Robledo</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer