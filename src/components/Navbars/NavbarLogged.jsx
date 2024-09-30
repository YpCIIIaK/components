import React, { useState } from 'react';
import NavbarLogIn from './NavbarLogIn';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    if (dropdownOpen) setDropdownOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-700">
      <div className="bg-gray-900 text-white p-4 shadow-md flex items-center relative">
        <div className="text-2xl font-semibold text-gray-200">Logo</div>
        <nav className="flex-1 flex justify-center space-x-8 ml-20">
          <a href="#" className="text-gray-200 hover:text-white">
            Home
          </a>
          <a href="#" className="text-gray-200 hover:text-white">
            Watchlist
          </a>
          <a href="#" className="text-gray-200 hover:text-white">
            Portfolio
          </a>
          <a href="#" className="text-gray-200 hover:text-white">
            Markets
          </a>
        </nav>
        <div className='flex flex-row mr-10 relative'>
          <div className="flex-1 max-w-xs mx-4">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="w-[320px] px-4 py-2 rounded-full bg-gray-800 text-gray-200 focus:outline-none"
            />
          </div>
          <div className="relative right-[-20px] bottom-[-5px]">
            <button onClick={toggleDropdown} className="focus:outline-none ml-4">
              <img
                src="https://via.placeholder.com/32"
                alt="Profile"
                className="rounded-full w-8 h-8"
              />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20 overflow-hidden">
                <a
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </a>
                <a
                  href="/settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </a>
                <a
                  href="/logout"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </a>
              </div>
            )}
          </div>
          {dropdownOpen && (
            <div className="fixed inset-0 z-10" onClick={closeDropdown}></div>
          )}
        </div>
      </div>
      <NavbarLogIn />
    </div>
  );
};

export default Navbar;
