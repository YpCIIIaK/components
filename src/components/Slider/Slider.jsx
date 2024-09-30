import React, { useState } from 'react';

const Slider = ({ min = 0, max = 100, step = 1, initialValue = 50 }) => {
    const [value, setValue] = useState(initialValue);
    const [tooltipPosition, setTooltipPosition] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleChange = (event) => {
        const newValue = Number(event.target.value);
        setValue(newValue);
        const percent = ((newValue - min) / (max - min)) * 100;
        setTooltipPosition(percent);
    };

    return (
        <div className='flex justify-center my-4 bg-sliderBgColor-500'>
            <div className="relative w-1/4">
                {isHovered && (
                    <div
                        className="absolute top-[-30px] left-0 transform -translate-x-1/2 bg-gray-700 text-white text-xs rounded py-1 px-2"
                        style={{ left: `${tooltipPosition}%` }}
                    >
                        {value}
                    </div>
                )}
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={handleChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    style={{ accentColor: '#1890ff' }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>{min}</span>
                    <span>{max}</span>
                </div>
            </div>
        </div>
    );
};

export default Slider;
