import React, { useState } from 'react';

function Portfolio() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className='bg-gray-600 text-white p-4'>
      <div className='text-xl font-bold mb-4'>
        Portfolio
      </div>
      <div className='flex flex-row mb-4'>
        <div
          className={`cursor-pointer px-4 py-1 ${
            activeTab === 'overview' ? 'border-b-2 border-white' : ''
          }`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </div>
        <div className='mx-2 px-4 py-1'>/</div>
        <div
          className={`cursor-pointer px-4 py-1   ${
            activeTab === 'analysis' ? 'border-b-2 border-white' : ''
          }`}
          onClick={() => setActiveTab('analysis')}
        >
          Analysis
        </div>
      </div>
      <div>
        {activeTab === 'overview' ? (
          <div>
            <div className='flex flex-row'>
              <div className='flex-1'>
                Current value
              </div>
              <div className='flex-1'>
                P&L
              </div>
              <div className='flex-1'>
                Dividends
              </div>
            </div>
            <div className='flex flex-row'>
              <div className='flex-1'>
                $3223
              </div>
              <div className='flex-1'>
                +12.5%
              </div>
              <div className='flex-1'>
                $100
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div>Analysis content goes here...</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Portfolio;
