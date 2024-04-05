import React from 'react';

function StockDetails({ stock }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 m-4 ">
            <h2 className="text-2xl font-bold mb-2">{stock?.name} ({stock?.symbol})</h2>
            <p className="text-md mb-4">{stock?.description}</p>
            <div className="grid grid-cols-2 gap-4">
                <div><strong>Exchange:</strong> {stock?.exchange}</div>
                <div><strong>Industry:</strong> {stock?.industry}</div>
                <div><strong>Sector:</strong> {stock?.sector}</div>
                <div><strong>Country:</strong> {stock?.country}</div>
                <div><strong>Market Cap:</strong> ${parseInt(stock?.marketCapitalization, 10).toLocaleString()}</div>
                <div><strong>EBITDA:</strong> ${parseInt(stock?.eBITDA, 10).toLocaleString()}</div>
                <div><strong>PE Ratio:</strong> {stock?.pERatio}</div>
                <div><strong>Dividend Yield:</strong> {stock?.dividendYield}</div>
                <div><strong>Revenue TTM:</strong> ${parseInt(stock?.revenueTTM, 10).toLocaleString()}</div>
                <div><strong>Profit Margin:</strong> {stock?.profitMargin}</div>
            </div>
        </div>
    );
}

export default StockDetails;