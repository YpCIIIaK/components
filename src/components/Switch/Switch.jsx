import React, { useState } from 'react';

const Switch = ({ initialChecked = false, onChange }) => {
    const [isChecked, setIsChecked] = useState(initialChecked);

    const toggleSwitch = () => {
        setIsChecked(!isChecked);
        if (onChange) {
            onChange(!isChecked);
        }
    };

    return (
        <div className='flex justify-center my-5 bg-sliderBgColor-500'>
            <div
                className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-colors duration-300 delay-75 ${
                    isChecked ? 'bg-blue-500' : ''}`}
                onClick={toggleSwitch}
            >
                <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 delay-75 ${
                        isChecked ? 'translate-x-6 bg-blue-400' : ''}`}
                />
            </div>
        </div>
    );
};

export default Switch;
