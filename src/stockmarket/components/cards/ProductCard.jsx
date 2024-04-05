import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({ products, navLink = '/' }) {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 overflow-auto">
        {products.map((product, pi) => (
          <Link to={`${navLink}/${product._id}`} key={pi} className="rounded-xl hover:bg-yellow-100 focus:bg-yellow-100 active:bg-yellow-200">
            <div className="max-w-md mx-auto rounded-xl shadow-lg overflow-hidden bg-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
              <div className="p-4">
                <div className="font-bold text-xl mb-2 text-center sm:text-left">{product?.name} ({product?.symbol})</div>
                <p className="text-gray-700 text-base text-center sm:text-left">
                  Sector : {product?.sector}
                </p>
                <p className="text-gray-700 text-base mb-4 text-center sm:text-left">
                  Industry : {product?.industry}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-700">Exchange: {product?.exchange}</p>
                    <p className="text-gray-700">Market Cap: ${product?.marketCapitalization ? parseInt(product?.marketCapitalization, 10).toExponential(3) : 'N/A'} USD</p>
                    <p className="text-gray-700">PE Ratio: {product?.pERatio}</p>
                    <p className="text-gray-700">Dividend Yield: {product?.dividendYield!=='None' ? product?.dividendYield : 0}%</p>
                  </div>
                  <div>
                    <p className="text-gray-700">Latest Quarter: {product?.latestQuarter}</p>
                    <p className="text-gray-700">Profit Margin: {product?.profitMargin ? (product.profitMargin * 100).toFixed(2) : 'N/A'}%</p>
                    <p className="text-gray-700">Target Price: ${product?.analystTargetPrice} USD</p>
                  </div>
                </div>
                <div className="pt-4 flex justify-center sm:justify-start">
                  <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">52W High: ${product?.s52WeekHigh} USD</span>
                  <span className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">52W Low: ${product?.s52WeekLow} USD</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
    )
}

export default ProductCard