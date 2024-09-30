import React, { useState } from 'react';

const RadioButton = ({ label, value, selectedValue, onChange }) => {
    return (
        <label className="inline-flex items-center bg-sliderBgColor-500">
            <input
                type="radio"
                className="form-radio h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500 "
                value={value}
                checked={selectedValue === value}
                onChange={onChange}
            />
            <span className="ml-2 text-gray-700 mr-4">{label}</span>
        </label>
    );
};

const RadioButtonGroup = () => {
    const [selectedValue, setSelectedValue] = useState('option1');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div className="my-7 flex justify-center">
            <RadioButton
                label="Option 1"
                value="option1"
                selectedValue={selectedValue}
                onChange={handleChange}
            />
            <RadioButton
                label="Option 2"
                value="option2"
                selectedValue={selectedValue}
                onChange={handleChange}
            />
        </div>
    );
};

export default RadioButtonGroup;
