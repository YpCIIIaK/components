import React from 'react';
import Chart from 'react-apexcharts';

const RadarChart = () => {
  const chartOptions = {
    series: [{
      name: 'Series 1',
      data: [80, 50, 30, 40, 100, 20],
    },
    {
        name: 'Series 2',
        data: [50, 20, 60, 90, 10, 20],
      },
    ],
    chart: {
      height: 350,
      type: 'radar',
    },
    title: {
      text: 'Basic Radar Chart',
    },
    yaxis: {
      tickAmount: 5,
    },
    xaxis: {
      categories: ['January', 'February', 'March', 'April', 'May', 'June'],
    },
  };

  return (
    <div className='w-full bg-sliderBgColor-500 p-5 flex items-center justify-center'>
      <div className="w-1/4 bg-white">
        <Chart options={chartOptions} series={chartOptions.series} type="radar" height={350} />
      </div>
    </div>
  );
}

export default RadarChart;
