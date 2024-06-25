import React, { useState, useEffect } from 'react'; 
import Banner from '../components/Banner';
import ProductItem from '../components/Product/ProductItem';
import Slider from '../components/Slider';
import products from '../apis/product';

const Base = () => {
  
  useEffect(() => {
    products().then(data => {
      console.log(data);
    })
  }, []);


  const images = [
    'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
  ]
  return (
    <div className='container'>
      <div className='row'>
        <div className="col-12">
          <Banner />
        </div>
        <div className='col-md-3'>
          <ProductItem />
        </div>
        <div className='col-md-3'>
          <ProductItem />
        </div>
        <div className='col-md-3'>
          <ProductItem />
        </div>
        <div className='col-md-3'>
          <ProductItem />
        </div>
        <div className='col-12'>
          <Slider images={images} />
        </div>
      </div>
    </div>
  )
}

export default Base