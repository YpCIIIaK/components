import React, { useState } from 'react';

const Collapse = ({ title = "Click to toggle", children, isOpenDefault = false }) => {
    const [isOpen, setIsOpen] = useState(isOpenDefault);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="w-full max-w-md mx-auto bg-sliderBgColor-500">
                <div
                    className="bg-gray-500 text-white p-3 rounded cursor-pointer border-2 border-gray-400"
                    onClick={toggleCollapse}
                >
                    {title}
                </div>
                <div
                    className={`overflow-hidden transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
                    style={{transitionProperty: 'max-height'}}
                >
                    {isOpen && (
                        <div className="p-4 bg-gray-100 border-2 border-gray-400 rounded-b">
                            {children}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Collapse;
