import React, { useState } from 'react';
import '../styles/home/carousel.scss';

function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [
        "https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg",
        "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg",
    ];

    const handleNext = () => {
        if (activeIndex === images.length - 1) {
            setActiveIndex(0);
        } else {
            setActiveIndex(activeIndex + 1);
        }
    }

    const handlePrev = () => {
        if (activeIndex === 0) {
            setActiveIndex(images.length - 1);
        } else {
            setActiveIndex(activeIndex - 1);
        }
    }

    return (
        <div className="carousel-container">
            <img src={images[activeIndex]} alt="Carousel Image" className="carousel-image"/>
            <button onClick={handlePrev}>Previous</button>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

export default Carousel;
