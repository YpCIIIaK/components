// CollapseHome.js
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const CollapseHome = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-b border-blue-200">
            <button
                onClick={toggleCollapse}
                className="w-full text-left flex items-center justify-between px-4 py-2 hover:bg-blue-200 focus:outline-none"
            >
                <span className="text-blue-950 text-xl font-semibold">{title}</span>
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            <div
                className={`transition-max-height duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}
            >
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default CollapseHome;
