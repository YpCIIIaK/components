import React, { useState } from 'react';

const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const handleNext = () => {
        const isLastSlide = currentIndex === items.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="relative w-full max-w-lg mx-auto my-9 bg-sliderBgColor-500">
            <div className="overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-64">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-transform duration-500 ${
                                index === currentIndex
                                    ? 'transform translate-x-0'
                                    : index < currentIndex
                                        ? 'transform -translate-x-full'
                                        : 'transform translate-x-full'
                            }`}
                        >
                            <img
                                src={item}
                                alt={`Slide ${index}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <button
                onClick={handlePrev}
                className="mx-[-10px] absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full p-2 bg-gray-800 text-white rounded-full">
                {"<"}
            </button>
            <button
                onClick={handleNext}
                className="mx-[-10px] absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full p-2 bg-gray-800 text-white rounded-full">
                {">"}
            </button>
        </div>
    );
};

export default Carousel;
