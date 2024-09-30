import React from 'react';
import Chart from 'react-apexcharts';
import ChartData from './Chart.json';

const StockCard2 = () => {
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

  return (
    <div className='mx-5 bg-gray-800 p-5 rounded-lg'>
      <div className="text-white">
        <div className="flex flex-row justify-between items-center mb-4">
          <div className="flex flex-col items-center">
            <div className="font-bold">AAPL</div>
            <div className="text-xs text-gray-400">(Apple)</div>
          </div>
          <div className="text-xl">US$217</div>
          <div className="text-green-500">+27.0%</div>
          <div className="rounded-2xl flex flex-row justify-center bg-gray-700 p-2 cursor-pointer">
            <div className='bg-white rounded-full w-[10px] h-[10px]'></div>
            <div className='bg-white rounded-full w-[10px] h-[10px] mx-1'></div>
            <div className='bg-white rounded-full w-[10px] h-[10px]'></div>
          </div>
        </div>
        <div className="w-full rounded-lg bg-gray-700 p-2">
          <Chart options={chartOptions} series={ChartData} type="line" height="100" />
        </div>
      </div>
    </div>
  );
};

export default StockCard2;
