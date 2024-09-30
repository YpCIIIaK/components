import React from 'react';
import Chart from 'react-apexcharts';
import 'tailwindcss/tailwind.css';

const FundamentalsSummary = () => {
    const chartData = {
        series: [54, 46],
        options: {
          chart: {
            type: 'donut',
          },
          labels: ['Revenue', 'Earnings'],
          colors: ['#008FFB', '#00E396'],
          plotOptions: {
            pie: {
              donut: {
                size: '70%',
                labels: {
                  show: true,
                  total: {
                    show: true,
                    label: 'Market cap',
                    text: 'US$2.78t',
                    color: '#FFFFFF',
                  },
                },
              },
            },
          },
          dataLabels: {
            enabled: false,
          },
          legend: {
            show: false,
          },
        },
      };

  return (
    <div className="w-full bg-sliderBgColor-500 p-8 text-black flex flex-col items-center justify-center">
      <h2 className="text-lg font-bold mb-4">NVIDIA Corporation Fundamentals Summary</h2>
      <Chart options={chartData.options} series={chartData.series} type="donut" height="300" />
      <div className="mt-6 flex justify-around w-full text-center">
        <div>
          <p className="text-3xl font-bold">65.2x</p>
          <p className="text-gray-400">P/E Ratio</p>
        </div>
        <div>
          <p className="text-3xl font-bold">34.8x</p>
          <p className="text-gray-400">P/S Ratio</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-400">Is NVDA overvalued?</p>
        <a href="#" className="text-blue-400 hover:underline">
          See Fair Value and valuation analysis
        </a>
      </div>
    </div>
  );
};

export default FundamentalsSummary;
