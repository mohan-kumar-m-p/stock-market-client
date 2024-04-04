import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

const OHLCVChart = ({ ohlcvData = [], onSelect, onRefresh }) => {
    const [selectedInterval, setSelectedInterval] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        // Filter data based on selected interval
        const filtered = ohlcvData.length > 6 ? ohlcvData.slice(0, 6) : ohlcvData;
        setFilteredData(filtered);
    }, [ohlcvData, selectedInterval]);

    const chartData = {
        labels: filteredData.map(data => new Date(data.date).toLocaleTimeString()),
        datasets: [
            {
                label: 'Open Price',
                data: filteredData.map(data => parseFloat(data.open)),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'OHLCV Data Point',
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const dataPoint = filteredData[context.dataIndex];
                        return `Open: ${dataPoint.open}, High: ${dataPoint.high}, Low: ${dataPoint.low}, Close: ${dataPoint.close}, Volume: ${dataPoint.volume}`;
                    }
                }
            }
        },
    };

  const intervals = [
    { label: '5 min', value: 5 },
    { label: '30 min', value: 30 },
    { label: '45 min', value: 45 },
    { label: '1 hour', value: 60 }
  ];

    const handleChange = (e) => {
        const value = e.target.value;
        setSelectedInterval(value);
        onSelect(parseInt(value, 10));
    };

    const openingPrice = filteredData[0]?.open ?? 'N/A';
    const closingPrice = filteredData[filteredData.length - 1]?.close ?? 'N/A';

    return (
        <div className='w-full'>
            <div className='flex justify-between mt-4'>
                <button
                    className='mx-2 bg-yellow-500 p-2 rounded-md hover:bg-amber-600'
                    onClick={onRefresh}
                >
                    Refresh
                </button>
                <select
                    className="appearance-none bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none"
                    onChange={handleChange}
                    value={selectedInterval}
                >
                    <option value="">Select Interval</option>
                    {ohlcvData.length && intervals.map((interval, index) => (
                        <option key={index} value={interval.value}>{interval.label}</option>
                    ))}
                </select>
            </div>
            <div className="flex justify-center items-center my-4 gap-8 bg-gradient-to-r from-blue-500 to-green-500 text-dark p-4 rounded-lg shadow-md ">
                <div>Opening Price: ${openingPrice}</div>
                <div>Closing Price: ${closingPrice}</div>
            </div>
            <Line data={chartData} options={options} />
        </div>
    );
};

export default OHLCVChart;
