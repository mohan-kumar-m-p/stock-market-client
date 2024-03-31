import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const OHLCVChart = ({ ohlcvData }) => {
    const openingPrice = ohlcvData[0]?.open ?? ohlcvData[0]['1. open'];
    const closingPrice = ohlcvData[ohlcvData.length - 1]?.close ?? ohlcvData[ohlcvData.length - 1]['4. close'];

    const chartData = {
        labels: ohlcvData.map(data => data.timestamp),
        datasets: [
            {
                label: 'Open Price',
                data: ohlcvData.map(data => parseFloat(data?.open ?? data['1. open'])),
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
                        const dataIndex = context.dataIndex;
                        const dataPoint = ohlcvData[dataIndex];
                        const open = `Open: ${dataPoint?.open ?? dataPoint['1. open']}`;
                        const high = `High: ${dataPoint?.high ?? dataPoint['2. high']}`;
                        const low = `Low: ${dataPoint?.low ?? dataPoint['3. low']}`;
                        const close = `Close: ${dataPoint?.close ?? dataPoint['4. close']}`;
                        const volume = `Volume: ${dataPoint?.volume ?? dataPoint['5. volume']}`;
                        return [`${open}`, `${high}`, `${low}`, `${close}`, `${volume}`];
                    }
                }
            }
        },
    };

    return (
        <div className='w-1/2'>
            <div className="flex justify-center items-center my-4 gap-8 bg-gradient-to-r from-blue-500 to-green-500 text-dark p-4 rounded-lg shadow-md ">
                <div className="text-lg font-semibold">
                    <span className="block">Opening Price</span>
                    <span className="block font-normal text-sm mt-1">${openingPrice}</span>
                </div>
                <div className="border-r border-white"></div>
                <div className="text-lg font-semibold">
                    <span className="block">Closing Price</span>
                    <span className="block font-normal text-sm mt-1">${closingPrice}</span>
                </div>
            </div>

            <Line data={chartData} options={options} />
        </div>
    );
};

export default OHLCVChart;
