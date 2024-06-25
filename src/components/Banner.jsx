import React from 'react';
import '../styles/banner.scss';

const Banner = () => {
	
	const image = 'https://dulcealcance.com/cdn/shop/files/dymatize2.jpg?v=1703881888';
	const title = 'POWER PROVISION';
	const subtitle = 'Los mejores suplementos deportivos para mejorar tu rendiemiento en tus entrenamientos y  potenciar tus resultados'
	return (
		<div className='banner'>
			<div className='container'>
				<div className='row'>
					<div className='col-12 col-md-6'>
						<img className='banner-img' src={image} alt='banner' />
					</div>
					<div className='col-12 col-md-6 description'>
						<div className='text-center'>
							<h1>{title}</h1>
							<p>{subtitle}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
