import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({ products, navLink = '/' }) {

    return (
        <div className="grid grid-cols-2  h-[517px] md:h-[497px] lg:h-[487px] md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 overflow-auto ">
            {products.map((product, pi) => (
                <Link to={navLink} key={pi} className="rounded-xl">
                    <div className=" font-serif max-w-md mx-auto  rounded-xl shadow-xl overflow-hidden md:max-w-2xl bg-white hover:bg-yellow-100">
                        <div className="p-4 pt-0">
                            <div className="font-bold text-xl md:text-2xl mb-2 text-center md:text-left">{product?.name} ({product?.symbol})</div>
                            <p className="text-gray-700 text-sm md:text-base text-center md:text-left">
                                Sector : {product?.sector}
                            </p>
                            <p className="text-gray-700 text-sm md:text-base mb-4 text-center md:text-left">
                                Industry : {product?.industry}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-gray-700 text-sm md:text-base">Exchange: {product?.exchange}</p>
                                    <p className="text-gray-700 text-sm md:text-base">Market Cap: ${parseInt(product?.marketCapitalization, 10).toLocaleString()} USD</p>
                                    <p className="text-gray-700 text-sm md:text-base">PE Ratio: {product?.pERatio}</p>
                                    <p className="text-gray-700 text-sm md:text-base">Dividend Yield: {product?.dividendYield}%</p>
                                </div>
                                <div>
                                    <p className="text-gray-700 text-sm md:text-base">Latest Quarter: {product?.latestQuarter}</p>
                                    <p className="text-gray-700 text-sm md:text-base">Revenue TTM: ${parseInt(product?.revenueTTM, 10).toLocaleString()} USD</p>
                                    <p className="text-gray-700 text-sm md:text-base">Profit Margin: {product?.profitMargin * 100}%</p>
                                    <p className="text-gray-700 text-sm md:text-base">Target Price: ${product?.analystTargetPrice} USD</p>
                                </div>
                            </div>
                            <div className="pt-4 flex justify-center md:justify-start">
                                <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-xs md:text-sm font-semibold text-gray-700 mr-2 mb-2">52W High: ${product?.s52WeekHigh} USD</span>
                                <span className="inline-block bg-red-200 rounded-full px-3 py-1 text-xs md:text-sm font-semibold text-gray-700 mr-2 mb-2">52W Low: ${product?.s52WeekLow} USD</span>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ProductCard