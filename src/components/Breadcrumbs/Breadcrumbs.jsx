import React, { useState } from 'react';

const Breadcrumb = () => {
    const breadcrumbData = [
        { label: 'Главная', link: '#' },
        { label: 'Категория', link: '#' },
        { label: 'Подкатегория', link: '#' },
        { label: 'Текущая страница', link: '#' },
    ];

    const [activeIndex, setActiveIndex] = useState(breadcrumbData.length - 1);

    const handleItemClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <nav className="flex bg-sliderBgColor-500 justify-center items-center py-2 my-7">
            {breadcrumbData.map((item, index) => (
                <div key={index} className="breadcrumb-item">
                    <a
                        href={item.link}
                        className={`text-gray-600 hover:text-gray-900 ${
                            index === activeIndex ? 'text-gray-900' : ''
                        }`}
                        onClick={(e) => {
                            e.preventDefault();
                            handleItemClick(index);
                        }}
                    >
                        {item.label}
                    </a>
                    {index < breadcrumbData.length - 1 && (
                        <span className="text-gray-400 mx-2">&gt;</span>
                    )}
                </div>
            ))}
        </nav>
    );
};

export default Breadcrumb;