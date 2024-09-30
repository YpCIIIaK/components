import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const DonutChart = () => {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: 'donut',
    },
    labels: ['Strong Buy', 'Buy', 'Hold', 'Sell', 'Strong Sell'],
    colors: ['#28a745', '#ffc107', '#007bff', '#dc3545', '#6c757d'], 
    plotOptions: {
        pie: {
            donut: {
              size: '70%',
              background: 'transparent',
            },
          },
          donut: {
            stroke: {
                opacity: 0,
              width: 0,
              show: false,
            },
          },
    },
    legend: {
      position: 'bottom',  
      labels: {
        colors: '#ffffff', 
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + ' Counts';
        },
      },
    },
    dataLabels: {
      style: {
        colors: ['#fff'],
      },
    },
  });

  const [chartSeries, setChartSeries] = useState([47, 9, 6, 0, 0]);

  useEffect(() => {
    setChartSeries([47, 9, 6, 0, 0]);
  }, []);

  return (
    <div className="container mx-auto w-full bg-sliderBgColor-500 p-5 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full h-full max-w-4xl">
        <div className="w-[400px] h-[400px] rounded-xl bg-gray-700 flex items-center justify-center">
          <ReactApexChart
            options={chartOptions}
            series={chartSeries}
            type="donut"
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

export default DonutChart;
