import React from 'react';

const TickerInfo = () => {
  const data = [
    { label: 'Open', value: '103.87' },
    { label: 'Previous Close', value: '109.21' },
    { label: 'Volume', value: '475,691,736' },
    { label: 'Avg. Volume', value: '373,605,669' },
    { label: 'Bid', value: '107.06 x 200' },
    { label: 'Ask', value: '111.24 x 100' },
    { label: 'Market Cap (intraday)', value: '2.639T' },
    { label: 'Beta (5Y Monthly)', value: '1.68' },
    { label: "Day's Range", value: '101.37 - 108.72' },
    { label: 'PE Ratio (TTM)', value: '62.73' },
    { label: '52 Week Range', value: '39.23 - 140.76' },
    { label: 'EPS (TTM)', value: '1.71' },
  ];

  return (
    <div className="bg-slate-900 text-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-4 gap-4">
        {data.map((item, index) => (
          <div key={index} className="flex justify-between py-2 border-b border-gray-700">
            <span>{item.label}</span>
            <span className="font-bold">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TickerInfo;
