import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const images = [
    '/slides/AI.jpg',
    '/slides/CS.jpg',
    '/slides/CS2.jpg',
    '/slides/laptop.png'
];

function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // auto-play effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000); // change every 4 seconds

        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="slider">
            <img
                src={images[currentIndex]}
                alt={`slide ${currentIndex + 1}`}
                className="slide-image"
            />
            <div className="dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default ImageSlider;
