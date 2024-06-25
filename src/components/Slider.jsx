import React, { useState } from 'react';
import '../styles/slider.scss';

const Slider = ({ images }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState('');

  const goToPrevious = () => {
		setDirection('slide-left');
		setTimeout(() => {
			const isFirstSlide = currentIndex === 0;
			const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
			setCurrentIndex(newIndex);
			setDirection('');
		}, 500);
  };

  const goToNext = () => {
		setDirection('slide-right');
		setTimeout(() => {
			const isLastSlide = currentIndex === images.length - 1;
			const newIndex = isLastSlide ? 0 : currentIndex + 1;
			setCurrentIndex(newIndex);
			setDirection('');
		}, 500);
  };

  return (
    <div className='slider'>
      <div className='slider-wrapper'>
        <button className='left-arrow' onClick={goToPrevious}>❮</button>
        <div className={`slider-content ${direction}`}>
          <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
        </div>
        <button className='right-arrow' onClick={goToNext}>❯</button>
      </div>
    </div>
  );
}

export default Slider