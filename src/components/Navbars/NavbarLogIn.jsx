import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
    { label: 'avatar', href: '#avatar' },
    { label: 'breadcrumbs', href: '#breadcrumbs' },
    { label: 'buttons', href: '#buttons' },
    { label: 'calendar', href: '#calendar' },
    { label: 'cards(examples)', href: '#cards' },
    { label: 'carousel', href: '#carousel' },
    { label: 'charts', href: '#charts' },
    { label: 'checkbox', href: '#checkbox' },
    { label: 'collapse', href: '#collapse' },
    { label: 'grid(news)', href: '#grid' },
    { label: 'inputs', href: '#inputs' },
    { label: 'pagination', href: '#pagination' },
    { label: 'radio', href: '#radio' },
    { label: 'registration', href: '#registration' },
    { label: 'slider', href: '#slider' },
    { label: 'switch', href: '#switch' },
    { label: 'tags', href: '#tags' },
    { label: 'timePicker', href: '#timePicker' },
    { label: 'tooltipBtn', href: '#tooltipBtn' },
    { label: 'upload', href: '#upload' },
    { label: 'ticker', href: '#ticker' },
    { label: 'watchlist', href: '#watchlist' },
    { label: 'hero', href: '#hero' },
    { label: 'about', href: '#about' },
    { label: 'skills', href: '#skills' },
    { label: 'contact', href: '#contact' },
    { label: 'portfolio', href: '#portfolio' },
    { label: 'footer', href: '#footer' },
];

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

    const handleSearchChange = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        if (query.length > 0) {
            const filtered = menuItems.filter((item) =>
                item.label.toLowerCase().includes(query)
            );
            setFilteredItems(filtered);
        } else {
            setFilteredItems([]);
        }
    };

    const handleItemClick = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setSearchQuery('');
        setFilteredItems([]);
    };

    return (
        <div
            className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#2c3e50] to-[#4ca1af] text-white p-3 shadow-lg flex justify-center items-center z-40">
            <nav className="absolute flex justify-center space-x-8 z-50 ml-8">
                <Link to="/" className="text-white hover:text-[#FFD700] transition-all duration-300">
                    Home
                </Link>
                <Link to="/ComponentsAll" className="text-white hover:text-[#FFD700] transition-all duration-300">
                    Components
                </Link>
                <Link to="/PortfolioPage" className="text-white hover:text-[#FFD700] transition-all duration-300">
                    Portfolio
                </Link>
            </nav>

            <div className="relative flex-1 max-w-xs mx-4 ml-auto">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search components..."
                    className="w-full px-4 py-2 rounded-full bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all"
                />
                {filteredItems.length > 0 && (
                    <ul className="absolute left-0 right-0 bg-white text-black shadow-lg max-h-60 overflow-y-auto rounded-lg mt-1">
                        {filteredItems.map((item) => (
                            <li
                                key={item.href}
                                className="p-2 hover:bg-gray-200 cursor-pointer"
                                onClick={() => handleItemClick(item.href)}
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Navbar;
