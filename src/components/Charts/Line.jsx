import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import 'tailwindcss/tailwind.css';

const StockTickerChart = () => {
  const [chartType, setChartType] = useState('line');

  const lineData = [
    { x: new Date('2023-01-01').getTime(), y: 310 },
    { x: new Date('2023-02-01').getTime(), y: 320 },
    { x: new Date('2023-03-01').getTime(), y: 315 },
    { x: new Date('2023-04-01').getTime(), y: 330 },
    { x: new Date('2023-05-01').getTime(), y: 340 },
    { x: new Date('2023-06-01').getTime(), y: 345 },
    { x: new Date('2023-07-01').getTime(), y: 350 },
    { x: new Date('2023-08-01').getTime(), y: 340 },
    { x: new Date('2023-09-01').getTime(), y: 330 },
    { x: new Date('2023-10-01').getTime(), y: 320 },
    { x: new Date('2023-11-01').getTime(), y: 330 },
    { x: new Date('2023-12-01').getTime(), y: 340 },
    { x: new Date('2024-01-01').getTime(), y: 345 },
    { x: new Date('2024-02-01').getTime(), y: 350 },
  ];

  const candlestickData = [
    { x: new Date('2023-01-01').getTime(), y: [305, 315, 300, 310] },
    { x: new Date('2023-02-01').getTime(), y: [315, 325, 310, 320] },
    { x: new Date('2023-03-01').getTime(), y: [320, 330, 310, 315] },
    { x: new Date('2023-04-01').getTime(), y: [315, 335, 310, 330] },
    { x: new Date('2023-05-01').getTime(), y: [330, 345, 325, 340] },
    { x: new Date('2023-06-01').getTime(), y: [340, 350, 335, 345] },
    { x: new Date('2023-07-01').getTime(), y: [345, 355, 340, 350] },
    { x: new Date('2023-08-01').getTime(), y: [305, 315, 300, 340] },
    { x: new Date('2023-09-01').getTime(), y: [315, 325, 310, 330] },
    { x: new Date('2023-10-01').getTime(), y: [320, 330, 310, 320] },
    { x: new Date('2023-11-01').getTime(), y: [315, 335, 310, 330] },
    { x: new Date('2023-12-01').getTime(), y: [330, 345, 325, 340] },
    { x: new Date('2024-01-01').getTime(), y: [340, 350, 335, 345] },
    { x: new Date('2024-02-01').getTime(), y: [345, 355, 340, 350] },
  ];

  const chartData = {
    series: [
      {
        name: 'Stock Price',
        data: chartType === 'line' ? lineData : candlestickData,
      },
    ],
    options: {
      chart: {
        type: chartType,
        height: 600,
        width: 1000,
        zoom: {
          enabled: true,
        },
        toolbar: {
          show: false,
        },
        animations: {
          enabled: false,
        },
      },
      xaxis: {
        type: 'datetime',
        labels: {
          style: {
            colors: '#FFFFFF',
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: '#FFFFFF',
          },
        },
        opposite: true, // Place the Y-axis on the right side
      },
      tooltip: {
        theme: 'dark',
        x: {
          format: 'dd MMM yyyy',
        },
      },
      grid: {
        borderColor: '#444',
      },
      stroke: {
        curve: 'straight',
        colors: ['#00E396'],
        width: 2,
      },
      markers: {
        size: 4,
        colors: ['#00E396'],
        strokeWidth: 2,
        hover: {
          size: 7,
        },
      },
      colors: ['#00E396'],
      plotOptions: {
        candlestick: {
          colors: {
            upward: '#00E396',
            downward: '#FF4560',
          },
          wick: {
            useFillColor: true,
          },
        },
      },
    },
  };

  return (
    <div className="bg-sliderBgColor-500 p-8 text-white flex flex-col items-center justify-center ">
      <div>
        <div className="relative bg-gray-900 rounded-lg flex justify-center">
          <Chart options={chartData.options} series={chartData.series} type={chartType} height={500} width={800}/>
          <div className="absolute top-4 left-4 flex flex-col px-1 py-1">
            <div>Nvidia</div>
            <div>
              <button
                  onClick={() => setChartType('line')}
                  className={`px-2 py-1 text-sm rounded-full ${
                      chartType === 'line' ? 'bg-blue-500' : 'bg-gray-700'
                  }`}
              >
                L
              </button>
              <button
                  onClick={() => setChartType('candlestick')}
                  className={`px-2 py-1 text-sm rounded-full ${
                      chartType === 'candlestick' ? 'bg-blue-500' : 'bg-gray-700'
                  }`}
              >
                C
              </button>
            </div>
            <div>Vol 30m</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockTickerChart;
