import React from 'react';

const StockCard = ({ name, symbol, logo, price, change }) => {
    const priceChangeColor = change.startsWith('-') ? 'text-red-500' : 'text-green-500';
    return (
      <div className="w-60 rounded overflow-hidden shadow-lg bg-white m-4 p-4">
        <img className="w-full" src={logo} alt={`${name} logo`} style={{ height: '200px', objectFit: 'contain' }} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name} ({symbol})</div>
          <p className="text-gray-700 text-base">Price: ${price}</p>
          <p className={`${priceChangeColor} text-base`}>Change: {change}</p>
        </div>
      </div>
    );
  };

  const stocks = [
    { name: 'Apple Inc.', symbol: 'AAPL', logo: 'https://s3-symbol-logo.tradingview.com/apple--600.png', price: '150.00', change: '+1.05' },
    { name: 'Tesla, Inc.', symbol: 'TSLA', logo: 'https://t3.ftcdn.net/jpg/04/63/05/30/360_F_463053093_eBZ5DvW11BRcXFagxEsljv4NJJdYl8xd.jpg', price: '900.50', change: '-4.00' },
    { name: 'Amazon.com, Inc.', symbol: 'AMZN', logo: 'https://blockchainreporter.net/wp-content/uploads/2022/06/amazon.jpeg', price: '3000.00', change: '+15.10' },
    // Add more stocks as needed
  ];
  
  const Home = () => {
    return (
      <div className="bg-gray-100 min-h-screen flex flex-wrap justify-center items-center">
        {stocks.map(stock => (
          <StockCard key={stock.symbol} {...stock} />
        ))}
      </div>
    );
  };

export default Home;