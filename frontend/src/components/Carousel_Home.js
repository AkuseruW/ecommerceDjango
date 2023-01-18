import React, { useState, useEffect } from 'react';
import '../styles/home/carousel.scss';

function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [
        "https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg",
        "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg",
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (activeIndex === images.length - 1) {
                setActiveIndex(0);
            } else {
                setActiveIndex(activeIndex + 1);
            }
        }, 5000);
        return () => clearInterval(intervalId);
    }, [activeIndex, images.length]);

    return (
        <div className="carousel-container">
            <img src={images[activeIndex]} alt="CarouselImage" className="carousel-image" />
        </div>
    )
}

export default Carousel;
