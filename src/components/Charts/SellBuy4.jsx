import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const SingleBarChart = () => {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: 'bar',
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '50%',
      },
    },
    colors: ['#28a745', '#ffc107', '#007bff', '#dc3545', '#6c757d'],
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#ffffff'],
      },
    },
    xaxis: {
      categories: [''],
      labels: {
        style: {
          colors: ['#ffffff'],
        },
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + ' Counts';
        },
      },
    },
    legend: {
      labels: {
        colors: '#ffffff',
      },
    },
    grid: {
      borderColor: '#555',
    },
  });

  const [chartSeries, setChartSeries] = useState([
    { name: 'Strong Buy', data: [47] },
    { name: 'Buy', data: [9] },
    { name: 'Hold', data: [6] },
    { name: 'Sell', data: [0] },
    { name: 'Strong Sell', data: [0] },
  ]);

  useEffect(() => {
    setChartSeries([
      { name: 'Strong Buy', data: [47] },
      { name: 'Buy', data: [9] },
      { name: 'Hold', data: [6] },
      { name: 'Sell', data: [0] },
      { name: 'Strong Sell', data: [0] },
    ]);
  }, []);

  return (
    <div className="container mx-auto w-full bg-sliderBgColor-500 p-5 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full h-full max-w-4xl">
        <div className="w-[400px] h-[280px] rounded-xl bg-gray-700 flex items-center justify-center">
          <ReactApexChart
            options={chartOptions}
            series={chartSeries}
            type="bar"
            width={400} 
          />
        </div>
        <div className="mt-5">
          <h2 className="text-2xl font-bold text-black">Strong Buy</h2>
        </div>
      </div>
    </div>
  );
};

export default SingleBarChart;
