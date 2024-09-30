import React, { useState, useEffect, useRef } from 'react';
import Chart from 'react-apexcharts';
import ChartData from './Chart.json';

const StockCard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('1 month');
  const dropdownRef = useRef(null);

  const chartOptions = {
    chart: {
      type: 'line',
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      width: 2,
      curve: 'straight',
    },
    colors: ['#27FA1C'],
    tooltip: {
      enabled: false,
    },
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='mx-auto'>
      <div className="flex flex-row text-black px-4">
        <div className='w-[100px] flex items-center justify-center'>Name</div>
        <div className='w-[100px] flex items-center justify-center'>Price</div>
        <div className='w-[100px] flex items-center justify-center'>7 days</div>
        <div className='w-[100px] flex items-center justify-center'>{selectedOption}</div>
        <div className='w-[100px] ml-auto relative flex items-center justify-center' ref={dropdownRef}>
          <div
            onClick={toggleDropdown}
            className='rounded-md w-[70px] h-[28px] mr-4 cursor-pointer bg-none hover:bg-gray-700 ease-in-out
             duration-300 flex items-center justify-center'
          >
            Filters
          </div>
          {isDropdownOpen && (
            <div className='absolute overflow-hidden right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-20'>
              <ul>
                <li
                  onClick={() => handleOptionClick('1 month')}
                  className='px-4 py-2 hover:bg-gray-200 cursor-pointer'
                >
                  1 month
                </li>
                <li
                  onClick={() => handleOptionClick('3 month')}
                  className='px-4 py-2 hover:bg-gray-200 cursor-pointer'
                >
                  3 month
                </li>
                <li
                  onClick={() => handleOptionClick('1 year')}
                  className='px-4 py-2 hover:bg-gray-200 cursor-pointer'
                >
                  1 year
                </li>
                <li
                  onClick={() => handleOptionClick('Max')}
                  className='px-4 py-2 hover:bg-gray-200 cursor-pointer'
                >
                  Max
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="bg-purple-800 text-white rounded-lg flex items-center p-4 w-full max-w-4xl my-5">
        <div className='w-[100px] flex items-center justify-center'>
          <div className="flex flex-col items-center">
            <div className="font-bold">AAPL</div>
            <div className="text-sm text-gray-400">(Apple)</div>
          </div>
        </div>
        <div className='w-[100px] flex items-center justify-center'>
          <div className="text-lg font-semibold">US$217</div>   
        </div>
        <div className="w-[100px] text-green-400 flex items-center justify-center">
          <div>6.0%</div>
        </div>
        <div className='w-[100px] text-green-400 flex items-center justify-center'>
          <div>27.0%</div>
        </div>
        <div className="w-2/5">
          <Chart options={chartOptions} series={ChartData} type="line" height="40" />
        </div>
      </div>
      <div className="bg-purple-800 text-white rounded-lg flex items-center p-4 w-full max-w-4xl my-5">
        <div className='w-[100px] flex items-center justify-center'>
          <div className="flex flex-col items-center">
            <div className="font-bold">AAPL</div>
            <div className="text-sm text-gray-400">(Apple)</div>
          </div>
        </div>
        <div className='w-[100px] flex items-center justify-center'>
          <div className="text-lg font-semibold">US$217</div>   
        </div>
        <div className="w-[100px] text-green-400 flex items-center justify-center">
          <div>6.0%</div>
        </div>
        <div className='w-[100px] text-green-400 flex items-center justify-center'>
          <div>27.0%</div>
        </div>
        <div className="w-2/5">
          <Chart options={chartOptions} series={ChartData} type="line" height="40" />
        </div>
      </div>
      <div className="bg-purple-800 text-white rounded-lg flex items-center p-4 w-full max-w-4xl my-5">
        <div className='w-[100px] flex items-center justify-center'>
          <div className="flex flex-col items-center">
            <div className="font-bold">AAPL</div>
            <div className="text-sm text-gray-400">(Apple)</div>
          </div>
        </div>
        <div className='w-[100px] flex items-center justify-center'>
          <div className="text-lg font-semibold">US$217</div>   
        </div>
        <div className="w-[100px] text-green-400 flex items-center justify-center">
          <div>6.0%</div>
        </div>
        <div className='w-[100px] text-green-400 flex items-center justify-center'>
          <div>27.0%</div>
        </div>
        <div className="w-2/5">
          <Chart options={chartOptions} series={ChartData} type="line" height="40" />
        </div>
      </div>
    </div>
  );
};

export default StockCard;
