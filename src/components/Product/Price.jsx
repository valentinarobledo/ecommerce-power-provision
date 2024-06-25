import React from 'react'
import '../../styles/product.scss';

const Price = ({product}) => {

  return (
	<>
	{
		product ? (
			product.discount ? 
			<div className='price-discount'>
				<p className={`${product.discount > 0 ? 'text-through' : ''} price`}>{product.price}</p>
				<p className='discount'>{product.discount}</p>
			</div>  
			: 
			<Price product={product} />
		) : (
			<p className='price'>1000 - 200</p>
		)
	}
	</>    
  )
}

export default Price