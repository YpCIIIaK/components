import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const CompareChart = () => {
  // State to manage selected time range
  const [selectedRange, setSelectedRange] = useState('3M');

  // Simulated data for Monte Carlo forecasts
  const commonData = [140, 142, 138, 145, 150, 152, 148, 146, 145, 147, 144, 143, 141, 140, 138, 136, 137, 135, 134, 132, 131];
  const optimisticForecast = [130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200];
  const pessimisticForecast = [140, 138, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75];
  const averageForecast = [140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140];

  const dataOptimistic = [...commonData, ...optimisticForecast];
  const dataPessimistic = [...commonData, ...pessimisticForecast];
  const dataAverage = [...commonData, ...averageForecast];

  // Calculate percentage changes relative to the first data point for each forecast
  const initialPrice = dataOptimistic[0];
  const percentageChangeOptimistic = dataOptimistic.map(price => ((price - initialPrice) / initialPrice * 100).toFixed(2));
  const percentageChangePessimistic = dataPessimistic.map(price => ((price - initialPrice) / initialPrice * 100).toFixed(2));
  const percentageChangeAverage = dataAverage.map(price => ((price - initialPrice) / initialPrice * 100).toFixed(2));

  // Determine y-axis min and max based on data
  const minY = Math.min(...percentageChangeOptimistic, ...percentageChangePessimistic, ...percentageChangeAverage) - 5;
  const maxY = Math.max(...percentageChangeOptimistic, ...percentageChangePessimistic, ...percentageChangeAverage) + 5;

  // Chart options
  const chartOptions = {
    series: [
      {
        name: 'Optimistic Forecast',
        data: percentageChangeOptimistic,
      },
      {
        name: 'Pessimistic Forecast',
        data: percentageChangePessimistic,
      },
      {
        name: 'Average Forecast',
        data: percentageChangeAverage,
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
      curve: 'smooth',
      width: 2, // Set the line thickness to 2
    },
    markers: {
      size: 0,
    },
    xaxis: {
      categories: dataOptimistic.map((_, index) => `Day ${index + 1}`), // Placeholder categories
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
          colors: ['#fff'], // White text color
        },
      },
    },
    colors: ['#FF7F0E', '#1F77B4', '#2CA02C'], // Orange for Optimistic, Blue for Pessimistic, Green for Average
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
          y: percentageChangeOptimistic[percentageChangeOptimistic.length - 1],
          borderColor: '#FF7F0E',
          strokeDashArray: 5,
          label: {
            borderColor: '#FF7F0E',
            style: {
              color: '#fff',
              background: '#FF7F0E',
            },
            text: `Optimistic: ${percentageChangeOptimistic[percentageChangeOptimistic.length - 1]}%`,
          },
        },
        {
          y: percentageChangePessimistic[percentageChangePessimistic.length - 1],
          borderColor: '#1F77B4',
          strokeDashArray: 5,
          label: {
            borderColor: '#1F77B4',
            style: {
              color: '#fff',
              background: '#1F77B4',
            },
            text: `Pessimistic: ${percentageChangePessimistic[percentageChangePessimistic.length - 1]}%`,
          },
        },
        {
          y: percentageChangeAverage[percentageChangeAverage.length - 1],
          borderColor: '#2CA02C',
          strokeDashArray: 5,
          label: {
            borderColor: '#2CA02C',
            style: {
              color: '#fff',
              background: '#2CA02C',
            },
            text: `Average: ${percentageChangeAverage[percentageChangeAverage.length - 1]}%`,
          },
        },
      ],
    },
  };

  // Handler for changing time range
  const handleRangeChange = (range) => {
    setSelectedRange(range);
    // Update the data based on selected range
    // (This is a placeholder and should be replaced with actual data fetching logic)
  };

  return (
      <div className='bg-sliderBgColor-500 flex justify-center'>
        <div className="text-white p-5">
          <div className="text-xl font-bold mb-4">Monte Carlo Simulation Comparison</div>
          <div className="bg-gray-900 rounded-lg p-5 mb-4 w-[900px]">
            <Chart options={chartOptions} series={chartOptions.series} type="line" height={500} width={800}/>
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
