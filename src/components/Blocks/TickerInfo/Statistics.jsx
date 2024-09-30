import React from "react";

const data = {
  valuationMeasures: [
    { label: "Market Cap", value: "2.64T" },
    { label: "Enterprise Value", value: "2.62T" },
    { label: "Trailing P/E", value: "62.77" },
    { label: "Forward P/E", value: "40.98" },
    { label: "PEG Ratio (5yr expected)", value: "1.22" },
    { label: "Price/Sales (ttm)", value: "33.53" },
    { label: "Price/Book (mrq)", value: "53.69" },
    { label: "Enterprise Value/Revenue", value: "32.82" },
    { label: "Enterprise Value/EBITDA", value: "51.67" },
  ],
  financialHighlights: {
    profitabilityIncome: [
      { label: "Profit Margin", value: "53.40%" },
      { label: "Return on Assets (ttm)", value: "49.10%" },
      { label: "Return on Equity (ttm)", value: "115.66%" },
      { label: "Revenue (ttm)", value: "79.77B" },
      { label: "Net Income Avi to Common (ttm)", value: "42.6B" },
      { label: "Diluted EPS (ttm)", value: "1.71" },
    ],
    balanceSheetCashFlow: [
      { label: "Total Cash (mrq)", value: "31.44B" },
      { label: "Total Debt/Equity (mrq)", value: "22.87%" },
      { label: "Levered Free Cash Flow (ttm)", value: "29.02B" },
    ],
  },
};

const ValuationAndFinancial = () => {
  const { valuationMeasures, financialHighlights } = data;

  return (
    <div className="p-6 mt-6 rounded-lg flex space-x-6 justify-center bg-slate-900 text-white">
      <section className="flex-1">
        <header className="mb-4">
          <h3 className="text-lg font-semibold">Valuation Measures</h3>
        </header>
        <div className="grid grid-cols-1 gap-4">
          {valuationMeasures.map((item, index) => (
            <div key={index} className="flex justify-between py-2 border-b border-gray-700">
              <span>{item.label}</span>
              <span className="font-bold">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="flex-1">
        <header className="mb-4">
          <h3 className="text-lg font-semibold">Financial Highlights</h3>
        </header>
        <div className="grid grid-cols-1 gap-4 mb-6">
          {financialHighlights.profitabilityIncome.map((item, index) => (
            <div key={index} className="flex justify-between py-2 border-b border-gray-700">
              <span>{item.label}</span>
              <span className="font-bold">{item.value}</span>
            </div>
          ))}
        </div>
      </section>
      
      <section className="flex-1">
        <div className="grid grid-cols-1 gap-4 ">
            <h4 className="mb-2 font-medium">Balance Sheet and Cash Flow</h4>
            {financialHighlights.balanceSheetCashFlow.map((item, index) => (
              <div key={index} className="flex justify-between py-2 border-b border-gray-700">
                <span>{item.label}</span>
                <span className="font-bold">{item.value}</span>
              </div>
            ))}
          </div>
      </section>
    </div>
  );
};

export default ValuationAndFinancial;
