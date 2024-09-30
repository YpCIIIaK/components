import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const CompareChart = () => {
  // State to manage selected time range
  const [selectedRange, setSelectedRange] = useState('3M');

  // Simulated data for several months (example data)
  const dataAMD = [140, 142, 138, 145, 150, 152, 148, 146, 145, 147, 144, 143, 141, 140, 138, 136, 137, 135, 134, 132, 131, 133, 134, 135, 132, 131, 130, 129, 128, 127, 126];
  const dataNVDA = [105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 114, 113, 112, 111, 110, 109, 108, 107, 106, 105, 106, 107, 108, 109, 108, 107, 106, 105, 104, 103];

  // Calculate percentage changes relative to the first data point for each stock
  const initialPriceAMD = dataAMD[0];
  const initialPriceNVDA = dataNVDA[0];
  const percentageChangeAMD = dataAMD.map(price => ((price - initialPriceAMD) / initialPriceAMD * 100).toFixed(2));
  const percentageChangeNVDA = dataNVDA.map(price => ((price - initialPriceNVDA) / initialPriceNVDA * 100).toFixed(2));

  // Placeholder current percentages for annotations (last value in data)
  const finalPercentageChangeAMD = percentageChangeAMD[percentageChangeAMD.length - 1];
  const finalPercentageChangeNVDA = percentageChangeNVDA[percentageChangeNVDA.length - 1];

  // Determine y-axis min and max based on data
  const minY = Math.min(...percentageChangeAMD, ...percentageChangeNVDA) - 5;
  const maxY = Math.max(...percentageChangeAMD, ...percentageChangeNVDA) + 5;

  // Chart options
  const chartOptions = {
    series: [
      {
        name: 'AMD',
        data: percentageChangeAMD,
      },
      {
        name: 'NVDA',
        data: percentageChangeNVDA,
      },
    ],
    chart: {
      type: 'line',
      height: 350,
      toolbar: {
        show: false,
      },
      offsetX: 10, // Add padding to prevent overlap with y-axis
      offsetY: 10, // Add padding to prevent overlap with x-axis
    },
    stroke: {
      curve: 'straight',
      width: 2, // Set the line thickness to 2
    },
    markers: {
      size: 0,
    },
    xaxis: {
        categories: dataAMD.map((_, index) => `Day ${index + 1}`), // Placeholder categories
        tickAmount: 6, // Ensure sufficient spacing
        labels: {
          style: {
            colors: '#fff', // White color for x-axis labels
          },
          formatter: (val) => val, // Show x-axis values as is
        },
    },
    yaxis: {
      min: minY, // Adding some buffer to prevent overlap
      max: maxY, // Adding some buffer to prevent overlap
      labels: {
        formatter: (val) => `${val}%`, // Show percentage signs
        style: {
            colors: ['#fff'], // Белый цвет текста
          },
      },
    },
    colors: ['#FF7F0E', '#1F77B4'], // Orange for AMD, Blue for NVDA
    tooltip: {
      theme: 'dark', // Dark theme for contrast
      style: {
        fontSize: '12px',
        background: '#fff', // White background for visibility
        color: '#000', // Black text for readability
      },
      marker: {
        show: false, // Hide the marker circle on tooltip
      },
      x: {
        show: true, // Show x-axis values in tooltip
      },
      y: {
        formatter: (val) => `${val}%`, // Display percentage in tooltip
      },
    },
    grid: {
      borderColor: '#111827', // Light grid color
      strokeDashArray: 5, // Make grid dashed
    },
    annotations: {
      yaxis: [
        {
          y: percentageChangeAMD[percentageChangeAMD.length - 1],
          borderColor: '#FF7F0E',
          strokeDashArray: 5,
          label: {
            borderColor: '#FF7F0E',
            style: {
              color: '#fff',
              background: '#FF7F0E',
            },
            text: `AMD: ${finalPercentageChangeAMD}%`,
          },
        },
        {
          y: percentageChangeNVDA[percentageChangeNVDA.length - 1],
          borderColor: '#1F77B4',
          strokeDashArray: 5,
          label: {
            borderColor: '#1F77B4',
            style: {    
              color: '#fff',
              background: '#1F77B4',
            },
            text: `NVDA: ${finalPercentageChangeNVDA}%`,
          },
        },
      ],
    },
  };

  // Handler for changing time range
  const handleRangeChange = (range) => {
    setSelectedRange(range);
  };

  return (
    <div className="bg-sliderBgColor-500 text-white p-5 flex justify-center">
      <div>
        <div className="text-xl font-bold mb-4">Compare</div>
        <div className="bg-gray-900 rounded-lg p-5 mb-4 w-[900px]">
          <Chart options={chartOptions} series={chartOptions.series} type="line" height={250} width={800}/>
        </div>
        <div className="flex flex-row space-x-4">
          {['1D', '7D', '1M', '3M', '1Y', '5Y', 'MAX'].map((range) => (
              <button
                  key={range}
                  className={`px-4 py-2 rounded ${selectedRange === range ? 'bg-blue-500 text-white' : 'bg-gray-600'}`}
                  onClick={() => handleRangeChange(range)}
              >
                {range}
              </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompareChart;
