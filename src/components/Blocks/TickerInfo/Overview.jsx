import React from 'react';

const Overview = () => {
  return (
    <div className="bg-slate-900 text-white p-6 mt-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-3">NVIDIA Corporation Overview</h3>
      <p>
        NVIDIA Corporation provides graphics and compute and networking solutions in the United States, Taiwan, China, Hong Kong, and internationally. The Graphics segment offers GeForce GPUs for gaming and PCs, the GeForce NOW game streaming service and related infrastructure, and solutions for gaming platforms <a href="https://www.nvidia.com" className="text-blue-400 underline">www.nvidia.com</a>
      </p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <p className="font-bold text-lg">29,600</p>
          <p>Full Time Employees</p>
        </div>
        <div>
          <p className="font-bold text-lg">January 28</p>
          <p>Fiscal Year Ends</p>
        </div>
        <div>
          <p className="font-bold text-lg">Technology</p>
          <p>Sector</p>
        </div>
        <div>
          <p className="font-bold text-lg">Semiconductors</p>
          <p>Industry</p>
        </div>
      </div>
      <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
        More about NVIDIA Corporation
      </button>
    </div>
  );
};

export default Overview;
