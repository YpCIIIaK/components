import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-800 p-20">
      <h1 className="text-white text-5xl font-bold mb-4">Smart investments start here</h1>
      <p className="text-gray-300 text-2xl mb-4">Use innovative tools to work with stocks.</p>
      <div className='flex flex-row items-center justify-between'>
        <div className='text-gray-400 text-sm mb-8  px-8'>Intuitive interface</div>
        <div className='text-gray-400 text-sm mb-8  px-8'>Convenient use</div>
        <div className='text-gray-400 text-sm mb-8  px-8'>Quick access</div>
      </div>
      <button className="bg-gray-700 text-white  px-6 py-2 rounded-lg hover:bg-gray-600 focus:outline-none">
        Try out
      </button>
    </div>
  );
};

export default Hero;
