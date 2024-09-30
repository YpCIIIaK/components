import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className="fixed top-0 left-0 w-full h-[64px] bg-gradient-to-r from-[#2c3e50] to-[#4ca1af] text-white p-3 flex justify-center items-center z-50">
            <nav className="flex justify-center space-x-8 ml-8">
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
        </div>
    );
};

export default Navbar;
