import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const GaugeChart = () => {
  const [chartOptions] = useState({
    chart: {
      height: 400,   
      type: 'radar',
    },
    xaxis: {
      categories: ['Strong Buy', 'Buy', 'Hold', 'Sell', 'Strong Sell'],
    },
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.2,
    },
    markers: {
      size: 6,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + ' Counts';
        },
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
        <div className="w-[330px] h-[450px] rounded-xl bg-gray-700 flex items-center justify-center">
          <ReactApexChart
            options={chartOptions}
            series={chartSeries}
            type="radar"
            height={400}
          />
        </div>
        <div className="mt-4">
          <h2 className="text-2xl font-bold text-black">Strong Buy</h2>
        </div>
      </div>
    </div>
  );
};

export default GaugeChart;
