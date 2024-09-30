import React, { useState } from 'react';

function Watchlist() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showBlocks, setShowBlocks] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const toggleBlocks = () => {
    setShowBlocks(!showBlocks);
  };

  return (
    <div>
      <div className="p-4 bg-gray-700 text-gray-400 relative">
        <div className='flex justify-between items-center '>
        <div className="flex items-center">
          <h2 className="font-bold text-lg">Watchlist</h2>
          <span className="ml-2">(name)</span>
          <div className="relative">
            <svg
              onClick={toggleDropdown}
              xmlns="http://www.w3.org/2000/svg"
              className={`w-6 h-6 ml-2 mt-1 cursor-pointer transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-28 bg-white rounded-md shadow-lg z-10 overflow-hidden">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-300"
                >
                  Add
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-300"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-300"
                >
                  Delete
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center">
          <span className="mr-2">Update time:</span>
          <span className="mr-2">16:24:29</span>
          <button className="px-4 py-2 mr-2 bg-gray-600 rounded-md hover:bg-gray-700 transition ease-in-out duration-300">
            Edit
          </button>
          <div className="relative w-auto h-auto cursor-pointer ml-2" onClick={toggleBlocks}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`absolute top-0 left-0 right-0 bottom-0 m-auto w-6 h-6 transition-opacity ease-in-out duration-300 ${showBlocks ? 'opacity-0' : 'opacity-100'}`}
              style={{ zIndex: showBlocks ? 0 : 1 }}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <div className={`w-8 h-8 mt-1 flex justify-center items-center transition-opacity ease-in-out duration-300 ${showBlocks ? 'opacity-100' : 'opacity-0'}`} style={{ zIndex: showBlocks ? 1 : 0 }}>
              <div className="blocks flex flex-col justify-center">
                <div className="flex flex-row justify-center mb-1">
                  <div className="bg-gray-400 rounded-full w-[4px] h-[4px]"></div>
                  <div className="bg-gray-400 rounded-full w-[4px] h-[4px] mx-1"></div>
                  <div className="bg-gray-400 rounded-full w-[4px] h-[4px]"></div>
                </div>
                <div className="flex flex-row justify-center mb-1">
                  <div className="bg-gray-400 rounded-full w-[4px] h-[4px]"></div>
                  <div className="bg-gray-400 rounded-full w-[4px] h-[4px] mx-1"></div>
                  <div className="bg-gray-400 rounded-full w-[4px] h-[4px]"></div>
                </div>
                <div className="flex flex-row justify-center mb-1">
                  <div className="bg-gray-400 rounded-full w-[4px] h-[4px]"></div>
                  <div className="bg-gray-400 rounded-full w-[4px] h-[4px] mx-1"></div>
                  <div className="bg-gray-400 rounded-full w-[4px] h-[4px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {dropdownOpen && (
        <div
          className="fixed inset-0 z-0"
          onClick={closeDropdown}
        ></div>
      )}
    </div>
    </div>
  );
}

export default Watchlist;
