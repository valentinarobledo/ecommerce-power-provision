import React from 'react';
import { Link } from 'react-router-dom';
import imgProduct from '/img/product1.jpg';

//Components
import Name from '../Texts/Name';
import Span from '../Texts/Span';
import Button from '../Button';
import Price from './Price';
import TagNew from './TagNew';

import '../../styles/product.scss';


const ProductItem = ({product}) => {
	return (
		<div className='product-item'>
			<TagNew />
			<Link>
				<img className='product-img' src={product ? product.image : imgProduct } alt={product ? product.name : imgProduct} />
			</Link>
			<Span title='Category' color='color-two' />
			<Name name={product ? product.name : 'Proteina BioPro Classic'} />
			<div>
			<Price product={product} />
			<div className='btn-group text-center'>
				<Button icon='fa-solid fa-cart-shopping' title='Add to cart' color='color-white' bgColor='bg-two' />
			</div>
			</div>
		</div>
	)
}

export default ProductItem