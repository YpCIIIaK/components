import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const BarChart = () => {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: 'bar',
    },
    xaxis: {
      categories: ['Strong Buy', 'Buy', 'Hold', 'Sell', 'Strong Sell'],
      labels: {
        style: {
          colors: '#ffffff',
        },
      },
      title: {
        text: 'Sentiment Categories',
        style: {
          color: '#ffffff', 
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#ffffff', 
        },
      },
      title: {
        text: 'Counts',
        style: {
          color: '#ffffff',
        },
      },
    },
    colors: ['#28a745', '#ffc107', '#007bff', '#dc3545', '#6c757d'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
      },
    },
    dataLabels: {
      style: {
        colors: ['#fff'],
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
    title: {
      text: 'Sentiment Distribution',
      style: {
        color: '#ffffff',
      },
    },
  });

  const [chartSeries, setChartSeries] = useState([
    {
      name: 'Sentiment',
      data: [47, 9, 6, 0, 0],
    },
  ]);

  useEffect(() => {
    setChartSeries([
      {
        name: 'Sentiment',
        data: [47, 9, 6, 0, 0],
      },
    ]);
  }, []);

  return (
    <div className="container mx-auto w-full bg-sliderBgColor-500 p-5 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full h-full max-w-4xl">
        <div className="w-[400px] h-[400px] rounded-xl bg-gray-700 flex items-center justify-center">
          <ReactApexChart
            options={chartOptions}
            series={chartSeries}
            type="bar"
            width={400} 
          />
        </div>
        <div className="mt-4">
          <h2 className="text-2xl font-bold text-white">Sentiment Distribution</h2>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
