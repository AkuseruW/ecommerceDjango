import React, { useState, useEffect } from 'react';
import '../styles/home/carousel.scss';

function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [
        "https://images.frandroid.com/wp-content/uploads/2020/06/sony-ps5-conference_2020-06-11_23-12-30.jpg",
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617539"
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
