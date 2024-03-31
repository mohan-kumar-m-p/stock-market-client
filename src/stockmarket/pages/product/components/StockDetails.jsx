import React from 'react';

function StockDetails({ stock }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 m-4 w-1/2">
            <h2 className="text-2xl font-bold mb-2">{stock.Name} ({stock.Symbol})</h2>
            <p className="text-md mb-4">{stock.Description}</p>
            <div className="grid grid-cols-2 gap-4">
                <div><strong>Exchange:</strong> {stock.Exchange}</div>
                <div><strong>Industry:</strong> {stock.Industry}</div>
                <div><strong>Sector:</strong> {stock.Sector}</div>
                <div><strong>Country:</strong> {stock.Country}</div>
                <div><strong>Market Cap:</strong> ${parseInt(stock.MarketCapitalization, 10).toLocaleString()}</div>
                <div><strong>EBITDA:</strong> ${parseInt(stock.EBITDA, 10).toLocaleString()}</div>
                <div><strong>PE Ratio:</strong> {stock.PERatio}</div>
                <div><strong>Dividend Yield:</strong> {stock.DividendYield}</div>
                <div><strong>Revenue TTM:</strong> ${parseInt(stock.RevenueTTM, 10).toLocaleString()}</div>
                <div><strong>Profit Margin:</strong> {stock.ProfitMargin}</div>
            </div>
        </div>
    );
}

export default StockDetails;